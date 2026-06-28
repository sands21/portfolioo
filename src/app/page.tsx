import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { Build } from "@/components/sections/Build";
import { Frames } from "@/components/sections/Frames";
import { getProjects, getFrames, getGradeSlider } from "@/lib/content";

const placeholders = [
  { id: "words", n: "03", word: "words" },
  { id: "play", n: "04", word: "play" },
  { id: "cv", n: "05", word: "cv" },
  { id: "self", n: "06", word: "self" },
];

export default async function Home() {
  const [projects, frames, grade] = await Promise.all([
    getProjects(),
    getFrames(),
    getGradeSlider(),
  ]);

  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Build projects={projects} />
        <Frames grade={grade} frames={frames} />

        {placeholders.map((s) => (
          <section
            key={s.id}
            id={s.id}
            className="mx-auto max-w-6xl scroll-mt-20 border-t border-hairline px-6 py-24"
          >
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[15px] text-accent">{s.n}</span>
              <h2 className="font-display text-[clamp(2rem,6vw,3.4rem)] leading-none text-ink">
                {s.word}
              </h2>
            </div>
            <p className="mt-4 font-mono text-[11px] text-muted">
              — building this section next —
            </p>
          </section>
        ))}
      </main>

      <footer className="border-t border-hairline px-6 py-10 text-center font-mono text-[11px] text-muted">
        made in a bangalore pg · {new Date().getFullYear()} · assam &rarr; bangalore
      </footer>
    </>
  );
}
