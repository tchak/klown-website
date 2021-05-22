import { useEffect, useState } from 'react';

export function usePageColor(color?: string) {
  useEffect(() => {
    const [cc, bg] = color ?? 'rw';
    document.body.dataset['cc'] = cc;
    document.body.dataset['bg'] = bg;
  }, [color]);
}

export function useStrobos(): [boolean, () => void] {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (enabled) {
      document.body.classList.add('pulse');
    } else {
      document.body.classList.remove('pulse');
    }
  }, [enabled]);

  useEffect(() => {
    setEnabled(!getPrefersReducedMotion());
  }, []);

  return [enabled, () => setEnabled((enabled) => !enabled)];
}

function getPrefersReducedMotion() {
  const QUERY = '(prefers-reduced-motion: no-preference)';
  const mediaQueryList = window.matchMedia(QUERY);
  const prefersReducedMotion = !mediaQueryList.matches;
  return prefersReducedMotion;
}
