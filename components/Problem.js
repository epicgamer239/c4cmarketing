import { stats } from "@/lib/constants";

export default function Problem() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Many community organizations need digital tools
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            But building software is often expensive or complicated.
          </p>
          <div className="mt-8 space-y-4 text-left text-foreground md:text-center">
            <p className="leading-relaxed">
              Nonprofits and small organizations often need simple tools to run their programs
              effectively — event trackers, volunteer systems, or internal dashboards.
            </p>
            <p className="leading-relaxed">
              Hiring developers or agencies can cost thousands of dollars, making these tools
              inaccessible to many community groups.
            </p>
            <p className="text-lg font-semibold">
              Code4Community was created to help solve this challenge.
            </p>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-muted/30 p-6 text-center"
            >
              <p className="text-2xl font-bold md:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
