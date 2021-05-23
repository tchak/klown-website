import { useEffect, useState } from 'react';
import { useHover } from '@react-aria/interactions';

export function usePageColor(color?: string) {
  useEffect(() => {
    switchPageColor(color);
  }, [color]);
}

export function useHoverPageColor(color?: string, index = 1) {
  return useHover({
    onHoverStart() {
      switchPageColor(color);
      document.body.classList.remove(
        ...[...document.body.classList].filter((className) =>
          className.startsWith('fadeVideo')
        )
      );
    },
    onHoverEnd() {
      document.body.classList.add(`fadeVideo${index}`);
    },
  });
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

function switchPageColor(color?: string) {
  const [cc, bg] = color ?? 'rw';
  document.body.dataset['cc'] = cc;
  document.body.dataset['bg'] = bg;
}

function getPrefersReducedMotion() {
  const QUERY = '(prefers-reduced-motion: no-preference)';
  const mediaQueryList = window.matchMedia(QUERY);
  const prefersReducedMotion = !mediaQueryList.matches;
  return prefersReducedMotion;
}
