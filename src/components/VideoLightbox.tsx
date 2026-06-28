"use client";

import { useEffect } from "react";

function parse(url: string): { kind: "embed" | "file"; src: string } {
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (yt) return { kind: "embed", src: `https://www.youtube.com/embed/${yt[1]}?autoplay=1` };

  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) return { kind: "embed", src: `https://player.vimeo.com/video/${vm[1]}?autoplay=1` };

  return { kind: "file", src: url };
}

export function VideoLightbox({ url, onClose }: { url: string; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const v = parse(url);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/85 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="close video"
        className="absolute top-5 right-5 font-mono text-[13px] text-paper/80 hover:text-paper"
      >
        close ✕
      </button>
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative aspect-video w-full max-w-4xl overflow-hidden rounded-lg bg-black shadow-lg"
      >
        {v.kind === "file" ? (
          // eslint-disable-next-line jsx-a11y/media-has-caption
          <video src={v.src} controls autoPlay className="h-full w-full" />
        ) : (
          <iframe
            src={v.src}
            title="video"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            allowFullScreen
            className="h-full w-full border-0"
          />
        )}
      </div>
    </div>
  );
}
