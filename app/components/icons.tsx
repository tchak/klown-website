type IconParams = { height?: number; width?: number };

export function ArrowL({ height = 24, width = 24 }: IconParams) {
  return (
    <svg
      x="0"
      y="0"
      height={height}
      width={width}
      viewBox="0 0 60 60"
      preserveAspectRatio="xMinYMid meet"
    >
      <g id="arrow-L" className="stroke">
        <path vectorEffect="non-scaling-stroke" d="M45,0L15,30l30,30" />
      </g>
    </svg>
  );
}

export function ArrowR({ height = 24, width = 24 }: IconParams) {
  return (
    <svg
      x="0"
      y="0"
      height={height}
      width={width}
      viewBox="0 0 60 60"
      preserveAspectRatio="xMinYMid meet"
    >
      <g id="arrow-R" className="stroke">
        <path vectorEffect="non-scaling-stroke" d="M15,60,45,30,15,0" />
      </g>
    </svg>
  );
}

export function IconFilter({ height = 24, width = 24 }: IconParams) {
  return (
    <svg
      x="0"
      y="0"
      height={height}
      width={width}
      viewBox="0 0 60 60"
      preserveAspectRatio="xMinYMid meet"
    >
      <g id="i-filter" class="stroke">
        <line y1="22.6" x2="40.8" y2="22.6" x1="12"></line>
        <line x2="30" x1="2" y1="6" y2="6"></line>
        <line y2="40.2" y1="40.2" x2="30" x1="2"></line>
        <circle cx="35" r="5.1" cy="6"></circle>
        <circle cx="6" cy="22.6" r="5.1"></circle>
        <circle cx="35" cy="40.2" r="5.1"></circle>
      </g>
    </svg>
  );
}

export function IconReset({ height = 24, width = 24 }: IconParams) {
  return (
    <svg
      x="0"
      y="0"
      height={height}
      width={width}
      viewBox="0 0 60 60"
      preserveAspectRatio="xMinYMid meet"
    >
      <g id="i-reset" className="stroke">
        <path d="M38.1,8.1C30.5-1,16.9-2.2,7.7,5.4S-2.6,26.7,5,35.8s21.3,10.3,30.4,2.7c5.1-4.2,7.7-10.3,7.7-16.5" />
        <polyline points="29.8,8.5 39.1,9.3 39.9,0 " />
      </g>
    </svg>
  );
}

export function IconSide({ height = 24, width = 24 }: IconParams) {
  return (
    <svg
      x="0"
      y="0"
      height={height}
      width={width}
      viewBox="0 0 60 60"
      preserveAspectRatio="xMinYMid meet"
    >
      <g id="i-side" className="stroke">
        <line x1="0" y1="0.5" x2="25" y2="0.5" />
        <line x1="11" y1="17.6" x2="49.2" y2="17.6" />
        <line x1="0" y1="34.7" x2="25" y2="34.7" />
        <polyline points="42.3,10.7 49.2,17.6 42.3,24.5" />
      </g>
    </svg>
  );
}

export function IconDown({ height = 24, width = 24 }: IconParams) {
  return (
    <svg
      x="0"
      y="0"
      height={height}
      width={width}
      viewBox="0 0 60 60"
      preserveAspectRatio="xMinYMid meet"
    >
      <g id="i-down" className="stroke">
        <polyline points="43.2,23.9 27.1,39.9 11.1,23.9 " />
      </g>
    </svg>
  );
}
