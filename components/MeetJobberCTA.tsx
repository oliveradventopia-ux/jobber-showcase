import Link from 'next/link';
import { MotionSection } from './MotionSection';

export function MeetJobberCTA() {
  return (
    <MotionSection className="bg-white py-24 md:py-32 border-t border-gray-200">
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <div className="text-xs uppercase tracking-[0.2em] font-medium text-solution-emerald mb-4">
          The pipeline that fixes it
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
          Meet Jobber.
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Six AI agents, three human gates, three feedback loops — wired into one personal
          pipeline that handles the grind without taking the wheel.
        </p>

        <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
          <Link
            href="/how"
            className="group inline-flex items-center gap-2 text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-full px-7 py-4 transition shadow-sm"
          >
            See how it works
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs font-mono text-gray-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-solution-emerald" />
            No auto-submit
          </span>
          <span className="text-gray-300">·</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-solution-blue" />
            No hallucinations
          </span>
          <span className="text-gray-300">·</span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-solution-violet" />
            Learns from rejection
          </span>
        </div>
      </div>
    </MotionSection>
  );
}
