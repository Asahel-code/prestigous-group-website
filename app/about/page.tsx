import { Check } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Prestigious Group | Prestigious Consultancy",
  description:
    "Learn how Prestigious Group, formerly Prestigious Consultancy, helps people and organizations across Africa improve capability, performance, and spaces.",
};

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
    description: "Solutions designed around your organization’s needs.",
  },
  {
    title: "Professional",
    description:
      "Reliable training and consultancy delivered to professional standards.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-24 text-[#0d1b3d]">
      <section className="px-4 pb-12 pt-16 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#a88445]">About Prestigious</p>
            <h1 className="mt-5 text-4xl font-medium leading-tight sm:text-6xl">
              Practical expertise.
              <br />
              <span className="text-[#a88445]">Real world results.</span>
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
                <Check className="h-5 w-5 text-[#a88445]" aria-hidden="true" />
                <span className="text-xs font-medium tabular-nums text-[#a4a09a]">
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
            <p className="text-sm font-semibold text-[#a88445]">Who we are</p>
            <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-5xl">
              Expertise that strengthens organisations.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#596170] sm:text-lg">
              Prestigious Consultancy &amp; Management Ltd is a professional
              training and consultancy firm helping organizations strengthen
              workplace safety, develop people and improve performance through
              practical training and focused professional expertise.
            </p>
        </div>
      </section>
    </div>
  );
}
