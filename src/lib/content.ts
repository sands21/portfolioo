import { reader } from "./reader";

export type Project = {
  slug: string;
  title: string;
  featured: boolean;
  order: number;
  role: string;
  tech: string;
  year: string;
  blurb: string;
  url: string | null;
  cover: string | null;
};

/** Fallback demo data so the section looks complete before real content is added via the CMS. */
const demoProjects: Project[] = [
  {
    slug: "aurora",
    title: "aurora",
    featured: true,
    order: 0,
    role: "design + build",
    tech: "react, framer motion",
    year: "2025",
    blurb:
      "a moody web player for discovering new artists — built because i genuinely cannot stop finding music.",
    url: "#",
    cover: null,
  },
  {
    slug: "harbor",
    title: "harbor",
    featured: false,
    order: 1,
    role: "design + dev",
    tech: "next.js",
    year: "2024",
    blurb: "a calm site for a freelance studio.",
    url: "#",
    cover: null,
  },
  {
    slug: "sns-content-system",
    title: "sns content system",
    featured: false,
    order: 2,
    role: "content + editing",
    tech: "notion, web",
    year: "2024—now",
    blurb: "templates + flow for a startup's content.",
    url: "#",
    cover: null,
  },
  {
    slug: "type-specimen",
    title: "type specimen",
    featured: false,
    order: 3,
    role: "build · for fun",
    tech: "react",
    year: "2023",
    blurb: "a playground for fonts i'm obsessed with.",
    url: "#",
    cover: null,
  },
];

export async function getProjects(): Promise<Project[]> {
  const items = await reader.collections.projects.all();
  if (!items.length) return demoProjects;
  return items
    .map((i) => {
      const e = i.entry as Record<string, unknown>;
      return {
        slug: i.slug,
        title: (e.title as string) ?? i.slug,
        featured: Boolean(e.featured),
        order: (e.order as number) ?? 0,
        role: (e.role as string) ?? "",
        tech: (e.tech as string) ?? "",
        year: (e.year as string) ?? "",
        blurb: (e.blurb as string) ?? "",
        url: (e.url as string) ?? null,
        cover: (e.cover as string) ?? null,
      } satisfies Project;
    })
    .sort((a, b) => a.order - b.order);
}

/* ---------------- 02 frames ---------------- */

export type FrameCategory = "still" | "motion" | "branding";
export type TileSize = "small" | "wide" | "tall";

export type Frame = {
  slug: string;
  caption: string;
  category: FrameCategory;
  size: TileSize;
  date: string;
  image: string | null;
  imagePosition: string;
  video: string | null;
  videoUrl: string | null;
  order: number;
};

export type GradeSlider = {
  caption: string;
  flat: string | null;
  graded: string | null;
};

const demoFrames: Frame[] = [
  { slug: "bangalore-night", caption: "bangalore, night", category: "still", size: "tall", date: "2024", image: null, imagePosition: "center", video: null, videoUrl: null, order: 0 },
  { slug: "street", caption: "street", category: "still", size: "small", date: "2024", image: null, imagePosition: "center", video: null, videoUrl: null, order: 1 },
  { slug: "reel-pg-day", caption: "a day in the pg", category: "motion", size: "small", date: "2024", image: null, imagePosition: "center", video: "https://www.w3schools.com/html/mov_bbb.mp4", videoUrl: null, order: 2 },
  { slug: "client-post", caption: "client post", category: "branding", size: "wide", date: "2023", image: null, imagePosition: "center", video: null, videoUrl: null, order: 3 },
  { slug: "whole-foods", caption: "whole foods", category: "still", size: "small", date: "2024", image: null, imagePosition: "center", video: null, videoUrl: null, order: 4 },
  { slug: "assam-river", caption: "assam, river", category: "still", size: "small", date: "2023", image: null, imagePosition: "center", video: null, videoUrl: null, order: 5 },
];

const demoGradeSlider: GradeSlider = {
  caption: "assam · 2024",
  flat: null,
  graded: null,
};

export async function getFrames(): Promise<Frame[]> {
  const items = await reader.collections.frames.all();
  if (!items.length) return demoFrames;
  return items
    .map((i) => {
      const e = i.entry as Record<string, unknown>;
      return {
        slug: i.slug,
        caption: (e.caption as string) ?? i.slug,
        category: (e.category as FrameCategory) ?? "still",
        size: (e.size as TileSize) ?? "small",
        date: (e.date as string) ?? "",
        image: (e.image as string) ?? null,
        imagePosition: (e.imagePosition as string) ?? "center",
        video: (e.video as string) ?? null,
        videoUrl: (e.videoUrl as string) ?? null,
        order: (e.order as number) ?? 0,
      } satisfies Frame;
    })
    .sort((a, b) => a.order - b.order);
}

export async function getGradeSlider(): Promise<GradeSlider> {
  const s = (await reader.singletons.gradeSlider.read()) as Record<string, unknown> | null;
  if (!s) return demoGradeSlider;
  return {
    caption: (s.caption as string) ?? demoGradeSlider.caption,
    flat: (s.flat as string) ?? null,
    graded: (s.graded as string) ?? null,
  };
}
