export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  urlTitle: string;
  theme: string;
  description: string;
  imageUrl: string;
  outcomes: string[];
  audience: string;
  applications?: string[];
  primaryCta: string;
  secondaryCta: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    slug: "training",
    title: "Training",
    urlTitle: "Explore Training",
    theme: "Professional energy. Practical capability.",
    description: "Professional, energetic learning programmes that equip people to perform with confidence and momentum.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    outcomes: ["Certified Competency", "Practical Skill Application", "Increased Team Productivity"],
    audience: "Professionals, emerging leaders, and teams ready to build capability and turn learning into action.",
    primaryCta: "View Programs",
    secondaryCta: "Request Corporate Training"
  },
  {
    id: "2",
    slug: "consultancy",
    title: "Consultancy",
    urlTitle: "Explore Solutions",
    theme: "Executive insight. Sophisticated solutions.",
    description: "Executive-level advisory that brings clarity, discretion, and strategic confidence to complex organizational decisions.",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000",
    outcomes: ["ISO Audit Readiness", "Process Efficiency", "Risk Mitigation"],
    audience: "Executives, senior leadership teams, and organizations seeking sharper decisions, stronger systems, and lasting performance.",
    primaryCta: "Our Services",
    secondaryCta: "Request a Proposal"
  }
];
