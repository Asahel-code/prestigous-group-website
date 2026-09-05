import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { PageHero } from "@/components/ui/PageHero";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Prestigious Group (Prestigious Consultancy)",
  description:
    "Explore professional training, executive consultancy, and elegant residential and office space finishes from Prestigious Group, formerly Prestigious Consultancy, in Kenya.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#f8f6f1] pb-24 text-[#0d1b3d]">
      <PageHero
        eyebrow="What we do"
        title={<>Practical support.<br /><span className="text-[#d4af6d]">Meaningful progress.</span></>}
        description="Discover practical pathways built around training, consultancy solutions, and finished spaces that make your next move easier."
        imageUrl="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=85&w=2200"
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-5 lg:grid-cols-3">
          <div className="border border-[#e8e2d5] bg-white p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0d1b3d]">
              Explore Training
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              View Programs
            </h2>
            <p className="mt-3 text-slate-600">
              Structured learning programs designed for teams, leaders, and
              professionals.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/services/training"
                className="inline-flex items-center justify-center rounded-xl bg-[#0d1b3d] px-4 py-3 text-sm font-semibold text-white hover:bg-[#08172f]"
              >
                View Programs
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-[#0d1b3d] hover:text-[#0d1b3d]"
              >
                Request Corporate Training
              </a>
            </div>
          </div>

          <div className="border border-[#e8e2d5] bg-white p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#d4af6d]">
              Explore Solutions
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              Consultancy Services
            </h2>
            <p className="mt-3 text-slate-600">
              Strategic business support, process improvement, and compliance
              guidance for growth.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/services/consultancy"
                className="inline-flex items-center justify-center rounded-xl bg-[#d4af6d] px-4 py-3 text-sm font-semibold text-[#0d1b3d] hover:bg-[#c7a267]"
              >
                Our Services
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-[#d4af6d] hover:text-[#d4af6d]"
              >
                Request Proposal
              </a>
            </div>
          </div>

          <div className="border border-[#e8e2d5] bg-white p-7 sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#0d1b3d]">
              Explore Finishes
            </p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">
              View Collection
            </h2>
            <p className="mt-3 text-slate-600">
              Premium home finish and interior solutions tailored to your build,
              workspace, or project specification.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/services/finishes"
                className="inline-flex items-center justify-center rounded-xl bg-[#08172f] px-4 py-3 text-sm font-semibold text-white hover:bg-[#0d1b3d]"
              >
                View Collection
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 hover:border-[#08172f] hover:text-[#08172f]"
              >
                Request a Quote
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
