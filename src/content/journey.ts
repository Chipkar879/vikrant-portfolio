export type JourneyItem = {
  text: string;
  kind: "achievement" | "project" | "goal";
};

export type JourneyStage = {
  period: string;
  items: JourneyItem[];
};

export const journey: JourneyStage[] = [
  {
    period: "2024\u201325",
    items: [
      { text: "Student of the Year \u2013 Shikha Academy", kind: "achievement" },
    ],
  },
  {
    period: "2025",
    items: [
      {
        text: "Lodha Genius Programme \u2013 Certificate of Achievement",
        kind: "achievement",
      },
      { text: "Eureka! Junior \u2013 Enthusiast Track", kind: "achievement" },
      {
        text: "TUMO Programme \u2013 Technology and Creative Learning",
        kind: "achievement",
      },
      { text: "TUMO AI/Teen Conference", kind: "achievement" },
      {
        text: "Shikha Karobaar Pitchers \u2013 Communication Committee (2025\u201326)",
        kind: "achievement",
      },
      { text: "Started building VESPER", kind: "project" },
      { text: "Started building this portfolio website", kind: "project" },
    ],
  },
  {
    period: "2026",
    items: [
      { text: "Founded Bull Run Academy", kind: "project" },
      { text: "Building Sigma, a mathematics platform", kind: "project" },
      {
        text: "Selected for Lodha Genius \u2013 Advanced Understanding Programme (LG-AUP)",
        kind: "achievement",
      },
      {
        text: "Math Excursions for Competitions \u2013 Continued Learning Programme",
        kind: "achievement",
      },
    ],
  },
  {
    period: "Next",
    items: [{ text: "Prepare for and participate in IOQM", kind: "goal" }],
  },
];