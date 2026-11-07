import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Hero from "@/components/pro/Hero";
import Marquee from "@/components/pro/Marquee";
import Reveal from "@/components/pro/Reveal";
import SectionTitle from "@/components/pro/SectionTitle";
import AboutBento from "@/components/pro/AboutBento";
import Timeline from "@/components/pro/Timeline";
import ProjectCard from "@/components/pro/ProjectCard";
import Toolkit from "@/components/pro/Toolkit";
import AchievementRow from "@/components/pro/AchievementRow";
import ModeTeaser from "@/components/pro/ModeTeaser";
import { projects } from "@/content/projects";
import { achievements } from "@/content/achievements";
import { profile } from "@/content/profile";
import { journey } from "@/content/journey";

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

const spans = [
  "md:col-span-4",
  "md:col-span-2",
  "md:col-span-2",
  "md:col-span-4",
];

export default function ProHome() {
  const recent = [...achievements].slice(-4).reverse();

  return (
    <div className="space-y-32">
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
          <SectionTitle index="01">About</SectionTitle>
        </Reveal>
        <div className="mt-10">
          <AboutBento />
        </div>
      </section>

      <section>
        <Reveal>
          <SectionTitle index="02">Journey</SectionTitle>
        </Reveal>
        <div className="mt-10">
          <Timeline stages={journey} />
        </div>
      </section>

      <section>
        <Reveal>
          <SectionTitle index="03">Projects</SectionTitle>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-6">
          {projects.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 0.06}
              className={`h-full ${spans[i % spans.length]}`}
            >
              <ProjectCard project={p} index={i} />
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
          <SectionTitle index="04">Toolkit</SectionTitle>
        </Reveal>
        <div className="mt-10">
          <Toolkit />
        </div>
      </section>

      <section>
        <Reveal>
          <SectionTitle index="05">Achievements</SectionTitle>
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

      <section>
        <Reveal>
          <SectionTitle index="06">Two ways to explore</SectionTitle>
        </Reveal>
        <div className="mt-10">
          <ModeTeaser />
        </div>
      </section>
    </div>
  );
}