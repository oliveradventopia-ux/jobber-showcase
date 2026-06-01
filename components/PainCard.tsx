'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

type Props = {
  illustration: ReactNode;
  eyebrow: string;
  title: string;
  body: string;
  accent?: 'red' | 'amber';
  delay?: number;
};

const ACCENT_TEXT: Record<NonNullable<Props['accent']>, string> = {
  red: 'text-pain-red',
  amber: 'text-pain-amber',
};
const ACCENT_BORDER: Record<NonNullable<Props['accent']>, string> = {
  red: 'border-pain-red/20 bg-pain-red/[0.03]',
  amber: 'border-pain-amber/30 bg-pain-amber/[0.04]',
};

export function PainCard({ illustration, eyebrow, title, body, accent = 'red', delay = 0 }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={`flex flex-col h-full rounded-2xl border ${ACCENT_BORDER[accent]} p-6 md:p-7`}
    >
      <div className="aspect-[4/3] w-full mb-6">{illustration}</div>
      <div className="flex flex-col flex-1">
        <div className={`text-xs uppercase tracking-[0.18em] font-medium mb-3 ${ACCENT_TEXT[accent]}`}>
          {eyebrow}
        </div>
        <h3 className="text-xl md:text-[22px] font-semibold tracking-tight text-gray-900 mb-3 leading-snug">
          {title}
        </h3>
        <p className="text-sm md:text-[15px] text-gray-700 leading-relaxed">{body}</p>
      </div>
    </motion.article>
  );
}
