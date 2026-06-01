import Link from 'next/link';
import { OldVsNew } from '@/components/OldVsNew';
import { MeetJobber } from '@/components/MeetJobber';
import { Pipeline } from '@/components/Pipeline';
import { AgentsGrid } from '@/components/AgentsGrid';
import { TailoringDiagram } from '@/components/TailoringDiagram';
import { Gates } from '@/components/Gates';
import { Footer } from '@/components/Footer';
import { VideoEmbed } from '@/components/VideoEmbed';

// Drop a Loom / YouTube / Vimeo URL here to surface a demo video on /how
// (renders nothing until set, so the page is safe before recording).
const DEMO_VIDEO_URL = '';

export default function HowItWorksPage() {
  return (
    <main>
      <section className="bg-slate-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-20">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-500 hover:text-gray-900 mb-6"
          >
            <span aria-hidden>←</span> Back to landing
          </Link>
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-solution-emerald mb-3">
            How Jobber works
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-tight max-w-3xl">
            The pipeline, the agents, and the gates that keep me in control.
          </h1>
          <p className="mt-5 text-base md:text-lg text-gray-600 max-w-2xl leading-relaxed">
            Six AI agents chained by a strict contract. Three places I decide. Three loops that
            quietly correct themselves. Scroll through the full story below.
          </p>
        </div>
      </section>

      <OldVsNew />
      <VideoEmbed
        url={DEMO_VIDEO_URL}
        title="Jobber dashboard demo"
        caption="One pass through the pipeline — paste a LinkedIn JD, agents tailor + fact-check + score, I click Submit."
      />
      <MeetJobber />
      <Pipeline />
      <AgentsGrid />
      <TailoringDiagram />
      <Gates />
      <Footer />
    </main>
  );
}
