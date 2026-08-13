import type { Theme } from '@/types';

export const THEME_KEY = 'portfolio-theme-v2';
export const DEFAULT_THEME: Theme = 'dark';

/**
 * Injected into <head> and run before first paint, so the stored theme is on
 * <html> before anything renders. Without it, dark users get a white flash
 * while the client bundle boots.
 */
export const noFlashScript = `(function(){try{var t=localStorage.getItem(${JSON.stringify(
  THEME_KEY
)});if(t!=='light'&&t!=='dark'){t=${JSON.stringify(
  DEFAULT_THEME
)};}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme',${JSON.stringify(
  DEFAULT_THEME
)});}})();`;
