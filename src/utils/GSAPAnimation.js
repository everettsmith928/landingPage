import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export function scrollToSection(target, options = {}) {
  const { duration = 1.2, ease = 'power2.inOut', offsetY = 0 } = options;
  const el = typeof target === 'string' ? document.getElementById(target) : target;
  if (!el) return;
  gsap.to(window, { duration, ease, scrollTo: { y: el, offsetY } });
}

export function float(el, options = {}) {
  if (!el) return () => { };

  const {
    duration = 6,
    rotation = 180,
    rotationDuration = 30,
    ease = 'sine.inOut',
  } = options;

  const parent = el.parentElement;
  if (!parent) return () => { };

  const spinner = el.querySelector('img') || el.firstElementChild;

  gsap.set(el, { xPercent: -50, yPercent: -50, x: 0, y: 0, transformOrigin: '50% 50%' });
  if (spinner) gsap.set(spinner, { transformOrigin: '50% 50%' });

  const getBounds = () => {
    const pw = parent.clientWidth;
    const ph = parent.clientHeight;
    const ew = el.offsetWidth;
    const eh = el.offsetHeight;
    return {
      minX: ew / 2,
      maxX: pw - ew / 2,
      minY: eh / 2,
      maxY: ph - eh / 2,
    };
  };

  const elStyle = getComputedStyle(el);
  const baseLeft = parseFloat(elStyle.left) || 0;
  const baseTop = parseFloat(elStyle.top) || 0;

  const moveToRandom = () => {
    const { minX, maxX, minY, maxY } = getBounds();
    const targetX = gsap.utils.random(minX, maxX);
    const targetY = gsap.utils.random(minY, maxY);

    gsap.to(el, {
      x: targetX - baseLeft,
      y: targetY - baseTop,
      duration: 60,
      ease,
      onComplete: moveToRandom,
    });
  };

  moveToRandom();

  const spin = spinner
    ? gsap.to(spinner, {
      rotation,
      duration: rotationDuration,
      ease,
      yoyo: true,
      repeat: -1,
    })
    : null;

  return () => {
    gsap.killTweensOf(el);
    if (spinner) gsap.killTweensOf(spinner);
    spin?.kill();
  };
}

export function repel(elements, options = {}) {
  if (!elements?.length) return () => { };

  const {
    minDistance = 220,
    strength = 0.4,
    smoothing = 0.08,
  } = options;

  const targets = elements.map((el) => el.querySelector('.lily-bump') || el);
  const state = elements.map(() => ({ x: 0, y: 0, tx: 0, ty: 0 }));

  const center = (el) => ({
    cx: el.offsetLeft + (Number(gsap.getProperty(el, 'x')) || 0),
    cy: el.offsetTop + (Number(gsap.getProperty(el, 'y')) || 0),
  });

  const tick = () => {
    const positions = elements.map(center);

    for (const s of state) { s.tx = 0; s.ty = 0; }

    for (let i = 0; i < elements.length; i++) {
      for (let j = i + 1; j < elements.length; j++) {
        const dx = positions[j].cx - positions[i].cx;
        const dy = positions[j].cy - positions[i].cy;
        const dist = Math.hypot(dx, dy) || 0.001;

        if (dist < minDistance) {
          const overlap = (minDistance - dist) * strength;
          const nx = dx / dist;
          const ny = dy / dist;
          state[i].tx -= nx * overlap;
          state[i].ty -= ny * overlap;
          state[j].tx += nx * overlap;
          state[j].ty += ny * overlap;
        }
      }
    }

    state.forEach((s, i) => {
      s.x += (s.tx - s.x) * smoothing;
      s.y += (s.ty - s.y) * smoothing;
      gsap.set(targets[i], { x: s.x, y: s.y });
    });
  };

  gsap.ticker.add(tick);
  return () => gsap.ticker.remove(tick);
}

export function loadTitle(elements) {
  // 3 length array, [0] Everett, [1] Marsland, [2] Smith
  const splitChars = (el) => {
    const text = el.textContent;
    el.textContent = '';
    return [...text].map((ch) => {
      const span = document.createElement('span');
      span.textContent = ch;
      span.style.display = 'inline-block';
      span.style.willChange = 'transform';
      el.appendChild(span);
      return span;
    });
  };

  const everettChars = splitChars(elements[0]);
  const marslandChars = splitChars(elements[1]);
  const smithChars = splitChars(elements[2]);

  const tl = gsap.timeline({ defaults: { duration: .8, ease: 'sine.inOut' } });
  tl.fromTo(elements[1], { opacity: 0 }, { opacity: 1 })
    .fromTo(elements[0], { opacity: 0 }, { opacity: 1 })
    .fromTo(elements[2], { opacity: 0 }, { opacity: 1 });

  const bobs = [...everettChars, ...marslandChars, ...smithChars].map((char) =>
    gsap.to(char, {
      y: gsap.utils.random(0, -6),
      duration: gsap.utils.random(1.8, 3.2),
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
      delay: gsap.utils.random(0, 2),
    })
  );

  return () => {
    tl.kill();
    bobs.forEach((b) => b.kill());
  };
}

export function underwaterFloat(elements) {
  // Subtly move up and down and perspective tilt on the x-axis. Each is independent
  if (!elements?.length) return () => { };

  const tweens = [];

  elements.forEach((el) => {
    if (!el) return;

    gsap.set(el, { transformPerspective: 600, transformOrigin: '50% 50%' });

    tweens.push(
      gsap.to(el, {
        y: gsap.utils.random(-4, 75),
        rotateX: 100,
        scale: gsap.utils.random(.8, 1.3),
        // rotateX: gsap.utils.random(4, 50) * (Math.random() < 0.5 ? -1 : 1),
        duration: gsap.utils.random(2.6, 3.6),
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: gsap.utils.random(0, 1.5),
      }),
      gsap.to(el, {
        rotationY: gsap.utils.random(4, 20) * (Math.random() < 0.5 ? -1 : 1),
        rotationX: gsap.utils.random(4, 50) * (Math.random() < 0.5 ? -1 : 1),
        duration: gsap.utils.random(3.4, 4.8),
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: gsap.utils.random(0, 1.5),
      }),
    );
  });

  return () => tweens.forEach((t) => t.kill());
}

