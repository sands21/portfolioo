"use client";

import { motion, useReducedMotion } from "framer-motion";

const index = [
  { n: "01", word: "build", desc: "websites & interfaces", href: "#build" },
  { n: "02", word: "frames", desc: "photo, video, colour", href: "#frames" },
  { n: "03", word: "words", desc: "things i wrote", href: "#words" },
  { n: "04", word: "play", desc: "the fun stuff", href: "#play" },
  { n: "05", word: "cv", desc: "experience", href: "#cv" },
  { n: "06", word: "self", desc: "the long version", href: "#self" },
];

export function Hero() {
  const reduce = useReducedMotion();

  // SIGNATURE: expose-on-load — the name blooms in overexposed, then resolves to crisp ink.
  // (Real Exposure font will use its exposure axis; this stand-in sims it with filter+weight.)
  const exposeInitial = reduce
    ? false
    : {
        opacity: 0.35,
        filter: "blur(10px) brightness(1.65) contrast(0.5)",
        fontWeight: 300,
      };
  const exposeAnimate = {
    opacity: 1,
    filter: "blur(0px) brightness(1) contrast(1)",
    fontWeight: 500,
  };

  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-10 pb-24 sm:pt-16">
      {/* meta row */}
      <div className="mb-12 flex items-center justify-between border-b border-hairline pb-3 font-mono text-[11px] tracking-wide text-muted">
        <span>assam &rarr; bangalore</span>
        <span className="hidden sm:inline">open to a stable tech job</span>
        <span>{new Date().getFullYear()}</span>
      </div>

      <div className="grid gap-14 md:grid-cols-[1.55fr_1fr]">
        {/* left — the statement */}
        <div>
          <p className="mb-3 font-mono text-[12px] text-accent">00 — hello</p>
          <motion.h1
            initial={exposeInitial}
            animate={exposeAnimate}
            transition={{ duration: 0.95, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-exposure text-[clamp(3rem,9vw,5.5rem)] leading-[0.95] tracking-tight text-ink"
          >
            hi, i&apos;m
            <br />
            rajarshi.
          </motion.h1>
          <p className="mt-5 max-w-[34ch] text-[16px] leading-relaxed text-body">
            a curious, slightly chaotic designer &amp; developer who makes things{" "}
            <em className="font-display italic">look and feel good</em> — and keeps getting
            distracted by everything else.
          </p>
          <a
            href="#build"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 font-mono text-[12px] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            jump to the work <span className="text-accent">&rarr;</span>
          </a>
          <p className="mt-6 font-mono text-[11px] text-muted">
            currently: keshi on loop, pretending i&apos;ll start making my own music.
          </p>
        </div>

        {/* right — the index */}
        <nav aria-label="sections" className="md:pt-2">
          <p className="mb-3 font-mono text-[11px] text-muted">the index</p>
          <ul>
            {index.map((it) => (
              <li key={it.n}>
                <a
                  href={it.href}
                  className="group flex items-baseline gap-3 border-t border-hairline py-[10px] transition-[padding] hover:pl-2"
                >
                  <span className="w-[22px] font-mono text-[12px] text-accent">{it.n}</span>
                  <span>
                    <span className="font-display text-[17px] text-ink">{it.word}</span>{" "}
                    <span className="text-[12px] text-muted">· {it.desc}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
