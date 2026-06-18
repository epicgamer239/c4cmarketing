import { howItWorksSteps } from "@/lib/howItWorks";

export default function HowItWorks() {
  return (
    <section id="process" className="border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            How it works
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Three steps to a site that{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
              sells for you
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {howItWorksSteps.map((item) => (
            <div
              key={item.step}
              className="rounded-2xl border border-border bg-muted/40 p-6 md:p-7"
            >
              <div className="mb-5 flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-sm font-bold text-white">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
