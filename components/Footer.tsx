import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-50 text-gray-900 py-20 md:py-28 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 mb-4">
              Built solo · vibe-coded with Claude Code
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-xl text-gray-900">
              A personal tool, in production for one user — me.
            </h2>
            <p className="mt-5 text-base md:text-lg text-gray-600 max-w-xl leading-relaxed">
              Six AI agents wired into a local Next.js + Postgres dashboard. No SaaS, no
              telemetry, no auto-submit. Paired with{' '}
              <a
                href="https://claude.com/claude-code"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-gray-300 hover:decoration-gray-900 transition"
              >
                Claude Code
              </a>{' '}
              to design, build, and ship the whole stack — landing page included.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:items-end">
            <a
              href="https://github.com/oliveradventopia-ux/jobber-showcase"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 rounded-full px-5 py-3 transition"
            >
              View this site on GitHub
              <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>→</span>
            </a>
            <Link
              href="/how"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 px-5 py-3 transition"
            >
              How it works
              <span aria-hidden>↗</span>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-gray-500">
          <span>Next.js 16</span>
          <span>·</span>
          <span>React 19</span>
          <span>·</span>
          <span>PostgreSQL 16</span>
          <span>·</span>
          <span>Claude Agent SDK</span>
          <span>·</span>
          <span>Playwright CDP</span>
          <span>·</span>
          <span>WeasyPrint</span>
          <span className="ml-auto">Form-fill automated · Submit always manual.</span>
        </div>
      </div>
    </footer>
  );
}
