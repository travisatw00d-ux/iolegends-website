"use client";

import { useState, type FormEvent } from "react";

export default function NotifyForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "done">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim()) return;
    setStatus("done");
    setEmail("");
  }

  if (status === "done") {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-brand/40 bg-brand/10 px-5 py-4 text-sm font-medium text-brand">
        <svg
          className="h-5 w-5 shrink-0"
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="m5 10 3.5 3.5L15 7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        You&apos;re on the list — we&apos;ll email you when it drops.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
      noValidate
    >
      <label htmlFor="notify-email" className="sr-only">
        Email address
      </label>
      <input
        id="notify-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="w-full flex-1 rounded-xl border border-border bg-bg-elevated px-4 py-3.5 text-base text-text placeholder:text-text-dim outline-none transition-colors focus:border-brand/60 focus:ring-2 focus:ring-brand/20"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-bold text-black transition-all hover:shadow-glow hover:bg-brand-bright"
      >
        Notify Me
      </button>
    </form>
  );
}
