import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Events in Kenya | Prestigious Consultancy & Management Ltd",
  description:
    "Discover corporate conferences, leadership forums, and strategic learning events from Prestigious Consultancy & Management Ltd, formerly Prestigious Consultancy, in Kenya.",
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
