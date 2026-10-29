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
    title: "Blueprint 2027: Leadership & Competitiveness Roundtable Breakfast",
    theme: "Connecting leaders, Strengthening Businesses. Shaping the Future.",
    date: "2027-01-27T09:00:00+03:00",
    endDate: "2027-01-27T17:00:00+03:00",
    time: "09:00 AM – 05:00 PM EAT",
    venue: "Nairobi",
    location: "Nairobi, Kenya",
    category: "Upcoming",
    imageUrl:
      "/img/blueprint-breakfast.webp",
    description:
      "The forum will focus on leadership, competiveness, innovation, sustainable growth and strategic partnerships through expert discussions and structured networking. The forum will also welcome selected organizations participating in the Partner Showcase Area, providing an opportunity to promote their products and services, enhance visibility and connect with potential clients, partners and decision makers.",
    tagline: "Shaping leaders, Driving Competitiveness",
    overview:
      "Blueprint 2027 Forum is a premium leadership, business and networking platform designed to bring together business owners, CEOs, senior executives, professionals and strategic partners to exchange insights, explore growth opportunities and build meaningful business relationships.",
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
    agenda: [
      {
        time: "07:30 AM",
        activity: "Partner Networking & Showcase",
      },
      {
        time: "11:00 AM",
        activity: "Exclusive Blueprint Roundtable Breakfast",
      },
    ],
  }
];
