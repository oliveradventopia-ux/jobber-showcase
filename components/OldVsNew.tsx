import { Timeline } from './illustrations/Timeline';

export function OldVsNew() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-14">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 mb-3">
            Old way vs new way
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 max-w-3xl mx-auto leading-tight">
            Same job, two very different loops.
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            The manual loop is six chunks of work — most of it keyword-matching and rewriting.
            The Jobber loop collapses to four — and three of them happen while I&apos;m doing
            something else.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start">
          <article className="rounded-2xl bg-slate-50 border border-gray-200 p-6 md:p-8">
            <div className="flex items-baseline justify-between gap-3 mb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 mb-2">
                  The old way
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-gray-500">Manual</h3>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider text-gray-500">per application</div>
                <div className="font-mono text-2xl font-semibold text-pain-red">~4 hrs</div>
              </div>
            </div>
            <Timeline
              variant="manual"
              steps={[
                { label: 'Read JD, extract keywords by hand', tag: '~30 min' },
                { label: 'Rewrite resume bullets to match keywords', tag: '~90 min' },
                { label: 'Write a tailored cover letter', tag: '~75 min' },
                { label: 'Copy-paste into the ATS form', tag: '~45 min' },
                { label: 'Submit. Wait. Hope.', tag: 'and pray' },
                { label: 'Rejection arrives. No reason given.', tag: 'lesson lost' },
              ]}
            />
            <p className="mt-4 text-xs text-gray-500 leading-relaxed">
              No learning loop. Next role starts from scratch with the same blind spots.
            </p>
          </article>

          <article className="rounded-2xl bg-slate-50 border border-solution-emerald/30 p-6 md:p-8 shadow-[0_1px_0_0_rgba(16,185,129,0.05)]">
            <div className="flex items-baseline justify-between gap-3 mb-4">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] font-medium text-solution-emerald mb-2">
                  The Jobber way
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-gray-900">Jobber</h3>
              </div>
              <div className="text-right">
                <div className="text-xs uppercase tracking-wider text-solution-emerald">per application</div>
                <div className="font-mono text-2xl font-semibold text-solution-emerald">~10 min</div>
              </div>
            </div>
            <Timeline
              variant="jobber"
              steps={[
                { label: 'Agents find, score & shortlist roles', tag: 'I confirm · 1 click' },
                { label: 'Agents tailor + fact-check + ATS-score', tag: 'happens in background' },
                { label: 'I review & click Submit', tag: '~5 min in browser' },
                { label: 'Agents extract skills-to-grow from rejections', tag: 'jobreview · M3' },
              ]}
            />
            <p className="mt-4 text-xs text-gray-600 leading-relaxed">
              Every rejection feeds the next batch — a running list of skills to build toward
              the role I actually want.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
