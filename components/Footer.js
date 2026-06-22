import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-start md:justify-between md:py-16">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image src="/c4c.png" alt="Code4Community" width={32} height={32} className="rounded-lg" />
            <span className="font-semibold text-foreground">Code4Community</span>
          </Link>
          <p className="mt-3 text-sm text-muted-foreground">
            Websites that turn visitors into clients.
          </p>
          <p className="mt-8 text-sm text-muted-foreground/70">
            © {new Date().getFullYear()} Code4Community. All rights reserved.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground md:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
