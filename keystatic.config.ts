import { config, fields, collection, singleton } from "@keystatic/core";

/**
 * Keystatic CMS config — the single place that controls all editable content.
 *
 * Local dev:  http://localhost:3000/keystatic   (no login needed)
 * Production: switch `storage` to GitHub mode (see comment below) so logging in
 *             with your GitHub account commits changes to the repo + redeploys.
 *
 * Content is written to:  src/content/<collection>/*
 * Images/files are written to: public/images/* and public/files/*
 */
export default config({
  // For production with GitHub login, replace with:
  // storage: { kind: "github", repo: "sands21/portfolioo" },
  storage: { kind: "local" },

  ui: {
    brand: { name: "rajarshi — portfolio" },
  },

  collections: {
    // 01 — build
    projects: collection({
      label: "Build — projects",
      slugField: "title",
      path: "src/content/projects/*",
      format: { data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        featured: fields.checkbox({
          label: "Featured (shown big at the top)",
          defaultValue: false,
        }),
        order: fields.integer({ label: "Order (lower = higher)", defaultValue: 0 }),
        role: fields.text({ label: "Role", description: "e.g. design + build" }),
        tech: fields.text({ label: "Tech", description: "e.g. react, framer motion" }),
        year: fields.text({ label: "Year", description: "e.g. 2025 or 2024—now" }),
        blurb: fields.text({ label: "One-line blurb", multiline: true }),
        url: fields.url({ label: "Live / case-study URL" }),
        cover: fields.image({
          label: "Screenshot",
          directory: "public/images/projects",
          publicPath: "/images/projects/",
        }),
      },
    }),

    // 02 — frames (the contact-sheet grid; the single before/after slider is a singleton below)
    frames: collection({
      label: "Frames — photos / video / branding",
      slugField: "caption",
      path: "src/content/frames/*",
      format: { data: "yaml" },
      schema: {
        caption: fields.slug({ name: { label: "Caption" } }),
        category: fields.select({
          label: "Category",
          options: [
            { label: "Still", value: "still" },
            { label: "Motion / reel", value: "motion" },
            { label: "Branding", value: "branding" },
          ],
          defaultValue: "still",
        }),
        size: fields.select({
          label: "Tile size",
          options: [
            { label: "Small", value: "small" },
            { label: "Wide", value: "wide" },
            { label: "Tall", value: "tall" },
          ],
          defaultValue: "small",
        }),
        date: fields.text({ label: "Date", description: "e.g. 2024" }),
        order: fields.integer({ label: "Order", defaultValue: 0 }),
        image: fields.image({
          label: "Image (or video poster)",
          directory: "public/images/frames",
          publicPath: "/images/frames/",
        }),
        videoUrl: fields.url({ label: "Video URL (for motion tiles)" }),
      },
    }),

    // 03 — words
    writing: collection({
      label: "Words — writing",
      slugField: "title",
      path: "src/content/writing/*",
      format: { data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        latest: fields.checkbox({ label: "Latest (featured)", defaultValue: false }),
        kind: fields.select({
          label: "Kind",
          options: [
            { label: "Essay", value: "essay" },
            { label: "Note", value: "note" },
          ],
          defaultValue: "essay",
        }),
        date: fields.text({ label: "Date", description: "e.g. may 2025" }),
        readTime: fields.text({ label: "Read time", description: "e.g. 6 min" }),
        excerpt: fields.text({ label: "Excerpt (shown for latest)", multiline: true }),
        url: fields.url({ label: "Medium URL" }),
      },
    }),

    // 04 — play (the swappable bento; mark ~6–8 as active)
    play: collection({
      label: "Play — bento cards",
      slugField: "title",
      path: "src/content/play/*",
      format: { data: "yaml" },
      schema: {
        title: fields.slug({ name: { label: "Title", description: "the big line, e.g. elden ring" } }),
        label: fields.text({ label: "Label", description: "the small coral line, e.g. currently gaming" }),
        sub: fields.text({ label: "Sub-line", multiline: true }),
        active: fields.checkbox({ label: "Active (shown on the site)", defaultValue: true }),
        size: fields.select({
          label: "Size",
          options: [
            { label: "Small", value: "small" },
            { label: "Wide", value: "wide" },
            { label: "Tall", value: "tall" },
          ],
          defaultValue: "small",
        }),
        order: fields.integer({ label: "Order", defaultValue: 0 }),
        isNowPlaying: fields.checkbox({
          label: "This is the live now-playing card",
          defaultValue: false,
        }),
      },
    }),

    // 05 — cv
    experience: collection({
      label: "CV — experience",
      slugField: "role",
      path: "src/content/experience/*",
      format: { data: "yaml" },
      schema: {
        role: fields.slug({ name: { label: "Role" } }),
        org: fields.text({ label: "Org · location", description: "e.g. sns · remote" }),
        dates: fields.text({ label: "Dates", description: "e.g. 2024 — now" }),
        order: fields.integer({ label: "Order (lower = newer/top)", defaultValue: 0 }),
        blurb: fields.text({ label: "Blurb", multiline: true }),
        tags: fields.text({ label: "Tags", description: "comma separated" }),
      },
    }),

    // testimonials (1 for now; scales later)
    testimonials: collection({
      label: "Testimonials",
      slugField: "name",
      path: "src/content/testimonials/*",
      format: { data: "yaml" },
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        role: fields.text({ label: "Role / relationship", description: "e.g. client · brand designer" }),
        quote: fields.text({ label: "Quote", multiline: true }),
      },
    }),
  },

  singletons: {
    // global profile + contact + the live now-playing source
    profile: singleton({
      label: "Profile & contact",
      path: "src/content/profile",
      format: { data: "yaml" },
      schema: {
        name: fields.text({ label: "Name", defaultValue: "rajarshi sandilya" }),
        tagline: fields.text({ label: "Hero tagline", multiline: true }),
        origin: fields.text({ label: "Origin", defaultValue: "assam" }),
        current: fields.text({ label: "Current base", defaultValue: "bangalore" }),
        lookingFor: fields.text({ label: "CV — 'currently looking for'", multiline: true }),
        resume: fields.file({
          label: "Résumé (PDF)",
          directory: "public/files",
          publicPath: "/files/",
        }),
        email: fields.text({ label: "Email" }),
        github: fields.url({ label: "GitHub URL" }),
        linkedin: fields.url({ label: "LinkedIn URL" }),
        instagram: fields.url({ label: "Instagram URL" }),
        medium: fields.url({ label: "Medium URL" }),
        lastfmUser: fields.text({
          label: "Last.fm username",
          description: "powers the live now-playing card",
        }),
      },
    }),

    // the one featured before/after colour-grade slider in 02 frames
    gradeSlider: singleton({
      label: "Frames — grade slider (featured)",
      path: "src/content/grade-slider",
      format: { data: "yaml" },
      schema: {
        caption: fields.text({ label: "Caption", description: "e.g. assam · 2024" }),
        flat: fields.image({
          label: "Flat / ungraded image",
          directory: "public/images/grade",
          publicPath: "/images/grade/",
        }),
        graded: fields.image({
          label: "Graded image",
          directory: "public/images/grade",
          publicPath: "/images/grade/",
        }),
      },
    }),
  },
});
