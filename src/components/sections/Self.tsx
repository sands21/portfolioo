import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import type { About, Profile, Testimonial } from "@/lib/content";

export function Self({
  about,
  profile,
  testimonial,
}: {
  about: About;
  profile: Profile;
  testimonial: Testimonial | null;
}) {
  const rows: { k: string; v: string }[] = [
    { k: "origin", v: about.origin },
    { k: "now", v: about.now },
    { k: "the deal", v: about.theDeal },
    { k: "honestly", v: about.honestly },
  ];

  return (
    <section
      id="self"
      className="mx-auto max-w-6xl scroll-mt-20 border-t border-hairline px-6 py-24"
    >
      <Reveal>
        <SectionHeader n="06" word="self" />
      </Reveal>

      {/* lead */}
      <Reveal>
        <p className="mb-16 max-w-[24ch] font-display text-[clamp(1.7rem,4.5vw,2.6rem)] leading-[1.15] text-ink">
          {about.lead}
        </p>
      </Reveal>

      {/* story via sideheads */}
      <div className="max-w-3xl">
        {rows.map((r) => (
          <Reveal key={r.k} className="grid gap-x-6 gap-y-1 py-5 md:grid-cols-[110px_1fr]">
            <p className="font-mono text-[11px] text-accent md:pt-[3px]">{r.k}</p>
            <p className="max-w-[58ch] text-[15px] leading-relaxed text-body">{r.v}</p>
          </Reveal>
        ))}
      </div>

      {/* assam -> bangalore moment */}
      <Reveal className="my-16">
        <p className="font-display text-[clamp(1.8rem,6vw,3rem)] leading-none text-ink">
          {profile.origin}
          <span className="mx-3 text-accent">→</span>
          {profile.current}
        </p>
      </Reveal>

      {/* testimonial pull-quote (section break) */}
      {testimonial && (
        <Reveal className="my-20 border-y border-hairline py-12">
          <p className="font-display text-[2.2rem] leading-[0.5] text-accent">“</p>
          <p className="mt-2 max-w-[40ch] font-display text-[clamp(1.4rem,3.5vw,1.9rem)] leading-snug text-ink">
            {testimonial.quote}
          </p>
          <p className="mt-5 font-mono text-[11px] text-muted">
            — {testimonial.name} · {testimonial.role}
          </p>
        </Reveal>
      )}

      {/* closing -> contact */}
      <Reveal>
        <p className="max-w-[44ch] text-[16px] leading-relaxed text-body">
          {about.closing}{" "}
          <a
            href="#contact"
            className="font-mono text-[14px] text-ink underline decoration-accent2 decoration-1 underline-offset-4 hover:text-accent2"
          >
            say hi →
          </a>
        </p>
      </Reveal>
    </section>
  );
}
