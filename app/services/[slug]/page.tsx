import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/services";
import { ServiceEnquiryForm } from "@/components/forms/ServiceEnquiryForm";
import { CheckCircle2, Target, Users } from "lucide-react";

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#f8f6f1] pb-20 text-[#0d1b3d]">
      {/* Hero Banner */}
      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#08172f] px-5 py-12 text-white sm:min-h-[500px] sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:px-20 lg:py-24">
          <div className="absolute inset-0">
          <Image
            src={service.imageUrl}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#08172f]/95 via-[#0d1b3d]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 flex min-h-[300px] items-center sm:min-h-[380px]">
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#d4af6d]">{service.title}</p>
            <h1 className="text-4xl font-medium leading-tight text-white sm:text-6xl">{service.theme}</h1>
            <p className="text-xl text-slate-200">
              {service.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[#0d1b3d] px-6 text-base font-semibold text-white transition-all hover:bg-[#08172f]"
              >
                {service.primaryCta}
              </Link>
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-6 text-base font-semibold text-[#0d1b3d] transition-all hover:bg-slate-100"
              >
                {service.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-12">
            
            {/* Key Modules & Deliverables */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
              <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-[#f1e8d4] p-3 text-[#a88445]">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Key Outcomes</h2>
              </div>
              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {service.outcomes.map((outcome, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#d4af6d] shrink-0 mt-0.5" />
                    <span className="text-slate-700">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Target Audience */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-slate-100">
               <div className="flex items-center gap-4 mb-6">
                <div className="rounded-xl bg-[#f1e8d4] p-3 text-[#a88445]">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  {service.applications ? "Where We Work" : "Who Benefits?"}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed">{service.audience}</p>
              {service.applications && (
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.applications.map((application) => (
                    <li
                      key={application}
                      className="border-l-2 border-[#d4af6d] pl-4 text-sm font-semibold text-[#0d1b3d]"
                    >
                      {application}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
          </div>

          {/* Sticky Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <ServiceEnquiryForm serviceName={service.title} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
