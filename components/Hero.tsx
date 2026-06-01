'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { MeshGradient } from './illustrations/MeshGradient';

export function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative bg-slate-50 text-gray-900 overflow-hidden">
      <MeshGradient />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-28 md:pt-32 md:pb-40">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 text-xs font-mono text-gray-600 mb-8 px-3 py-1.5 rounded-full border border-gray-200 bg-white/70 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-solution-emerald" />
          ~/jobber · personal job application hub
        </motion.div>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl"
        >
          Applying to jobs is broken.
          <br />
          <span className="text-gray-400">So I built an agent pipeline to fix it.</span>
          <span className="inline-block w-[0.55ch] h-[0.9em] align-[-0.12em] ml-2 bg-solution-emerald animate-caret" />
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
        >
          A human-in-the-loop AI system that finds roles, tailors a resume per job, fact-checks
          itself for hallucinations, scores ATS fit, and auto-fills the application form. I stay
          in control of every gate — and the Submit button is always mine.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 flex flex-wrap gap-3 text-xs font-mono text-gray-600"
        >
          {['Next.js', 'PostgreSQL', 'Claude Agent SDK', 'Playwright CDP', 'WeasyPrint'].map((tag) => (
            <span key={tag} className="px-3 py-1.5 rounded-full border border-gray-200 bg-white/70 backdrop-blur">
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
