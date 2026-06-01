// Pipeline SVG primitives — geometry preserved from the original implementation,
// with continuous dashed loops driven by the `animate-dash-flow` CSS keyframe.

export const NODE = {
  hunter:   { x: 20,   y: 220, w: 110, h: 60, kind: 'agent'  as const, label: 'jobhunter',      tag: 'hunt' },
  gate1:    { x: 164,  y: 220, w: 110, h: 60, kind: 'gate'   as const, label: 'Shortlist?',     tag: 'Gate 1' },
  scope:    { x: 308,  y: 220, w: 110, h: 60, kind: 'agent'  as const, label: 'jobscope',       tag: 'scrape JD' },
  copy:     { x: 452,  y: 220, w: 110, h: 60, kind: 'gen'    as const, label: 'jobcopywriting', tag: 'tailor' },
  vetter:   { x: 596,  y: 220, w: 110, h: 60, kind: 'verify' as const, label: 'jobvetter',      tag: 'fact-check' },
  reviewM1: { x: 740,  y: 220, w: 110, h: 60, kind: 'agent'  as const, label: 'jobreview',      tag: 'M1 — score' },
  gate2:    { x: 884,  y: 220, w: 110, h: 60, kind: 'gate'   as const, label: 'Approve?',       tag: 'Gate 2' },
  jobapply: { x: 1028, y: 220, w: 110, h: 60, kind: 'gen'    as const, label: 'jobapply',       tag: 'auto-fill ATS' },
  submit:   { x: 1028, y: 340, w: 110, h: 60, kind: 'gate'   as const, label: 'Submit?',        tag: 'Gate 3' },
  reviewM2: { x: 884,  y: 340, w: 110, h: 60, kind: 'agent'  as const, label: 'jobreview',      tag: 'M2 — email' },
  reviewM3: { x: 740,  y: 340, w: 110, h: 60, kind: 'agent'  as const, label: 'jobreview',      tag: 'M3 — learn' },
} as const;

export const STORE = {
  preferences: { x: 20,   y: 60, w: 110, h: 40, label: 'preferences.json', sub: 'roles, weights' },
  profile:     { x: 452,  y: 60, w: 110, h: 40, label: 'profile.json',     sub: 'experience bank' },
  jd:          { x: 308,  y: 60, w: 110, h: 40, label: 'jd_text',          sub: 'scraped JD' },
  selection:   { x: 596,  y: 60, w: 110, h: 40, label: 'selection_v{N}',   sub: 'bullet selection' },
  ats:         { x: 740,  y: 60, w: 110, h: 40, label: 'ats_report',       sub: 'M1 scoring' },
} as const;

type NodeBox = { x: number; y: number; w: number; h: number };
const centerX = (n: NodeBox) => n.x + n.w / 2;
const centerY = (n: NodeBox) => n.y + n.h / 2;
const topCenter    = (n: NodeBox) => ({ x: centerX(n), y: n.y });
const rightMid     = (n: NodeBox) => ({ x: n.x + n.w, y: centerY(n) });
const leftMid      = (n: NodeBox) => ({ x: n.x, y: centerY(n) });
const bottomCenter = (n: NodeBox) => ({ x: centerX(n), y: n.y + n.h });

function ForwardEdge({ from, to }: { from: keyof typeof NODE; to: keyof typeof NODE }) {
  const a = rightMid(NODE[from]);
  const b = leftMid(NODE[to]);
  return (
    <line x1={a.x} y1={a.y} x2={b.x - 2} y2={b.y} stroke="#6b7280" strokeWidth="1.75" markerEnd="url(#arr-gray)" />
  );
}

const LABEL_HALO = {
  paintOrder: 'stroke' as const,
  stroke: '#fff',
  strokeWidth: 4,
  strokeLinejoin: 'round' as const,
};

function DownEdge({ fromKey, toKey, label }: { fromKey: keyof typeof NODE; toKey: keyof typeof NODE; label?: string }) {
  const a = bottomCenter(NODE[fromKey]);
  const b = topCenter(NODE[toKey]);
  if (Math.abs(a.x - b.x) < 5) {
    return (
      <>
        <line x1={a.x} y1={a.y} x2={b.x} y2={b.y - 2} stroke="#6b7280" strokeWidth="1.75" markerEnd="url(#arr-gray)" />
        {label && <text x={a.x + 6} y={(a.y + b.y) / 2 + 3} fontSize="11" fill="#4b5563" fontWeight="500" {...LABEL_HALO}>{label}</text>}
      </>
    );
  }
  return (
    <>
      <path d={`M ${a.x} ${a.y} L ${a.x} ${(a.y + b.y) / 2} L ${b.x} ${(a.y + b.y) / 2} L ${b.x} ${b.y - 2}`}
            fill="none" stroke="#6b7280" strokeWidth="1.75" markerEnd="url(#arr-gray)" />
      {label && <text x={(a.x + b.x) / 2} y={(a.y + b.y) / 2 - 4} fontSize="11" fill="#4b5563" fontWeight="500" textAnchor="middle" {...LABEL_HALO}>{label}</text>}
    </>
  );
}

function LeftEdge({ fromKey, toKey, label }: { fromKey: keyof typeof NODE; toKey: keyof typeof NODE; label?: string }) {
  const a = leftMid(NODE[fromKey]);
  const b = rightMid(NODE[toKey]);
  return (
    <>
      <line x1={a.x} y1={a.y} x2={b.x + 2} y2={b.y} stroke="#6b7280" strokeWidth="1.75" markerEnd="url(#arr-gray)" />
      {label && <text x={(a.x + b.x) / 2} y={a.y - 6} fontSize="11" fill="#4b5563" fontWeight="500" textAnchor="middle" {...LABEL_HALO}>{label}</text>}
    </>
  );
}

function LoopArrow({
  from, to, arc, color, markerId, label, labelOffset,
}: {
  from: { x: number; y: number };
  to: { x: number; y: number };
  arc: number;
  color: string;
  markerId: string;
  label: string;
  labelOffset: number;
}) {
  const minY = Math.min(from.y, to.y);
  const apexY = minY - arc;
  const d = `M ${from.x} ${from.y} C ${from.x} ${apexY}, ${to.x} ${apexY}, ${to.x} ${to.y - 2}`;
  const labelX = (from.x + to.x) / 2;
  const labelY = minY + labelOffset;
  return (
    <>
      <path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeDasharray="6 4"
        markerEnd={`url(#${markerId})`}
        className="animate-dash-flow"
      />
      <text
        x={labelX}
        y={labelY}
        fontSize="11"
        fontWeight="600"
        fill={color}
        textAnchor="middle"
        paintOrder="stroke"
        stroke="#fff"
        strokeWidth="4"
        strokeLinejoin="round"
      >
        {label}
      </text>
    </>
  );
}

function StoreEdge({
  fromStore, toNode, curveOnly,
}: {
  fromStore: keyof typeof STORE;
  toNode: keyof typeof NODE;
  curveOnly?: boolean;
}) {
  const s = STORE[fromStore];
  const n = NODE[toNode];
  const a = bottomCenter(s);
  const b = topCenter(n);
  if (curveOnly) {
    return (
      <path
        d={`M ${a.x} ${a.y} C ${a.x} ${(a.y + b.y) / 2}, ${b.x} ${(a.y + b.y) / 2}, ${b.x} ${b.y - 2}`}
        fill="none" stroke="#2563eb" strokeWidth="1.25" strokeDasharray="3 3" markerEnd="url(#arr-blue)"
      />
    );
  }
  if (Math.abs(a.x - b.x) < 5) {
    return <line x1={a.x} y1={a.y} x2={b.x} y2={b.y - 2} stroke="#2563eb" strokeWidth="1.25" strokeDasharray="3 3" markerEnd="url(#arr-blue)" />;
  }
  return (
    <path
      d={`M ${a.x} ${a.y} C ${a.x} ${(a.y + b.y) / 2}, ${b.x} ${(a.y + b.y) / 2}, ${b.x} ${b.y - 2}`}
      fill="none" stroke="#2563eb" strokeWidth="1.25" strokeDasharray="3 3" markerEnd="url(#arr-blue)"
    />
  );
}

function FlowNode({ x, y, w, h, kind, label, tag }: typeof NODE[keyof typeof NODE]) {
  const style =
    kind === 'gate'   ? { fill: '#fffbeb', stroke: '#fbbf24', strokeWidth: 2,   labelColor: '#92400e', tagColor: '#b45309' } :
    kind === 'gen'    ? { fill: '#eff6ff', stroke: '#60a5fa', strokeWidth: 1.5, labelColor: '#1e3a8a', tagColor: '#1d4ed8' } :
    kind === 'verify' ? { fill: '#fff1f2', stroke: '#fb7185', strokeWidth: 1.5, labelColor: '#881337', tagColor: '#9f1239' } :
                        { fill: '#ffffff', stroke: '#9ca3af', strokeWidth: 1.5, labelColor: '#111827', tagColor: '#4b5563' };
  const cx = x + w / 2;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={6} fill={style.fill} stroke={style.stroke} strokeWidth={style.strokeWidth} />
      {kind === 'gate' ? (
        <>
          <text x={cx} y={y + 18} fontSize="9" fontWeight="600" textAnchor="middle" fill={style.tagColor} style={{ letterSpacing: '0.04em' }}>{tag.toUpperCase()}</text>
          <text x={cx} y={y + 35} fontSize="12" fontWeight="600" textAnchor="middle" fill={style.labelColor}>{label}</text>
          <text x={cx} y={y + 50} fontSize="9" textAnchor="middle" fill={style.tagColor}>Oliver decides</text>
        </>
      ) : (
        <>
          <text x={cx} y={y + 26} fontSize="12" fontWeight="600" textAnchor="middle" fill={style.labelColor}>{label}</text>
          <text x={cx} y={y + 44} fontSize="10" textAnchor="middle" fill={style.tagColor}>{tag}</text>
        </>
      )}
    </g>
  );
}

function StoreNode({ x, y, w, h, label, sub }: typeof STORE[keyof typeof STORE]) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={3} fill="#f5f3ff" stroke="#a78bfa" strokeWidth={1.25} strokeDasharray="2 2" />
      <text x={x + w / 2} y={y + 16} fontSize="11" fontWeight="600" textAnchor="middle" fill="#5b21b6">{label}</text>
      <text x={x + w / 2} y={y + 30} fontSize="9" textAnchor="middle" fill="#7c3aed">{sub}</text>
    </g>
  );
}

export function PipelineSVG() {
  return (
    <svg viewBox="0 0 1180 430" className="w-full min-w-[920px]" style={{ height: 'auto' }} aria-label="Jobber pipeline diagram">
      <defs>
        <marker id="arr-gray"   viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280" /></marker>
        <marker id="arr-red"    viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" /></marker>
        <marker id="arr-orange" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#ea580c" /></marker>
        <marker id="arr-purple" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#9333ea" /></marker>
        <marker id="arr-blue"   viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#2563eb" /></marker>
      </defs>

      {[
        ['hunter','gate1'], ['gate1','scope'], ['scope','copy'], ['copy','vetter'],
        ['vetter','reviewM1'], ['reviewM1','gate2'], ['gate2','jobapply'],
      ].map(([a, b]) => <ForwardEdge key={`${a}-${b}`} from={a as keyof typeof NODE} to={b as keyof typeof NODE} />)}

      <DownEdge fromKey="jobapply" toKey="submit"   label="form pre-filled" />
      <LeftEdge fromKey="submit"   toKey="reviewM2" label="Oliver clicks Submit · employer replies" />
      <LeftEdge fromKey="reviewM2" toKey="reviewM3" label="on rejection" />

      <LoopArrow
        from={topCenter(NODE.vetter)}
        to={topCenter(NODE.copy)}
        arc={50}
        color="#dc2626"
        markerId="arr-red"
        label="vet-retry (FAIL ≤ 2x)"
        labelOffset={-58}
      />
      <LoopArrow
        from={topCenter(NODE.gate2)}
        to={topCenter(NODE.copy)}
        arc={110}
        color="#ea580c"
        markerId="arr-orange"
        label="Oliver regen (with guidance)"
        labelOffset={-118}
      />
      <path
        d={`M ${centerX(NODE.reviewM3)} ${NODE.reviewM3.y}
            C ${centerX(NODE.reviewM3)} 200,
              ${centerX(STORE.preferences)} 200,
              ${centerX(STORE.preferences)} ${STORE.preferences.y + STORE.preferences.h}`}
        fill="none" stroke="#9333ea" strokeWidth="1.75" strokeDasharray="6 4" markerEnd="url(#arr-purple)"
        className="animate-dash-flow"
      />
      <text
        x={120}
        y={195}
        fontSize="11"
        fill="#9333ea"
        fontWeight="600"
        paintOrder="stroke"
        stroke="#fff"
        strokeWidth="4"
        strokeLinejoin="round"
      >
        Mode 3 → tunes learned_weights
      </text>

      <StoreEdge fromStore="preferences" toNode="hunter" />
      <StoreEdge fromStore="jd"          toNode="scope"  />
      <StoreEdge fromStore="profile"     toNode="copy"   />
      <StoreEdge fromStore="profile"     toNode="vetter" />
      <StoreEdge fromStore="selection"   toNode="vetter" curveOnly />
      <StoreEdge fromStore="ats"         toNode="reviewM1" />

      {Object.entries(STORE).map(([k, s]) => <StoreNode key={k} {...s} />)}
      {Object.entries(NODE).map(([k, n]) => <FlowNode key={k} {...n} />)}
    </svg>
  );
}

export function PipelineLegend() {
  const Swatch = ({ swatch, label }: { swatch: string; label: string }) => (
    <span className="flex items-center gap-1.5">
      <span className={`inline-block w-3 h-3 rounded ${swatch}`} />
      <span>{label}</span>
    </span>
  );
  return (
    <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-gray-700">
      <Swatch swatch="bg-white border border-gray-400" label="Agent step" />
      <Swatch swatch="bg-blue-50 border border-blue-400" label="Generation (LLM)" />
      <Swatch swatch="bg-rose-50 border border-rose-400" label="Validation" />
      <Swatch swatch="bg-amber-50 border border-amber-400" label="Oliver gate" />
      <Swatch swatch="bg-violet-50 border border-violet-400" label="Data store" />
      <span className="flex items-center gap-1.5"><svg width="20" height="6"><line x1="0" y1="3" x2="20" y2="3" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 3" /></svg>vet-retry</span>
      <span className="flex items-center gap-1.5"><svg width="20" height="6"><line x1="0" y1="3" x2="20" y2="3" stroke="#ea580c" strokeWidth="1.5" strokeDasharray="3 3" /></svg>regen</span>
      <span className="flex items-center gap-1.5"><svg width="20" height="6"><line x1="0" y1="3" x2="20" y2="3" stroke="#9333ea" strokeWidth="1.5" strokeDasharray="3 3" /></svg>learning</span>
    </div>
  );
}
