import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { TrackedAnchor } from "@/components/analytics/TrackedAnchor";
import { hasOwnerValue, siteConfig } from "@/config/site";

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string | string[] }>;
}) {
  const { interest } = await searchParams;
  const initialInterest = Array.isArray(interest) ? interest[0] : interest ?? "";

  return (
    <div className="min-h-screen bg-white pb-20 text-[#171717]">
      <section className="mx-auto w-full max-w-7xl px-5 pb-20 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pb-28 lg:pt-10">
        <div className="grid items-stretch gap-10 md:grid-cols-2 lg:gap-14">
          <div className="flex min-w-0 flex-col">
            <div className="relative isolate mb-12 min-h-[320px] overflow-hidden rounded-md bg-[#08172f] sm:min-h-[360px]">
              <Image
                src="/img/contact.webp"
                alt=""
                fill
                preload
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-[65%_center] opacity-80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#08172f_0%,rgba(8,23,47,0.94)_42%,rgba(8,23,47,0.34)_100%)]" />
              <div className="relative z-10 flex min-h-[320px] flex-col justify-center px-5 py-10 text-white sm:min-h-[360px] sm:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af6d]">
                  Contact {siteConfig.brandName}
                </p>
                <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                  Love to hear from you,
                  <br className="hidden sm:block" /> let&apos;s get in touch.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                  Tell us what you&apos;re working on and our team will help you
                  find the right next step.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#715426]">
                Find us
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#171717]">
                Nairobi, Kenya
              </h2>
              <div className="mt-8 space-y-6 text-sm leading-6 text-[#555]">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#715426]"
                    aria-hidden="true"
                  />
                  <p>
                    {siteConfig.contact.streetAddress}
                    <br />
                    {siteConfig.contact.addressLocality}, Kenya
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#715426]"
                    aria-hidden="true"
                  />
                  <TrackedAnchor href={`tel:${siteConfig.contact.phoneHref}`} eventName="phone_click" className="underline underline-offset-2">{siteConfig.contact.phone}</TrackedAnchor>
                </div>
                {hasOwnerValue(siteConfig.contact.email) && <div className="flex items-start gap-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#715426]"
                    aria-hidden="true"
                  />
                  <TrackedAnchor href={`mailto:${siteConfig.contact.email}`} eventName="email_click" className="break-all underline underline-offset-2">{siteConfig.contact.email}</TrackedAnchor>
                </div>}
              </div>
            </div>
          </div>

          <div className="flex min-w-0">
            <ContactForm initialInterest={initialInterest} />
          </div>
        </div>
      </section>
    </div>
  );
}
