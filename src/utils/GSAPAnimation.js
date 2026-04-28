import { gsap } from 'gsap';

export function float(el, options = {}) {
  if (!el) return () => { };

  const {
    duration = 6,
    rotation = 20,
    rotationDuration = 8,
    ease = 'sine.inOut',
  } = options;

  const parent = el.parentElement;
  if (!parent) return () => { };

  gsap.set(el, { xPercent: -50, yPercent: -50, x: 0, y: 0 });

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
    const targetX = gsap.utils.random(minX, maxX * .5);
    const targetY = gsap.utils.random(minY, (maxY * .5));

    console.log(baseTop, targetY, "Base top + target y");
    console.log('Calculated Scale:', targetY * .001);
    let dynamicScale = 1;
    // Increase the scale by .1
    gsap.to(el, {
      x: targetX - baseLeft,
      y: targetY - baseTop,
      // Needs to fall within the .5-2 range
      scale: dynamicScale += -targetY * .001,
      duration: 20,
      rotationY: Math.floor(targetY * .01),
      ease,
      onComplete: moveToRandom,
    });
  };

  moveToRandom();

  const spin = gsap.to(el, {
    rotation,
    duration: rotationDuration,
    ease,
    yoyo: true,
    repeat: -1,
    transformOrigin: '50% 50%',
  });

  return () => {
    gsap.killTweensOf(el);
    spin.kill();
  };
}
