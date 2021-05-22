import { useState, useEffect } from 'react';

export function Strobos() {
  const [enableStrobos, setEnableStrobos] = useState(false);

  useEffect(() => {
    if (enableStrobos) {
      document.body.classList.add('pulse');
    } else {
      document.body.classList.remove('pulse');
    }
  }, [enableStrobos]);

  useEffect(() => {
    setEnableStrobos(!getPrefersReducedMotion());
  }, []);

  return (
    <>
      <div id="strobos">
        <label htmlFor="i-strobos">Strobos</label>
        <input
          type="checkbox"
          className="on-off"
          id="i-strobos"
          checked={enableStrobos}
          onChange={() => setEnableStrobos((enableStrobos) => !enableStrobos)}
        />
      </div>
      <svg
        id="circles"
        className="sr-only"
        width="40"
        height="40"
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          fill="var(--bg)"
          stroke="none"
        />
        <g stroke="var(--cc)" fill="none">
          <circle cx="20" cy="20" r="18.5" />
          <circle cx="20" cy="20" r="14.5" />
          <circle cx="20" cy="20" r="10.5" />
          <circle cx="20" cy="20" r="6.5" />
        </g>
      </svg>
    </>
  );
}

function getPrefersReducedMotion() {
  const QUERY = '(prefers-reduced-motion: no-preference)';
  const mediaQueryList = window.matchMedia(QUERY);
  const prefersReducedMotion = !mediaQueryList.matches;
  return prefersReducedMotion;
}
