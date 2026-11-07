import type { Metadata } from "next";
import Reveal from "@/components/pro/Reveal";
import ProjectCard from "@/components/pro/ProjectCard";
import { projects } from "@/content/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div>
      <Reveal>
        <h1 className="font-display text-4xl font-semibold tracking-tight">
          Projects
        </h1>
        <p className="mt-4 max-w-2xl text-muted">
          Things I&rsquo;ve built and am building.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.id} delay={i * 0.05}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}