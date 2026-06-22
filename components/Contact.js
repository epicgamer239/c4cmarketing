import ContactProblemSolution from "@/components/ContactProblemSolution";
import ContactCalendly from "@/components/ContactCalendly";

export default function Contact() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Reach out for inquiries, partnerships, or questions about our services.
        </p>

        <div className="mt-12 space-y-10">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">Email</h2>
            <a
              href="mailto:brhsc4c@gmail.com"
              className="mt-2 inline-block text-lg text-violet-600 hover:underline"
            >
              brhsc4c@gmail.com
            </a>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Response time
            </h2>
            <p className="mt-2 text-muted-foreground">
              We typically respond within 1 to 2 business days. For urgent matters, say so in the
              subject line.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              What we can help with
            </h2>
            <ul className="mt-2 list-inside list-disc space-y-1 text-muted-foreground">
              <li>Professional website development</li>
              <li>Partnership opportunities</li>
              <li>Technical consultations</li>
              <li>General inquiries and support</li>
            </ul>
          </div>

          <div className="pt-2">
            <a
              href="mailto:brhsc4c@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
            >
              Start Build
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>

      <ContactProblemSolution />
      <ContactCalendly />
    </>
  );
}
