import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "bull-run-academy",
    name: "Bull Run Academy",
    period: "2026",
    role: "Founder and CEO. Contributes to website development, technical execution, business strategy and team coordination.",
    tagline: "Financial literacy for teenagers.",
    description:
      "A financial literacy platform designed to teach teenagers aged 13\u201318 about the stock market and investing.",
    features: [
      "Virtual stock market simulator with \u20B950,000 starting capital",
      "Interactive learning modules",
      "Quizzes and game-based learning",
    ],
  },
  {
    id: "vesper",
    name: "VESPER",
    period: "2025\u201326",
    tagline: "An AI-powered assistant for science, technology and simulations.",
    description:
      "An AI-powered assistant focused on science, technology and simulations, exploring how AI can make complex scientific concepts easier to understand.",
    features: [
      "Interactive circuit simulations with batteries, switches and bulbs",
      "Ohm\u2019s Law, electrical power and current calculations",
    ],
  },
  {
    id: "sigma",
    name: "Sigma",
    period: "2026",
    tagline: "A private mathematics learning and practice platform.",
    description:
      "A private mathematics learning and practice platform, designed to make mathematics practice more organised and accessible.",
    features: [
      "PDF-based learning library",
      "Student authentication",
      "Admin dashboard",
      "AI mathematics tutor named V",
    ],
    stack: ["React", "FastAPI", "Python", "SQLite"],
  },
  {
    id: "portfolio-website",
    name: "Vikrant\u2019s Portfolio Website",
    period: "2025\u201326",
    tagline: "A professional portfolio and an interactive Explorer.",
    description:
      "A personal portfolio showcasing projects, achievements, skills and experiences.",
    features: [
      "A professional portfolio and an interactive Explorer experience",
      "Experiments with animations, interactive 3D environments and AI integration",
    ],
    stack: ["Next.js", "React"],
  },
];