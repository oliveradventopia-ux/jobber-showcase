import { MotionSection } from './MotionSection';
import { PipelineSVG, PipelineLegend } from './pipeline-svg';

export function Pipeline() {
  return (
    <MotionSection className="bg-slate-50 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="mb-10 max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-solution-blue mb-3">
            How the pipeline works
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
            Six agents, two human gates, three feedback loops.
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-700 leading-relaxed">
            Forward path is solid. Dashed loops are where the system corrects itself: a vetter that
            rejects hallucinations, an Oliver gate that asks for a regen with guidance, and a
            post-rejection learner that retunes the scoring weights.
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-[0_1px_2px_0_rgb(0_0_0_/_0.04)]">
          <div className="overflow-x-auto">
            <PipelineSVG />
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <PipelineLegend />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
