import { PainCard } from './PainCard';
import { Treadmill } from './illustrations/Treadmill';
import { ATSFunnel } from './illustrations/ATSFunnel';
import { LearningGap } from './illustrations/LearningGap';

export function PainNarrative() {
  return (
    <section className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-pain-red mb-3">
            The three pains
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight">
            What the job-hunt loop actually feels like.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 items-stretch">
          <PainCard
            accent="red"
            eyebrow="Pain 01 · the treadmill"
            title="Every application is a fresh 4-hour craft project."
            body="Read the JD, rewrite the same five bullets to match the keywords, re-export the PDF, copy-paste into a form built in 2012, answer a 90-question EEO survey, click Submit. Then do it again."
            illustration={<Treadmill />}
            delay={0}
          />
          <PainCard
            accent="amber"
            eyebrow="Pain 02 · the keyword gate"
            title="A robot is the first reader. Most resumes don't survive it."
            body="ATS systems score your resume by keyword match before any human reads it. Miss the term — even if you've done the work for years — and you're filtered out silently."
            illustration={<ATSFunnel />}
            delay={0.08}
          />
          <PainCard
            accent="red"
            eyebrow="Pain 03 · the blind loop"
            title="You never learn what's actually missing."
            body="Every rejection is buried signal — which skills the role hired for, which gap cost you the interview. But the pattern stays invisible, and the next application starts from zero."
            illustration={<LearningGap />}
            delay={0.16}
          />
        </div>
      </div>
    </section>
  );
}
