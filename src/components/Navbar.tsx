import Logo from "./Logo";

const LINKS = [
  { label: "Games", href: "/#games" },
  { label: "How it works", href: "/#how" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-bg/75 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo />
        <div className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden rounded-lg px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:text-text sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/nutfall/"
            className="rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-brand-bright"
          >
            Play Nutfall
          </a>
        </div>
      </nav>
    </header>
  );
}
