import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/components/Logo";
import Reveal from "@/components/pro/Reveal";
import ProjectCard from "@/components/pro/ProjectCard";
import AchievementRow from "@/components/pro/AchievementRow";
import { projects } from "@/content/projects";
import { achievements } from "@/content/achievements";
import { profile } from "@/content/profile";

const headline =
  "Founder of Bull Run Academy. Building projects in AI, simulation and mathematics.";

export default function ProHome() {
  const recent = [...achievements].slice(-3).reverse();

  return (
    <div className="space-y-24">
      <section className="flex flex-col items-start gap-6 pt-6">
        <Reveal>
          <Logo size={72} />
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-6xl">
            Hi, I&rsquo;m <span className="text-crimson">{profile.name}</span>
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            {headline}
          </p>
        </Reveal>
        <Reveal delay={0.15} className="flex flex-wrap gap-3">
          <Link
            href="/pro/projects"
            className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            View projects <ArrowRight size={16} />
          </Link>
          <Link
            href="/pro/achievements"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold transition-colors hover:border-cyan hover:text-cyan"
          >
            Achievements
          </Link>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <h2 className="font-display text-2xl font-semibold">Projects</h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
        <Link
          href="/pro/projects"
          className="mt-6 inline-flex items-center gap-2 text-sm text-cyan hover:underline"
        >
          All projects <ArrowRight size={14} />
        </Link>
      </section>

      <section>
        <Reveal>
          <h2 className="font-display text-2xl font-semibold">
            Recent achievements
          </h2>
        </Reveal>
        <ul className="mt-4">
          {recent.map((a) => (
            <AchievementRow key={a.id} item={a} />
          ))}
        </ul>
        <Link
          href="/pro/achievements"
          className="mt-6 inline-flex items-center gap-2 text-sm text-cyan hover:underline"
        >
          All achievements <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}