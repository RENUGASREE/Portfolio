'use client';

import { useSyncExternalStore } from 'react';
import { Sun, Moon } from 'lucide-react';

function subscribe(callback: () => void) {
  window.addEventListener('theme-change', callback);
  const mql = window.matchMedia('(prefers-color-scheme: light)');
  mql.addEventListener('change', callback);
  return () => {
    window.removeEventListener('theme-change', callback);
    mql.removeEventListener('change', callback);
  };
}

function getSnapshot(): 'dark' | 'light' {
  if (typeof document === 'undefined') return 'dark';
  const attr = document.documentElement.getAttribute('data-theme') as 'dark' | 'light';
  if (attr) return attr;
  try {
    const saved = localStorage.getItem('portfolio-theme') as 'dark' | 'light';
    if (saved) return saved;
  } catch {
    // Ignore localStorage errors
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function getServerSnapshot(): 'dark' | 'light' {
  return 'dark';
}

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', nextTheme);
    try {
      localStorage.setItem('portfolio-theme', nextTheme);
    } catch {
      // Ignore localStorage errors
    }
    window.dispatchEvent(new Event('theme-change'));
  };

  const isLight = theme === 'light';
  const ariaLabel = isLight ? 'Switch to dark theme' : 'Switch to light theme';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={ariaLabel}
      title={ariaLabel}
      className={`relative inline-flex items-center justify-center w-10 h-10 rounded-xl border border-border bg-surface-soft hover:bg-chip-bg text-foreground hover:text-primary transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer ${className}`}
    >
      {isLight ? (
        <Moon className="w-4 h-4 text-primary transition-transform duration-200 hover:rotate-12" />
      ) : (
        <Sun className="w-4 h-4 text-primary transition-transform duration-200 hover:rotate-45" />
      )}
    </button>
  );
}
