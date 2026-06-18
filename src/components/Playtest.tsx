import Reveal from "./Reveal";
import NotifyForm from "./NotifyForm";

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
              In Development
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
              Join the Hold Your Ground playtest
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-text-muted">
              Be first in the arena when matches open. Drop your email to get
              playtest invites and launch updates — no spam, just beta keys and
              dates.
            </p>

            <div className="mx-auto mt-8 max-w-md">
              <NotifyForm />
              <p className="mt-4 text-xs text-text-dim">
                Prefer email? Reach us anytime at{" "}
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
