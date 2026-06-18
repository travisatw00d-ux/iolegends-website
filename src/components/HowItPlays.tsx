import Reveal from "./Reveal";
import { PlayerFigure, ZombieFigure } from "./Figures";

const MECHANICS = [
  {
    title: "Last circle standing",
    description:
      "Up to 10 players spawn into a 3200×2400 arena as colored circles. Run into someone and physics shoves them — knock a rival's HP to zero and they're eliminated. Be the last circle left to win.",
    icon: (
      <path
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0v18M3 12h18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: "Wooden sword combat",
    description:
      "Your only weapon is a wooden sword. Swing to deal damage and knockback along the blade, shoving enemies into the horde or off the fight. Base swing deals 5 damage on an 800ms cooldown — the sword swings faster.",
    icon: (
      <path
        d="M14.5 3.5 20 9 9 20l-5.5-5.5L14.5 3.5ZM3 21l3-1 1-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "The merging horde",
    description:
      "100 zombies roam the arena and chase the nearest target. When two collide they merge into a higher-level zombie — combining their level and health into something tougher. Strays even call others over to merge.",
    icon: (
      <path
        d="M7 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-5 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm-6 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM9 9l1.5 3M15 9l-1.5 3M12 14v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Top killer wears gold",
    description:
      "Every sword kill and zombie kill counts toward your score. The player with the most kills gets a gold ring around their circle for everyone to see — and the live leaderboard tracks HP, kills, and rank in real time.",
    icon: (
      <path
        d="M8 21h8M12 17v4M5 4h14v5a7 7 0 0 1-14 0V4ZM9 13l1.5 1.5L13 11"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function HowItPlays() {
  return (
    <section id="how" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div
        className="absolute left-0 top-1/4 -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(closest-side,rgba(74,222,128,0.10),transparent)] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
            How it plays
          </span>
          <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
            Survive the circle. Survive the horde.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            Hold Your Ground mixes top-down sumo brawling with a PvE zombie
            threat. You fight players and AI in the same arena — every swing,
            shove, and merge changes the match.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {MECHANICS.map((m, i) => (
            <Reveal key={m.title} delay={i * 80} className="h-full">
              <div className="group flex h-full gap-4 rounded-2xl border border-border/70 bg-surface/50 p-6 transition-colors hover:border-brand/40 hover:bg-surface">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-black">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    {m.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-text">{m.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-text-muted">
                    {m.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-12 grid grid-cols-1 items-stretch gap-6 lg:grid-cols-3">
            <div className="relative flex flex-col items-center justify-center gap-3 rounded-3xl border border-border/70 bg-bg-elevated/60 p-8">
              <span className="font-mono text-xs uppercase tracking-wider text-text-dim">
                You
              </span>
              <PlayerFigure color="#4ECDC4" size={110} swordRotation={-30} />
              <p className="text-center text-sm text-text-muted">
                Armed circle. 100 HP, wooden sword, mouse-aimed swings.
              </p>
            </div>

            <div className="relative flex flex-col items-center justify-center gap-3 rounded-3xl border border-danger/30 bg-bg-elevated/60 p-8">
              <div className="absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-danger/50 to-transparent" />
              <span className="font-mono text-xs uppercase tracking-wider text-danger-bright">
                Zombie · Lv 1–5
              </span>
              <ZombieFigure tier={1} />
              <p className="text-center text-sm text-text-muted">
                Chases the nearest target. Merges on contact into higher levels.
              </p>
            </div>

            <div className="relative flex flex-col items-center justify-center gap-3 rounded-3xl border border-danger/50 bg-bg-elevated/60 p-8">
              <div className="absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-danger/70 to-transparent" />
              <span className="font-mono text-xs uppercase tracking-wider text-danger-bright">
                T2 Zombie · Lv 6+
              </span>
              <ZombieFigure tier={2} />
              <p className="text-center text-sm text-text-muted">
                Bigger, heavier, more HP. The merged horde&apos;s final form.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
