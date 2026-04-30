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

  const spinner = el.firstElementChild;

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

export function ripple(el) {
  // This needs to create extremely transparent waves eminating outwards from the center of lily-plane
}
