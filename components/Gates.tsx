'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

type Branch = { label: string; target: string; tone: 'good' | 'bad' | 'warn' };

const GATES: { n: string; title: string; when: string; branches: Branch[]; body: ReactNode }[] = [
  {
    n: '1',
    title: 'Shortlist?',
    when: 'status = pending',
    branches: [
      { label: 'Shortlist', target: 'shortlisted', tone: 'good' },
      { label: 'Skip', target: 'skipped', tone: 'bad' },
    ],
    body: 'jobhunter found it. I decide if it\'s worth the API spend to tailor. Roughly the "is this a fit at all" filter — surfaced in the dashboard Jobs board.',
  },
  {
    n: '2',
    title: 'Approve & Apply?',
    when: 'status = reviewed',
    branches: [
      { label: 'Approve & Apply', target: 'approved_for_apply', tone: 'good' },
      { label: 'Regenerate + guidance', target: 'scraped (→ tailor)', tone: 'warn' },
      { label: 'Skip', target: 'skipped', tone: 'bad' },
    ],
    body: 'Vetter passed, M1 scored. I read everything in the dashboard. If v1 isn\'t right, regen with guidance — that comment threads directly into the next prompt.',
  },
  {
    n: '3',
    title: 'Submit?',
    when: 'status = approved_for_apply',
    branches: [
      { label: 'Open & Fill', target: 'jobapply spawns', tone: 'good' },
      { label: 'Click Submit (in browser)', target: 'manual, never automated', tone: 'warn' },
      { label: 'Mark Applied', target: 'applied', tone: 'good' },
    ],
    body: '"Open & Fill" attaches to my real Chrome via CDP and fills every field (resume + CL PDFs, EEO, work-auth, salary). It STOPS at Submit. I inspect, click Submit myself, then tap "Mark Applied".',
  },
  {
    n: '—',
    title: 'Outcome tracking',
    when: 'status = applied',
    branches: [
      { label: 'Interview', target: 'interview', tone: 'good' },
      { label: 'Offer', target: 'offer', tone: 'good' },
      { label: 'Rejection', target: 'rejected → M3 learning', tone: 'warn' },
    ],
    body: 'jobreview Mode 2 watches Gmail for employer replies and auto-classifies. Rejections trigger Mode 3, which nudges learned_weights so scoring drifts toward my actual taste over time.',
  },
];

export function Gates() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-gate-amber mb-3">
            Human in the loop
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            I am the brain. The agents are the hands.
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            Three gates and one outcome tracker — every important decision routes through me, every
            click is logged. Automation handles the volume; judgement stays mine.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {GATES.map((g, i) => (
            <motion.div
              key={g.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-2xl bg-amber-50/60 border-2 border-gate-amber/40 p-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gate-amber text-amber-950 text-sm font-bold">
                  {g.n}
                </span>
                <h3 className="text-lg font-semibold text-amber-900">{g.title}</h3>
              </div>
              <p className="text-xs text-amber-800 mb-4 font-mono">
                fires when <span className="bg-amber-100 px-1.5 py-0.5 rounded">{g.when}</span>
              </p>
              <div className="space-y-2 mb-4">
                {g.branches.map((b) => (
                  <div key={b.label} className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-[11px] font-medium px-2 py-1 rounded-full border ${
                        b.tone === 'good'
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                          : b.tone === 'warn'
                          ? 'bg-orange-100 text-orange-800 border-orange-200'
                          : 'bg-gray-100 text-gray-700 border-gray-200'
                      }`}
                    >
                      {b.label}
                    </span>
                    <span className="text-amber-700" aria-hidden>→</span>
                    <code className="text-[11px] bg-amber-100 px-2 py-0.5 rounded text-amber-900 font-mono">
                      {b.target}
                    </code>
                  </div>
                ))}
              </div>
              <p className="text-sm text-amber-900 leading-relaxed">{g.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
