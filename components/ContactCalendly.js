const CALENDLY_URL =
  "https://calendly.com/shail40926/30min?hide_gdpr_banner=1&background_color=ffffff&text_color=0f172a&primary_color=7c3aed";

export default function ContactCalendly() {
  return (
    <section className="border-t border-border bg-[#05070a] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Your competitors already have{" "}
          <span className="text-violet-500">better websites.</span>
        </h2>
        <p className="mt-5 text-lg text-white/80 md:text-xl">Let&apos;s fix that.</p>
      </div>

      <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/40">
        <iframe
          src={CALENDLY_URL}
          title="Book a call with Code4Community"
          className="h-[min(820px,80vh)] w-full border-0"
        />
      </div>
    </section>
  );
}
