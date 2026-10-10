export interface Animation {
  start: () => void;
  stop: () => void;
}

const reduceMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Runs an animation only while its element is on screen (and visible: elements
 * inside `hidden` parents never intersect). Under reduced motion, `start` is never
 * called, so each demo should render a sensible static first frame.
 */
export function whenVisible(el: Element, animation: Animation) {
  const io = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !reduceMotion()) animation.start();
      else animation.stop();
    },
    { threshold: 0.2 }
  );
  io.observe(el);
}
