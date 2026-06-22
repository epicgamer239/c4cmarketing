"use client";

import { useState } from "react";
import { faqItems } from "@/lib/faq";

function Chevron({ open }) {
  return (
    <svg
      className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="border-t border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-600">
            Common questions
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to know
          </h2>
        </div>

        <div className="mt-12 space-y-3">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden rounded-xl border border-border bg-muted/30"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-foreground">{item.question}</span>
                  <Chevron open={isOpen} />
                </button>
                {isOpen ? (
                  <div className="border-t border-border px-5 pb-5 pt-1">
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Still have questions? Email us at{" "}
          <a
            href="mailto:brhsc4c@gmail.com"
            className="font-medium text-violet-600 transition-colors hover:text-violet-700"
          >
            brhsc4c@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
}
