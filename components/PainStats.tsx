import { StatCounter } from './StatCounter';

export function PainStats() {
  return (
    <section className="bg-white py-20 md:py-28 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500 mb-3">
            The reality of a modern job hunt
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 max-w-2xl mx-auto">
            The numbers nobody likes to talk about.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-6">
          <StatCounter
            value={75}
            suffix="%"
            label="of resumes are rejected by ATS before a human ever reads them"
            sublabel="Preptel · Jobscan benchmarks"
            accent="red"
          />
          <StatCounter
            value={4}
            suffix=" hrs"
            label="median time spent tailoring a single thoughtful application"
            sublabel="self-reported · job-seeker surveys"
            accent="amber"
          />
          <StatCounter
            value={80}
            suffix="%"
            label="of applicants never receive a single response from the employer"
            sublabel="industry estimate · varies by role"
            accent="red"
          />
        </div>

        <p className="mt-14 text-center text-sm text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Three problems. One pipeline. Everything below is how Jobber attacks each one — without
          asking me to give up control of the final click.
        </p>
      </div>
    </section>
  );
}
