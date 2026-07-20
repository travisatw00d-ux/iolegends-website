import Reveal from "./Reveal";

export default function Playtest() {
  return (
    <section id="playtest" className="relative scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border/80 bg-gradient-to-br from-surface to-bg-elevated p-8 text-center sm:p-12">
            <div
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute left-1/2 top-0 -z-10 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(74,222,128,0.14),transparent)] blur-2xl"
              aria-hidden="true"
            />

            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1.5 font-mono text-xs font-medium uppercase tracking-[0.18em] text-brand">
              Now Live
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
              Jump into the arena
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
              Hold Your Ground is live and playable right now in your browser.
              No download, no install — just drop in, pick up a sword, and
              start swinging. Play as a guest or create an account to save
              your gear and currency across matches.
            </p>

            <div className="mx-auto mt-8 max-w-md">
              <a
                href="/holdyourground"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-black transition-all hover:shadow-glow-lg hover:bg-brand-bright"
              >
                Play Now
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <p className="mt-4 text-xs text-text-dim">
                Questions or feedback? Reach us at{" "}
                <a
                  href="mailto:info@iolegends.com"
                  className="font-medium text-brand underline-offset-2 hover:underline"
                >
                  info@iolegends.com
                </a>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}