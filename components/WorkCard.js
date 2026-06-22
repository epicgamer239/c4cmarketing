import Image from "next/image";

function projectHref(url) {
  if (!url) return null;
  return url.startsWith("http") ? url : `https://${url}`;
}

function BrowserChrome({ url, theme = "dark" }) {
  const barClass =
    theme === "light"
      ? "flex items-center gap-2 border-b border-border bg-slate-100 px-3 py-2"
      : "flex items-center gap-2 border-b border-zinc-800 px-3 py-2.5";

  const urlClass =
    theme === "light"
      ? "min-w-0 flex-1 truncate rounded-md border border-border bg-white px-2.5 py-1 text-[10px] text-muted-foreground"
      : "min-w-0 flex-1 truncate rounded-md bg-zinc-800/80 px-2.5 py-1 text-[10px] text-zinc-500";

  return (
    <div className={barClass}>
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      {url ? <span className={urlClass}>{url}</span> : null}
    </div>
  );
}

function ProjectPreview({ project, theme = "dark" }) {
  const placeholderClass =
    theme === "light"
      ? "flex h-full items-center justify-center bg-gradient-to-br from-violet-50 to-slate-100 transition-transform duration-300 group-hover:scale-105"
      : "flex h-full items-center justify-center bg-gradient-to-br from-violet-950/80 to-zinc-900 transition-transform duration-300 group-hover:scale-105";

  const placeholderLetterClass =
    theme === "light" ? "text-5xl font-bold text-violet-200" : "text-5xl font-bold text-violet-500/25";

  return (
    <div
      className={`relative aspect-[16/10] overflow-hidden ${theme === "light" ? "bg-muted" : "bg-zinc-800"}`}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-top transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className={placeholderClass}>
          <span className={placeholderLetterClass}>{project.title[0]}</span>
        </div>
      )}
    </div>
  );
}

function CardShell({ href, className, children }) {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return <article className={className}>{children}</article>;
}

export default function WorkCard({ project, className = "", variant = "dark", compact = false }) {
  const href = projectHref(project.url);
  const interactiveClass = href ? "cursor-pointer" : "";

  if (variant === "light") {
    return (
      <CardShell
        href={href}
        className={`group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-500/10 ${interactiveClass} ${className}`}
      >
        <BrowserChrome url={project.url} theme="light" />
        <ProjectPreview project={project} theme="light" />

        <div className={compact ? "px-4 py-3.5" : "flex flex-1 flex-col p-5"}>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-600">
            {project.category}
          </p>
          <h3 className={`font-semibold tracking-tight text-foreground ${compact ? "mt-1 text-sm" : "mt-2 text-lg"}`}>
            {project.title}
          </h3>
          {!compact && project.description ? (
            <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>
          ) : null}
          {!compact && href ? (
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-violet-600 transition-colors group-hover:text-violet-700">
              Visit site
              <span aria-hidden>→</span>
            </span>
          ) : null}
        </div>
      </CardShell>
    );
  }

  return (
    <CardShell
      href={href}
      className={`group overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-900 shadow-lg shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/15 ${interactiveClass} ${className}`}
    >
      <BrowserChrome url={project.url} theme="dark" />
      <ProjectPreview project={project} theme="dark" />

      <div className="px-4 py-3.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-violet-400">
          {project.category}
        </p>
        <h3 className="mt-1 text-sm font-semibold text-white">{project.title}</h3>
        {project.description ? (
          <p className="mt-2 text-sm text-zinc-400">{project.description}</p>
        ) : null}
      </div>
    </CardShell>
  );
}
