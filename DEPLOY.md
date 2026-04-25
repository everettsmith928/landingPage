# Deployment

Automated build → push → deploy via GitHub Actions on every push to `main`.

- Image registry: GitHub Container Registry (`ghcr.io/<owner>/<repo>`)
- Host: EC2 at `100.29.35.155`
- Domain: `everettdevs.com`
- App container: `nginx` serving the built Vue SPA, bound to `127.0.0.1:8080`
- Host: `nginx` reverse proxy + `certbot` for TLS

## 1. DNS

Create A records pointing at the EC2 public IP:

- `everettdevs.com`        → `100.29.35.155`
- `www.everettdevs.com`    → `100.29.35.155`

Wait for propagation before running certbot (verify with `dig everettdevs.com +short`).

## 2. EC2 security group

Inbound: 22 (SSH, your IP), 80 (TCP, anywhere), 443 (TCP, anywhere).

## 3. SSH key for GitHub Actions

On your local machine:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/everettdevs_deploy -N "" -C "github-actions-deploy"
```

Append the public key to the EC2 user's `authorized_keys`:

```bash
ssh ec2-user@100.29.35.155 "mkdir -p ~/.ssh && chmod 700 ~/.ssh"
cat ~/.ssh/everettdevs_deploy.pub | ssh ec2-user@100.29.35.155 "cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
```

## 4. EC2 bootstrap (run once) — Amazon Linux 2023

SSH in as `ec2-user` and run:

```bash
# System packages
sudo dnf update -y
sudo dnf install -y docker nginx certbot python3-certbot-nginx

# Start Docker and allow ec2-user to use it without sudo
sudo systemctl enable --now docker
sudo usermod -aG docker ec2-user
# log out and back in for the group change to take effect

# Install the docker compose plugin (not bundled with Amazon Linux's docker package)
sudo mkdir -p /usr/local/lib/docker/cli-plugins
sudo curl -SL "https://github.com/docker/compose/releases/latest/download/docker-compose-linux-$(uname -m)" \
  -o /usr/local/lib/docker/cli-plugins/docker-compose
sudo chmod +x /usr/local/lib/docker/cli-plugins/docker-compose
docker compose version  # verify

# Start nginx
sudo systemctl enable --now nginx
```

Create the app directory and `docker-compose.yml` on the host:

```bash
mkdir -p ~/app && cd ~/app
```

Save this as `~/app/docker-compose.yml` (replace `OWNER/REPO` with your GitHub `owner/repo`, lowercase):

```yaml
services:
  web:
    image: ${IMAGE:-ghcr.io/OWNER/REPO:latest}
    container_name: landingpage
    restart: unless-stopped
    ports:
      - "127.0.0.1:8080:80"
```

## 5. Host nginx reverse proxy

Amazon Linux's nginx loads everything in `/etc/nginx/conf.d/*.conf` — there is no `sites-available`/`sites-enabled` split. Save as `/etc/nginx/conf.d/everettdevs.com.conf`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name everettdevs.com www.everettdevs.com;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

If the default `/etc/nginx/nginx.conf` ships with a `server { listen 80 default_server; ... }` block, comment it out so it doesn't shadow yours. Then test and reload:

```bash
sudo nginx -t && sudo systemctl reload nginx
```

## 6. TLS with certbot

```bash
sudo certbot --nginx -d everettdevs.com -d www.everettdevs.com --redirect --agree-tos -m you@example.com
```

certbot rewrites the nginx config to add 443 and the redirect. Auto-renewal is installed as a systemd timer — verify:

```bash
systemctl list-timers | grep certbot
sudo certbot renew --dry-run
```

## 7. GitHub repository secrets

Settings → Secrets and variables → Actions → New repository secret:

| Name           | Value                                                         |
|----------------|---------------------------------------------------------------|
| `EC2_HOST`     | `100.29.35.155`                                               |
| `EC2_USER`     | `ec2-user`                                                    |
| `EC2_SSH_KEY`  | contents of `~/.ssh/everettdevs_deploy` (the **private** key) |

`GITHUB_TOKEN` is provided automatically — no action needed.

## 8. Make the GHCR package readable by the EC2

The first push creates a private package. Either:

- Make it public: GitHub → your profile → Packages → `landingPage` → Package settings → Change visibility → Public.
- Or keep it private and create a PAT with `read:packages` for the EC2 to use (replace the `docker login` step in the workflow with that token).

Public is simpler for a static landing page.

## 9. First deploy

Push to `main`. The workflow will build, push to GHCR, SSH into EC2, pull, and start the container. Verify:

```bash
curl -I https://everettdevs.com
docker ps
docker logs landingpage
```

## Updating

Just push to `main`. Rollback by re-running an older workflow run, or SSH in and:

```bash
cd ~/app
IMAGE=ghcr.io/<owner>/<repo>:sha-<commit> docker compose up -d
```
