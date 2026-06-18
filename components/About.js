import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/about-us.png"
              alt="Code4Community at Broad Run High School"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Built for the{" "}
              <span className="relative inline-block">
                community
                <span className="absolute bottom-1 left-0 h-1 w-full rounded-full bg-amber-400" aria-hidden />
              </span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Code4Community comes straight from the source. Practical tools you can trust.
            </p>

            <div className="mt-8 space-y-4 leading-relaxed text-foreground">
              <p>
                Shail Shah created Code4Community in 2023 when he wrote a simple program for
                calculating grades with new assignments. Positive student response prompted him to
                create content for the rest of the school year.
              </p>
              <p>
                Code4Community started as a club at Broad Run High School to build software that
                teachers and organizations could use. After building hundreds of applications and
                having great success, we expanded to helping create services to benefit our community
                at low cost.
              </p>
              <p>
                Our goal is to help organizations and the community through technology — building the
                tools and software they need to work better, with practical, low-cost solutions that
                make a real difference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
