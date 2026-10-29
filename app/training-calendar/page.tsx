import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { TrainingCalendar } from "@/components/calendar/TrainingCalendar";
import { getCanonicalUrl } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Training Calendar 2026 - 2027",
  description: "Browse the proposed training calendar for November 2026 - December 2027. Practical masterclasses, professional certifications, and leadership workshops.",
 path: getCanonicalUrl("training-calendar")
});

export default function CalendarPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: getCanonicalUrl() },
        { name: "Training Calendar", url: getCanonicalUrl("training-calendar") },
      ]} />
      <TrainingCalendar />
    </>
  );
}
