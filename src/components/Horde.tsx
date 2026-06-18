import Image from "next/image";
import Reveal from "./Reveal";
import { ZombieFigure } from "./Figures";

const T1_PARTS = [
  { src: "/sprites/zombiehead.png", label: "Head", w: 637, h: 686 },
  { src: "/sprites/zombielefthand.png", label: "Left hand", w: 295, h: 360 },
  { src: "/sprites/zombierighthand.png", label: "Right hand", w: 302, h: 370 },
];

const T2_PARTS = [
  { src: "/sprites/T2zombiehead.png", label: "T2 Head", w: 766, h: 708 },
  { src: "/sprites/T2zombielefthand.png", label: "T2 Left hand", w: 294, h: 366 },
  { src: "/sprites/T2zombierighthand.png", label: "T2 Right hand", w: 293, h: 366 },
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
            100 zombies. They get bigger.
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-text-muted">
            Every zombie in Hold Your Ground is drawn from the same three sprite
            pieces — a head and two hands — rotated and scaled in real time.
            When two zombies meet, they merge into a single higher-level zombie;
            at level 6 and up they mutate into the heavier T2 form.
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
              Levels add together, health combines, and at level 6+ the zombie
              swaps to its bigger T2 art. The longer the match runs, the nastier
              the horde gets.
            </p>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border/70 bg-bg-elevated/50 p-6 sm:p-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-text-dim">
                Zombie · T1 (Lv 1–5)
              </h3>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {T1_PARTS.map((p) => (
                  <SpritePart key={p.src} src={p.src} label={p.label} w={p.w} h={p.h} />
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-danger/30 bg-bg-elevated/50 p-6 sm:p-7">
              <h3 className="font-mono text-xs uppercase tracking-wider text-danger-bright">
                Zombie · T2 (Lv 6+)
              </h3>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {T2_PARTS.map((p) => (
                  <SpritePart key={p.src} src={p.src} label={p.label} w={p.w} h={p.h} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

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
                The Wooden Sword
              </h3>
              <p className="mt-3 text-base leading-relaxed text-text-muted">
                Your one and only weapon. A simple wooden blade you swing with
                the mouse — its hitbox runs from hilt to tip, so positioning
                matters as much as timing.
              </p>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {[
                  { stat: "+5", label: "Attack damage" },
                  { stat: "−200ms", label: "Attack speed (faster)" },
                  { stat: "800ms", label: "Base swing cooldown" },
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
