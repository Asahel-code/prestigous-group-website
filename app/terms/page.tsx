import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getCanonicalUrl, hasOwnerValue, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Terms of Use",
  description: "Read the terms for using Prestigious Consultancy's website, enquiry forms and event registration links. Service scope and fees are agreed separately.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: getCanonicalUrl() },
        { name: "Terms", url: getCanonicalUrl("terms") },
      ]} />
      <article className="mx-auto max-w-4xl px-5 py-16 text-[#0d1b3d] sm:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#715426]">Draft for legal review</p>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">Terms of Use</h1>
        <p className="mt-5 leading-7 text-[#596170]">These draft terms cover use of the website operated by {siteConfig.legalName}. They require review by a Kenyan legal professional and confirmation against the organisation&apos;s operating practices.</p>

        <div className="mt-10 space-y-9">
          <section>
            <h2 className="text-2xl font-semibold">Website information</h2>
            <p className="mt-3 leading-7 text-[#596170]">Website information is provided for general information. A course or service description is not a binding offer, and details should be confirmed with the organisation before arrangements are made.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Enquiries and proposals</h2>
            <p className="mt-3 leading-7 text-[#596170]">Sending an enquiry does not create a contract. Any service scope, schedule, fees, payment terms and responsibilities will be confirmed separately in an agreed written proposal or contract.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Events and external websites</h2>
            <p className="mt-3 leading-7 text-[#596170]">Event registration may use an external form. That provider&apos;s terms and privacy notice also apply to information entered on its website. External links are provided as a convenience; their content and availability are outside our control.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-3 leading-7 text-[#596170]">For questions about these terms, use the <Link href="/contact" className="underline underline-offset-2">contact form</Link>{hasOwnerValue(siteConfig.contact.email) ? <> or email <a className="underline underline-offset-2" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></> : null}.</p>
          </section>
        </div>
      </article>
    </>
  );
}