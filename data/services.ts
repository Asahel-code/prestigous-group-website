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
  },
  {
    id: "3",
    slug: "finishes",
    title: "Space Finishes",
    urlTitle: "Space Finishes",
    theme: "Elegant finishes. Elevated spaces.",
    description: "Elegant, luxurious finish selections that transform homes and elevate workspaces with character, quality, and cohesion.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1200",
    outcomes: ["Curated Collections", "Project-Specific Guidance", "Refined Interior Details"],
    audience: "Homeowners, property developers, and businesses creating spaces that feel considered, distinctive, and enduring.",
    applications: ["Residential interiors", "Office and workplace interiors"],
    primaryCta: "View Catalog",
    secondaryCta: "Request a Quote"
  }
];
