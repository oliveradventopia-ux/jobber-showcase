import { MotionSection } from './MotionSection';

function TBox({
  x, y, w, h, fill, stroke, title, sub, hint,
}: {
  x: number; y: number; w: number; h: number;
  fill: string; stroke: string;
  title: string; sub: string; hint?: string;
}) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={5} fill={fill} stroke={stroke} strokeWidth={1.5} />
      <text x={x + w / 2} y={y + 22} fontSize="12" fontWeight="600" textAnchor="middle" fill="#111827">{title}</text>
      <text x={x + w / 2} y={y + 38} fontSize="10" textAnchor="middle" fill="#4b5563">{sub}</text>
      {hint && <text x={x + w / 2} y={y + 56} fontSize="9" textAnchor="middle" fill="#6b7280">{hint}</text>}
    </g>
  );
}

export function TailoringDiagram() {
  return (
    <MotionSection className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-pain-red mb-3">
            The anti-hallucination story
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            The vetter is the firewall. Nothing ships without it.
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            Every bullet is matched from my real profile — not invented. A separate agent then
            re-reads the rendered HTML and checks every claim against the source. If any line
            can't be backed up, it bounces back for a rewrite.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_0_rgb(0_0_0_/_0.04)]">
          <div className="overflow-x-auto">
            <svg viewBox="0 0 1000 280" className="w-full min-w-[820px]" style={{ height: 'auto' }} aria-label="Tailoring flow with hallucination firewall">
              <defs>
                <marker id="t-arr-gray" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#6b7280" /></marker>
                <marker id="t-arr-red"  viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#dc2626" /></marker>
              </defs>

              <TBox x={20}  y={20} w={210} h={70} fill="#f5f3ff" stroke="#a78bfa" title="JD requirements" sub="from jobscope" hint="R1..R25 · must/preferred · tagged" />
              <TBox x={250} y={20} w={210} h={70} fill="#f5f3ff" stroke="#a78bfa" title="profile.json" sub="Oliver's bullet bank" hint="curated · with provenance" />

              <TBox x={120} y={130} w={220} h={70} fill="#eff6ff" stroke="#60a5fa" title="jobcopywriting" sub="single structured LLM call" hint="match strongest bullets → requirements" />

              <TBox x={500} y={130} w={170} h={70} fill="#fff" stroke="#9ca3af" title="selection_v{N}.json" sub="contract artifact" />

              <TBox x={700} y={130} w={140} h={70} fill="#fff" stroke="#9ca3af" title="renderer" sub="Jinja + WeasyPrint" />

              <TBox x={870} y={130} w={110} h={70} fill="#ecfdf5" stroke="#34d399" title="HTML" sub="resume + CL" />

              <TBox x={500} y={210} w={340} h={50} fill="#fff1f2" stroke="#fb7185" title="jobvetter — hallucination firewall" sub="re-reads HTML, validates every claim against profile.json" />

              <line x1={125} y1={90}  x2={200} y2={130} stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#t-arr-gray)" />
              <line x1={355} y1={90}  x2={260} y2={130} stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#t-arr-gray)" />
              <line x1={340} y1={165} x2={498} y2={165} stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#t-arr-gray)" />
              <line x1={670} y1={165} x2={698} y2={165} stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#t-arr-gray)" />
              <line x1={840} y1={165} x2={868} y2={165} stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#t-arr-gray)" />

              <path d="M 925 200 C 925 220, 750 215, 670 235" fill="none" stroke="#6b7280" strokeWidth="1.5" markerEnd="url(#t-arr-gray)" />

              <path d="M 500 235 C 350 245, 180 245, 180 200" fill="none" stroke="#dc2626" strokeWidth="1.75" strokeDasharray="6 4" markerEnd="url(#t-arr-red)" className="animate-dash-flow" />
              <text x={310} y={262} fontSize="10" fill="#dc2626" fontWeight="500">FAIL → flag JSON → vet-retry (≤ 2)</text>
            </svg>
          </div>

          <p className="mt-4 pt-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed">
            On the 3rd fail, the job is flagged{' '}
            <code className="text-[11px] bg-gray-100 px-1.5 py-0.5 rounded font-mono">customized_flagged</code>{' '}
            and surfaced to me — no silent retries. On pass, the vetter generates the PDFs itself and
            hands off to scoring.
          </p>
        </div>
      </div>
    </MotionSection>
  );
}
