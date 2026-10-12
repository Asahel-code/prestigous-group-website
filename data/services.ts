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
  proposalOptions: string[];
  defaultProposalOption: string;
  supportingAreas: string[];
  learningModes?: string[];
  detailSections: {
    title: string;
    lead: string;
    description?: string;
    listLabel?: string;
    items: string[];
  }[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "1",
    slug: "training",
    title: "Training",
    urlTitle: "Explore Training",
    theme: "Building Skills. Strengthening Performance. Creating Opportunities.",
    description: "Practical training for organizations, professionals and individuals.",
    imageUrl: "/img/training.webp",
    imageAlt: "A facilitator leading a practical workshop for training participants.",
    outcomes: ["Certified Competency", "Practical Skill Application", "Increased Team Productivity"],
    audience: "Professionals, emerging leaders, and teams ready to build capability and turn learning into action.",
    primaryCta: "Explore Training",
    secondaryCta: "Request a Training Proposal",
    proposalOptions: [
      "Training & Development",
      "Work at Heights & Safety",
      "Project Management",
      "Quality Management",
      "Environment Management",
      "Food Safety",
    ],
    defaultProposalOption: "Corporate Training",
    supportingAreas: [
      "Corporate Training",
      "Career & Business Skills",
      "Leadership & Management",
      "Business & Professional Skills",
      "Project Management",
    ],
    learningModes: ["Online", "Physical", "Self-Paced"],
    detailSections: [
      {
        title: "Corporate Training",
        lead: "Safety, Health & Compliance",
        items: [
          "Work at Heights",
          "Confined Space",
          "First Aid",
          "Emergency Preparedness",
          "Occupational Health & Safety",
          "Crane Management",
          "Food Safety",
          "Quality Management",
        ],
      },
      {
        title: "Career & Business Skills",
        lead: "For individuals, graduates, job seekers and entrepreneurs.",
        items: [
          "AI for Small Business & Entrepreneurs",
          "Social Media Management: From Skill to Client",
          "Freelance Business Bootcamp",
          "Personal Brand & LinkedIn for Career Growth",
          "Bookkeeping & QuickBooks",
        ],
      },
      {
        title: "Leadership & Management",
        lead: "Developing confident leaders and high-performing teams.",
        items: [
          "Leadership & Management Skills",
          "Supervisory Skills for New Managers",
          "Strategic Leadership & Management",
          "Team Building & Performance Management",
        ],
      },
      {
        title: "Business & Professional Skills",
        lead: "For organizations and working professionals.",
        items: [
          "Customer Service Excellence",
          "Sales & Marketing",
          "Communication & Public Speaking",
          "Personal Effectiveness",
          "AI for Workplace Productivity",
        ],
      },
      {
        title: "Project Management",
        lead: "Delivering projects with confidence and control.",
        items: [
          "Project Management Essentials",
          "Project Planning & Scheduling",
          "Project Monitoring & Risk Management",
          "Project Coordination",
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
    description: "Focused professional expertise to help organisations assess, improve and deliver.",
    imageUrl: "/img/consultancy-team.webp",
    imageAlt: "A predominantly Black team discussing work around a meeting table.",
    outcomes: ["ISO Audit Readiness", "Process Efficiency", "Risk Mitigation"],
    audience: "Executives, senior leadership teams, and organisations seeking sharper decisions, stronger systems, and lasting performance.",
    primaryCta: "Explore Consultancy",
    secondaryCta: "Request a Proposal",
    proposalOptions: [
      "Work at Heights & Safety",
      "Audit & Assessment",
      "Project Management",
      "Quality Management",
      "Environment Management",
      "Gap Analysis",
      "Work at Heights Training",
    ],
    defaultProposalOption: "Project Management",
    supportingAreas: ["Project Management", "Audit & Assessment"],
    detailSections: [
      {
        title: "Project Management",
        lead: "Plan Better. Deliver with Confidence.",
        description: "We provide practical project management support to help organisations plan, coordinate, monitor and deliver projects effectively.",
        listLabel: "Our support includes",
        items: ["Planning", "Implementation", "Coordination", "Monitoring", "Reporting"],
      },
      {
        title: "Audit & Assessment",
        lead: "Identify gaps. Strengthen performance.",
        description: "We conduct structured audits and assessments to identify gaps, risks and opportunities for improvement.",
        listLabel: "Our services include",
        items: [
          "Compliance Audits",
          "Workplace Assessment",
          "Quality Assessments",
          "Gap analysis",
          "Corrective action recommendations",
        ],
      },
    ],
  },
];

export const specialistFocusData = {
  title: "Work at Heights & Safety",
  lead: "Practical expertise for safer work at height.",
  items: [
    "Work at Height Training",
    "Fall Protection",
    "Safety Audits",
    "Rescue Preparedness",
  ],
};
