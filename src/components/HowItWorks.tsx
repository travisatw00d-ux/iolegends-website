const STEPS = [
  { title: "Pick a game", body: "Most of the shelf runs in a browser tab; Knot Quite There is a small Windows download, nothing to install." },
  { title: "Send your friends the link", body: "No accounts, no launcher. If they can open a link, they can play." },
  { title: "Play together", body: "Games are built for groups of friends. In Knot Quite There, one of you hosts and the rest join with a friend code." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">How it works</p>
      <h2 className="mt-2 font-display text-4xl font-bold tracking-tight">Three steps to game night</h2>
      <ol className="mt-10 grid gap-5 md:grid-cols-3">
        {STEPS.map((s, i) => (
          <li key={s.title} className="flex min-w-0 flex-col gap-3 rounded-2xl border border-border bg-surface/60 p-6">
            <span className="font-display text-3xl font-extrabold text-brand/80" aria-hidden="true">{i + 1}</span>
            <h3 className="font-display text-xl font-bold">{s.title}</h3>
            <p className="leading-relaxed text-text-muted">{s.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
