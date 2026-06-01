import Link from 'next/link';
import { Footer } from '@/components/Footer';
import { MotionSection } from '@/components/MotionSection';

export const metadata = {
  title: 'Built with Claude Code — how Jobber was vibe-coded',
  description:
    'What "vibe-coded with Claude Code" actually meant for Jobber — the pairing model, the numbers, three feature stories, and a plan-file excerpt.',
};

export default function BuiltWithClaudeCodePage() {
  return (
    <main>
      {/* Header */}
      <section className="bg-slate-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-gray-900 mb-6"
          >
            <span aria-hidden>←</span> Back to landing
          </Link>
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-solution-violet mb-3">
            Built with Claude Code
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight max-w-3xl">
            What &ldquo;vibe-coded&rdquo; actually meant for Jobber.
          </h1>
          <p className="mt-5 text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Jobber is an end-to-end AI pipeline — six agents, a Postgres queue, a Next.js
            dashboard, browser automation, and PDF rendering — built solo by pairing with{' '}
            <a
              href="https://claude.com/claude-code"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-gray-300 hover:decoration-gray-900"
            >
              Claude Code
            </a>
            . This is what that actually looked like.
          </p>
        </div>
      </section>

      {/* By the numbers */}
      <MotionSection className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 mb-3">
            By the numbers
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-10 max-w-2xl leading-tight">
            Not a hundred hours of grinding. Four focused build days, end-to-end.
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            <Stat number="19" unit="commits" detail="across 4 active build days" />
            <Stat number="6" unit="specialist agents" detail="hunter · scope · copywriter · vetter · review · apply" />
            <Stat number="24" unit="API routes" detail="all Next.js App Router, server-side only" />
            <Stat number="23" unit="React components" detail="dashboard UI" />
            <Stat number="7.9k" unit="lines TypeScript" detail="dashboard + landing" />
            <Stat number="3.9k" unit="lines Python" detail="agents + scrapers + dispatcher" />
          </div>
          <p className="mt-8 text-sm text-gray-600 max-w-2xl leading-relaxed">
            The pairing model is what made the timeline tight. I described intent in plain English;
            Claude Code translated it into an executable plan, asked the right clarifying questions,
            and wrote the code. I reviewed, redirected when the design drifted, and shipped.
          </p>
        </div>
      </MotionSection>

      {/* The pairing model */}
      <MotionSection className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-solution-emerald mb-3">
            The pairing model
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6 max-w-3xl leading-tight">
            Sketch the problem → review options → commit to one → ship → iterate.
          </h2>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl">
            Every feature followed the same loop. I&apos;d describe the friction I hit (&ldquo;the
            scrape opens a Chrome window every time, but the only feature that&apos;s supposed to
            touch Chrome is the auto-fill&rdquo;), Claude Code would investigate the actual code
            paths, hand back a root-cause report with a recommended fix, and ask before changing
            anything risky. I reviewed, sometimes pushed back, and only then did code change.
          </p>
          <div className="grid md:grid-cols-2 gap-5 mt-10">
            <Step
              n="01"
              title="I describe intent, not implementation"
              body="The brief was always &ldquo;here&apos;s the user pain, here&apos;s the constraint, here&apos;s what good looks like.&rdquo; Never &ldquo;write a function that…&rdquo;"
            />
            <Step
              n="02"
              title="Claude Code reads the codebase first"
              body="Before proposing anything, it traced the actual call sites — what already exists, what could be reused, what would have to change."
            />
            <Step
              n="03"
              title="Plan before code, for anything non-trivial"
              body="A written plan file (with file paths, risks, verification steps) lands first. I read it, push back, approve. Then code happens."
            />
            <Step
              n="04"
              title="Verify before shipping"
              body="Every change ends with tsc, a curl smoke check, and a structural diff. No &ldquo;trust me, it works.&rdquo;"
            />
          </div>
        </div>
      </MotionSection>

      {/* Three feature stories */}
      <MotionSection className="bg-white py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-solution-blue mb-3">
            Three feature stories
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-10 max-w-3xl leading-tight">
            How specific features actually got built.
          </h2>
          <div className="space-y-5">
            <FeatureStory
              tag="STORY 01 · DESIGN"
              title="A story-first landing page from a wall of internal docs"
              problem="The /jobber page was an 8-section architecture overview written for one user — me. Dense pipeline diagrams, agent rosters, file paths. Useful as a control panel, useless as a portfolio piece."
              process="I asked for a redesign that &ldquo;leads with the pain in the job search, then introduces Jobber as the AI pipeline I built to fix it.&rdquo; Claude Code came back with a structured plan: 10 narrative sections, ~20 new files, hand-crafted SVG illustrations, framer-motion for scroll reveals. We iterated through 6 rounds of UI feedback (3-column pain cards, modal-based JD paste, color-token consistency) before it landed."
              outcome="The site you&apos;re reading. Same codebase as the working dashboard, but the public face is now a recruiter-friendly story instead of a wiring diagram."
            />
            <FeatureStory
              tag="STORY 02 · ARCHITECTURE"
              title="The LinkedIn paste-JD fallback — without building a new module"
              problem="LinkedIn refuses scraping; logged-in automation risks account bans. Easy answer: build a parallel paste-JD extraction module. Better answer: teach the existing jobscope agent to skip the scrape when JD text is already in the row."
              process="Tech-manager review surfaced the dispatcher pattern I&apos;d missed — the chain wasn&apos;t client-orchestrated, it was queue-based. So the LinkedIn intake became 4 files instead of 8: a modal for the paste, an API route that inserts at &lsquo;shortlisted&rsquo; with jd_text pre-populated, a 5-line precondition in jobscope.md, and a Cancel button on the queued row. The whole feature reused the existing dispatcher, the existing chain handler, the existing agent."
              outcome="Paste-mode rows share the same downstream code path as URL-mode rows from &lsquo;shortlisted&rsquo; onward. Zero divergence risk. Total surface area: under 200 lines of new code."
            />
            <FeatureStory
              tag="STORY 03 · DEBUGGING"
              title="A one-line config fix for a confusing UX bug"
              problem="Every scrape opened a visible Chromium window. The auto-fill feature was supposed to be the only thing that touched a real browser. I suspected bleed-through between the two systems."
              process="Tech-manager investigated. It traced the dispatcher, the queue helper, the cdp_attach module, the agent prompts. Conclusion: not a bleed-through. The Playwright MCP server defaults to &lsquo;headed&rsquo; mode, and the jobscope MCP config never passed --headless. Two-character fix: add the flag."
              outcome="Scrape goes silent. Auto-fill still attaches to my real Chrome. Confirmed by reading the right four files instead of writing a parallel codepath to &lsquo;isolate&rsquo; the scrape browser."
            />
          </div>
        </div>
      </MotionSection>

      {/* Plan file excerpt */}
      <MotionSection className="bg-slate-50 py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 mb-3">
            From the plan files
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
            Plans aren&apos;t a formality. They&apos;re the contract.
          </h2>
          <p className="text-base text-gray-700 leading-relaxed mb-6">
            Every multi-step change starts with a written plan — file paths, decisions locked,
            risks called out, verification commands. Reading it carefully takes me 3-5 minutes;
            executing it takes 30-45. The plan is where I steer.
          </p>
          <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 font-mono text-[12.5px] leading-relaxed text-gray-800 overflow-x-auto">
            <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-4">
              ~/.claude/plans/jobhunter-layout-polish.md (excerpt)
            </p>
            <p className="text-gray-900 font-semibold mb-2"># Layout polish — sidebar order, /jobhunter 2-up, Shortlisting columns + bulk Skip</p>
            <p className="mb-2 text-gray-500">## Context</p>
            <p className="mb-4 text-gray-700">
              Four small, independent changes after Oliver used the post-paste-JD-intake build:
            </p>
            <p className="mb-2 text-gray-700">
              <strong>1. Sidebar nav order.</strong> Job Search currently sits under the
              &ldquo;Tools&rdquo; section, below Shortlisting. Move it above — it&apos;s the
              daily intake surface, not a tool.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>2. /jobhunter 2-up.</strong> The two cards stack today. Render them
              side-by-side at md+ widths with &ldquo;Add a single job&rdquo; on the left.
            </p>
            <p className="mb-2 text-gray-700">
              <strong>3. Button rename.</strong> &ldquo;Run Jobhunter&rdquo; → &ldquo;Run Schedule&rdquo;.
            </p>
            <p className="mb-4 text-gray-700">
              <strong>4. Shortlisting — bulk Skip + columnar row.</strong> Add a Skip bulk action.
              Reshape the row so company, source, and fit_score each occupy their own column.
            </p>
            <p className="mb-2 text-gray-500">## Decisions locked</p>
            <p className="mb-1 text-gray-700">
              · Sidebar: Job Search moves into the same top nav block as Overview + Shortlisting.
            </p>
            <p className="mb-1 text-gray-700">
              · /jobhunter: wrap the two intake cards in grid md:grid-cols-2 gap-6.
            </p>
            <p className="text-gray-700">
              · Bulk Skip API: new route at app/api/jobs/bulk-skip/route.ts. Mirrors the existing single-row skip.
            </p>
          </div>
        </div>
      </MotionSection>

      {/* Closing */}
      <MotionSection className="bg-white py-20 md:py-28 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-solution-emerald mb-4">
            The takeaway
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Pairing with Claude Code didn&apos;t write the system for me. It made me a faster judge.
          </h2>
          <p className="mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I still owned every architectural choice — the queue-based dispatcher, the
            anti-hallucination firewall, the human-gate boundaries, the no-auto-submit rule. What
            changed is that I could explore three implementations in the time one used to take,
            and pick the one with the smallest surface area instead of the first that worked.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-3">
            <a
              href="https://claude.com/claude-code"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-base font-semibold text-white bg-gray-900 hover:bg-gray-800 rounded-full px-7 py-4 transition shadow-sm"
            >
              Try Claude Code
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>↗</span>
            </a>
            <Link
              href="/how"
              className="text-base font-medium text-gray-600 hover:text-gray-900 px-5 py-4 transition"
            >
              See what got built →
            </Link>
          </div>
        </div>
      </MotionSection>

      <Footer />
    </main>
  );
}

function Stat({ number, unit, detail }: { number: string; unit: string; detail: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <div className="font-mono text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
        {number}
      </div>
      <div className="mt-1 text-sm font-medium text-gray-700">{unit}</div>
      <div className="mt-2 text-xs text-gray-500 leading-snug">{detail}</div>
    </div>
  );
}

function Step({ n, title, body }: { n: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6">
      <div className="font-mono text-xs text-gray-500 mb-2">{n}</div>
      <h3 className="text-lg font-semibold text-gray-900 tracking-tight mb-2">{title}</h3>
      <p className="text-sm text-gray-700 leading-relaxed">{body}</p>
    </div>
  );
}

function FeatureStory({
  tag,
  title,
  problem,
  process,
  outcome,
}: {
  tag: string;
  title: string;
  problem: string;
  process: string;
  outcome: string;
}) {
  return (
    <article className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
      <div className="text-[11px] uppercase tracking-[0.2em] font-medium text-gray-500 mb-3">
        {tag}
      </div>
      <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-gray-900 mb-4 leading-snug">
        {title}
      </h3>
      <div className="grid md:grid-cols-3 gap-5 text-sm leading-relaxed">
        <div>
          <div className="text-[11px] font-medium uppercase tracking-wider text-pain-red mb-1.5">
            Problem
          </div>
          <p className="text-gray-700">{problem}</p>
        </div>
        <div>
          <div className="text-[11px] font-medium uppercase tracking-wider text-solution-blue mb-1.5">
            Process
          </div>
          <p className="text-gray-700">{process}</p>
        </div>
        <div>
          <div className="text-[11px] font-medium uppercase tracking-wider text-solution-emerald mb-1.5">
            Outcome
          </div>
          <p className="text-gray-700">{outcome}</p>
        </div>
      </div>
    </article>
  );
}
