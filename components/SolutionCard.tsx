'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

type Props = {
  icon?: ReactNode;
  title: string;
  body: string;
  accent?: 'emerald' | 'blue' | 'violet';
};

const ACCENT_TEXT = {
  emerald: 'text-solution-emerald',
  blue: 'text-solution-blue',
  violet: 'text-solution-violet',
} as const;
const ACCENT_DOT = {
  emerald: 'bg-solution-emerald',
  blue: 'bg-solution-blue',
  violet: 'bg-solution-violet',
} as const;

export function SolutionCard({ icon, title, body, accent = 'emerald' }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="rounded-2xl border border-gray-200 bg-white p-6 hover:border-gray-300 hover:-translate-y-0.5 transition"
    >
      <div className="flex items-start gap-3 mb-2">
        {icon ? (
          <div className={`${ACCENT_TEXT[accent]} shrink-0`}>{icon}</div>
        ) : (
          <span className={`mt-2 h-2 w-2 rounded-full ${ACCENT_DOT[accent]} shrink-0`} />
        )}
        <h3 className="text-lg font-semibold text-gray-900 tracking-tight">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
    </motion.div>
  );
}
