"use client";

import { useEffect, useState } from "react";

type NP = {
  ok: boolean;
  playing?: boolean;
  track?: string;
  artist?: string;
  art?: string | null;
};

export function NowPlayingCard({
  fallbackTitle,
  fallbackSub,
  className = "",
}: {
  fallbackTitle: string;
  fallbackSub: string;
  className?: string;
}) {
  const [np, setNp] = useState<NP | null>(null);

  useEffect(() => {
    let alive = true;
    const load = async () => {
      try {
        const r = await fetch("/api/now-playing");
        const j = (await r.json()) as NP;
        if (alive) setNp(j);
      } catch {
        /* keep fallback */
      }
    };
    load();
    const id = setInterval(load, 25000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);

  const live = Boolean(np?.ok && np?.track);
  const label = live ? (np?.playing ? "now playing · live" : "last played") : "now playing";
  const title = live ? np!.track! : fallbackTitle;
  const sub = live ? np!.artist! : fallbackSub;
  const art = live ? np?.art : null;

  return (
    <div
      className={`flex flex-col rounded-xl border border-hairline bg-card p-4 ${className}`}
    >
      <p className="font-mono text-[10.5px] text-accent">{label}</p>
      <div
        className="my-3 flex-1 rounded-lg bg-cover bg-center"
        style={{
          backgroundImage: art
            ? `url(${art})`
            : "linear-gradient(150deg,#2a2740,#7a5a6e,#bc6a2e)",
          minHeight: 88,
        }}
        aria-hidden
      />
      <div>
        <p className="font-display text-[20px] leading-tight text-ink">{title}</p>
        <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-muted">{sub}</p>
      </div>
    </div>
  );
}
