const LINKS = [
  { label: "How it plays", href: "#how" },
  { label: "The Horde", href: "#horde" },
  { label: "Join the playtest", href: "#playtest" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/70 bg-bg-elevated/40">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-10 py-14 sm:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="group flex items-center gap-2.5" aria-label="IOLegends home">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-brand/40 bg-bg-elevated font-mono text-sm font-bold text-brand">
                IO
              </span>
              <span className="text-lg font-bold tracking-tight text-text">
                IOLegends
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-text-muted">
              Hold Your Ground — a multiplayer arena brawler where the last
              circle standing wins. Currently in development.
            </p>
            <a
              href="mailto:info@iolegends.com"
              className="mt-5 inline-flex items-center gap-2.5 rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm font-medium text-text transition-colors hover:border-brand/50 hover:bg-surface"
            >
              <svg className="h-4 w-4 text-brand" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="m4 7 6 4 6-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              info@iolegends.com
            </a>
          </div>

          <nav className="flex flex-col gap-3">
            <h2 className="font-mono text-xs uppercase tracking-wider text-text-dim">
              Explore
            </h2>
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border/70 py-7 sm:flex-row">
          <p className="text-xs text-text-dim">
            &copy; {new Date().getFullYear()} IOLegends. All rights reserved.
          </p>
          <p className="font-mono text-xs text-text-dim">
            Hold Your Ground · in development
          </p>
        </div>
      </div>
    </footer>
  );
}
