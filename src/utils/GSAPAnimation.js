import { gsap } from 'gsap';

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

export function ripple(el) {
  if (!el) return () => { };

  const layers = el.querySelectorAll('.ripples');
  if (!layers.length) return () => { };

  const tweens = [];
  layers.forEach((layer, i) => {
    const distance = 600;
    const dx = i % 2 === 0 ? distance : -distance;
    const dy = i % 2 === 0 ? distance : distance * 0.6;
    const duration = 40 + i * 15;

    tweens.push(
      gsap.to(layer, {
        backgroundPosition: `${dx}px ${dy}px`,
        duration,
        ease: 'none',
        repeat: -1,
      })
    );
  });

  return () => tweens.forEach((t) => t.kill());
}
