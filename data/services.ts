export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  urlTitle: string;
  theme: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  outcomes: string[];
  audience: string;
  applications?: string[];
  primaryCta: string;
  secondaryCta: string;
  learningModes?: string[];
  detailSections: {
    title: string;
    lead?: string;
    description?: string;
    listLabel?: string;
    items: string[];
  }[];
}

export const specialistFocusData = {
  title: "Specialist Focus on Safety & Compliance",
  lead: "High-risk environments require rigorous standards and expert supervision.",
  items: [
    "Work at Heights Competency & Safety",
    "Confined Space Entry & Rescue",
    "First Aid & Emergency Response",
    "Occupational Health & Safety (OHS) Compliance",
  ],
};

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    slug: "training",
    title: "Training",
    urlTitle: "Explore Training",
    theme:
      "Building Skills. Strengthening Performance. Creating Opportunities.",
    description:
      "Practical training for organizations, professionals and individuals.",
    imageUrl: "/img/training.webp",
    imageAlt:
      "A facilitator leading a practical workshop for training participants.",
    outcomes: [
      "Certified Competency",
      "Practical Skill Application",
      "Increased Team Productivity",
    ],
    audience:
      "Professionals, emerging leaders, and teams ready to build capability and turn learning into action.",
    primaryCta: "Explore Training",
    secondaryCta: "Request a Training Proposal",
    learningModes: ["Online", "Physical", "Self-Paced"],
    detailSections: [
      {
        title: "Safety, Health & Compliance",
        items: [
          "Work at Heights",
          "Confined Space",
          "First Aid",
          "Emergency Preparedness",
          "Occupational Health & Safety",
          "Crane Management",
        ],
      },
      {
        title: "Leadership & Strategic Management",
        items: [
          "Leadership & Management Skills",
          "Supervisory Skills for New Managers",
          "Project Management",
          "Strategic Leadership & Management",
          "Team Building & Performance Management",
        ],
      },
      {
        title: "ISO & Management Systems",
        lead: "For organizations systems, audits, standard & continual improvement.",
        items: [
          "Gap Analysis & Implementation",
          "Quality Management Systems",
          "Food Safety Management",
          "Environment Management Systems",
          "Risk Based Thinking & Management Systems",
        ],
      },
      {
        title: "Career & Enterprise Skills",
        lead: "For Graduates, Job seekers, Enterprenuers, Professionals & Corporates.",
        items: [
          "Sales & Marketing For Business Growth",
          "AI for Business Growth & Entrepreneurship",
          "Idea To Income: Start & Grow Your Business",
          "Workplace Incident Management & Emergency Preparedness",
          "Bookkeeping & QuickBooks",
          "Customer Service Excellence",
          "Communication & Public Speaking",
          "China to Kenya: Practical Import Business Masterclass",
        ],
      },
    ],
  },
  {
    id: "2",
    slug: "consultancy",
    title: "Consultancy",
    urlTitle: "Explore Consultancy",
    theme: "Consultancy",
    description:
      "Focused professional expertise to help organisations assess, improve and deliver.",
    imageUrl: "/img/consultancy-team.webp",
    imageAlt:
      "A predominantly Black team discussing work around a meeting table.",
    outcomes: ["ISO Audit Readiness", "Process Efficiency", "Risk Mitigation"],
    audience:
      "Executives, senior leadership teams, and organisations seeking sharper decisions, stronger systems, and lasting performance.",
    primaryCta: "Explore Consultancy",
    secondaryCta: "Request a Proposal",
    detailSections: [
      {
        title: "Project Management",
        items: [
          "Planning",
          "Monitoring",
          "Risk Management",
          "Coordination and Performance",
        ],
      },
      {
        title: "Audit & Assessment",
        items: [
          "Compliance Audits",
          "Workplace Assessment",
          "Risk Assessment",
          "Quality Assessment",
          "Process and Performance Assessments",
        ],
      },
    ],
  },
];

