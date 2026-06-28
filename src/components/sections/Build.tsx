"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/lib/content";

const tints = ["#dce6e2", "#ede2cf", "#e3e7df", "#eae3d4"];

function Thumb({
  project,
  index,
  className = "",
}: {
  project: Project;
  index: number;
  className?: string;
}) {
  if (project.cover) {
    return (
      <Image
        src={project.cover}
        alt={`${project.title} — screenshot`}
        fill
        sizes="200px"
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <div
      className={`flex h-full w-full items-center justify-center font-mono text-[10px] text-muted ${className}`}
      style={{ background: tints[index % tints.length] }}
    >
      {project.title} — screenshot
    </div>
  );
}

export function Build({ projects }: { projects: Project[] }) {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  const wrapRef = useRef<HTMLDivElement>(null);
  const floatRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<{ project: Project; index: number } | null>(null);

  function onMove(e: React.MouseEvent) {
    const wrap = wrapRef.current;
    const fl = floatRef.current;
    if (!wrap || !fl) return;
    const r = wrap.getBoundingClientRect();
    fl.style.left = `${e.clientX - r.left + 18}px`;
    fl.style.top = `${e.clientY - r.top - 44}px`;
  }

  return (
    <section
      id="build"
      ref={wrapRef}
      onMouseMove={onMove}
      className="relative mx-auto max-w-6xl scroll-mt-20 border-t border-hairline px-6 py-24"
    >
      <Reveal>
        <SectionHeader
          n="01"
          word="build"
          intro={
            <>
              things i designed and built. i care a bit too much about how they{" "}
              <em className="font-display italic">feel</em> — the weight of a click, how type
              lands, the half-second after.
            </>
          }
        />
      </Reveal>

      {/* featured */}
      {featured && (
        <Reveal className="mb-16 grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
          <a
            href={featured.url ?? "#"}
            target={featured.url && featured.url !== "#" ? "_blank" : undefined}
            rel="noreferrer"
            className="relative block aspect-[4/3] overflow-hidden rounded-lg border border-hairline"
          >
            <Thumb project={featured} index={0} />
          </a>
          <div>
            <p className="mb-2 font-mono text-[11px] text-accent">featured</p>
            <h3 className="font-display text-[30px] leading-none text-ink">{featured.title}</h3>
            <p className="mt-2 font-mono text-[11px] text-muted">
              {[featured.role, featured.tech, featured.year].filter(Boolean).join(" · ")}
            </p>
            <p className="mt-3 max-w-[42ch] text-[14px] leading-relaxed text-body">
              {featured.blurb}
            </p>
            <a
              href={featured.url ?? "#"}
              target={featured.url && featured.url !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              className="mt-4 inline-block font-mono text-[12px] text-ink underline decoration-accent2 decoration-1 underline-offset-4 hover:text-accent2"
            >
              visit →
            </a>
          </div>
        </Reveal>
      )}

      {/* work index */}
      <ul>
        {rest.map((p, i) => (
          <li key={p.slug}>
            <a
              href={p.url ?? "#"}
              target={p.url && p.url !== "#" ? "_blank" : undefined}
              rel="noreferrer"
              onMouseEnter={() => setHovered({ project: p, index: i + 1 })}
              onMouseLeave={() => setHovered(null)}
              className="group flex items-center gap-4 rounded-md border-t border-hairline px-2 py-4 transition-[padding,background] last:border-b last:border-hairline hover:bg-card hover:pl-4"
            >
              {/* inline thumb — mobile only */}
              <span className="relative block h-[42px] w-[58px] shrink-0 overflow-hidden rounded border border-hairline md:hidden">
                <Thumb project={p} index={i + 1} />
              </span>
              <span className="flex-1">
                <span className="block font-display text-[23px] leading-none text-ink">
                  {p.title}
                </span>
                <span className="mt-1 block text-[12.5px] text-muted">{p.blurb}</span>
                <span className="mt-1 block font-mono text-[11px] text-muted sm:hidden">
                  {[p.role, p.year].filter(Boolean).join(" · ")}
                </span>
              </span>
              <span className="hidden whitespace-nowrap text-right font-mono text-[11px] text-muted sm:block">
                {[p.role, p.year].filter(Boolean).join(" · ")}
              </span>
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#"
        className="mt-8 inline-block font-mono text-[12px] text-ink underline decoration-accent2 decoration-1 underline-offset-4 hover:text-accent2"
      >
        see all → github
      </a>

      {/* floating cursor thumbnail — desktop hover only */}
      <div
        ref={floatRef}
        aria-hidden
        className="pointer-events-none absolute z-20 hidden aspect-[4/3] w-[176px] overflow-hidden rounded-lg border border-hairline shadow-sm transition-opacity duration-150 md:block"
        style={{ opacity: hovered ? 1 : 0, rotate: "-2deg" }}
      >
        {hovered && <Thumb project={hovered.project} index={hovered.index} />}
      </div>
    </section>
  );
}
