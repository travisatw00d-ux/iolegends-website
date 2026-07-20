import Image from "next/image";
import Reveal from "./Reveal";
import { ZombieFigure } from "./Figures";

const T1_PARTS = [
  { src: "/sprites/zombiehead.png", label: "Zombie Head", w: 637, h: 686 },
  { src: "/sprites/zombielefthand.png", label: "Zombie Left Hand", w: 295, h: 360 },
  { src: "/sprites/zombierighthand.png", label: "Zombie Right Hand", w: 302, h: 370 },
];

const T2_PARTS = [
  { src: "/sprites/T2zombiehead.png", label: "Troll Head", w: 766, h: 708 },
  { src: "/sprites/T2zombielefthand.png", label: "Troll Left Hand", w: 294, h: 366 },
  { src: "/sprites/T2zombierighthand.png", label: "Troll Right Hand", w: 293, h: 366 },
];

const RARITIES = [
  { name: "Common", color: "#ffffff", attrs: "1 attribute", weight: "50%" },
  { name: "Uncommon", color: "#22c55e", attrs: "2 attributes", weight: "30%" },
  { name: "Rare", color: "#3b82f6", attrs: "3 attributes", weight: "10%" },
  { name: "Epic", color: "#a855f7", attrs: "4 attributes", weight: "5%" },
  { name: "Legendary", color: "#f97316", attrs: "5 attributes", weight: "3%" },
  { name: "Mythic", color: "#ef4444", attrs: "6 attributes", weight: "1%" },
  { name: "Ungodly", color: "#ffd700", attrs: "7 attributes", weight: "0.5%" },
];

const EQUIP_SLOTS = [
  { name: "Weapon", icon: "sword" },
  { name: "Armor", icon: "shield" },
  { name: "Helmet", icon: "helmet" },
  { name: "Ring", icon: "ring" },
  { name: "Necklace", icon: "necklace" },
];

export default function Horde() {
  return (
    <section id="horde" className="relative scroll-mt-20 overflow-hidden py-24 sm:py-32">
      <div
        className="absolute right-0 top-1/3 -z-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(closest-side,rgba(239,68,68,0.12),transparent)] blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col items-start gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-danger/30 bg-danger/10 px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-danger-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-danger-bright" />
            The Horde
          </span>
          <h2 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight text-text sm:text-5xl">
            Three enemies. They get nastier.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            Every enemy in Hold Your Ground is built from the same three sprite
            pieces — a head and two hands — rotated and animated in real time.
            Zombies merge on contact. Trolls are big and tanky. Goblins are
            fast and relentless. The longer the match runs, the tougher the
            horde gets.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 flex flex-col items-center gap-6 rounded-3xl border border-border/70 bg-surface/40 p-8 sm:p-10">
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
              <div className="flex items-end gap-2">
                <div className="origin-bottom scale-90 opacity-90">
                  <ZombieFigure tier={1} />
                </div>
                <div className="origin-bottom scale-90 opacity-90">
                  <ZombieFigure tier={1} />
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 text-text-muted">
                <span className="rounded-lg border border-danger/40 bg-danger/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-danger-bright">
                  collide · merge
                </span>
                <svg className="h-8 w-8 text-danger-bright sm:rotate-0 rotate-90" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-danger/15 blur-2xl" aria-hidden="true" />
                <div className="relative">
                  <ZombieFigure tier={2} />
                </div>
              </div>
            </div>
            <p className="max-w-xl text-center text-sm text-text-muted">
              Zombie levels add together, health combines, and at level 6+ the
              form becomes much tougher. Trolls unlock at server level 5, and
              goblins at level 10 — each with their own stats and behavior.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border/70 bg-bg-elevated/50 p-6 sm:p-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-text-dim">
                Zombie · Lv 1–5
              </h3>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {T1_PARTS.map((p) => (
                  <SpritePart key={p.src} src={p.src} label={p.label} w={p.w} h={p.h} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-danger/30 bg-bg-elevated/50 p-6 sm:p-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-danger-bright">
                Troll · Lv 5+ (Server Level)
              </h3>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {T2_PARTS.map((p) => (
                  <SpritePart key={p.src} src={p.src} label={p.label} w={p.w} h={p.h} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Loot Rarity Table */}
        <Reveal delay={160}>
          <div className="mt-10 rounded-3xl border border-border/70 bg-bg-elevated/50 p-6 sm:p-8">
            <h3 className="text-2xl font-bold tracking-tight text-text">
              7 Rarity Tiers
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-text-muted">
              Every piece of loot rolls a rarity — the rarer the drop, the more
              attributes it gets. Rare and above guarantee a stacked attribute
              (double or triple), boosting a single stat with multiple
              independent rolls. Higher Luck means better odds.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {RARITIES.map((r) => (
                <div
                  key={r.name}
                  className="flex items-center gap-3 rounded-xl border border-border/60 bg-bg/40 px-4 py-3"
                >
                  <span
                    className="h-3 w-3 shrink-0 rounded-full"
                    style={{ backgroundColor: r.color, boxShadow: `0 0 8px ${r.color}55` }}
                  />
                  <div className="min-w-0">
                    <div
                      className="text-sm font-bold leading-tight"
                      style={{ color: r.color }}
                    >
                      {r.name}
                    </div>
                    <div className="text-[10px] text-text-dim leading-tight">
                      {r.attrs} · {r.weight}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Equipment + Currency */}
        <Reveal delay={180}>
          <div className="mt-10 grid grid-cols-1 items-center gap-8 rounded-3xl border border-brand/30 bg-gradient-to-br from-surface to-bg-elevated p-8 sm:p-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="flex items-center justify-center">
              <div className="relative flex h-56 w-56 items-center justify-center rounded-2xl border border-border/70 bg-bg/60">
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(74,222,128,0.12),transparent_70%)]" />
                <Image
                  src="/sprites/woodensword.png"
                  alt="Wooden sword"
                  width={170}
                  height={170}
                  className="relative -rotate-12 drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]"
                  style={{ width: 170, height: 170 }}
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-text">
                Gear & Progression
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                Equip 5 slots — weapon, armor, helmet, ring, and necklace —
                each rolling attributes like Attack Damage, Armor, Speed, Max
                Health, Health Regen, Fortune, and Luck. Kill zombies to earn
                XP and level up, spending stat points across three build types.
                Gold coins drop alongside loot bags, filling your
                bronze/silver/gold wallet.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {EQUIP_SLOTS.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border/70 bg-bg-elevated/60 px-3 py-1.5 text-xs font-medium text-text-muted"
                  >
                    <span className="h-2 w-2 rounded-full bg-brand/60" />
                    {s.name}
                  </span>
                ))}
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-accent/40 bg-accent/10 px-3 py-1.5 text-xs font-medium text-accent-bright">
                  Master Chest (permanent)
                </span>
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { stat: "14", label: "Rollable attributes" },
                  { stat: "16+16", label: "Bag + Chest slots" },
                  { stat: "3", label: "Build types" },
                ].map((s) => (
                  <li
                    key={s.label}
                    className="rounded-xl border border-border/70 bg-bg-elevated/60 px-4 py-3"
                  >
                    <div className="font-mono text-xl font-bold text-brand">
                      {s.stat}
                    </div>
                    <div className="mt-0.5 text-xs text-text-dim">{s.label}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SpritePart({
  src,
  label,
  w,
  h,
}: {
  src: string;
  label: string;
  w: number;
  h: number;
}) {
  const maxH = 120;
  const scale = maxH / h;
  const dw = Math.round(w * scale);
  const dh = Math.round(h * scale);
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-bg/50 px-2 py-4">
      <div className="flex h-[120px] items-center justify-center">
        <Image src={src} alt={label} width={dw} height={dh} style={{ width: dw, height: dh }} />
      </div>
      <span className="font-mono text-[10px] uppercase tracking-wider text-text-dim">
        {label}
      </span>
    </div>
  );
}