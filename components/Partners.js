import Image from "next/image";
import { partners } from "@/lib/constants";

export default function Partners() {
  return (
    <section className="border-y border-border bg-muted/20 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
          Trusted by community partners
        </p>
        <div className="grid grid-cols-2 items-center justify-items-center gap-10 md:grid-cols-3 md:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex aspect-[2/1] w-full max-h-24 items-center justify-center md:max-h-28"
            >
              <Image
                src={partner.logo}
                alt={partner.alt}
                width={240}
                height={120}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
