type Step = { label: string; tag?: string };

type Props = {
  steps: Step[];
  variant: 'manual' | 'jobber';
};

const VARIANT = {
  manual: {
    eyebrow: 'text-gray-500',
    line: '#cbd5e1',
    lineDash: '4 4',
    nodeFill: '#f1f5f9',
    nodeStroke: '#94a3b8',
    text: '#475569',
    tag: '#94a3b8',
  },
  jobber: {
    eyebrow: 'text-solution-emerald',
    line: '#10b981',
    lineDash: '0',
    nodeFill: '#d1fae5',
    nodeStroke: '#059669',
    text: '#064e3b',
    tag: '#10b981',
  },
} as const;

export function Timeline({ steps, variant }: Props) {
  const v = VARIANT[variant];
  const ROW_H = 44;
  const PAD_TOP = 16;
  const PAD_BOT = 16;
  const H = PAD_TOP + steps.length * ROW_H + PAD_BOT;
  const W = 320;
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width="100%"
      height={H}
      preserveAspectRatio="xMinYMin meet"
      role="img"
      aria-label={`${variant} workflow timeline`}
      className={variant === 'manual' ? 'opacity-90' : ''}
    >
      <line
        x1="22"
        y1={PAD_TOP + 6}
        x2="22"
        y2={H - PAD_BOT - 6}
        stroke={v.line}
        strokeWidth="2"
        strokeDasharray={v.lineDash}
      />
      {steps.map((s, i) => {
        const y = PAD_TOP + i * ROW_H + 12;
        return (
          <g key={i}>
            <circle cx="22" cy={y} r="7" fill={v.nodeFill} stroke={v.nodeStroke} strokeWidth="2" />
            <text x="42" y={y - 2} fontSize="13" fontWeight="600" fill={v.text}>
              {s.label}
            </text>
            {s.tag && (
              <text x="42" y={y + 14} fontSize="10" fontFamily="ui-monospace,SFMono-Regular,Menlo,monospace" fill={v.tag}>
                {s.tag}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}
