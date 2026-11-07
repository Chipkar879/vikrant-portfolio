import type { Metadata } from "next";
import Reveal from "@/components/pro/Reveal";
import { profile } from "@/content/profile";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="space-y-16">
      <section>
        <Reveal>
          <h1 className="font-display text-4xl font-semibold tracking-tight">
            About me
          </h1>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            I&rsquo;m {profile.name}, founder and CEO of Bull Run Academy. I
            enjoy mathematics and Olympiad problem-solving, write Python, and
            build projects where science, technology and AI meet.
          </p>
        </Reveal>
      </section>

      <div className="grid gap-12 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-xl font-semibold text-cyan">
            Interests
          </h2>
          <ul className="mt-4 space-y-3 text-muted">
            {profile.interests.map((i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                {i}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-xl font-semibold text-crimson">
            Goals
          </h2>
          <ul className="mt-4 space-y-3 text-muted">
            {profile.goals.map((g) => (
              <li key={g} className="flex gap-3">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-crimson" />
                {g}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </div>
  );
}