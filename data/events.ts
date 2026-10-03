export interface EventItem {
  id: string;
  slug: string;
  title: string;
  theme?: string;
  date: string;
  endDate?: string;
  time?: string;
  venue: string;
  location?: string;
  category: "Upcoming" | "Recent" | "Past";
  imageUrl: string;
  description: string;
  isBookingOpen: boolean;
  tagline?: string;
  overview?: string;
  audience?: string[];
  registrationUrl?: string;
  partnershipOptions?: string[];
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
    title: "Blueprint 2027: Leadership & Competitive Advantage Forum",
    theme: "Leadership & Competitive Advantage Forum",
    date: "2027-01-27T09:00:00+03:00",
    endDate: "2027-01-27T17:00:00+03:00",
    time: "09:00 AM – 05:00 PM EAT",
    venue: "Eka Hotel",
    location: "Nairobi, Kenya",
    category: "Upcoming",
    imageUrl:
      "/img/blueprint-forum.webp",
    description:
      "Blueprint 2027: Leadership & Competitive Advantage Forum is a flagship Prestigious initiative bringing together leaders, professionals and organisations to explore practical strategies for stronger leadership, competitiveness, innovation and sustainable growth.",
    tagline: "Shaping leaders, Driving Competitiveness",
    overview:
      "The forum provides a platform for meaningful conversations, knowledge sharing, professional networking and business connection.",
    isBookingOpen: true,
    audience: [
      "Business leaders",
      "Executives",
      "Managers",
      "Professionals",
      "Entrepreneurs",
      "Emerging leaders",
    ],
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSe4VbjE95eoIbgOcOGsgb0w0UePcbHhzzzKZzSRQfFWfF4BAg/viewform",
    partnershipOptions: [
      "Strategic Partnership",
      "Partner Showcase",
      "Corporate Participation",
      "Brand Visibility",
      "Other",
    ],
  }
];
