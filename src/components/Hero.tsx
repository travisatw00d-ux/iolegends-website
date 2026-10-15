import { GAMES } from "@/games";

export default function Hero() {
  const featured = GAMES[0];
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-[1.05fr_1fr] md:pt-20">
      <div className="min-w-0">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
          New: {featured.title} {featured.status === "Windows download" ? "for Windows" : featured.status.toLowerCase()}
        </p>
        <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
          Games to play with <span className="text-brand">your friends.</span>
        </h1>
        <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-text-muted">
          Small games made for game night. No accounts: open a link and play, or grab a quick download.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href={featured.href}
            className="rounded-xl bg-brand px-6 py-3.5 font-semibold text-black shadow-[0_10px_40px_-12px] shadow-brand/60 transition-colors hover:bg-brand-bright"
          >
            {featured.cta ?? `Play ${featured.title}`}
          </a>
          <a
            href="#games"
            className="rounded-xl border border-border bg-surface/60 px-6 py-3.5 font-semibold text-text transition-colors hover:border-brand/50 hover:bg-surface"
          >
            Browse games
          </a>
        </div>
      </div>

      <a href={featured.href} className="lift group relative block min-w-0" aria-label={featured.cta ?? `Play ${featured.title}`}>
        <div className="absolute -inset-4 rounded-[2rem] bg-brand/10 blur-2xl" aria-hidden="true" />
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface shadow-2xl md:rotate-[1.5deg]">
          <img src={featured.cover} alt={`${featured.title}: ${featured.tagline}`} className="aspect-[16/9] w-full object-cover" />
          <div className="flex items-center justify-between gap-3 border-t border-border px-5 py-4">
            <div className="min-w-0">
              <p className="font-display text-xl font-bold">{featured.title}</p>
              <p className="truncate text-sm text-text-muted">{featured.tagline}</p>
            </div>
            <span className="shrink-0 rounded-lg bg-brand/15 px-3 py-1.5 text-sm font-semibold text-brand transition-colors group-hover:bg-brand group-hover:text-black">
              {featured.cta ? "Get it" : "Play"}
            </span>
          </div>
        </div>
      </a>
    </section>
  );
}
