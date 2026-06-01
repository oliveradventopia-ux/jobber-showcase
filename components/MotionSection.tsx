'use client';

import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion';
import { type ReactNode } from 'react';

type Props = Omit<HTMLMotionProps<'section'>, 'children'> & {
  children: ReactNode;
  delay?: number;
  y?: number;
};

export function MotionSection({ children, delay = 0, y = 24, className, ...rest }: Props) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
}
