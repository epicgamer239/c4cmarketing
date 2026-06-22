import Link from "next/link";
import WorkCard from "@/components/WorkCard";
import WorkCarouselColumn from "@/components/WorkCarouselColumn";
import { workProjects } from "@/lib/constants";

const SECONDS_PER_CARD = 14;

function splitIntoColumns(projects) {
  return [
    projects.filter((_, index) => index % 3 === 0),
    projects.filter((_, index) => index % 3 === 1),
    projects.filter((_, index) => index % 3 === 2),
  ];
}

function WorkHeader({ standalone }) {
  return (
    <div className="mx-auto max-w-6xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">
        Our work
      </p>
      {standalone ? (
        <>
          <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Real sites. Real businesses. Real results.
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            Every site below is live, managed by us, and built to do one thing. Turn visitors into
            paying clients.
          </p>
        </>
      ) : (
        <>
          <h2 className="mt-4 text-2xl font-bold tracking-tight text-foreground whitespace-nowrap sm:text-3xl md:text-4xl">
            Real sites we&apos;ve built and{" "}
            <span className="text-violet-600">manage every day.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground md:text-lg">
            Every site below is live, managed by us, and built to turn visitors into paying
            clients.
          </p>
          <Link
            href="/work"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-violet-600"
          >
            See all our work
            <span aria-hidden>→</span>
          </Link>
        </>
      )}
    </div>
  );
}

function WorkCarousel() {
  const [leftColumn, middleColumn, rightColumn] = splitIntoColumns(workProjects);
  const columnDuration = (projects) => Math.max(projects.length, 1) * SECONDS_PER_CARD;

  return (
    <div className="work-marquee-grid relative mt-8 h-[min(82vh,880px)] overflow-hidden md:mt-10">
      <div className="grid h-full min-h-0 grid-cols-1 gap-5 md:grid-cols-3">
        <div className="hidden h-full min-h-0 md:block">
          <WorkCarouselColumn
            items={leftColumn}
            direction="up"
            duration={columnDuration(leftColumn)}
            variant="light"
          />
        </div>
        <div className="h-full min-h-0">
          <WorkCarouselColumn
            items={middleColumn}
            direction="down"
            duration={columnDuration(middleColumn)}
            variant="light"
          />
        </div>
        <div className="hidden h-full min-h-0 md:block">
          <WorkCarouselColumn
            items={rightColumn}
            direction="up"
            duration={columnDuration(rightColumn)}
            variant="light"
          />
        </div>
      </div>
    </div>
  );
}

function WorkGrid() {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
      {workProjects.map((project) => (
        <WorkCard key={project.title} project={project} variant="light" />
      ))}
    </div>
  );
}

export default function Work({ standalone = false }) {
  return (
    <section className="overflow-hidden border-t border-border bg-background">
      <div className={`mx-auto max-w-6xl px-6 ${standalone ? "py-16 md:py-24" : "py-20 md:py-28"}`}>
        <WorkHeader standalone={standalone} />
        {standalone ? <WorkGrid /> : <WorkCarousel />}
      </div>
    </section>
  );
}
