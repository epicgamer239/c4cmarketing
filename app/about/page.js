export const metadata = {
  title: "Code4Community | About",
  description:
    "Learn about Code4Community — a student-led engineering club building custom digital tools for nonprofits and community organizations.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
        Built for the{" "}
        <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
          community
        </span>
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Code4Community comes straight from the source. Practical tools you can trust.
      </p>

      <div className="mt-10 space-y-4 leading-relaxed text-foreground">
        <p>
          Shail Shah created Code4Community in 2023 when he wrote a simple program for calculating
          grades with new assignments. Positive student response prompted him to create content for
          the rest of the school year.
        </p>
        <p>
          Code4Community started as a club at Broad Run High School to build software that teachers
          and organizations could use. After building hundreds of applications and having great
          success, we expanded to helping create services to benefit our community at low cost.
        </p>
        <p>
          Our goal is to help organizations and the community through technology — building the tools
          and software they need to work better, with practical, low-cost solutions that make a real
          difference.
        </p>
      </div>
    </div>
  );
}
