"use client";

import { useEffect, useState } from "react";
import { heroPhrases, buildItems, PLATFORM_URL } from "@/lib/constants";
import { buildIconMap } from "@/components/icons";

const TYPE_MS = 70;
const DELETE_MS = 45;
const HOLD_MS = 2200;

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
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm font-medium text-muted-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Student-led · Low cost · Community-first
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Custom digital tools built by students to{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
              {visibleText}
            </span>
            <span className="ml-1 inline-block h-9 w-0.5 animate-pulse bg-foreground align-middle md:h-11" aria-hidden />
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Code4Community is a student-led engineering club that builds{" "}
            <strong className="font-semibold text-foreground">custom tools and software</strong> for
            local nonprofits and small businesses{" "}
            <strong className="font-semibold text-foreground">at low cost</strong>.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`${PLATFORM_URL}/signup`}
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 font-medium text-background transition-opacity hover:opacity-90"
            >
              Request a Tool
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-foreground px-6 py-3 font-medium transition-colors hover:bg-foreground hover:text-background"
            >
              Explore services
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="relative rounded-2xl border border-border bg-muted/30 p-6 shadow-sm lg:p-8">
            <div
              className="absolute inset-0 rounded-2xl opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />
            <div className="relative">
              <h2 className="text-lg font-semibold">We help you make</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Your idea, we build it — from concept to launch.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {buildItems.map((item) => {
                  const Icon = buildIconMap[item.icon];
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 shadow-sm"
                    >
                      <span className="shrink-0 text-violet-500">
                        <Icon />
                      </span>
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
