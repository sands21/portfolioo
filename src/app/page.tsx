import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { Build } from "@/components/sections/Build";
import { Frames } from "@/components/sections/Frames";
import { Words } from "@/components/sections/Words";
import { Play } from "@/components/sections/Play";
import { Cv } from "@/components/sections/Cv";
import { Self } from "@/components/sections/Self";
import {
  getProjects,
  getFrames,
  getGradeSlider,
  getWriting,
  getPlayCards,
  getExperience,
  getProfile,
  getAbout,
  getTestimonials,
} from "@/lib/content";

export default async function Home() {
  const [
    projects,
    frames,
    grade,
    writing,
    playCards,
    experience,
    profile,
    about,
    testimonials,
  ] = await Promise.all([
    getProjects(),
    getFrames(),
    getGradeSlider(),
    getWriting(),
    getPlayCards(),
    getExperience(),
    getProfile(),
    getAbout(),
    getTestimonials(),
  ]);

  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Build projects={projects} />
        <Frames grade={grade} frames={frames} />
        <Words writing={writing} />
        <Play cards={playCards} />
        <Cv experience={experience} profile={profile} />
        <Self about={about} profile={profile} testimonial={testimonials[0] ?? null} />
      </main>

      <footer className="border-t border-hairline px-6 py-10 text-center font-mono text-[11px] text-muted">
        made in a bangalore pg · {new Date().getFullYear()} · assam &rarr; bangalore
      </footer>
    </>
  );
}
