import { services } from "@/lib/constants";
import { serviceIconMap } from "@/components/icons";

export default function Services() {
  return (
    <section id="services" className="border-t border-border bg-muted/20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">What we do</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our student team designs and builds digital tools for local organizations at low cost.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = serviceIconMap[service.icon];
            return (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-background p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-lg bg-violet-500/10 p-3 text-violet-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-background p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Custom software for any organization</h3>
              <p className="mt-2 max-w-xl text-muted-foreground">
                From a rough idea or a spreadsheet that&apos;s outgrown itself — to custom dashboards,
                tools, and systems built for how you work. We scope, build, ship, and support.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <div className="rounded-lg bg-violet-500/10 px-5 py-3 text-center text-sm font-medium text-violet-700">
                Donor & CRM systems
              </div>
              <div className="rounded-lg bg-emerald-500/10 px-5 py-3 text-center text-sm font-medium text-emerald-700">
                Volunteer portals
              </div>
              <div className="rounded-lg bg-amber-500/10 px-5 py-3 text-center text-sm font-medium text-amber-700">
                Program dashboards
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
