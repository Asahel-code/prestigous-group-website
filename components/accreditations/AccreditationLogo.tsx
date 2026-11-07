"use client";

import Image from "next/image";
import type { Accreditation } from "@/data/accreditations";
import { trackEvent } from "@/lib/analytics";

interface AccreditationLogoProps {
  accreditation: Accreditation;
  logoAvailable: boolean;
}

function LogoContent({
  accreditation,
  logoAvailable,
}: AccreditationLogoProps) {
  if (!logoAvailable) {
    return (
      <span className="flex min-h-20 w-full flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-brand-gold-ink bg-brand-cream px-4 py-3 text-brand-navy">
        <span className="text-xl font-semibold">{accreditation.shortName}</span>
        <span className="break-words text-center text-[10px] font-semibold uppercase leading-4 tracking-wide text-brand-gold-ink">
          Development placeholder
          <br />
          Official logo pending
        </span>
      </span>
    );
  }

  return (
    <Image
      src={accreditation.logo.src}
      width={accreditation.logo.width}
      height={accreditation.logo.height}
      alt={accreditation.logo.alt}
      sizes="224px"
      loading="lazy"
      unoptimized={accreditation.logo.src.toLowerCase().endsWith(".svg")}
      className="h-14 max-w-full w-auto object-contain"
    />
  );
}

export function AccreditationLogo(props: AccreditationLogoProps) {
  const { accreditation } = props;
  const certificateNumber = accreditation.certificateNumber?.trim();
  const content = <LogoContent {...props} />;

  return (
    <li className="w-full max-w-56">
      {accreditation.href ? (
        <a
          href={accreditation.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${accreditation.shortName}, opens official website in a new tab`}
          onClick={() => trackEvent("accreditation_click", accreditation.id)}
          className="flex min-h-44 h-full flex-col items-center justify-center gap-3 rounded-2xl border border-brand-border bg-white p-5 text-center shadow-sm transition-[border-color,transform,box-shadow] hover:-translate-y-0.5 hover:border-brand-gold hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 motion-reduce:transform-none motion-reduce:transition-none"
        >
          {content}
        </a>
      ) : (
        <div className="flex min-h-44 h-full flex-col items-center justify-center gap-3 rounded-2xl border border-brand-border bg-white p-5 text-center shadow-sm">
          {content}
        </div>
      )}
      {((certificateNumber && !certificateNumber.includes("TODO")) ||
        accreditation.validUntil) && (
        <p className="mt-3 text-center text-xs leading-5 text-brand-text-muted">
          {certificateNumber &&
            !certificateNumber.includes("TODO") &&
            `Certificate number: ${certificateNumber}`}
          {certificateNumber &&
            !certificateNumber.includes("TODO") &&
            accreditation.validUntil &&
            " · "}
          {accreditation.validUntil &&
            `Valid until ${new Date(`${accreditation.validUntil}T00:00:00Z`).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}`}
        </p>
      )}
    </li>
  );
}
