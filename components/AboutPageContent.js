import Image from "next/image";
import Link from "next/link";

function BrowserMockup({ image, url, caption, subcaption }) {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="overflow-hidden rounded-xl border border-border bg-[#1e1e2e] shadow-xl shadow-violet-500/10">
        <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <div className="flex-1 rounded-md bg-white/10 px-3 py-1 text-center text-xs text-white/50">
            {url}
          </div>
        </div>
        <div className="relative aspect-[16/10] bg-black">
          <Image src={image} alt={caption} fill className="object-cover object-top" />
        </div>
      </div>
      <p className="mt-4 text-center text-sm font-medium text-foreground">{caption}</p>
      <p className="text-center text-xs text-muted-foreground">{subcaption}</p>
    </div>
  );
}

const buildSteps = [
  {
    title: "Student engineers",
    description: "Headlines, layouts, and tools scoped for how your organization works.",
  },
  {
    title: "Team builds",
    description: "Real student developers craft your site and software from the ground up.",
  },
  {
    title: "You approve",
    description: "Preview, request changes, launch when ready.",
  },
];

export default function AboutPageContent() {
  return (
    <>
      <section className="border-b border-border px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            About Code4Community
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Because organizations deserve tools that actually work.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Most nonprofits and small organizations either overpay agencies thousands upfront, or
            end up without the digital tools they need. We built Code4Community to change that:
            custom, practical websites and software built by students at low cost.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-6xl">
          <BrowserMockup
            image="/donor-dashboard.png"
            url="your-organization.org"
            caption="Donor & CRM Dashboard"
            subcaption="Community organization · Real student-built project"
          />
        </div>
      </section>

      <section className="border-b border-border px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border">
            <Image
              src="/shail.jpg"
              alt="Shail Shah — Code4Community"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 80vw, 384px"
              priority
            />
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-violet-600">
              Who&apos;s behind Code4Community
            </p>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">Hey, I&apos;m Shail.</h2>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              <p>
                I created Code4Community in 2023 when I wrote a simple program for calculating
                grades with new assignments. The positive response from students made me realize
                technology could solve real problems for our school and community.
              </p>
              <p>
                I started Code4Community because most organizations I talked to were leaving real
                impact on the table. Not because the people running them weren&apos;t great at what
                they do — because their tools and websites weren&apos;t doing the work. A missing
                signup flow, a spreadsheet instead of a dashboard, a site nobody updated. Small
                things that cost real time and money.
              </p>
              <p>
                Technology moves fast. Most community organizations don&apos;t have time or budget
                to keep up with all of it. That&apos;s what Code4Community is for. Our student team
                builds and ships the tools you need so you can focus on your mission — no matter how
                the landscape shifts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/20 px-6 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold md:text-3xl">How we build</h2>
            <p className="mt-3 text-lg font-semibold text-foreground">
              Student innovation.{" "}
              <span className="text-violet-600">Team craft.</span>
            </p>
            <p className="mt-2 text-muted-foreground">
              Students scope and build. Mentors guide. You approve before launch.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Nothing goes live until you&apos;re happy with it. We walk through the project together
              and make final adjustments before launch.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {buildSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-background p-6 md:p-7"
              >
                <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#05070a] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl">
            Custom tools. Built for you.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 md:text-lg">
            Book a short call. We&apos;ll scope your project and walk through it together. Launch
            when you&apos;re ready.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-black transition-opacity hover:opacity-90"
          >
            Start Build
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}
