import { GAMES } from "@/games";

export default function Games() {
  return (
    <section id="games" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">The shelf</p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">Games</h2>
        </div>
        <p className="max-w-[42ch] text-text-muted">Most of these run in your browser; some are a quick download. New games land as they get fun enough to share.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {GAMES.map((g) => (
          <article key={g.slug} className="lift flex min-w-0 flex-col overflow-hidden rounded-3xl border border-border bg-surface hover:border-brand/40">
            <a href={g.href} aria-label={g.cta ?? `Play ${g.title}`}>
              <img src={g.cover} alt="" className="aspect-[16/9] w-full object-cover" />
            </a>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-display text-2xl font-bold">{g.title}</h3>
                <span className="rounded-full border border-mint/30 bg-mint/10 px-2.5 py-1 text-xs font-semibold text-mint">{g.status}</span>
              </div>
              <p className="leading-relaxed text-text-muted">{g.description}</p>
              <ul className="flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <li key={t} className="rounded-md bg-bg-elevated px-2.5 py-1 text-xs font-medium text-text-muted">{t}</li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                <p className="text-sm text-text-dim">{g.players}</p>
                <a href={g.href} className="rounded-xl bg-brand px-5 py-2.5 text-sm font-semibold text-black transition-colors hover:bg-brand-bright">
                  {g.cta ?? `Play ${g.title}`}
                </a>
              </div>
            </div>
          </article>
        ))}

        <article className="flex min-w-0 flex-col justify-center gap-3 rounded-3xl border border-dashed border-border bg-bg-elevated/50 p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-text-dim">In the workshop</p>
          <h3 className="font-display text-2xl font-bold text-text-muted">The next game</h3>
          <p className="max-w-[40ch] leading-relaxed text-text-dim">
            Something new is always being built. When it's ready to play with friends, it shows up here.
          </p>
        </article>
      </div>
    </section>
  );
}
