import Reveal from "./Reveal";
import { PlayerFigure, ZombieFigure } from "./Figures";

const MECHANICS = [
  {
    title: "Day & Night Loop",
    description:
      "Prepare during the day — equip loot, swap builds, store gear in the Master Chest. When night falls, over 100 enemies flood the arena. Survive the wave, and a 10-second results screen shows your kills before the next day begins.",
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
    title: "Knight Combat",
    description:
      "Fight as a knight with a sword and free hands. Toggle between Jab (fast poke, triple-combo) and Swing (wide arc, 4-hit chain with a 360° spin finisher). Drop your weapon and punch bare-fisted. Every swing deals damage and knockback along the blade.",
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
    title: "The Merging Horde",
    description:
      "Zombies chase the nearest player and merge on contact, combining their level and health into bigger threats (max Lv5). Trolls hit harder with more HP. Goblins are fast and aggressive. The longer you survive, the nastier the horde gets.",
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
    title: "Loot, Rarities & Gear",
    description:
      "Zombie kills drop loot bags and gold coins. Gear rolls across 7 rarity tiers — from Common to Ungodly — each with stacked attributes like Attack Damage, Armor, Speed, Luck, and Health Regen. Equip weapons, armor, rings, necklaces, and helmets. Your Master Chest at the map center keeps items permanently across matches.",
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
            Prepare. Fight. Loot. Survive.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            Hold Your Ground is a cooperative zombie survival IO game. You and
            up to 9 other knights prepare during the day, then face waves of
            enemies at night. Every kill drops loot, every wave earns
            progression, and the horde never stops growing.
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
                Knight · You
              </span>
              <PlayerFigure color="#4ECDC4" size={110} swordRotation={-30} />
              <p className="text-center text-sm text-text-muted">
                Armed knight. 100 HP, jab or swing combat, punch bare-handed without a weapon.
              </p>
            </div>

            <div className="relative flex flex-col items-center justify-center gap-3 rounded-3xl border border-danger/30 bg-bg-elevated/60 p-8">
              <div className="absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-danger/50 to-transparent" />
              <span className="font-mono text-xs uppercase tracking-wider text-danger-bright">
                Zombie · Lv 1–5
              </span>
              <ZombieFigure tier={1} />
              <p className="text-center text-sm text-text-muted">
                Chases nearest player. Merges on contact into higher levels (max Lv5).
              </p>
            </div>

            <div className="relative flex flex-col items-center justify-center gap-3 rounded-3xl border border-danger/50 bg-bg-elevated/60 p-8">
              <div className="absolute inset-x-0 top-0 mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-danger/70 to-transparent" />
              <span className="font-mono text-xs uppercase tracking-wider text-danger-bright">
                Troll · Lv 5+
              </span>
              <ZombieFigure tier={2} />
              <p className="text-center text-sm text-text-muted">
                Bigger, tougher, more HP. Unlocks at server level 5 alongside fast goblins.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}