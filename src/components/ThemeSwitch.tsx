'use client';

import { useTheme } from '@/components/ThemeProvider';

/**
 * 62×30 square switch. An accent knob slides 30px right in dark; the icon
 * sitting behind the knob is knocked out to the background colour so it reads
 * against the accent, while the other stays at 60% text.
 */
export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      title="Toggle theme"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
      className="theme-switch relative flex h-7.5 w-15.5 flex-none cursor-pointer items-center justify-around rounded-none border border-divider bg-transparent p-0 text-text transition-colors duration-[250ms] hover:border-accent"
    >
      <span className="theme-knob absolute top-0.5 left-0.5 h-6 w-7 bg-accent transition-transform duration-300 ease-industry" />
      <svg
        className="theme-ico relative z-1"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
      </svg>
      <svg
        className="theme-ico relative z-1"
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
      </svg>
    </button>
  );
}
