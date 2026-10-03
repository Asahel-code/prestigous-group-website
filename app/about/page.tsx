import { Check } from "lucide-react";
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
    description: "Workplace-focused solutions that can be applied immediately.",
  },
  {
    title: "Experienced",
    description: "Qualified trainers and experienced professionals.",
  },
  {
    title: "Tailored",
    description: "Solutions designed around your organisation’s needs.",
  },
  {
    title: "Professional",
    description:
      "Reliable training and consultancy delivered to professional standards.",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: getCanonicalUrl() },
        { name: "About", url: getCanonicalUrl("about") },
      ]} />
    <div className="min-h-screen bg-white pb-24 text-[#0d1b3d]">
      <section className="px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#715426]">About Prestigious</p>
            <h1 className="mt-5 text-4xl font-medium leading-tight sm:text-6xl">
              Practical expertise.
              <br />
              <span className="text-[#715426]">Real world results.</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="min-h-56 rounded-md border border-[#ece8df] bg-[#faf9f6] p-6 sm:p-7"
            >
              <div className="flex items-center justify-between">
                <Check className="h-5 w-5 text-[#715426]" aria-hidden="true" />
                <span className="text-xs font-medium tabular-nums text-[#6b665c]">
                  0{index + 1}
                </span>
              </div>
              <h2 className="mt-8 text-2xl font-medium capitalize text-[#0d1b3d]">
                {reason.title}
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#596170]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#f8f6f1] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-[#715426]">Who we are</p>
            <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-5xl">
              Expertise that strengthens organisations.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#596170] sm:text-lg">
              {siteConfig.legalName} is a professional training and consultancy
              firm helping organisations strengthen
              workplace safety, develop people and improve performance through
              practical training and focused professional expertise.
            </p>
        </div>
      </section>
    </div>
    </>
  );
}
