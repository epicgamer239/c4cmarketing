export default function CTA() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="bg-[#05070a] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Your competitors already have{" "}
            <span className="text-violet-500">better websites.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Book a short call and we&apos;ll walk through exactly what we&apos;d build and manage
            for your business.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 text-base font-semibold text-black transition-opacity hover:opacity-90"
          >
            Start Build
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
