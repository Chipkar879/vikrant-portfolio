export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  link?: string;
};

export type Achievement = {
  id: string;
  title: string;
  year: string;
  category: "award" | "certificate" | "competition" | "programme" | "milestone";
  description: string;
};