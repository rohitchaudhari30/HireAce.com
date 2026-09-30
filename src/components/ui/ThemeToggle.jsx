import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export function ThemeToggle({ id = 'theme-toggle-btn', className = 'theme-toggle-btn', showLabel = false }) {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      id={id}
      className={className}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="theme-icon-sun" aria-hidden="true">
        <Sun size={18} />
      </span>
      <span className="theme-icon-moon" aria-hidden="true">
        <Moon size={18} />
      </span>
      {showLabel && (
        <span className="theme-toggle-text-label">
          {isDark ? 'Dark Mode' : 'Light Mode'}
        </span>
      )}
    </button>
  );
}
