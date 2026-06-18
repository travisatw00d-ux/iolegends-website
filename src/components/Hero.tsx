import { ZombieFigure, PlayerFigure, HealthBar } from "./Figures";

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="absolute inset-0 -z-10 bg-grid mask-fade-b" aria-hidden="true" />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[640px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(74,222,128,0.16),transparent)] blur-2xl"
        aria-hidden="true"
      />
      <div
        className="absolute right-[8%] top-1/3 -z-10 h-[380px] w-[380px] rounded-full bg-[radial-gradient(closest-side,rgba(239,68,68,0.14),transparent)] blur-3xl animate-glow"
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-10">
        <div className="flex flex-col items-start">
          <span
            className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
            </span>
            Upcoming Game from IOLegends
          </span>

          <h1
            className="mt-6 max-w-xl animate-fade-up text-5xl font-extrabold leading-[0.95] tracking-tight text-text sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Hold Your
            <br />
            <span className="text-gradient bg-gradient-to-r from-brand-bright via-brand to-brand-dark bg-[length:200%_auto] animate-gradient">
              Ground
            </span>
          </h1>

          <p
            className="mt-5 animate-fade-up font-mono text-base uppercase tracking-[0.2em] text-accent-bright"
            style={{ animationDelay: "140ms" }}
          >
            Last circle standing wins.
          </p>

          <p
            className="mt-5 max-w-md animate-fade-up text-lg leading-relaxed text-text-muted"
            style={{ animationDelay: "200ms" }}
          >
            A real-time multiplayer arena brawler. Up to 10 players drop in as
            armed circles, swing wooden swords for damage and knockback, and
            survive a horde of 100 zombies that merge into bigger, deadlier
            forms. Hold your ground — or get shoved out.
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "260ms" }}
          >
            <a
              href="/holdyourground"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-black transition-all hover:shadow-glow-lg hover:bg-brand-bright"
            >
              Play Now
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 px-6 py-3.5 text-base font-semibold text-text backdrop-blur transition-colors hover:border-brand/50 hover:bg-surface"
            >
              How it plays
            </a>
          </div>

          <dl
            className="mt-12 grid w-full max-w-md animate-fade-up grid-cols-3 gap-4 border-t border-border/70 pt-7"
            style={{ animationDelay: "320ms" }}
          >
            {[
              { v: "10", l: "Players / match" },
              { v: "100", l: "Zombies in arena" },
              { v: "1", l: "Circle left standing" },
            ].map((s) => (
              <div key={s.l}>
                <dt className="font-mono text-2xl font-bold text-text sm:text-3xl">{s.v}</dt>
                <dd className="mt-1 text-xs leading-tight text-text-dim">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-fade-in lg:pl-6" style={{ animationDelay: "220ms" }} aria-hidden="true">
          <ArenaScene />
        </div>
      </div>
    </section>
  );
}

function ArenaScene() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md">
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-brand/15 via-transparent to-danger/15 blur-2xl" />

      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-border/80 bg-bg-elevated/80 shadow-2xl backdrop-blur">
        <div className="flex items-center justify-between border-b border-border/70 px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-brand/80" />
          </div>
          <span className="font-mono text-xs uppercase tracking-widest text-text-dim">
            hold-your-ground.live
          </span>
          <span className="font-mono text-xs text-brand">● LIVE</span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(74,222,128,0.10),transparent_65%)]" />
          <div className="absolute inset-0 bg-grid-sm opacity-50" />

          <div className="absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/15" />
          <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/10" />

          <div className="absolute left-[20%] bottom-[24%] flex flex-col items-center">
            <span className="mb-1 font-mono text-xs font-semibold text-text">you</span>
            <HealthBar pct={0.87} tone="green" width={70} />
            <div className="mt-2">
              <PlayerFigure color="#4ECDC4" size={92} swordRotation={-35} />
            </div>
          </div>

          <div className="absolute right-[20%] bottom-[26%] flex flex-col items-center">
            <span className="mb-1 font-mono text-xs font-semibold text-danger-bright">zombie lvl 1</span>
            <HealthBar pct={0.6} tone="red" width={60} />
            <div className="mt-2">
              <ZombieFigure tier={1} />
            </div>
          </div>

          <div className="absolute right-[10%] top-[14%] flex flex-col items-center opacity-90">
            <span className="mb-1 font-mono text-[10px] font-semibold text-danger-bright">zombie lvl 7</span>
            <HealthBar pct={0.8} tone="red" width={48} />
            <div className="mt-1 origin-center scale-[0.62]">
              <ZombieFigure tier={2} />
            </div>
          </div>

          <div className="absolute left-[10%] top-[16%] flex flex-col items-center opacity-90">
            <span className="mb-1 font-mono text-[10px] font-semibold text-text">#2 kills</span>
            <HealthBar pct={0.5} tone="green" width={48} />
            <div className="mt-1">
              <PlayerFigure color="#F7DC6F" size={54} swordRotation={20} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-px border-t border-border/70 bg-border/40 text-center">
          {[
            { l: "HP", v: "87/100" },
            { l: "Kills", v: "3" },
            { l: "Horde", v: "100" },
          ].map((h) => (
            <div key={h.l} className="bg-bg-elevated px-3 py-3">
              <div className="font-mono text-base font-bold text-text">{h.v}</div>
              <div className="text-[10px] uppercase tracking-wider text-text-dim">{h.l}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute -right-3 -top-3 hidden rotate-6 rounded-xl border border-accent/50 bg-bg-elevated/90 px-3 py-2 shadow-glow backdrop-blur sm:block animate-float-slow">
        <div className="font-mono text-[10px] uppercase tracking-wider text-text-dim">Top killer</div>
        <div className="flex items-center gap-1.5 font-mono text-base font-bold text-accent-bright">
          <span className="h-2.5 w-2.5 rounded-full bg-[#4ECDC4] ring-2 ring-accent" />
          you
        </div>
      </div>
    </div>
  );
}
