"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-6 md:grid md:grid-cols-3">
        <Link href="/" className="flex items-center gap-2.5 justify-self-start">
          <Image src="/c4c.png" alt="Code4Community" width={36} height={36} className="rounded-lg" />
          <span className="text-lg font-semibold tracking-tight">Code4Community</span>
        </Link>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {navLinks.map((link) =>
            link.href.startsWith("/") && !link.href.includes("#") ? (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <div className="ml-auto flex items-center gap-3 justify-self-end md:ml-0">
          <Link
            href="/contact"
            className="hidden rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 md:inline-flex"
          >
            Start Build
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <Link
              href="/contact"
              className="mt-2 block rounded-lg bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background"
            >
              Start Build
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
