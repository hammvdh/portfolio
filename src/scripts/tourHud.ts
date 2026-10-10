/** Drives a TourHud inside `root`: caption swap, step counter, and the progress segments. */
export function tourHud(root: HTMLElement) {
  const caption = root.querySelector<HTMLElement>('[data-hud-caption]')!;
  const count = root.querySelector<HTMLElement>('[data-hud-count]')!;
  const bars = [...root.querySelectorAll<HTMLElement>('[data-hud-progress] i')];
  const total = String(bars.length).padStart(2, '0');
  const fill = (bar: HTMLElement) => bar.querySelector('b')!;

  return {
    /** Show step `i` with `text`, filling its progress segment over `duration` ms. */
    show(i: number, text: string, duration: number) {
      caption.textContent = text;
      count.textContent = `${String(i + 1).padStart(2, '0')}/${total}`;
      caption.classList.remove('swap');
      void caption.offsetWidth;
      caption.classList.add('swap');
      bars.forEach((bar, k) => {
        bar.classList.toggle('done', k < i);
        fill(bar).getAnimations().forEach((a) => a.cancel());
        if (k === i) fill(bar).animate([{ width: '0%' }, { width: '100%' }], { duration, easing: 'linear', fill: 'forwards' });
      });
    },
    pause() {
      bars.forEach((bar) => fill(bar).getAnimations().forEach((a) => a.pause()));
    },
  };
}
