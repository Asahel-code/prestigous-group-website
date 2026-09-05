export interface EventItem {
  id: string;
  slug: string;
  title: string;
  theme?: string;
  date: string;
  time?: string;
  venue: string;
  location?: string;
  category: "Upcoming" | "Recent" | "Past";
  imageUrl: string;
  description: string;
  isBookingOpen: boolean;
  tagline?: string;
  overview?: string;
  agenda?: { time: string; activity: string }[];
  speakers?: {
    name: string;
    role: string;
    company: string;
    imageUrl: string;
  }[];
}

export const eventsData: EventItem[] = [
  {
    id: "1",
    slug: "blue-print-2027",
    title: "BluePrint  2027",
    theme: "Leadership & Competitive Advantage Forum",
    date: "2026-11-15T09:00:00Z",
    time: "09:00 AM – 05:00 PM EAT",
    venue: "Eka Hotel",
    location: "Nairobi, Kenya",
    category: "Upcoming",
    imageUrl:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1000",
    description:
      "A premier summit gathering industry leaders to discuss the future of corporate strategy and resilient leadership.",
    tagline:
      "Driving sustainability, executive leadership, and growth strategy for modern organizations.",
    overview:
      "Blue Print 2027 brings together senior leaders, operators, and policymakers to explore growth strategy, governance, and practical execution models for the next decade.",
    isBookingOpen: true,
    agenda: [
      { time: "09:00 AM", activity: "Keynote Address" },
      { time: "11:00 AM", activity: "Panel Discussion: Navigating Change" },
      { time: "02:00 PM", activity: "Interactive Workshops" },
    ],
    speakers: [
      {
        name: "Jane Doe",
        role: "CEO",
        company: "FutureCorp",
        imageUrl:
          "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      },
      {
        name: "John Smith",
        role: "Strategy Director",
        company: "Innovate Ltd",
        imageUrl:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      },
    ],
  },
  // {
  //   id: "2",
  //   slug: "hse-compliance-workshop",
  //   title: "HSE Compliance & Best Practices Workshop",
  //   date: "2024-12-05T08:30:00Z",
  //   time: "08:30 AM – 03:30 PM EAT",
  //   venue: "Radisson Blu Hotel",
  //   location: "Upper Hill, Nairobi",
  //   category: "Upcoming",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
  //   description:
  //     "Learn the latest regulatory requirements and best practices for ensuring a safe and compliant workplace.",
  //   tagline: "Operational health, safety, and compliance for ambitious teams.",
  //   overview:
  //     "This workshop offers practical guidance on OSHA-aligned compliance, risk reduction, and workforce safety systems that strengthen performance and reduce incidents.",
  //   isBookingOpen: true,
  //   agenda: [
  //     { time: "08:30 AM", activity: "Registration & Breakfast" },
  //     { time: "09:30 AM", activity: "NITA Regulations Overview" },
  //     { time: "01:00 PM", activity: "Safety Drill Simulation" },
  //   ],
  //   speakers: [
  //     {
  //       name: "Amina Hassan",
  //       role: "Head of OSH Compliance",
  //       company: "East Africa Industrial Group",
  //       imageUrl:
  //         "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
  //     },
  //   ],
  // },
  // {
  //   id: "3",
  //   slug: "strategic-restructuring-masterclass",
  //   title: "Strategic Restructuring Masterclass",
  //   date: "2024-05-20T10:00:00Z",
  //   time: "10:00 AM – 02:00 PM EAT",
  //   venue: "Serena Hotel",
  //   location: "Nairobi, Kenya",
  //   category: "Recent",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1558402529-d2638a7023e9?auto=format&fit=crop&q=80&w=1000",
  //   description:
  //     "Intensive masterclass on navigating corporate restructuring and optimizing organizational design.",
  //   isBookingOpen: false,
  //   tagline: "Managing transformation with clarity and stakeholder confidence.",
  //   overview:
  //     "A targeted learning experience for leaders handling transformation, restructure planning, and operational continuity.",
  //   agenda: [
  //     { time: "10:00 AM", activity: "Restructure Strategy Session" },
  //     { time: "11:40 AM", activity: "Leadership Alignment" },
  //     { time: "01:15 PM", activity: "Case Study Review" },
  //   ],
  // },
  // {
  //   id: "4",
  //   slug: "iso-certification-seminar",
  //   title: "ISO Certification Readiness Seminar",
  //   date: "2023-10-12T09:00:00Z",
  //   time: "09:00 AM – 04:00 PM EAT",
  //   venue: "Online Webinar",
  //   location: "Virtual",
  //   category: "Past",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1000",
  //   description:
  //     "An overview of ISO standards and how organizations can prepare for successful audits.",
  //   isBookingOpen: false,
  //   tagline:
  //     "Technical guidance for audit readiness and continuous improvement.",
  //   overview:
  //     "A practical seminar on preparing effective quality and compliance processes for successful ISO certification outcomes.",
  //   agenda: [
  //     { time: "09:00 AM", activity: "Quality Management Essentials" },
  //     { time: "11:00 AM", activity: "Documentation Review" },
  //     { time: "02:00 PM", activity: "Audit Simulation" },
  //   ],
  // },
];
