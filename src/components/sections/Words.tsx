import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import type { Writing } from "@/lib/content";

export function Words({ writing }: { writing: Writing[] }) {
  const latest = writing.find((w) => w.latest) ?? writing[0];
  const rest = writing.filter((w) => w !== latest);

  return (
    <section
      id="words"
      className="mx-auto max-w-6xl scroll-mt-20 border-t border-hairline px-6 py-24"
    >
      <Reveal>
        <SectionHeader
          n="03"
          word="words"
          intro="i write to figure out what i actually think. mostly tech, sometimes feelings, occasionally complete nonsense."
        />
      </Reveal>

      {/* featured latest */}
      {latest && (
        <Reveal className="grid items-start gap-6 md:grid-cols-[130px_1fr]">
          <div className="md:pt-[6px]">
            <p className="font-mono text-[11px] text-accent">latest</p>
            <p className="mt-2 font-mono text-[11px] leading-relaxed text-muted">
              {latest.date}
              <br />
              {latest.readTime} read
            </p>
          </div>
          <div>
            <h3 className="font-display text-[clamp(1.6rem,4vw,2rem)] leading-[1.02] text-ink">
              {latest.title}
            </h3>
            {latest.excerpt && (
              <p className="mt-4 max-w-[58ch] font-display text-[17px] leading-relaxed text-body first-letter:float-left first-letter:mr-2 first-letter:font-display first-letter:text-[3.4rem] first-letter:leading-[0.78] first-letter:font-medium first-letter:text-accent">
                {latest.excerpt}
              </p>
            )}
            <a
              href={latest.url ?? "#"}
              target={latest.url && latest.url !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              className="mt-4 inline-block font-mono text-[12px] text-ink underline decoration-accent2 decoration-1 underline-offset-4 hover:text-accent2"
            >
              read on medium →
            </a>
          </div>
        </Reveal>
      )}

      {/* reading list */}
      <ul className="mt-12">
        {rest.map((w) => (
          <li key={w.slug}>
            <a
              href={w.url ?? "#"}
              target={w.url && w.url !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 gap-y-1 border-t border-hairline py-4 last:border-b last:border-hairline md:grid-cols-[130px_1fr_auto]"
            >
              <span className="hidden font-mono text-[10.5px] text-muted md:block">{w.kind}</span>
              <span>
                <span className="mb-0.5 block font-mono text-[10px] text-muted md:hidden">
                  {w.kind}
                </span>
                <span className="font-display text-[21px] text-ink transition-colors hover:text-accent2">
                  {w.title}
                </span>
              </span>
              <span className="text-right font-mono text-[11px] whitespace-nowrap text-muted">
                {w.date} · {w.readTime}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="mt-8 inline-block font-mono text-[12px] text-ink underline decoration-accent2 decoration-1 underline-offset-4 hover:text-accent2"
      >
        see more → medium
      </a>
    </section>
  );
}
