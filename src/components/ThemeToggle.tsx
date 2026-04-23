import { Sun, Moon } from 'lucide-react';
import { useStore } from '@nanostores/react';
import { isLightMode, toggleTheme } from '../stores/themeStore';
import { useEffect, useState } from 'react';
import { clsx } from 'clsx';

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className }: ThemeToggleProps) {
  const $isLightMode = useStore(isLightMode);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className={clsx('w-9 h-9', className)} />;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={clsx(
        'p-2 rounded-full transition-colors cursor-pointer hover:bg-opacity-10',
        $isLightMode ? 'text-[#1a1a1a] hover:bg-[#bede64]' : 'text-zinc-400 hover:text-[#1a1a1a] hover:bg-[#bede64]',
        'retro-theme-toggle',
        className
      )}
      aria-label={$isLightMode ? 'Switch to dark mode' : 'Switch to light mode'}
    >
      {$isLightMode ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  );
}
