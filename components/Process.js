import { processSteps } from "@/lib/constants";

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">How it works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From idea to impact — a simple process built around your needs.
          </p>
        </div>

        <div className="relative mt-14 grid gap-8 md:grid-cols-3">
          <div className="absolute top-12 right-0 left-0 hidden h-0.5 bg-border md:block" aria-hidden />
          {processSteps.map((step) => (
            <div key={step.step} className="relative">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-violet-500 bg-background text-sm font-bold text-violet-600">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
