import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getCanonicalUrl } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Services",
  description: "Explore corporate training and professional consultancy in Nairobi, Kenya, with practical support for safer workplaces, stronger teams and better delivery.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: getCanonicalUrl() },
        { name: "Services", url: getCanonicalUrl("services") },
      ]} />
    <div className="min-h-screen bg-[#f8f6f1] pb-24 text-[#0d1b3d]">
      <section className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#715426]">
            Explore our services
          </p>
          <h1 className="mt-3 text-3xl font-medium text-[#0d1b3d] sm:text-4xl">
            Practical expertise for safer, stronger organisations.
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
