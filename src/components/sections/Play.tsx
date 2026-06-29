import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { NowPlayingCard } from "@/components/NowPlayingCard";
import type { PlayCard, TileSize } from "@/lib/content";

const sizeClass: Record<TileSize, string> = {
  small: "col-span-1",
  wide: "col-span-2",
  tall: "col-span-1 row-span-2",
};

export function Play({ cards }: { cards: PlayCard[] }) {
  return (
    <section
      id="play"
      className="mx-auto max-w-6xl scroll-mt-20 border-t border-hairline px-6 py-24"
    >
      <Reveal>
        <SectionHeader
          n="04"
          word="play"
          intro="the stuff i get deeply curious about when i'm absolutely supposed to be working."
        />
      </Reveal>

      <Reveal className="grid auto-rows-[150px] grid-flow-dense grid-cols-2 gap-3 md:grid-cols-4">
        {cards.map((c) =>
          c.isNowPlaying ? (
            <NowPlayingCard
              key={c.slug}
              fallbackTitle={c.title}
              fallbackSub={c.sub}
              className={sizeClass[c.size]}
            />
          ) : (
            <div
              key={c.slug}
              className={`flex flex-col justify-between rounded-xl border border-hairline bg-card p-4 ${sizeClass[c.size]}`}
            >
              <p className="font-mono text-[10.5px] text-accent">{c.label}</p>
              <div>
                <p className="font-display text-[22px] leading-tight text-ink">{c.title}</p>
                {c.sub && (
                  <p className="mt-1 text-[12px] leading-snug text-muted">{c.sub}</p>
                )}
              </div>
            </div>
          ),
        )}
      </Reveal>
    </section>
  );
}
