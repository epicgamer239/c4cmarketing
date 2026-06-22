import Image from "next/image";
import { partners } from "@/lib/constants";

const REPEATS_PER_SET = 12;
const SECONDS_PER_LOGO = 8;

function PartnerLogo({ partner }) {
  return (
    <div className="flex h-14 w-40 shrink-0 items-center justify-center px-6 md:h-16 md:w-44">
      <Image
        src={partner.logo}
        alt={partner.alt}
        width={160}
        height={80}
        className="max-h-12 w-auto object-contain md:max-h-14"
      />
    </div>
  );
}

function PartnerRow({ setIndex, ariaHidden = false }) {
  const items = Array.from({ length: REPEATS_PER_SET }, () => partners).flat();

  return (
    <div className="flex items-center" aria-hidden={ariaHidden}>
      {items.map((partner, index) => (
        <PartnerLogo key={`${setIndex}-${partner.name}-${index}`} partner={partner} />
      ))}
    </div>
  );
}

export default function Partners() {
  const marqueeDuration = partners.length * REPEATS_PER_SET * SECONDS_PER_LOGO;

  return (
    <section className="border-y border-border bg-muted/20 py-6 md:py-8">
      <p className="mb-4 text-center text-xs font-medium uppercase tracking-wider text-muted-foreground">
        Trusted by community partners
      </p>

      <div className="partner-marquee relative overflow-hidden">
        <div
          className="partner-marquee-track flex w-max"
          style={{ "--marquee-duration": `${marqueeDuration}s` }}
        >
          <PartnerRow setIndex={0} />
          <PartnerRow setIndex={1} ariaHidden />
        </div>
      </div>
    </section>
  );
}
