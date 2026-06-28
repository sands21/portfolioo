"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import type { Frame, GradeSlider, TileSize } from "@/lib/content";

const DEMO_GRAD =
  "linear-gradient(135deg,#243a5e 0%,#5d4a6e 38%,#c97b5a 72%,#edb86a 100%)";

const stillGrads = [
  "linear-gradient(160deg,#3a5a6e,#9ab0a0)",
  "linear-gradient(135deg,#6e5a4a,#d3b48a)",
  "linear-gradient(135deg,#3a4a3a,#8aa06a)",
  "linear-gradient(150deg,#46566e,#aab2a4)",
];

function gradientFor(f: Frame, i: number) {
  if (f.category === "motion") return "linear-gradient(135deg,#26282f,#5a6276)";
  if (f.category === "branding") return "linear-gradient(120deg,#7a5a3a,#e0c08a)";
  return stillGrads[i % stillGrads.length];
}

const sizeClass: Record<TileSize, string> = {
  small: "col-span-1 md:col-span-2",
  wide: "col-span-2 md:col-span-4",
  tall: "col-span-1 row-span-2 md:col-span-2 md:row-span-2",
};

const chip =
  "absolute bottom-2 left-2 rounded-full bg-black/40 px-2 py-0.5 font-mono text-[9px] text-paper";

function GradeCompare({ data }: { data: GradeSlider }) {
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);
  const hasImg = Boolean(data.flat && data.graded);

  function set(clientX: number) {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.max(0, Math.min(100, ((clientX - r.left) / r.width) * 100)));
  }

  return (
    <div
      ref={ref}
      onPointerDown={(e) => {
        dragging.current = true;
        set(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && set(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
      className="relative aspect-[16/9] w-full cursor-ew-resize touch-none select-none overflow-hidden rounded-lg border border-hairline"
    >
      {/* flat (base) */}
      {hasImg ? (
        <Image src={data.flat!} alt="ungraded" fill sizes="(max-width:768px) 100vw, 900px" className="object-cover" />
      ) : (
        <div
          className="absolute inset-0"
          style={{ backgroundImage: DEMO_GRAD, filter: "saturate(0.32) contrast(0.86) brightness(1.12)" }}
        />
      )}
      {/* graded (clipped from left) */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
        {hasImg ? (
          <Image src={data.graded!} alt="graded" fill sizes="(max-width:768px) 100vw, 900px" className="object-cover" />
        ) : (
          <div
            className="absolute inset-0"
            style={{ backgroundImage: DEMO_GRAD, filter: "saturate(1.18) contrast(1.06)" }}
          />
        )}
      </div>
      {/* divider + handle */}
      <div className="absolute top-0 bottom-0 w-[2px] bg-paper" style={{ left: `${pos}%` }} />
      <div
        className="absolute top-1/2 grid h-8 w-8 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-paper font-mono text-[13px] text-ink shadow-sm"
        style={{ left: `${pos}%` }}
        aria-hidden
      >
        ⇄
      </div>
      <span className={`${chip} left-2`}>graded</span>
      <span className="absolute right-2 bottom-2 rounded-full bg-black/40 px-2 py-0.5 font-mono text-[9px] text-paper">
        flat
      </span>
    </div>
  );
}

export function Frames({ grade, frames }: { grade: GradeSlider; frames: Frame[] }) {
  return (
    <section
      id="frames"
      className="mx-auto max-w-6xl scroll-mt-20 border-t border-hairline px-6 py-24"
    >
      <Reveal>
        <SectionHeader
          n="02"
          word="frames"
          intro={
            <>
              i shoot whatever catches my eye, then grade it back to how it actually{" "}
              <em className="font-display italic">felt</em>. drag to see flat → graded.
            </>
          }
        />
      </Reveal>

      <Reveal>
        <GradeCompare data={grade} />
        <div className="mt-2 mb-12 flex justify-between font-mono text-[11px] text-muted">
          <span>{grade.caption}</span>
          <span>← drag →</span>
        </div>
      </Reveal>

      <div className="grid auto-rows-[118px] grid-flow-dense grid-cols-2 gap-3 md:grid-cols-6">
        {frames.map((f, i) => (
          <div
            key={f.slug}
            className={`relative overflow-hidden rounded-lg border border-hairline ${sizeClass[f.size]}`}
          >
            {f.image ? (
              <Image src={f.image} alt={f.caption} fill sizes="(max-width:768px) 50vw, 33vw" className="object-cover" />
            ) : (
              <div className="absolute inset-0" style={{ backgroundImage: gradientFor(f, i) }} />
            )}
            {f.category === "motion" && (
              <div className="absolute inset-0 grid place-items-center text-2xl text-paper">▶</div>
            )}
            <span className={chip}>
              {f.category} · {f.caption}
            </span>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="mt-8 inline-block font-mono text-[12px] text-ink underline decoration-accent2 decoration-1 underline-offset-4 hover:text-accent2"
      >
        see all →
      </a>
    </section>
  );
}
