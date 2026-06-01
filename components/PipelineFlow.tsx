'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { type ReactNode } from 'react';

type Kind = 'agent' | 'human' | 'gen' | 'verify';

type Step = {
  n: number;
  kind: Kind;
  name: string;
  role: string;
  desc: string;
  feedback?: { tone: 'red' | 'orange' | 'purple'; text: string };
};

type Phase = {
  title: string;
  caption: string;
  steps: Step[];
};

const PHASES: Phase[] = [
  {
    title: 'Discover',
    caption: 'Find roles worth my time',
    steps: [
      {
        n: 1,
        kind: 'agent',
        name: 'jobhunter',
        role: 'Discovery',
        desc: 'Scrapes my watched boards, scores listings against my preferences.',
      },
      {
        n: 2,
        kind: 'human',
        name: 'Gate 1',
        role: 'I shortlist',
        desc: 'I keep or skip each pending job — one click in the dashboard.',
      },
    ],
  },
  {
    title: 'Tailor',
    caption: 'Build a resume that survives the keyword sieve',
    steps: [
      {
        n: 3,
        kind: 'agent',
        name: 'jobscope',
        role: 'JD extraction',
        desc: 'Pulls the JD and breaks it into ranked, taggable requirements.',
      },
      {
        n: 4,
        kind: 'gen',
        name: 'jobcopywriting',
        role: 'Tailoring',
        desc: 'Selects strongest bullets from my profile.json — never invents.',
      },
      {
        n: 5,
        kind: 'verify',
        name: 'jobvetter',
        role: 'Fact-check',
        desc: 'Re-reads the HTML and validates every claim against my profile.',
        feedback: { tone: 'red', text: 'On fail → re-prompts jobcopywriting (≤ 2x)' },
      },
      {
        n: 6,
        kind: 'agent',
        name: 'jobreview · M1',
        role: 'ATS scoring',
        desc: 'Scores the rendered resume against the JD; produces an ats_report.',
      },
    ],
  },
  {
    title: 'Apply',
    caption: 'Submit is always mine to click',
    steps: [
      {
        n: 7,
        kind: 'human',
        name: 'Gate 2',
        role: 'I approve or regen',
        desc: 'I see the scored docs side-by-side with the JD and decide.',
        feedback: { tone: 'orange', text: 'On regen → my typed guidance feeds the next prompt' },
      },
      {
        n: 8,
        kind: 'gen',
        name: 'jobapply',
        role: 'Form auto-fill',
        desc: 'Attaches to my real Chrome via CDP, fills every field, stops at Submit.',
      },
      {
        n: 9,
        kind: 'human',
        name: 'Gate 3',
        role: 'I click Submit',
        desc: 'I review the pre-filled page in browser and submit myself.',
      },
    ],
  },
  {
    title: 'Learn',
    caption: 'Get smarter with every reply',
    steps: [
      {
        n: 10,
        kind: 'agent',
        name: 'jobreview · M2/M3',
        role: 'Email + learning',
        desc: 'Watches Gmail for replies, classifies outcomes, retunes scoring.',
        feedback: { tone: 'purple', text: 'On rejection → nudges learned_weights for jobhunter' },
      },
    ],
  },
];

const KIND_META: Record<Kind, { chip: string; ring: string; badge: string; numBg: string; nameColor: string }> = {
  agent: {
    chip: 'bg-gray-100 text-gray-700 border-gray-200',
    ring: 'border-gray-200',
    badge: 'AGENT',
    numBg: 'bg-gray-900 text-white',
    nameColor: 'text-gray-900',
  },
  gen: {
    chip: 'bg-solution-blue/10 text-solution-blue border-solution-blue/20',
    ring: 'border-solution-blue/30',
    badge: 'AGENT · LLM',
    numBg: 'bg-solution-blue text-white',
    nameColor: 'text-gray-900',
  },
  verify: {
    chip: 'bg-pain-red/10 text-pain-red border-pain-red/20',
    ring: 'border-pain-red/30',
    badge: 'AGENT · VERIFY',
    numBg: 'bg-pain-red text-white',
    nameColor: 'text-gray-900',
  },
  human: {
    chip: 'bg-gate-amber/15 text-amber-900 border-gate-amber/40',
    ring: 'border-gate-amber/50 bg-amber-50/40',
    badge: 'HUMAN',
    numBg: 'bg-gate-amber text-amber-950',
    nameColor: 'text-amber-900',
  },
};

const FEEDBACK_TONE = {
  red: { dot: 'bg-pain-red', text: 'text-pain-red' },
  orange: { dot: 'bg-pain-amber', text: 'text-pain-amber' },
  purple: { dot: 'bg-solution-violet', text: 'text-solution-violet' },
} as const;

function StepCard({ step, index }: { step: Step; index: number }) {
  const reduce = useReducedMotion();
  const meta = KIND_META[step.kind];
  return (
    <motion.li
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.04, duration: 0.4 }}
      className={`relative flex gap-4 rounded-xl border bg-white p-4 md:p-5 ${meta.ring}`}
    >
      <div className="flex flex-col items-center gap-1.5 shrink-0">
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold font-mono ${meta.numBg}`}
        >
          {step.n}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
          <span className={`font-mono text-[15px] font-semibold ${meta.nameColor}`}>{step.name}</span>
          <span className={`inline-flex items-center text-[10px] font-medium tracking-[0.12em] px-2 py-0.5 rounded-full border ${meta.chip}`}>
            {meta.badge}
          </span>
          <span className="text-xs text-gray-500">{step.role}</span>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">{step.desc}</p>
        {step.feedback && (
          <p className={`mt-3 flex items-start gap-2 text-xs ${FEEDBACK_TONE[step.feedback.tone].text}`}>
            <span className={`mt-1.5 inline-block h-1.5 w-1.5 rounded-full ${FEEDBACK_TONE[step.feedback.tone].dot} shrink-0`} />
            <span>↺ {step.feedback.text}</span>
          </p>
        )}
      </div>
    </motion.li>
  );
}

function PhaseColumn({ phase, baseIndex }: { phase: Phase; baseIndex: number }) {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <div className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 mb-1">
          {phase.title}
        </div>
        <h3 className="text-base font-semibold text-gray-900">{phase.caption}</h3>
      </div>
      <ol className="flex flex-col gap-3 flex-1">
        {phase.steps.map((s, i) => (
          <StepCard key={s.n} step={s} index={baseIndex + i} />
        ))}
      </ol>
    </div>
  );
}

function Legend({ swatch, label }: { swatch: ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-xs text-gray-600">
      {swatch}
      {label}
    </span>
  );
}

export function PipelineFlow() {
  let cursor = 0;
  return (
    <div>
      <div className="grid gap-6 md:gap-8 lg:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {PHASES.map((p) => {
          const node = <PhaseColumn key={p.title} phase={p} baseIndex={cursor} />;
          cursor += p.steps.length;
          return node;
        })}
      </div>

      <div className="mt-10 rounded-xl border border-gray-200 bg-white p-5">
        <div className="flex flex-wrap gap-x-5 gap-y-2 items-center mb-3">
          <Legend
            swatch={<span className="h-3 w-3 rounded-full bg-gray-900" />}
            label="Agent step"
          />
          <Legend
            swatch={<span className="h-3 w-3 rounded-full bg-solution-blue" />}
            label="LLM generation"
          />
          <Legend
            swatch={<span className="h-3 w-3 rounded-full bg-pain-red" />}
            label="Verification"
          />
          <Legend
            swatch={<span className="h-3 w-3 rounded-full bg-gate-amber" />}
            label="Human gate"
          />
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          Three feedback loops keep the pipeline honest — and they&apos;re shown inline above on the
          step they affect:{' '}
          <span className="text-pain-red font-medium">vet-retry</span> (auto, bounded ≤ 2),{' '}
          <span className="text-pain-amber font-medium">regen with my guidance</span> (manual at
          Gate 2), and{' '}
          <span className="text-solution-violet font-medium">post-rejection learning</span> (M3
          tunes scoring weights).
        </p>
      </div>
    </div>
  );
}
