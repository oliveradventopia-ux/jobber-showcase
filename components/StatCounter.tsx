'use client';

import { animate, useInView, useMotionValue, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sublabel?: string;
  duration?: number;
  accent?: 'red' | 'amber' | 'emerald';
};

const ACCENT: Record<NonNullable<Props['accent']>, string> = {
  red: 'text-pain-red',
  amber: 'text-pain-amber',
  emerald: 'text-solution-emerald',
};

export function StatCounter({
  value,
  suffix = '',
  prefix = '',
  label,
  sublabel,
  duration = 1.6,
  accent = 'red',
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setDisplay(value);
      return;
    }
    const controls = animate(mv, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, duration, mv, reduce]);

  const rounded = value % 1 === 0 ? Math.round(display) : display.toFixed(1);

  return (
    <div ref={ref} className="text-center">
      <div className={`font-mono text-5xl md:text-6xl font-semibold tracking-tight ${ACCENT[accent]}`}>
        {prefix}
        {rounded}
        {suffix}
      </div>
      <div className="mt-3 text-sm md:text-base text-gray-700 max-w-[20ch] mx-auto leading-snug">
        {label}
      </div>
      {sublabel && <div className="mt-1 text-xs text-gray-500 font-mono">{sublabel}</div>}
    </div>
  );
}
