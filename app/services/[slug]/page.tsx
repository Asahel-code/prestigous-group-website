import { notFound } from "next/navigation";
import Image from "next/image";
import { servicesData } from "@/data/services";
import { ProposalFormCard } from "@/components/forms/ProposalFormCard";
import { TrackedAnchor } from "@/components/analytics/TrackedAnchor";
import { FocusAnchor } from "@/components/ui/FocusAnchor";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { BreadcrumbJsonLd, JsonLd } from "@/components/seo/JsonLd";
import { getCanonicalUrl, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

interface ServiceDetailProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ course?: string; interest?: string }>;
}

export async function generateMetadata({ params }: ServiceDetailProps) {
  const { slug } = await params;
  const service = servicesData.find((entry) => entry.slug === slug);

  if (!service) {
    return {};
  }

  return createPageMetadata({
    title: service.theme,
    description: `Explore ${service.theme} from Prestigious Consultancy in Nairobi, Kenya. Request practical support for your organisation and team.`,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const proposalHref = siteConfig.proposalFormUrl;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: getCanonicalUrl() },
          { name: "Services", url: getCanonicalUrl("services") },
          {
            name: service.theme,
            url: getCanonicalUrl(`services/${service.slug}`),
          },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.theme,
          description: service.description,
          url: getCanonicalUrl(`services/${service.slug}`),
          provider: { "@id": `${getCanonicalUrl()}#organization` },
          areaServed: ["Nairobi, Kenya", "Kenya", "East Africa"],
        }}
      />
      <div className="min-h-screen bg-brand-cream pb-20 text-brand-navy">
        {/* Hero Banner */}
        <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-brand-navy-deep px-5 py-12 text-white sm:min-h-[500px] sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-20 lg:py-24">
            <div className="absolute inset-0">
              <Image
                src={service.imageUrl}
                alt={service.imageAlt}
                fill
                preload
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy-deep/95 via-brand-navy/80 to-transparent" />
            </div>

            <div className="relative z-10 flex min-h-[300px] items-center sm:min-h-[380px]">
              <div className="max-w-3xl">
                <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold">
                  Our Services
                </p>
                <h1 className="text-4xl font-medium leading-tight text-white sm:text-6xl">
                  {service.theme}
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
                  {service.description}
                </p>
                <p className="mt-5 border-l-2 border-brand-gold pl-4 text-sm font-semibold text-white/85">
                  {service.detailSections
                    .map((section) => section.title)
                    .join(" | ")}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <FocusAnchor
                    href="#service-breakdown"
                    className="inline-flex min-h-12 items-center justify-center rounded-md bg-brand-gold px-6 text-sm font-semibold text-brand-navy-deep transition-colors hover:bg-brand-gold-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                  >
                    {service.primaryCta}
                  </FocusAnchor>
                  {proposalHref ? (
                    <TrackedAnchor
                      href={proposalHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      eventName="proposal_click"
                      className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/50 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                    >
                      {service.secondaryCta}{" "}
                      <ArrowUpRight className="h-4 w-4" />
                    </TrackedAnchor>
                  ) : (
                    <FocusAnchor
                      href="#service-enquiry"
                      className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/50 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                    >
                      {service.secondaryCta}
                    </FocusAnchor>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="space-y-12 lg:col-span-8">
              <section
                id="service-breakdown"
                tabIndex={-1}
                className="scroll-mt-28"
              >
                <div className="mb-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brand-gold-ink">
                    {service.title}
                  </p>
                  <h2 className="mt-3 text-3xl font-medium text-brand-navy sm:text-4xl">
                    {service.slug === "training"
                      ? "Explore training"
                      : "Our consultancy services"}
                  </h2>
                </div>
                <div className="space-y-5">
                  {service.detailSections.map((section, index) => (
                    <article
                      key={section.title}
                      className="border border-brand-border bg-white p-6 sm:p-8"
                    >
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-gold-ink">
                        0{index + 1}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-brand-navy sm:text-3xl">
                        {section.title}
                      </h3>
                      <p className="mt-3 text-lg font-medium leading-7 text-brand-navy">
                        {section.lead}
                      </p>
                      {section.description && (
                        <p className="mt-3 max-w-3xl leading-7 text-brand-text-muted">
                          {section.description}
                        </p>
                      )}
                      {section.listLabel && (
                        <p className="mt-6 text-sm font-semibold text-brand-navy">
                          {section.listLabel}
                        </p>
                      )}
                      <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                        {section.items.map((item) => {
                          return (
                            <li
                              key={item}
                              className="flex items-start gap-3 text-sm leading-6 text-brand-text-muted"
                            >
                              <CheckCircle2
                                className="mt-0.5 h-4 w-4 shrink-0 text-brand-gold-ink"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </article>
                  ))}
                </div>
                {service.learningModes && (
                  <div className="mt-6 flex flex-col gap-3 border border-brand-border bg-brand-cream-warm p-6 sm:flex-row sm:items-center sm:gap-4 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.14em] text-brand-gold-ink">
                      Learning Modes
                    </p>
                    <ul className="flex flex-wrap gap-2">
                      {service.learningModes.map((mode) => (
                        <li
                          key={mode}
                          className="rounded-full border border-brand-sand-deep bg-white px-4 py-1.5 text-sm font-medium text-brand-navy"
                        >
                          {mode}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            </div>

            <aside
              id="service-enquiry"
              tabIndex={-1}
              className="scroll-mt-28 lg:col-span-4"
            >
              <div className="lg:sticky lg:top-28">
                <ProposalFormCard />
              </div>
            </aside>
          </div>
        </section>
      </div>
    </>
  );
}
