import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { EventsDirectory } from "@/components/events/EventsDirectory";
import { getCanonicalUrl, siteConfig } from "@/config/site";

export default function EventsDirectoryPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: getCanonicalUrl() },
          { name: "Events", url: getCanonicalUrl("events") },
        ]}
      />
      <EventsDirectory partnerFormUrl={siteConfig.partnerFormUrl} />
    </>
  );
}
