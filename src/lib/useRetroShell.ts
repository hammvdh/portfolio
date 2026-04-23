import { useEffect, useState } from 'react';

/** True when the global retro desktop layout is active (see Layout.astro `retro-site` on body). */
export function useRetroShell(): boolean {
  const [active, setActive] = useState(() => {
    if (typeof document === 'undefined') return false;
    return document.body.classList.contains('retro-site');
  });
  useEffect(() => {
    setActive(document.body.classList.contains('retro-site'));
  }, []);
  return active;
}
