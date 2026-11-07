import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/pro/Hero";
import Marquee from "@/components/pro/Marquee";
import Reveal from "@/components/pro/Reveal";
import SectionTitle from "@/components/pro/SectionTitle";
import ProjectCard from "@/components/pro/ProjectCard";
import AchievementRow from "@/components/pro/AchievementRow";
import { projects } from "@/content/projects";
import { achievements } from "@/content/achievements";
import { profile } from "@/content/profile";

const headline =
  "Founder of Bull Run Academy. Building projects in AI, simulation and mathematics.";

const ticker = [
  "Mathematics",
  "Python",
  "Artificial Intelligence",
  "Physics",
  "Entrepreneurship",
  "Next.js",
  "React",
  "FastAPI",
  "Simulations",
  "Athletics",
];

export default function ProHome() {
  const recent = [...achievements].slice(-4).reverse();

  return (
    <div className="space-y-28">
      <Hero
        name={profile.name}
        headline={headline}
        stats={[
          { label: "Projects", value: projects.length },
          { label: "Awards & programmes", value: achievements.length },
          { label: "Ways to explore", value: 2 },
        ]}
      />

      <Marquee items={ticker} />

      <section>
        <Reveal>
          <SectionTitle index="01">Projects</SectionTitle>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <Link
          href="/pro/projects"
          className="mt-8 inline-flex items-center gap-2 text-sm text-cyan hover:underline"
        >
          All projects <ArrowRight size={14} />
        </Link>
      </section>

      <section>
        <Reveal>
          <SectionTitle index="02">Recent achievements</SectionTitle>
        </Reveal>
        <ul className="mt-6">
          {recent.map((a) => (
            <AchievementRow key={a.id} item={a} />
          ))}
        </ul>
        <Link
          href="/pro/achievements"
          className="mt-8 inline-flex items-center gap-2 text-sm text-cyan hover:underline"
        >
          All achievements <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}