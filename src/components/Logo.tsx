export default function Logo() {
  return (
    <a href="/" className="group flex items-center gap-2.5" aria-label="IOLegends home">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-brand/40 bg-bg-elevated font-display text-sm font-extrabold text-brand shadow-[0_0_24px_-6px] shadow-brand/40 transition-colors group-hover:border-brand">
        IO
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-text">IOLegends</span>
    </a>
  );
}
