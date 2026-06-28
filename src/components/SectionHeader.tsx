import type { ReactNode } from "react";

/** Shared section header — the index number appears ONCE here, big, beside the word. */
export function SectionHeader({
  n,
  word,
  intro,
}: {
  n: string;
  word: string;
  intro?: ReactNode;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-[15px] text-accent">{n}</span>
        <h2 className="pb-1 font-display text-[clamp(2.4rem,7vw,3.6rem)] leading-none text-ink">
          {word}
        </h2>
      </div>
      {intro && (
        <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-body">{intro}</p>
      )}
    </div>
  );
}
