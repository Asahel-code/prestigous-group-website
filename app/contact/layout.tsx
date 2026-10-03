import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getCanonicalUrl } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact Prestigious Consultancy in Nairobi about corporate training, consultancy or events. Send a short enquiry and our team will respond in Kenya.",
  path: "/contact",
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: getCanonicalUrl() },
        { name: "Contact", url: getCanonicalUrl("contact") },
      ]} />
      {children}
    </>
  );
}
