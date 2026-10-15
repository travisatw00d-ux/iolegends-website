import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import release from "@/knot-release.json";

// Knot Quite There: a free Windows download (the current zip, version and size come from
// knot-release.json, written by scripts/sync-knot.mjs from the game's package).

const title = "Knot Quite There — a physics game to play with your friends";
const description =
  "Pole-vault boxes, throw a grappling hook over walls and haul your friends up after you. Free for Windows; up to 10 friends with a code, no server, no lag.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website", siteName: "IOLegends", images: ["/covers/knotquitethere.png"] },
  twitter: { card: "summary_large_image", title, description, images: ["/covers/knotquitethere.png"] },
};

const FEATURES = [
  { title: "A pole to vault with", body: "Run, lower it, plant it and ride it up and over. Leap off the top for a little more." },
  { title: "A rope and a grappling hook", body: "Swing the hook and throw it over walls, onto limbs, round corners. Then climb it, swing on it, or pull it in." },
  { title: "Haul your friends up", body: "Dig in at the top and pull a friend up the wall after you. Or anchor the rope while they climb." },
  { title: "Climb the trees", body: "Loop the rope round a trunk and climb, all the way up to the first limb." },
  { title: "Up to 10 friends, no server", body: "One of you hosts and sends the others a code. They connect straight to you, and can join any time, even mid-game." },
  { title: "No lag, no snapping back", body: "Everyone's game runs the same simulation from everyone's controls, so what you see is exactly what your friends see." },
  { title: "Drop out, drop back in", body: "Lose your connection and your character waits right where you left it, still hanging on. Reconnect and carry on." },
  { title: "Always up to date", body: "The game checks for a new version when it starts and tells you, with a link straight back here." },
];

const SHOTS = [
  { src: "/knotquitethere/shot-haul.png", alt: "Climbing a rope up the 12 yard box while a buddy holds the other end" },
  { src: "/knotquitethere/shot-menu.png", alt: "The main menu over the playground" },
  { src: "/knotquitethere/shot-tree.png", alt: "Climbing a tree with the rope" },
];

const CONTROLS: [string, string][] = [
  ["WASD · Shift · Space", "move, run, jump"],
  ["E / Q", "pick up / drop the pole or the rope"],
  ["Scroll · hold F", "grappling hook · swing it, let go to throw"],
  ["Left / right click", "pull the rope in / let it out (on it: climb up / down)"],
  ["Hold back + pull", "dig in and haul a friend up"],
  ["H · C · Tab", "a buddy holds your rope · get on the rope · players"],
];

export default function KnotQuiteThere() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        {/* Download */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 md:grid-cols-[1fr_1.1fr] md:pt-20">
          <div className="min-w-0">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" aria-hidden="true" />
              Version {release.version} · {release.date}
            </p>
            <h1 className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight sm:text-6xl">
              Knot Quite <span className="text-brand">There.</span>
            </h1>
            <p className="mt-6 max-w-[46ch] text-lg leading-relaxed text-text-muted">
              A physics playground about getting over things, together. Vault boxes with a pole, throw a grappling hook over walls, and haul your friends up after you.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={release.href}
                download
                className="rounded-xl bg-brand px-7 py-4 text-lg font-semibold text-black shadow-[0_10px_40px_-12px] shadow-brand/60 transition-colors hover:bg-brand-bright"
              >
                Download for Windows
              </a>
              <p className="text-sm leading-relaxed text-text-dim">
                Free · {release.sizeMB} MB zip
                <br />
                Windows 10 or 11 · version {release.version}
              </p>
            </div>
          </div>
          <div className="relative min-w-0">
            <div className="absolute -inset-4 rounded-[2rem] bg-brand/10 blur-2xl" aria-hidden="true" />
            <img
              src="/covers/knotquitethere.png"
              alt="Knot Quite There: climbing a rope up a box while a friend holds it"
              className="relative aspect-[16/9] w-full rounded-3xl border border-border object-cover shadow-2xl md:rotate-[1.5deg]"
            />
          </div>
        </section>

        {/* Install */}
        <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Getting started</p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">Three steps, no installer</h2>
          <ol className="mt-8 grid gap-5 md:grid-cols-3">
            <li className="flex min-w-0 flex-col gap-3 rounded-2xl border border-border bg-surface/60 p-6">
              <span className="font-display text-3xl font-extrabold text-brand/80" aria-hidden="true">1</span>
              <h3 className="font-display text-xl font-bold">Unzip it</h3>
              <p className="leading-relaxed text-text-muted">Right-click the zip, choose Extract All, and open the KnotQuiteThere folder.</p>
            </li>
            <li className="flex min-w-0 flex-col gap-3 rounded-2xl border border-border bg-surface/60 p-6">
              <span className="font-display text-3xl font-extrabold text-brand/80" aria-hidden="true">2</span>
              <h3 className="font-display text-xl font-bold">Run KnotQuiteThere.exe</h3>
              <p className="leading-relaxed text-text-muted">
                Windows may say <em>&ldquo;Windows protected your PC&rdquo;</em> because the game isn&rsquo;t signed by a big publisher. Click <strong className="text-text">More info</strong>, then <strong className="text-text">Run anyway</strong>. If the firewall asks, allow it: that&rsquo;s how your friends connect.
              </p>
            </li>
            <li className="flex min-w-0 flex-col gap-3 rounded-2xl border border-border bg-surface/60 p-6">
              <span className="font-display text-3xl font-extrabold text-brand/80" aria-hidden="true">3</span>
              <h3 className="font-display text-xl font-bold">Play with friends</h3>
              <p className="leading-relaxed text-text-muted">
                Click <strong className="text-text">Play with friends</strong>. One of you hosts and copies the friend code; everyone else pastes it into <strong className="text-text">Join a game</strong>. Everyone needs the same version (it&rsquo;s shown in the corner of the menu).
              </p>
            </li>
          </ol>
        </section>

        {/* Screenshots */}
        <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {SHOTS.map((s) => (
              <img key={s.src} src={s.src} alt={s.alt} className="aspect-[16/9] w-full rounded-2xl border border-border object-cover" />
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">What&rsquo;s in it</p>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">Get over everything</h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex min-w-0 flex-col gap-2 rounded-2xl border border-border bg-surface/60 p-6">
                <h3 className="font-display text-lg font-bold">{f.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">{f.body}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Controls */}
        <section className="mx-auto w-full max-w-6xl px-5 py-12 sm:px-8">
          <div className="grid gap-8 rounded-3xl border border-border bg-surface/60 p-8 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">Controls</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight">The short version</h2>
              <p className="mt-4 leading-relaxed text-text-muted">The full list is in the game under How to play, and in the How to play.txt that comes in the zip.</p>
            </div>
            <dl className="grid gap-3">
              {CONTROLS.map(([k, v]) => (
                <div key={k} className="grid grid-cols-[minmax(0,11rem)_1fr] gap-4 border-b border-border/60 pb-3 last:border-0">
                  <dt className="font-semibold text-brand">{k}</dt>
                  <dd className="text-text-muted">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Download again */}
        <section className="mx-auto w-full max-w-6xl px-5 pb-16 pt-6 text-center sm:px-8">
          <a
            href={release.href}
            download
            className="inline-block rounded-xl bg-brand px-7 py-4 text-lg font-semibold text-black transition-colors hover:bg-brand-bright"
          >
            Download Knot Quite There {release.version}
          </a>
          <p className="mt-4 text-sm text-text-dim">
            The older browser version is still at <a href="/scramble/" className="underline hover:text-text">/scramble</a>, for solo play.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
