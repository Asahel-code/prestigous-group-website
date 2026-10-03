import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { servicesData } from "@/data/services";
import { hasOwnerValue, siteConfig } from "@/config/site";

const serviceLinks = servicesData.map((service) => ({
  label: service.urlTitle,
  href: `/services/${service.slug}`,
}));

const socialLinks = [
  {
    label: "Facebook",
    href: siteConfig.socialUrls.facebook,
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    href: siteConfig.socialUrls.instagram,
    icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: siteConfig.socialUrls.linkedin,
    icon: FaLinkedinIn,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[#d4af6d]/30 bg-[#08172f] text-slate-300">
      <div className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 lg:px-10 lg:py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1.1fr_0.8fr] lg:gap-10">
          <div className="min-w-0">
            <Link
              href="/"
              className="inline-flex items-center gap-3 text-white"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#d4af6d] p-0.5">
                <Image
                  src="/logo.png"
                  alt={`${siteConfig.brandName} logo`}
                  width={36}
                  height={36}
                  className="h-9 w-9 object-contain"
                />
              </span>
              <span className="text-xl font-semibold">
                {siteConfig.brandName}
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/65">
              Practical solutions for people and performance. Training and
              consultancy shaped around the work that matters to your
              organisation.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center border-b border-[#d4af6d] pb-1 text-sm font-semibold text-[#d4af6d] transition-colors hover:text-white"
            >
              Start a conversation{" "}
              <span aria-hidden="true" className="ml-2">
                -&gt;
              </span>
            </Link>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af6d]">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="break-words text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af6d]">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm transition-colors hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-sm transition-colors hover:text-white"
                >
                  Events Directory
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm transition-colors hover:text-white"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af6d]">
              Contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex min-w-0 items-start gap-3">
                <MapPin className="h-5 w-5 text-[#d4af6d] shrink-0" />
                <span className="break-words text-sm leading-6">
                  {siteConfig.contact.streetAddress}
                  <br />
                  {siteConfig.contact.addressLocality}, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#d4af6d] shrink-0" />
                <a
                  href={`tel:${siteConfig.contact.phoneHref}`}
                  onClick={() =>
                    import("@/lib/analytics").then(({ trackEvent }) =>
                      trackEvent("phone_click"),
                    )
                  }
                  className="text-sm transition-colors hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#d4af6d] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  onClick={() =>
                    import("@/lib/analytics").then(({ trackEvent }) =>
                      trackEvent("email_click"),
                    )
                  }
                  className="break-all text-sm transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af6d]">
              Follow Us
            </h3>
            <div className="mt-5 flex flex-wrap gap-3 lg:flex-col">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} (opens in a new tab)`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-white/70 transition-colors hover:border-[#d4af6d] hover:bg-[#d4af6d] hover:text-[#08172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08172f]"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-white/55 sm:justify-start">
            <p className="text-white/45">
              &copy; {new Date().getFullYear()} {siteConfig.legalName}. All
              rights reserved.
            </p>
            <Link
              href="/privacy"
              className="transition-colors hover:text-white"
            >
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms
            </Link>
          </div>
          <div className="flex flex-col items-center gap-2 sm:items-end">
            {hasOwnerValue(siteConfig.nita.approvalLabel) && (
              <span className="text-xs font-medium uppercase tracking-[0.12em] text-white/55">
                {siteConfig.nita.approvalLabel}
              </span>
            )}
            <span className="text-xs text-white/35">
              People. Performance. Progress.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
