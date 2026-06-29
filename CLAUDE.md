# Rajarshi's Portfolio — Project Context

> Living document. Update this whenever a decision is made, a constraint changes, or
> content gets added. Goal: anyone (or any fresh chat) can read this and have full context
> without re-explaining.

---

## 1. Who this is for / about

**Rajarshi Sandilya**, 23. From **Assam, India**; currently living in a **PG in Bangalore**
(works fully remote from his room). Origin = Assam, current base = Bangalore — both matter to him.

**What he does:**
- Freelance **developer** + **video editor** (not many clients yet).
- **Content editor** at a startup called **SnS** (remote).
- Makes **websites** and cares a lot about how they **look and feel** (UI/UX).
- Designs in **Figma** sometimes (has made client posts/branding).
- Photography, videography, **color grading**, video editing.
- Writes on **Medium**; jots things down for fun. Wants to write a **novel** someday.
- Runs an **Instagram content page** (AI / tech / lifestyle).
- Wants to **make his own music** someday.

**Current top priority (the "why" behind this portfolio):**
Land a **stable tech job** (corporate or otherwise) for reliable income — the freelance +
content-editing setup isn't paying enough. Must be **in tech**, NOT sales/marketing.
Role focus is still TBD (frontend? design eng? full-stack? generalist?) — see Open Questions.

**Personality (this portfolio must FEEL like him):**
- One word: **curious** — gets deeply into anything that intrigues him.
- Also: **chaotic**, a **yapper** — but only with close friends; slow to open up with strangers.
- Goofy / funny, with "different" humor and admittedly weak delivery (some jokes land, some don't).
- Casual, jolly, laid-back. Does NOT want to come off corporate, professional, or try-hard.

**Tastes & obsessions (raw material for content):**
- **Music** (his nervous system — therapeutic, listens all day, loves discovering genres):
  - Favorite artist right now: **keshi**.
  - **Mohit Chauhan** = deeply calming; loves 2010s-era Bollywood (Bin Tere, Bheegi Si Bhaagi Si).
  - EDM: melodic dubstep / melodic future bass / house — Illenium, Gryffin, Hoang, Sabai,
    Martin Garrix, Avicii. Also pop, melodic hip-hop/rap.
  - Loves "Am I Dreaming" (Metro Boomin), "Luther" (Kendrick).
- **Gaming** (less time now, but follows new releases): Elden Ring, RDR2, Black Myth Wukong,
  Spider-Man Remastered. Likes to fully immerse, won't play if he can't.
- **Anime** — big interest. Doesn't watch many films (only friend-recommended ones).
- **Typography** — loves discovering/using fonts (ties to curiosity).
- **Tech/software/AI/LLMs** — can talk for hours; tests new LLMs as a hobby; ex custom-ROM tinkerer.
- **Sports**: F1 (watches), **badminton** (used to play, his favorite to play), swimming.
- **Astronomy**, **mechanical keyboards**, **food** (all kinds, now leans whole/healthy foods).
- Gets genuinely excited by tasteful/creative work (finds it on Instagram, saves more than he
  can consume — most saves just sit there). Loves replicating techniques he sees.

---

## 2. The brief

Make a portfolio that is **the best representation of Rajarshi as a person** — not just a dev
or design portfolio. Should make a visitor want to **stop and look around**. NOT generic
(no cliché hero/work/projects template, no generic center-aligned or text-left/media-right layouts).
Wants **unconventional, asymmetric layouts**. Audience = everyone (recruiters, clients, random
people) — deliberately not narrowed to one group.

**Bravery level: "Portfolio++"** — still navigable as a portfolio in ~30s, but built on one
bold creative spine. NOT "confuse 90% to thrill 10%." Should NOT look like it's trying too hard
to be / not be a portfolio. Casual and laid-back.

**Hard constraints / dislikes:**
- ❌ No retro-terminal, glitch, cyberpunk, techno aesthetics.
- ❌ No Y2K, no vaporwave.
- ❌ Pure minimal — likes it, but rejected it (not enough creative freedom).
- ❌ **No custom artwork / illustration** — he doesn't want to draw/produce art assets.
  Assets must be things he already has (real photos, screenshots, words) + type/motion/layout.
- Likes (mentioned): scrapbook feel, soft/cozy/pastel, mild brutalist curiosity.

---

## 3. Concept decisions

### Rejected
- **Constellation × Saves Wall** (night-sky map of interests + scrapbook boards). Loved the
  idea but rejected — execution depended on **custom illustration**, too much art commitment.

### ✅ CHOSEN: "The Index" — typography-first editorial
A portfolio that reads like a beautifully set **magazine / art-book index**, not a website.
Personality carried by **typography, layout, motion, and voice** — zero custom artwork.
- Big expressive type; deliberately **asymmetric, off-grid** layouts; lots of negative space.
- Only imagery = his **real photos / project screenshots**.
- Voice does the work — his actual casual/goofy/curious tone in the copy.
- Plays directly to his **typography** love.
- Optional later flourish: a small persistent **"now playing"** strip so music is present
  without committing the whole site to a music-player gimmick. (Deferred, not core.)

**Working section structure (numbered index, draft):**
- `00 — hello` · hero + the index
- `01 — build` · websites & interfaces
- `02 — frames` · photo, video, color grading
- `03 — words` · writing / Medium
- `04 — play` · games, anime, music, F1 (the personal/curiosity stuff)
- `05 — cv` · experience / work-history timeline + résumé download (DECIDED: own section)
- `06 — self` · the long "about" version
- `colophon / contact` · fonts credit + how to reach him (editorial colophon)
  - testimonial pull-quote sits right before this

(Open ordering Q: cv currently sits at 05 after the creative sections; could move it up
next to `build` if we want a recruiter-first professional grouping. TBD.)

Signature ideas under consideration: Assam→Bangalore "home" detail; persistent
`jump to the work →` escape hatch for busy recruiters.

**Layout & interaction decisions:**
- **Mobile is a first-class target** (most visitors come from phone via IG/LinkedIn).
  Asymmetry → vertical rhythm + offset indents; type scales but stays expressive;
  hover → tap; preview panes stack. Mock mobile for EVERY section, not at the end.
- **`build` LAYOUT + interaction (LOCKED — Rajarshi preferred this over a preview-pane
  variant):** 1 featured project shown large (big screenshot left, title/meta/blurb/`visit →`
  right) + the rest as a full-width typographic work-index list (serif name + one-liner +
  mono meta). Hover a row = row highlights & nudges right + a small tilted **screenshot
  floats next to the cursor** (floating layer, zero layout shift). Click/tap = open the
  project (live site / case study). Mobile: no cursor → each row shows a small **inline
  thumbnail** + tap-to-open.
- **`frames` (LOCKED):** image-forward, totally different
  feel from build. Signature = ONE featured **before/after colour-grade slider** (drag to
  reveal flat → graded; rhymes with the expose-on-load intro — both showcase his photo/grade
  craft). Below it, an **asymmetric contact-sheet grid** mixing stills, a `▶` motion/reel
  tile, and branding work. Categories shown as **labelled captions** for now (filters only
  once volume justifies). Keep the grade slider to one instance (special → don't dilute).
  NOTE: "labelled captions" = purely descriptive text on each tile; NO clicking/filtering.
- **Section numbering (LOCKED):** the index number appears ONCE per section — big, beside the
  section word in the title (e.g. `03  words`). The thin running top bar does NOT repeat it;
  it's a persistent locator instead — name/home link on the left, section descriptor on the
  right (+ global `jump to the work →`). Avoid showing the number twice.
- **ANTI-MONOTONY (hard rule):** cohesion comes from the shared SYSTEM (type, numbering, mono
  labels, paper+coral), NOT from repeating a layout. Each section gets a distinct structural
  identity. "Featured + list" is used ONLY by `build` and `words`. Per-section structure:
  `01 build` featured + work-index list · `02 frames` before/after slider + asymmetric photo
  grid · `03 words` featured essay + reading list (type-only) · `04 play` a ROOM of
  mixed-shape cards (now-playing, gaming, anime, F1, keyboards — NOT featured+list, most
  eclectic) · `05 cv` vertical experience timeline · `06 self` long-form narrative + pull
  quotes · colophon = type-specimen/credits strip.
- **`words` (LOCKED):** type-only "reading room", the calmest section. Featured latest essay
  uses a hanging left sidehead (`latest` + date/read-time) aligned to a shared left rail;
  article title + serif excerpt (coral drop cap) + `read on medium →` in the main column.
  Below: a reading list sharing that left rail (tiny `essay`/`note` tag · title · date·min).
  Mobile stacks. (Open: drop cap keep? teaser under every title or only latest? — minor.)
- **Curation + "see all" (LOCKED pattern):** every section shows a CURATED, capped preview
  (never a bottomless dump) with a tasteful `see all →`. Destinations: `build` → his **GitHub**
  profile; `words` → his **Medium** profile; `frames` → TBD (on-site full gallery, or
  Behance/Drive — decide once links arrive). `frames` may alternatively scroll horizontally
  (film-strip, fixed height) instead of growing vertically — decide at build.
- **`play` (LOCKED):** the eclectic "room" — a BENTO of mixed-shape cards, each a facet
  (now-playing, gaming, anime, keyboards, F1, badminton, saved-reels honest bit, astronomy,
  + more in reserve: swimming, whole-foods, custom ROMs, LLM-testing). Build a LIBRARY of
  cards, each tagged a size (small / wide / tall); show only ~6–8 ACTIVE at a time, swappable
  via the CMS as his life changes (e.g. not gaming now → swap that card out). Grid uses
  `grid-auto-flow: dense` so swapping reflows automatically — no manual placement, lightweight
  (pure CSS grid + a config flag, NOT heavy).
  - **`now playing` = LIVE via Last.fm (DECIDED).** Rajarshi switches between Apple Music and
    Spotify, so route everything through **Last.fm** as the aggregator: scrobble from both
    apps → the card reads Last.fm's recent/now-playing track, polls every ~20–30s, falls back
    to `last played: …` when idle. Works regardless of player. Caveats: needs a one-time
    Apple Music scrobble setup (Marvis/Cider/NepTunes companion app); Last.fm gives
    track + artist + album art but NOT live playback progress, so the progress bar is
    cosmetic/optional.
  - **Mobile = a real 2-column mini-bento** with mixed sizes (full-width hero tiles like
    now-playing + saved, interspersed with paired half-tiles). NOT a generic full-width
    card stack — keep it playful/asymmetric, just denser.
  - **Voice: goofy/self-aware lines APPROVED** ("again. third time. send help.", "847 saved
    reels i swear i'll get to"). Keep this casual register across the site's copy.
- **Header spacing note:** big serif section words with descenders (`play`, `words`, etc.)
  need enough gap above the intro line so the `p`/`y` tails don't crowd it.
- **`cv` (LOCKED structure):** recruiter section = a vertical chronological **experience
  timeline** (year rail + coral node dots + role/org/blurb/skill-tags), newest at top. Up top:
  a coral **"currently looking for"** block stating the target (stable tech role — frontend /
  design eng / full-stack; NOT sales/marketing; remote or Bangalore) + a **`download résumé ↓`**
  button. Directness of the "looking for" block = confirmed fine. CV plays it STRAIGHT for now
  — the `the curious phase` entry was REMOVED (can revisit later). Mobile = same timeline,
  year above each entry. **Skills** live HERE as a compact "toolkit" strip at the bottom of
  cv, grouped by craft (design / build / motion+video / photo) as mono tag chips — NO separate
  skills section (a dedicated skills section reads generic).
- **`self` (LOCKED structure):** long-form "about". A big serif LEAD statement; the story via
  hanging **sideheads** (`origin` / `now` / `the deal` / `honestly`) so it stays scannable;
  the **`assam → bangalore`** home detail gets its own typographic moment; the single
  **testimonial lives here as a big pull-quote** (section break, not a carousel); warm closing
  line hands off to contact (`say hi →`, casual "or just talk music?"). Mobile stacks.
- **`colophon / contact` (LOCKED):** the "back cover" — rendered on the INK background
  (`#1B1916`, paper text) as a deliberate end-of-book moment + a peek at a possible cozy-dark
  mode. Big serif `let's make something.` / `say hi`; casual sub ("...or just want to talk
  music? i'm slow to open up but quick to reply"); contact links in mono (email · github ·
  linkedin · instagram · medium). Footer credit folds in his TYPE LOVE: "set in exposure,
  editorial new, space mono & inter" + palette swatches + "made in a bangalore pg · 2025 ·
  assam → bangalore" + a persistent `now playing` chip. Mobile stacks.

### ✅ Motion & interaction spec (LOCKED 2026-06-28 — intensity = RESTRAINED/tasteful)

Guiding principle: motion = good editing, purposeful not decorative. EVERYTHING respects
`prefers-reduced-motion` (degrade to instant). Animate transform/opacity only (GPU-cheap,
smooth on phones).
- **① Expose-on-load (signature, hero only):** hero name blooms in overexposed → resolves to
  crisp ink over ~900ms ease-out, along Exposure's real axis. Fires ONCE per visit. CSS
  fallback (weight + blur + brightness) if the font's still loading; never blocks readability.
- **② Section entrances (on scroll):** header + first content rise+fade (~12px, ~500ms,
  slight stagger) once ~20% in view. Mono labels fade a hair after the serif. Quiet, no bounce.
- **③ Per-section:** `build` row hover = highlight + nudge right + tilted screenshot floats by
  cursor (~150ms), click opens · `frames` drag before/after (pointer+touch), tiles lift ~2px ·
  `words` link accent-underline wipe, else still · `play` cards lift on hover, now-playing
  crossfades when the track changes · `cv` timeline reveals top→bottom on scroll · `self`
  pull-quote fades in slightly larger.
- **④ Global:** index/`jump to the work →` = smooth-scroll (not hard jump); links = accent
  underline grows from left (~200ms); buttons tiny scale on press; `see all` page transitions =
  quick cream wipe. Library: Framer Motion (+ CSS fallback for expose-on-load).
- **Testimonials (only 1 so far):** NOT a dedicated section/carousel. Use as a single
  full-width pull-quote acting as a section break (doubles as social proof). Likely
  placed right before contact. Scales to a rotating set later.
- **Work history / experience (DECISION PENDING):** either folded into `self` (story +
  experience timeline + résumé download) OR its own `05 — cv` section (self → 06).
  Leaning prominent since landing a job is the goal.

### ✅ Art direction (locked 2026-06-27)

**Base palette — "film" / teal & amber (CHOSEN 2026-06-29).**
History: paper & coral → cream & oxblood → **film**. Switched off cream & oxblood because the
Anthropic frontend-design skill flags "cream bg + high-contrast serif + terracotta accent" as a
generic default; "film" escapes it AND references Rajarshi's colour grading (cinematic
teal/amber). Implemented as SEMANTIC tokens in `src/app/globals.css` (swap values to re-skin).
Light:
- paper / bg: `#E9EBE4` (cool neutral)
- ink / text: `#1B201E`
- accent (amber): `#BC6A2E` — index numbers, emphasis, arrows
- accent2 (teal): `#1E5F5A` — links / underlines
- muted: `#7C8884`
- hairline: `#D6D9D0`
- card: `#EFF1EA`
- body text: `#33403B`
NOTE: all the section MOCKUPS were rendered in old paper & coral — re-skin to film at build.
BUILD LIGHT-FIRST.

**Dark mode — DEFERRED (2026-06-28, revisit later).** A "darkroom" warm-dark theme
(bg ~`#1E1A16`, cream text, amber accent) is the likely night version + a top-bar sun/moon
toggle (~300ms crossfade, system default + localStorage). Parked for now — ship light-only
first.

**Type system:**
- **Exposure** (205TF, Federico Parra Barrios — PAID) → hero name + big "moment" titles.
  Variable font with an **exposure axis (−100..+100)** that blooms letterforms like photo
  over/under-exposure. Display/feature use only — NOT body or long headings.
- **Editorial New** (Pangram Pangram — free for personal use) → workhorse serif for
  section headings & display copy.
- **Space Mono** (Google) → index numbering (`00 —`), meta labels, captions.
- **Inter** (Google) or a nicer sans (General Sans / Geist) → body text.
- All lowercase styling, casual voice.

**SIGNATURE MOTION — "expose on load":** the hero headline animates along the exposure
axis on load — blooms in overexposed (washed, light, soft) and resolves to crisp ink.
This IS the flat→color-graded intro idea, made thematically his (photographer + colour grader).
With Exposure it uses the real axis; as a fallback it's simulated via CSS (weight + blur +
brightness/contrast). Confirmed via mockup that the motion reads well.

Fonts can't be previewed on the mockup canvas (premium/non-Google) — Rajarshi will add the
real font files to the project after init; mockups use close stand-ins (e.g. Fraunces/Gloock)
until then.

---

## 4. Content inventory (NEEDED — mostly still open)

Fill these in as Rajarshi provides them.

- [ ] **build** — 2–4 best websites/projects (links + 1 line each: what, his role, tech).
- [ ] **frames** — photography / video / color-grading / branding work (Drive/Behance/IG links).
- [ ] **words** — Medium handle / article links.
- [ ] **content page** — Instagram @ (AI/tech/lifestyle).
- [ ] **socials + contact** — GitHub, LinkedIn, X, email to display, resume/CV.
- [ ] **work history / experience** — roles, orgs, dates (freelance dev + video editor;
  content editor @ SnS; anything earlier) for the experience timeline.
- [ ] **testimonials** — the 1 he has now (name, role, quote); more later.
- [ ] **target role** — what kind of stable tech job he's aiming at (shapes how loud `build` is).

---

## 5. Tech / execution notes

> **WORKING PROCESS (Rajarshi's request):** build the site **one section at a time**, and
> **STOP for his review after each section** before starting the next — so changes happen
> before moving on, not after. Keep this CLAUDE.md updated as we go.

### Build progress (live)

**Scaffolded (2026-06-29):** Next.js 16 (App Router, src/, TS) + Tailwind v4 + Framer Motion +
Keystatic (local mode). `npm run dev` → site at `:3000`, CMS at `:3000/keystatic`. Git remote
`origin` = `https://github.com/sands21/portfolioo.git` (DO NOT push — Rajarshi pushes himself).

> **Next.js 16 is newer than most training data — it has breaking changes** (APIs, conventions,
> file structure). Before writing Next-specific code, check the bundled docs in
> `node_modules/next/dist/docs/`. (This note replaces the auto-generated AGENTS.md, now deleted.)
> Tailwind here is **v4** (CSS-first `@theme` in `globals.css`; no `tailwind.config.js`).

Key files:
- `keystatic.config.ts` — all collections/singletons + asset paths (see `CONTENT.md`).
- `src/lib/fonts.ts` — type system; Fraunces STAND-INS active, real Exposure/Editorial New
  wired but commented (drop files in `src/fonts/`, uncomment).
- `src/app/globals.css` — cream & oxblood `@theme` tokens + reduced-motion + base.
- `src/components/TopBar.tsx`, `src/components/Hero.tsx`, `src/app/page.tsx`.
- Content → `src/content/*` (+ `public/images/*`, `public/files/*`). `CONTENT.md` documents it.

**Sections status:**
- [x] `00 hello` — hero + top bar + index, desktop + mobile, expose-on-load wired. Reviewed ✓.
- [x] Palette switched to **film (teal & amber)** live (reviewed ✓).
- [x] `01 build` — featured + work-index list; floating cursor thumbnail (desktop) + inline
  thumbnails & stacked meta (mobile); `see all → github`. Reviewed ✓.
- [x] `02 frames` — drag before/after grade slider (pointer+touch; demo uses gradient +
  saturate/contrast filters, real uses flat+graded images) + asymmetric contact-sheet grid
  (6-col desktop / 2-col mobile, `grid-flow-dense`, size tags small/wide/tall, category
  captions); `see all →`. Wired to Keystatic (frames collection + gradeSlider singleton),
  demo fallback. ADDED after review: per-tile **focal point** (`imagePosition` select →
  CSS object-position, so any aspect ratio crops gracefully) + **video lightbox**
  (`src/components/VideoLightbox.tsx`) — `▶` tiles open a modal; YouTube/Vimeo links embed the
  native player (their full GUI). ALSO ADDED: **inline short clips** (PRIMARY video mode —
  Rajarshi mostly has a-few-second shots): upload to the `video` file field → autoplays
  muted/looped IN the tile, only while scrolled into view (`src/components/InlineVideo.tsx`,
  IntersectionObserver); stored in `public/videos/`. The `▶`/lightbox is now only for external
  long videos. Verified the YouTube embed
  live. **← awaiting Rajarshi's review.**
- [x] `03 words` — type-only reading room; featured latest (hanging `latest` sidehead + amber
  drop-cap excerpt + `read on medium →`) + reading list sharing the left rail (essay/note tag ·
  title · date·min); `see more → medium`. Wired to Keystatic (writing collection) + demo
  fallback. Desktop + mobile. **← awaiting Rajarshi's review.**
- [x] `04 play` — eclectic BENTO (4-col desktop / 2-col mobile, `grid-flow-dense`, size tags
  small/wide/tall, swappable via CMS `active` flag). Goofy voice. **Live now-playing** via
  Last.fm: `src/app/api/now-playing/route.ts` (needs `LASTFM_API_KEY` env + `lastfmUser` in the
  CMS profile) + `src/components/NowPlayingCard.tsx` (polls every 25s, shows album art, falls
  back to static card text when not configured). Wired to Keystatic (play collection) + demo
  fallback. Desktop + mobile. **← awaiting Rajarshi's review.**
- [ ] `05 cv` · [ ] `06 self` · [ ] colophon — each: build → STOP for review → next.

ENV NEEDED (later): `LASTFM_API_KEY` in `.env.local` (+ Vercel) for the live now-playing card.

**Content reading pattern (established):** `src/lib/reader.ts` (createReader) +
`src/lib/content.ts` (typed getters with DEMO fallback when a collection is empty). Server
component fetches → passes to a client section component. Reuse for every section.
Shared bits: `src/components/SectionHeader.tsx` (number-once header), `src/components/Reveal.tsx`
(scroll entrance). Remaining sections still render as placeholders in `page.tsx`.
NOTE: the frontend-design skill flags "cream bg + high-contrast serif + terracotta accent" as a
generic default — we chose it deliberately; differentiators = Exposure expose-on-load signature,
per-section distinct structures, real photos + voice. Revisit palette if it ever feels generic.


- **Anthropic frontend/design skill** (from Claude's GitHub) — Rajarshi asked to use it.
  TODO: pull & read at BUILD time (it governs execution polish, not concept).
- **Stack (LOCKED 2026-06-28):** **Next.js** (App Router, React) + **Keystatic** (git-based CMS)
  + **Framer Motion** (expose-on-load + transitions) + **Vercel** (hosting + serverless Last.fm
  function) + **Tailwind** (default styling; can switch to CSS Modules if he prefers).
  WHY Next over Astro: Rajarshi already knows React/Next and wants a codebase HE'LL comfortably
  maintain for years — same "use what you'll actually keep up" logic as the CMS choice. Astro
  was recommended for raw performance but rejected (didn't want to learn a new framework for
  this). Next is plenty fast here (mostly static + next/image + a few interactive components).
- **Content management: decide WITH the stack. Strong lean toward a git-based CMS**
  (Keystatic / TinaCMS — visual editor that commits to the repo, free, content stays in code).
  WHY: Rajarshi used plain files-in-repo on his previous portfolio; it became tedious and he
  stopped updating it. The deciding criterion is "the setup he'll actually maintain," so avoid
  raw file editing. (Headless CMS like Sanity/Notion is the fallback if phone editing matters.)
  - **CMS access model (explained to him):** admin panel at a hidden route on his own site
    (e.g. `/keystatic` or `/admin`, not linked publicly). He logs in with his **GitHub
    account** (repo owner = only one who can get in); edits commit to the repo → auto-redeploy.
    Locally it runs at `localhost:3000/keystatic` with no auth. One CMS controls ALL editable
    content (build / frames / words / the play bento's active cards).
- **Fonts to add at build** (Rajarshi supplies files): Exposure (205TF, paid),
  Editorial New (Pangram Pangram, free personal). Space Mono + Inter via Google/self-host.
- This is currently NOT a git repo. (Init when we start building if desired.)
- **Mockup gotcha:** the preview canvas auto-themes to the user's app mode; in dark mode it
  forces `<h1/h2/h3>` to a near-white token. Mockups MUST set an explicit `color` on heading
  tags (the paper ink `#1B1916`) or headings render white in the preview. (Real site is
  unaffected — this is only a mockup-canvas artifact.)

---

## 6. Status & next steps

- [x] Brainstormed direction, narrowed to "The Index."
- [x] Confirmed hero + voice mockup (liked casual lowercase editorial).
- [x] Locked art direction: paper & coral palette + Exposure/Editorial New type system.
- [x] Locked layout system (shared "index" language + per-section distinct structure; numbering once).
- [x] Mocked ALL sections end-to-end (dummy data): 00 hello · 01 build · 02 frames · 03 words ·
  04 play · 05 cv (+toolkit) · 06 self · colophon/contact. Desktop + mobile.
- [x] Motion/interaction spec locked (restrained intensity; respects reduced-motion).
- [ ] Collect real content inventory (Section 4) — still mostly open.
- [x] Decided tech stack + CMS: Next.js + Keystatic + Framer Motion + Vercel + Tailwind.
- [x] Palette finalized: "cream & oxblood" (light). Dark mode ("ink") + toggle DEFERRED — build light-first.
- [ ] Get font files from Rajarshi (Exposure paid, Editorial New free).
- [ ] Decide target role specifics.
- [ ] Pull Anthropic frontend skill, then start building.

---

## 7. Changelog

- **2026-06-27** — Initial brainstorm. Established personality/tastes, brief, constraints.
  Rejected Constellation concept (too much artwork). Chose **"The Index"** (typography-first
  editorial, Portfolio++ bravery).
- **2026-06-27** — Locked art direction: "paper & coral" palette; type system =
  Exposure (hero, paid) + Editorial New (workhorse) + Space Mono + Inter. Defined signature
  "expose on load" intro motion (ties to his photography/colour-grading). Confirmed via mockups.
- **2026-06-28** — Mocked the WHOLE site section by section (desktop + mobile) and locked the
  structure/interactions for each: build (featured + work-index, floating cursor thumbnail),
  frames (one before/after grade slider + asymmetric contact sheet, labelled captions), words
  (type-only reading room), play (swappable bento, live now-playing via Last.fm, mobile 2-col
  bento), cv (experience timeline + "looking for" block + résumé + toolkit/skills), self
  (long-form + testimonial pull-quote), colophon (dark back-cover contact). Locked: number
  shown once; anti-monotony rule; curated previews + `see all` (build→GitHub, words→Medium);
  CMS = git-based, hidden admin route + GitHub login. Next: motion spec, content, stack.
- **2026-06-28** — Locked the STACK: Next.js (App Router) + Keystatic (git CMS) + Framer Motion
  + Vercel + Tailwind (Astro considered for perf but rejected — Rajarshi wants to maintain it in
  React/Next he already knows). Changed the PALETTE from paper & coral to **cream & oxblood**
  (light) + **ink** (dark mode), with a sun/moon toggle in the top bar (system default +
  remembered). Existing mockups still show the old paper & coral — re-skin at build.
