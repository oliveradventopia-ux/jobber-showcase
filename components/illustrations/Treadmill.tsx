export function Treadmill() {
  const forms = Array.from({ length: 6 });
  return (
    <svg
      viewBox="0 0 400 300"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="A treadmill of identical job application forms stretching into the distance"
    >
      <defs>
        <linearGradient id="treadmill-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <mask id="treadmill-mask">
          <rect x="0" y="0" width="400" height="300" fill="url(#treadmill-fade)" />
        </mask>
      </defs>

      <g mask="url(#treadmill-mask)">
        {forms.map((_, i) => {
          const scale = 1 - i * 0.13;
          const x = 20 + i * 58;
          const y = 60 + i * 8;
          return (
            <g key={i} transform={`translate(${x}, ${y}) scale(${scale})`}>
              <rect width="120" height="160" rx="8" fill="#fff" stroke="#fca5a5" strokeWidth="1.5" />
              <rect x="14" y="20" width="60" height="8" rx="3" fill="#fecaca" />
              <rect x="14" y="40" width="92" height="4" rx="2" fill="#fecaca" opacity="0.6" />
              <rect x="14" y="50" width="80" height="4" rx="2" fill="#fecaca" opacity="0.6" />
              <rect x="14" y="68" width="92" height="20" rx="3" fill="#fee2e2" />
              <rect x="14" y="96" width="92" height="20" rx="3" fill="#fee2e2" />
              <rect x="14" y="124" width="50" height="20" rx="3" fill="#ef4444" />
            </g>
          );
        })}
      </g>

      <text x="20" y="280" fontSize="11" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#991b1b" opacity="0.7">
        application #237 of ∞
      </text>
    </svg>
  );
}
