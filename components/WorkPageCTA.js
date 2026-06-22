export default function WorkPageCTA() {
  return (
    <section className="border-t border-border">
      <div className="bg-[#05070a] px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Want results like these for{" "}
            <span className="bg-gradient-to-r from-violet-400 to-indigo-500 bg-clip-text text-transparent">
              your business?
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
            Book a 15 minute call. We&apos;ll show you exactly what we&apos;d build for you.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-black transition-opacity hover:opacity-90"
          >
            Book a Call
          </a>
        </div>
      </div>
    </section>
  );
}
