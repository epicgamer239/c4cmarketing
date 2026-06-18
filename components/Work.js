import Image from "next/image";
import { workProjects, PLATFORM_URL } from "@/lib/constants";

export default function Work() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Our work</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Student-built tools shipped for teachers, nonprofits, and the broader community.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workProjects.map((project) => {
            const content = (
              <article className="group overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-lg">
                {project.image ? (
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                ) : (
                  <div className="flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-violet-500/10 to-amber-500/10">
                    <span className="text-4xl font-bold text-violet-500/30">{project.title[0]}</span>
                  </div>
                )}
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold">{project.title}</h3>
                    <span
                      className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        project.tag === "Live"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-emerald-100 text-emerald-800"
                      }`}
                    >
                      {project.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{project.description}</p>
                </div>
              </article>
            );

            if (project.external) {
              return (
                <a key={project.title} href={project.external} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              );
            }

            return <div key={project.title}>{content}</div>;
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={`${PLATFORM_URL}/work`}
            className="inline-flex items-center gap-2 rounded-lg border-2 border-foreground px-8 py-3 font-medium transition-colors hover:bg-foreground hover:text-background"
          >
            See all work
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
