import { Fraunces, Space_Mono, Inter } from "next/font/google";

/**
 * TYPE SYSTEM
 *
 * Target (locked in CLAUDE.md):
 *   - Exposure (205TF, paid)        -> hero / big "moment" titles   [var: --font-exposure]
 *   - Editorial New (Pangram Pangram) -> section headings / display  [var: --font-display]
 *   - Space Mono                    -> index numbers, meta, captions [var: --font-mono]
 *   - Inter                         -> body                          [var: --font-body]
 *
 * Right now Exposure + Editorial New are NOT bundled (premium / non-Google), so we ship with
 * close STAND-INS (Fraunces) until Rajarshi drops the real files into `src/fonts/`.
 *
 * TO SWAP IN THE REAL FONTS:
 *   1. Put the font files in `src/fonts/` (e.g. Exposure-Variable.woff2, EditorialNew.woff2).
 *   2. Uncomment the `localFont` block below + comment out the matching Fraunces stand-in.
 *   3. That's it — the CSS variables stay the same, so nothing else changes.
 */

// import localFont from "next/font/local";
//
// export const exposure = localFont({
//   src: "../fonts/Exposure-Variable.woff2",
//   variable: "--ff-exposure",
//   display: "swap",
// });
//
// export const display = localFont({
//   src: [
//     { path: "../fonts/EditorialNew-Regular.woff2", weight: "400", style: "normal" },
//     { path: "../fonts/EditorialNew-Italic.woff2", weight: "400", style: "italic" },
//     { path: "../fonts/EditorialNew-Medium.woff2", weight: "500", style: "normal" },
//   ],
//   variable: "--ff-display",
//   display: "swap",
// });

// --- stand-ins (remove once the real fonts are in) ---
export const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--ff-display",
  display: "swap",
});

export const exposure = Fraunces({
  subsets: ["latin"],
  variable: "--ff-exposure",
  display: "swap",
});
// --- end stand-ins ---

export const mono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--ff-mono",
  display: "swap",
});

export const body = Inter({
  subsets: ["latin"],
  variable: "--ff-body",
  display: "swap",
});

export const fontVariables = `${exposure.variable} ${display.variable} ${mono.variable} ${body.variable}`;
