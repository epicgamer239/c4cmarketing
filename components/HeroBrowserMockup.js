function BrowserChrome({ children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-[#1e1e2e] shadow-2xl shadow-violet-500/20">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 rounded-md bg-white/10 px-3 py-1 text-center text-xs text-white/50">
          code4community.net
        </div>
      </div>
      <div className="relative aspect-[16/10] bg-black">{children}</div>
    </div>
  );
}

export default function HeroBrowserMockup() {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -inset-4 rounded-2xl bg-violet-500/15 blur-2xl" aria-hidden />
      <BrowserChrome>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <span className="absolute top-3 left-3 rounded-full bg-violet-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          Preview
        </span>
      </BrowserChrome>
    </div>
  );
}
