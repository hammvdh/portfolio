import { atom } from 'nanostores';

export const isLightMode = atom(false);

export function toggleTheme() {
  const newValue = !isLightMode.get();
  isLightMode.set(newValue);
  if (newValue) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
}
