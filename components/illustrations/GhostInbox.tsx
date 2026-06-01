export function GhostInbox() {
  const rows = Array.from({ length: 5 });
  return (
    <svg
      viewBox="0 0 400 300"
      width="100%"
      height="100%"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="An empty inbox showing applications sent but no replies received"
    >
      <rect
        x="40"
        y="30"
        width="320"
        height="220"
        rx="12"
        fill="#fff"
        stroke="#cbd5e1"
        strokeWidth="1.5"
      />

      {/* header */}
      <rect x="40" y="30" width="320" height="36" rx="12" fill="#f1f5f9" />
      <rect x="40" y="60" width="320" height="6" fill="#f1f5f9" />
      <text x="56" y="52" fontSize="12" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#475569" fontWeight="600">
        Inbox
      </text>
      <text x="344" y="52" fontSize="11" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#94a3b8" textAnchor="end">
        0 unread
      </text>

      {/* sent items, all "no reply" */}
      {rows.map((_, i) => {
        const y = 86 + i * 30;
        return (
          <g key={i} opacity="0.75">
            <rect x="56" y={y} width="288" height="22" rx="4" fill="#fff" stroke="#e2e8f0" />
            <circle cx="70" cy={y + 11} r="3" fill="#cbd5e1" />
            <rect x="82" y={y + 5} width="80" height="5" rx="2" fill="#cbd5e1" />
            <rect x="82" y={y + 13} width="140" height="4" rx="2" fill="#e2e8f0" />
            <text x="332" y={y + 15} fontSize="9" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#94a3b8" textAnchor="end">
              sent · {14 - i * 2}d
            </text>
          </g>
        );
      })}

      {/* waiting indicator */}
      <text x="200" y="244" textAnchor="middle" fontSize="11" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill="#64748b">
        waiting for reply…
      </text>
    </svg>
  );
}
