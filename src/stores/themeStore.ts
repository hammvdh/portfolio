import { atom } from 'nanostores';

const getInitialState = () => {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
        return localStorage.getItem('theme') === 'light';
    }
    return false; // Default to dark
};

export const isLightMode = atom(getInitialState());

export function toggleTheme() {
  const newValue = !isLightMode.get();
  isLightMode.set(newValue);
  
  if (typeof localStorage !== 'undefined') {
      localStorage.setItem('theme', newValue ? 'light' : 'dark');
  }

  if (newValue) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
}

// Subscribe to external changes (e.g. from other tabs or scripts) if needed, 
// strictly speaking regular syncing in toggleTheme is enough for single tab usage.
// However, ensuring the atom is in sync with the body class on mount is good practice.
// Ensure the atom is the source of truth and syncs with the body
if (typeof window !== 'undefined') {
    const currentMode = isLightMode.get();
    if (currentMode) {
        document.body.classList.add('light-mode');
    } else {
        document.body.classList.remove('light-mode');
    }
}
