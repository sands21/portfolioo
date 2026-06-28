"use client";

import { useEffect, useRef } from "react";

/** Short clip that plays inline — muted, looped, and ONLY while in view (light on battery). */
export function InlineVideo({
  src,
  poster,
  position = "center",
}: {
  src: string;
  poster?: string | null;
  position?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) el.play().catch(() => {});
          else el.pause();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      ref={ref}
      src={src}
      poster={poster ?? undefined}
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
      style={{ objectPosition: position }}
    />
  );
}
