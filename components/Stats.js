"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/constants";

const DURATION_MS = 1800;

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function useCountUp(end, active) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frameId = null;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      setCount(Math.round(easeOutCubic(progress) * end));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [end, active]);

  return count;
}

function StatCard({ stat, active }) {
  const count = useCountUp(stat.end ?? 0, active && stat.end != null);

  const display = stat.text ?? `${count}${stat.suffix ?? ""}`;

  return (
    <div
      className={`rounded-xl border border-border bg-muted/30 p-6 text-center transition-opacity duration-700 ${
        active ? "opacity-100" : "opacity-0"
      }`}
    >
      <p className="text-2xl font-bold md:text-3xl">{display}</p>
      <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-t border-border py-14 md:py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
