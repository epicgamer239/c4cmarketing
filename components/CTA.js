import { PLATFORM_URL } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="relative overflow-hidden bg-foreground py-20 text-background md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -top-20 right-0 h-64 w-64 rounded-full bg-violet-500 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-amber-500 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Ready to build something for your organization?
          </h2>
          <p className="mt-4 text-lg text-background/80">
            Tell us what you need. Our student team will work with you from idea to launch — so you
            can focus on your mission.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`${PLATFORM_URL}/signup`}
              className="inline-flex items-center gap-2 rounded-lg bg-background px-8 py-3.5 font-medium text-foreground transition-opacity hover:opacity-90"
            >
              Request a Tool
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href={`${PLATFORM_URL}/contact`}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-background/40 px-8 py-3.5 font-medium transition-colors hover:bg-background/10"
            >
              Talk to us
            </a>
          </div>

          <p className="mt-8 text-sm text-background/60">
            Or email us at{" "}
            <a href="mailto:brhsc4c@gmail.com" className="underline hover:text-background">
              brhsc4c@gmail.com
            </a>
            {" "}— we typically respond within 1–2 business days.
          </p>
        </div>
      </div>
    </section>
  );
}
