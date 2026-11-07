import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { TrainingCalendar } from "@/components/calendar/TrainingCalendar";
import { AccreditationCompliance } from "@/components/accreditations/AccreditationCompliance";
import { getCanonicalUrl } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Corporate Training Calendar 2026–2027 | Kenya",
  description:
    "Explore corporate training courses from November 2026 to December 2027, with in-person, online and hybrid options for teams and professionals in Kenya.",
  path: "/training-calendar",
});

export default function CalendarPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: getCanonicalUrl() },
          {
            name: "Training Calendar",
            url: getCanonicalUrl("training-calendar"),
          },
        ]}
      />
      <TrainingCalendar />
      <AccreditationCompliance />
    </>
  );
}
