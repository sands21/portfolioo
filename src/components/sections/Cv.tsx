import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import type { Experience, Profile } from "@/lib/content";

const toolkit = [
  { name: "design", tags: ["figma", "framer", "ui/ux"] },
  { name: "build", tags: ["react", "next.js", "typescript", "tailwind"] },
  { name: "motion + video", tags: ["premiere", "after effects", "davinci"] },
  { name: "photo", tags: ["lightroom", "colour grading"] },
];

export function Cv({
  experience,
  profile,
}: {
  experience: Experience[];
  profile: Profile;
}) {
  return (
    <section
      id="cv"
      className="mx-auto max-w-6xl scroll-mt-20 border-t border-hairline px-6 py-24"
    >
      <Reveal>
        <SectionHeader n="05" word="cv" />
      </Reveal>

      {/* currently looking for */}
      <Reveal className="mb-14 flex flex-col gap-4 rounded-xl border border-accent/30 bg-accent/[0.07] p-5 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-[11px] text-accent">currently looking for</p>
          <p className="mt-1.5 max-w-[54ch] text-[14.5px] leading-relaxed text-body">
            {profile.lookingFor}
          </p>
        </div>
        <a
          href={profile.resume ?? "#"}
          download
          className="inline-block rounded-full border border-ink px-4 py-2 text-center font-mono text-[12px] whitespace-nowrap text-ink transition-colors hover:bg-ink hover:text-paper"
        >
          download résumé ↓
        </a>
      </Reveal>

      {/* timeline */}
      <div>
        {experience.map((x) => (
          <Reveal
            key={x.slug}
            className="grid gap-x-6 gap-y-1 md:grid-cols-[84px_1fr]"
          >
            <div className="font-mono text-[11px] text-muted md:pt-[3px] md:text-right">
              {x.dates}
            </div>
            <div className="relative border-l border-hairline pb-10 pl-6">
              <span className="absolute top-[5px] left-[-5px] h-[9px] w-[9px] rounded-full bg-accent ring-4 ring-paper" />
              <h3 className="font-display text-[23px] leading-tight text-ink">{x.role}</h3>
              <p className="mt-1 font-mono text-[11px] text-muted">{x.org}</p>
              {x.blurb && (
                <p className="mt-2 max-w-[56ch] text-[13.5px] leading-relaxed text-body">
                  {x.blurb}
                </p>
              )}
              {x.tags.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {x.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-hairline bg-card px-2.5 py-1 font-mono text-[10px] text-body"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {/* toolkit */}
      <Reveal className="mt-6 border-t border-hairline pt-8">
        <p className="mb-5 font-mono text-[11px] text-accent">toolkit</p>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {toolkit.map((g) => (
            <div key={g.name}>
              <h4 className="mb-3 font-mono text-[10.5px] font-normal text-muted">{g.name}</h4>
              <div className="flex flex-wrap gap-2">
                {g.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-hairline bg-card px-2.5 py-1 font-mono text-[11px] text-body"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
