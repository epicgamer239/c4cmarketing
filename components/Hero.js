"use client";

import { useEffect, useState } from "react";
import { heroPhrases } from "@/lib/constants";
import HeroBrowserMockup from "@/components/HeroBrowserMockup";

const TYPE_MS = 70;
const DELETE_MS = 45;
const HOLD_MS = 2200;
const LONGEST_PHRASE = heroPhrases.reduce((longest, phrase) =>
  phrase.length > longest.length ? phrase : longest
);

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayLength, setDisplayLength] = useState(() => heroPhrases[0].length);
  const [phase, setPhase] = useState("holding");

  useEffect(() => {
    let intervalId = null;
    let holdTimeoutId = null;

    if (phase === "holding") {
      holdTimeoutId = setTimeout(() => setPhase("deleting"), HOLD_MS);
      return () => clearTimeout(holdTimeoutId);
    }

    if (phase === "deleting") {
      intervalId = setInterval(() => {
        setDisplayLength((len) => {
          if (len <= 1) {
            setPhase("typing");
            setPhraseIndex((i) => (i + 1) % heroPhrases.length);
            return 0;
          }
          return len - 1;
        });
      }, DELETE_MS);
      return () => clearInterval(intervalId);
    }

    if (phase === "typing") {
      intervalId = setInterval(() => {
        setDisplayLength((len) => {
          const full = heroPhrases[phraseIndex].length;
          if (len >= full) {
            setPhase("holding");
            return full;
          }
          return len + 1;
        });
      }, TYPE_MS);
      return () => clearInterval(intervalId);
    }
  }, [phase, phraseIndex]);

  const visibleText = heroPhrases[phraseIndex].slice(0, displayLength);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:py-28">
        <div className="flex-1">
          <p className="mb-4 inline-flex items-center rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground">
            Student-led · Low cost · Community-first
          </p>

          <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">
            Professional websites built by students to{" "}
            <span className="inline-grid align-bottom">
              <span className="invisible col-start-1 row-start-1" aria-hidden="true">
                {LONGEST_PHRASE}
              </span>
              <span className="col-start-1 row-start-1 bg-gradient-to-r from-violet-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
                {visibleText}
                <span
                  className="ml-1 inline-block h-7 w-0.5 animate-pulse bg-foreground align-middle md:h-8"
                  aria-hidden
                />
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            <strong className="font-semibold text-foreground">Professional websites</strong> built,
            managed, and optimized for your business at{" "}
            <strong className="font-semibold text-foreground">low cost</strong>.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
            >
              Start Build
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-foreground px-6 py-3 font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              How it works
            </a>
          </div>

          <ul className="mt-6 space-y-2.5">
            {[
              "Built to convert visitors into customers",
              "SEO and AI search visibility included",
              "Fully managed. No tech headaches.",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                  <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <HeroBrowserMockup />
        </div>
      </div>
    </section>
  );
}
