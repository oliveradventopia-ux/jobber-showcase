import { MotionSection } from './MotionSection';
import { SolutionCard } from './SolutionCard';

export function MeetJobber() {
  return (
    <MotionSection className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-solution-emerald mb-3">
            Meet Jobber
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight">
            A personal pipeline that handles the grind — without taking the wheel.
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Six agents, two human gates, one principle: <strong>Jobber does the work, I make the
            decisions.</strong> Every JD is scraped, every claim is fact-checked against my real
            experience, every application is scored before I see it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
          <SolutionCard
            accent="emerald"
            title="No auto-submit. Ever."
            body="The agent fills the form in my real Chrome via CDP attach, then stops. I review the page myself and click Submit. LinkedIn Easy Apply is permanently off-limits."
          />
          <SolutionCard
            accent="blue"
            title="No hallucinations ship."
            body="A separate vetter agent fact-checks every bullet and cover-letter claim against my profile.json before a PDF is generated. Fail twice and it escalates to me."
          />
          <SolutionCard
            accent="violet"
            title="Learns from every rejection."
            body="When the email classifier sees a rejection, a learning agent suggests resume edits and nudges the scoring weights so the next batch fits better."
          />
        </div>
      </div>
    </MotionSection>
  );
}
