import { Sun, Moon } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { isLightMode, toggleTheme } from '../stores/themeStore';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const $isLightMode = useStore(isLightMode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-9 h-9"></div>; // Placeholder to avoid hydration mismatch

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-colors cursor-pointer hover:bg-opacity-10 
        ${$isLightMode ? 'text-[#1a1a1a] hover:bg-[#bede64]' : 'text-zinc-400 hover:text-[#1a1a1a] hover:bg-[#bede64]'}
      `}
      aria-label={$isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {$isLightMode ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
