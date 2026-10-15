import Logo from "./Logo";
import { GAMES } from "@/games";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-border/70 bg-bg-elevated/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:flex-row sm:justify-between sm:px-8">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            Small games for playing with your friends.
          </p>
          <p className="mt-4 text-sm text-text-muted">
            Questions or ideas: <span className="select-all font-medium text-text">info@iolegends.com</span>
          </p>
        </div>
        <nav className="flex flex-col gap-3" aria-label="Games">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-text-dim">Games</h2>
          {GAMES.map((g) => (
            <a key={g.slug} href={g.href} className="text-sm text-text-muted transition-colors hover:text-text">
              {g.title}
            </a>
          ))}
        </nav>
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-text-dim sm:px-8">
          &copy; {new Date().getFullYear()} IOLegends
        </p>
      </div>
    </footer>
  );
}
