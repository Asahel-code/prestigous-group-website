export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  urlTitle: string;
  theme: string;
  description: string;
  imageUrl: string;
  outcomes: string[];
  primaryCta: string;
  secondaryCta: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    slug: "training",
    title: "Training",
    urlTitle: "Explore Training",
    theme: "Empowering People. Strengthening Organisations",
    description: "Practical, NITA-accredited programmes that build confident people and capable teams.",
    imageUrl: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
    outcomes: ["Certified Competency", "Practical Skill Application", "Increased Team Productivity"],
    primaryCta: "View Programs",
    secondaryCta: "Request Corporate Training"
  },
  {
    id: "2",
    slug: "consultancy",
    title: "Consultancy",
    urlTitle: "Explore Solutions",
    theme: "Practical Solutions. Measurable Impact",
    description: "Strategic advisory and operational clarity for organizations ready to make progress that lasts.",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1000",
    outcomes: ["ISO Audit Readiness", "Process Efficiency", "Risk Mitigation"],
    primaryCta: "Our Services",
    secondaryCta: "Request a Proposal"
  },
  {
    id: "3",
    slug: "finishes",
    title: "Explore Finishes",
    urlTitle: "Space Finishes",
    theme: "Transform your space",
    description: "Thoughtful finish selections and interior solutions that bring character, quality, and cohesion to every space.",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=85&w=1200",
    outcomes: ["Curated Collections", "Project-Specific Guidance", "Refined Interior Details"],
    primaryCta: "View Catalog",
    secondaryCta: "Request a Quote"
  }
];
