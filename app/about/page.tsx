import { Check } from "lucide-react";
import { CommunityImpact } from "@/components/about/CommunityImpact";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description: `Learn about ${siteConfig.brandName}, a Nairobi training and consultancy firm supporting workplace safety, development and organisational performance.`,
  path: "/about",
});

const reasons = [
  {
    title: "Practical",
    description: "Real world, applicable solutions.",
  },
  {
    title: "Experienced",
    description: "Skilled professionals and industry partners.",
  },
  {
    title: "Flexible",
    description: "Online, physical and customized options.",
  },
  {
    title: "Credible",
    description:
      "Professional registrations and partnerships.",
  },
   {
    title: "Client focused",
    description:
      "Solutions designed around your needs.",
  }
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: getCanonicalUrl() },
        { name: "About", url: getCanonicalUrl("about") },
      ]} />
    <div className="min-h-screen bg-white pb-24 text-brand-navy">
      <section className="px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-gold-ink">About Prestigious</p>
            <h1 className="mt-5 text-4xl font-medium leading-tight sm:text-6xl">
              Practical expertise.
              <br />
              <span className="text-brand-gold-ink">Real world results.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="min-h-56 rounded-md border border-brand-sand-muted bg-brand-cream-soft p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <Check className="h-5 w-5 text-brand-gold-ink" aria-hidden="true" />
                <span className="text-xs font-medium tabular-nums text-brand-text-warm">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-8 text-2xl font-medium capitalize text-brand-navy">
                {reason.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-brand-text-muted">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-cream px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-brand-gold-ink">Who we are</p>
            <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-5xl">
              Expertise that strengthens organisations.
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-text-muted sm:text-lg">
              {siteConfig.legalName} is a professional training and consultancy
              firm helping organisations strengthen
              workplace safety, develop people and improve performance through
              practical training and focused professional expertise.
            </p>
        </div>
      </section>

      <CommunityImpact />
    </div>
    </>
  );
}
