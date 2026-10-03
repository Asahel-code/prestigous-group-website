import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getCanonicalUrl, hasOwnerValue, siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Privacy Notice",
  description: "Read how Prestigious Consultancy handles website enquiries and contact details under Kenya's Data Protection Act 2019, and learn about your rights and choices.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: getCanonicalUrl() },
        { name: "Privacy", url: getCanonicalUrl("privacy") },
      ]} />
      <article className="mx-auto max-w-4xl px-5 py-16 text-[#0d1b3d] sm:px-8 lg:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#715426]">Draft for legal review</p>
        <h1 className="mt-4 text-4xl font-medium sm:text-5xl">Privacy Notice</h1>
        <p className="mt-5 leading-7 text-[#596170]">
          This draft explains how {siteConfig.legalName} may handle personal information submitted through this website. It is prepared with Kenya&apos;s Data Protection Act, 2019 in mind and must be reviewed against the organisation&apos;s actual practices before publication.
        </p>

        <div className="mt-10 space-y-9">
          <section>
            <h2 className="text-2xl font-semibold">Information collected</h2>
            <p className="mt-3 leading-7 text-[#596170]">Enquiry forms may collect your name, work contact details, organisation, job title, requested service or course, location, delegate count, preferred timeframe and the information you include in your message.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">How information is used</h2>
            <p className="mt-3 leading-7 text-[#596170]">Information is used to respond to enquiries, prepare requested proposals and coordinate requested training, consultancy or event follow-up. Optional analytics are used only after consent and only when configured.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Sharing and storage</h2>
            <p className="mt-3 leading-7 text-[#596170]">Enquiries may be processed by a delivery provider configured for the website. The provider, access controls and retention schedule must be confirmed by the organisation before this notice is approved. Information should be kept only for as long as needed for the stated purposes or applicable legal obligations.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Your choices and rights</h2>
            <p className="mt-3 leading-7 text-[#596170]">Subject to applicable law, you may request access to or correction or deletion of your personal information, object to or restrict certain processing, and withdraw consent where processing relies on consent. You may also raise a concern with Kenya&apos;s Office of the Data Protection Commissioner.</p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-3 leading-7 text-[#596170]">To ask about this notice or a personal-data request, contact {siteConfig.legalName}{hasOwnerValue(siteConfig.contact.email) ? <> at <a className="underline underline-offset-2" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a></> : null} or use the <Link href="/contact" className="underline underline-offset-2">contact form</Link>.</p>
          </section>
        </div>
      </article>
    </>
  );
}