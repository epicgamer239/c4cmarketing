import Image from "next/image";
import { problemItems, solutionFeatures } from "@/lib/contactProblemSolution";

function FeatureIcon({ name }) {
  if (name === "chart") {
    return (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    );
  }

  if (name === "search") {
    return (
      <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    );
  }

  return (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function Highlight({ children, color = "rose" }) {
  const bgClass = color === "rose" ? "bg-rose-200/70" : "bg-violet-200/70";

  return (
    <span className="relative whitespace-nowrap">
      <span className={`relative z-10 box-decoration-clone px-1 ${bgClass}`}>{children}</span>
    </span>
  );
}

export default function ContactProblemSolution() {
  return (
    <section className="border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
              The problem
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              Your website is <Highlight>costing you money</Highlight> right now
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every day your site isn&apos;t converting, someone else is getting the clients that
              should be calling you.
            </p>

            <ol className="mt-8 space-y-5">
              {problemItems.map((item, index) => (
                <li key={item} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 text-sm font-semibold text-rose-500">
                    {index + 1}
                  </span>
                  <span className="pt-0.5 text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <Image src="/c4c.png" alt="" width={28} height={28} className="rounded-md" aria-hidden />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                The Code4Community solution
              </p>
            </div>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
              We build it. We manage it. <Highlight color="violet">You close deals.</Highlight>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Code4Community gives you a professional, conversion-focused website that makes your
              business look as good online as it is in person, without you lifting a finger.
            </p>

            <ul className="mt-8 space-y-6">
              {solutionFeatures.map((feature) => (
                <li key={feature.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                    <FeatureIcon name={feature.icon} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {feature.title}:{" "}
                      <span className="font-normal text-muted-foreground">{feature.description}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 text-center">
          <a
            href="mailto:brhsc4c@gmail.com?subject=Book%20a%20Call"
            className="inline-flex items-center rounded-full bg-foreground px-8 py-3.5 text-base font-semibold text-background transition-opacity hover:opacity-90"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
