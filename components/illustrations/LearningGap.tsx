export function LearningGap() {
  return (
    <svg
      viewBox="0 0 400 300"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Stack of rejection emails on one side; a blank skills-to-grow report on the other — the signal exists but is never aggregated"
    >
      <defs>
        <marker id="lg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#94a3b8" />
        </marker>
      </defs>

      {/* Left: 3 rejection emails stacked, fanned slightly */}
      {[0, 1, 2].map((i) => {
        const x = 20 + i * 6;
        const y = 50 + i * 22;
        return (
          <g key={`rej-${i}`} transform={`translate(${x}, ${y})`} opacity={0.92 - i * 0.06}>
            <rect width="150" height="58" rx="6" fill="#fff" stroke="#fca5a5" strokeWidth="1.25" />
            <rect x="10" y="10" width="58" height="6" rx="2" fill="#ef4444" opacity="0.55" />
            <rect x="10" y="22" width="120" height="4" rx="2" fill="#e2e8f0" />
            <rect x="10" y="30" width="100" height="4" rx="2" fill="#e2e8f0" />
            <rect x="10" y="38" width="86" height="4" rx="2" fill="#e2e8f0" />
            <text x="142" y="14" textAnchor="end" fontSize="8" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#991b1b">
              Rejected
            </text>
          </g>
        );
      })}

      <text x="40" y="140" fontSize="10" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#991b1b" opacity="0.7">
        signal · buried
      </text>

      {/* Middle: extraction arrow with question mark */}
      <g>
        <text x="205" y="135" textAnchor="middle" fontSize="20" fontWeight="700" fill="#94a3b8">
          ?
        </text>
        <line x1="190" y1="150" x2="240" y2="150" stroke="#94a3b8" strokeWidth="1.5" markerEnd="url(#lg-arrow)" />
        <text x="215" y="166" textAnchor="middle" fontSize="9" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#64748b">
          ?
        </text>
      </g>

      {/* Right: empty skills-to-grow report */}
      <g>
        <rect x="252" y="42" width="138" height="216" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
        <text x="321" y="64" textAnchor="middle" fontSize="9" fontWeight="700" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#64748b" letterSpacing="1.5">
          SKILLS TO GROW
        </text>
        <line x1="266" y1="74" x2="376" y2="74" stroke="#cbd5e1" />

        {[0, 1, 2, 3].map((i) => (
          <g key={`row-${i}`} transform={`translate(266, ${92 + i * 36})`}>
            <rect width="110" height="22" rx="4" fill="#f1f5f9" />
            <circle cx="11" cy="11" r="4" fill="none" stroke="#cbd5e1" strokeWidth="1.25" />
            <text x="24" y="15" fontSize="10" fill="#cbd5e1" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" letterSpacing="2">
              — — — — —
            </text>
          </g>
        ))}

        <text x="321" y="248" textAnchor="middle" fontSize="9" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#94a3b8">
          empty · no aggregation
        </text>
      </g>

      <text x="200" y="290" textAnchor="middle" fontSize="11" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#475569">
        rejections come, lessons never do
      </text>
    </svg>
  );
}
