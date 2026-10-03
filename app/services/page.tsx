import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Prestigious Group (Prestigious Consultancy)",
  description:
    "Explore workplace-focused training and professional consultancy from Prestigious Group in Kenya.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f1] pb-24 text-[#0d1b3d]">
      <section className="mx-auto w-full max-w-7xl px-4 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#a88445]">
            Explore our services
          </p>
          <h2 className="mt-3 text-3xl font-medium text-[#0d1b3d] sm:text-4xl">
            Practical expertise for safer, stronger organizations.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
