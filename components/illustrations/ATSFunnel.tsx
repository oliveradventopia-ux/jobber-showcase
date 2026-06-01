const KEYWORDS = ['react', 'aws', 'kafka', '5+yrs', 'sql', 'agile'];

export function ATSFunnel() {
  const incoming = Array.from({ length: 8 });
  return (
    <svg
      viewBox="0 0 400 300"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Resumes pouring into an ATS keyword sieve; most bounce off, few pass through"
    >
      {/* incoming resumes */}
      {incoming.map((_, i) => {
        const x = 40 + (i % 4) * 22;
        const y = 10 + Math.floor(i / 4) * 26;
        return (
          <rect
            key={`in-${i}`}
            x={x}
            y={y}
            width="16"
            height="22"
            rx="2"
            fill="#fff"
            stroke="#94a3b8"
            strokeWidth="1"
          />
        );
      })}

      {/* sieve / filter */}
      <g>
        <path d="M 60 100 L 340 100 L 260 170 L 140 170 Z" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" />
        {KEYWORDS.map((kw, i) => (
          <g key={kw} transform={`translate(${85 + i * 38}, 132)`}>
            <rect width={kw.length * 6 + 8} height="16" rx="3" fill="#fff" stroke="#ef4444" strokeWidth="1" />
            <text x={(kw.length * 6 + 8) / 2} y="11" textAnchor="middle" fontSize="9" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#991b1b">
              {kw}
            </text>
          </g>
        ))}
      </g>

      {/* rejected resumes bouncing off — static spread below sieve */}
      {[0, 1, 2, 3, 4].map((i) => {
        const left = i % 2 === 0;
        const cx = left ? 40 + i * 5 : 360 - i * 5;
        const angle = left ? -30 : 30;
        return (
          <rect
            key={`rej-${i}`}
            x={cx}
            y={220}
            width="14"
            height="18"
            rx="2"
            fill="#fee2e2"
            stroke="#ef4444"
            strokeWidth="1"
            transform={`rotate(${angle}, ${cx + 7}, 229)`}
            opacity="0.85"
          />
        );
      })}

      {/* survivors */}
      {[0, 1].map((i) => (
        <rect
          key={`pass-${i}`}
          x={185 + i * 22}
          y={230}
          width="16"
          height="22"
          rx="2"
          fill="#d1fae5"
          stroke="#059669"
          strokeWidth="1.5"
        />
      ))}

      <text x="20" y="285" fontSize="11" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#475569">
        ~75% rejected before a human reads them
      </text>
    </svg>
  );
}
