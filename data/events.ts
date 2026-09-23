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
    date: "2027-01-27T09:00:00Z",
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
  }
];
