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
  proposalOptions: string[];
  defaultProposalOption: string;
  supportingAreas: string[];
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
    theme: "Training & Development",
    description: "Practical, workplace-focused training designed to build competence, confidence and safer work practices.",
    imageUrl: "/img/training.webp",
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
    defaultProposalOption: "Safety & Compliance",
    supportingAreas: ["Safety & Compliance", "Leadership & Strategic Planning"],
    detailSections: [
      {
        title: "Safety & Compliance",
        lead: "Practical training for safer, compliant workplaces.",
        items: [
          "Work at Heights",
          "Confined Space",
          "Crane Operation",
          "Safety & Emergency Preparedness",
          "First Aid",
          "Fire Safety",
          "Occupational Health & Safety",
          "Food Safety",
          "Quality Management",
          "Environment Management",
        ],
      },
      {
        title: "Leadership & Strategic Planning",
        lead: "Professional development for stronger leaders, teams and organizational performance.",
        items: [
          "Leadership & Management",
          "Project Management",
          "Sales & Marketing",
          "Soft Skills",
          "Team & Capacity Building",
          "Business & Professional Skills",
          "Digital Skills",
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
    description: "Focused professional expertise to help organizations assess, improve and deliver.",
    imageUrl: "https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&q=85&w=1400",
    outcomes: ["ISO Audit Readiness", "Process Efficiency", "Risk Mitigation"],
    audience: "Executives, senior leadership teams, and organizations seeking sharper decisions, stronger systems, and lasting performance.",
    primaryCta: "Explore Consultancy",
    secondaryCta: "Request a Proposal",
    proposalOptions: [
      "Work at Heights & Safety",
      "Audit & Assessment",
      "Project Management",
      "Quality Management",
      "Environment Management",
      "Gap Analysis",
    ],
    defaultProposalOption: "Project Management",
    supportingAreas: ["Project Management", "Audit & Assessment"],
    detailSections: [
      {
        title: "Project Management",
        lead: "Plan Better. Deliver with Confidence.",
        description: "We provide practical project management support to help organizations plan, coordinate, monitor and deliver projects effectively.",
        listLabel: "Our support includes",
        items: ["Planning", "Implementation", "Coordination", "Monitoring", "Reporting"],
      },
      {
        title: "Auditing & Assessment",
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
