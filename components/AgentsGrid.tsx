'use client';

import { motion, useReducedMotion } from 'framer-motion';

const AGENTS = [
  { name: 'jobhunter',      role: 'Discovery',  trigger: 'manual / cron',           input: 'preferences.json',                output: 'jobs (pending)',                       accent: 'gray' as const },
  { name: 'jobscope',       role: 'Extraction', trigger: 'dashboard',               input: 'job URL',                         output: 'requirements jsonb',                   accent: 'gray' as const },
  { name: 'jobcopywriting', role: 'Generation', trigger: 'dashboard',               input: 'JD + profile.json',               output: 'resume + CL HTML',                     accent: 'blue' as const },
  { name: 'jobvetter',      role: 'Validation', trigger: 'auto-chained',            input: 'generated HTML',                  output: 'PDFs · or flag JSON',                  accent: 'rose' as const },
  { name: 'jobreview',      role: 'Scoring',    trigger: 'auto-chained',            input: 'resume + JD',                     output: 'ats_report jsonb',                     accent: 'gray' as const },
  { name: 'jobapply',       role: 'Auto-fill',  trigger: 'dashboard · Open & Fill', input: 'application_profile.json + PDFs', output: 'pre-filled ATS form · stops at Submit', accent: 'blue' as const },
];

const ACCENT = {
  gray: { ring: 'border-gray-200 hover:border-gray-300', tag: 'bg-gray-100 text-gray-700' },
  blue: { ring: 'border-solution-blue/30 hover:border-solution-blue/60', tag: 'bg-solution-blue/10 text-solution-blue' },
  rose: { ring: 'border-pain-red/30 hover:border-pain-red/60', tag: 'bg-pain-red/10 text-pain-red' },
} as const;

export function AgentsGrid() {
  const reduce = useReducedMotion();
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-12 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-solution-violet mb-3">
            Meet the agents
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Each agent does one thing well.
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            Six specialists, chained by a strict contract. Each has a single input, a single output,
            and a clear trigger — so failures are localized and reruns are cheap.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AGENTS.map((a, i) => {
            const c = ACCENT[a.accent];
            return (
              <motion.article
                key={a.name + i}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={reduce ? undefined : { y: -2 }}
                className={`rounded-2xl border bg-white p-5 transition ${c.ring}`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <div className="text-[10px] uppercase tracking-[0.2em] font-medium text-gray-500 mb-1">
                      {a.role}
                    </div>
                    <div className="font-mono text-base font-semibold text-gray-900">{a.name}</div>
                  </div>
                  <span className={`text-[10px] font-medium px-2 py-1 rounded-full font-mono ${c.tag}`}>
                    ▸ {a.trigger}
                  </span>
                </div>

                <div className="mt-3 border-t border-gray-100 pt-3 space-y-2 text-xs">
                  <div className="grid grid-cols-[40px_1fr] gap-2 items-start">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 pt-0.5">in</span>
                    <span className="text-gray-700">{a.input}</span>
                  </div>
                  <div className="grid grid-cols-[40px_1fr] gap-2 items-start">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400 pt-0.5">out</span>
                    <span className="text-gray-700">{a.output}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
