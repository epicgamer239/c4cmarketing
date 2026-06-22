import WorkCard from "@/components/WorkCard";

function ProjectSet({ items, setIndex, ariaHidden = false, variant = "dark", compact = false }) {
  return (
    <div className="flex flex-col" aria-hidden={ariaHidden || undefined}>
      {items.map((project, index) => (
        <WorkCard
          key={`${setIndex}-${project.title}-${index}`}
          project={project}
          variant={variant}
          compact={compact}
          className="mb-5"
        />
      ))}
    </div>
  );
}

export default function WorkCarouselColumn({
  items,
  direction = "up",
  duration = 45,
  variant = "dark",
}) {
  const trackClass = direction === "up" ? "work-scroll-up" : "work-scroll-down";

  return (
    <div className="work-marquee-column relative h-full min-h-0 overflow-hidden">
      <div
        className={`work-marquee-column-track ${trackClass}`}
        style={{ "--work-scroll-duration": `${duration}s` }}
      >
        <ProjectSet items={items} setIndex={0} variant={variant} compact={variant === "light"} />
        <ProjectSet items={items} setIndex={1} variant={variant} compact={variant === "light"} ariaHidden />
      </div>
    </div>
  );
}
