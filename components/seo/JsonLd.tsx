import type { ReactNode } from "react";
import { getCanonicalUrl, hasOwnerValue, siteConfig } from "@/config/site";

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  const serialised = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialised }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: item.url,
        })),
      }}
    />
  );
}

export function SiteJsonLd(): ReactNode {
  const { contact, socialUrls } = siteConfig;
  const sameAs = Object.values(socialUrls).filter(
    (url): url is Exclude<typeof url, null> => typeof url === "string",
  );
  const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: contact.streetAddress,
    addressLocality: contact.addressLocality,
    addressCountry: contact.addressCountry,
  };
  const professionalService = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${getCanonicalUrl()}#organization`,
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    url: getCanonicalUrl(),
    logo: getCanonicalUrl("logo.png"),
    telephone: contact.phoneHref,
    ...(hasOwnerValue(contact.email) ? { email: contact.email } : {}),
    address: postalAddress,
    areaServed: ["Nairobi, Kenya", "Kenya", "East Africa"],
    sameAs,
  };
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${getCanonicalUrl()}#website`,
    name: siteConfig.brandName,
    url: getCanonicalUrl(),
    inLanguage: "en-KE",
  };

  return (
    <>
      <JsonLd data={professionalService} />
      <JsonLd data={website} />
    </>
  );
}
