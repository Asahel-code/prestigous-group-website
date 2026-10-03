import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Corporate Events",
  description: "Discover Blueprint 2027 and corporate learning events in Kenya, bringing leaders and professionals together for practical discussion and connection.",
  path: "/events",
});

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
