import { useStrobos } from '../hooks';

export function Strobos() {
  const [enabled, toggle] = useStrobos();

  return (
    <>
      <div id="strobos">
        <input
          type="checkbox"
          className="on-off"
          id="i-strobos"
          checked={enabled}
          onChange={toggle}
        />
        <label htmlFor="i-strobos">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Strobos</title>
            <g stroke="var(--cc)" fill="none">
              <circle cx="10" cy="10" r="9" vectorEffect="non-scaling-stroke" />
              <circle
                className="second"
                cx="10"
                cy="10"
                r="6.5"
                vectorEffect="non-scaling-stroke"
              />
              <circle
                className="second"
                cx="10"
                cy="10"
                r="4"
                vectorEffect="non-scaling-stroke"
              />
              <circle
                className="second"
                cx="10"
                cy="10"
                r="2"
                vectorEffect="non-scaling-stroke"
              />
            </g>
          </svg>
        </label>
      </div>
    </>
  );
}
