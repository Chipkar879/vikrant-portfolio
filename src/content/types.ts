export type Project = {
  id: string;
  name: string;
  period: string;
  role?: string;
  tagline: string;
  description: string;
  features: string[];
  stack?: string[];
  link?: string;
};

export type Achievement = {
  id: string;
  title: string;
  year: string;
  category:
    | "award"
    | "certificate"
    | "programme"
    | "event"
    | "role"
    | "competition"
    | "milestone";
  description?: string;
};

export type Profile = {
  name: string;
  interests: string[];
  goals: string[];
};