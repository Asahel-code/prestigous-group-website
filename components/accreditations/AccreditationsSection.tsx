import { existsSync } from "node:fs";
import { join } from "node:path";
import { AccreditationLogo } from "@/components/accreditations/AccreditationLogo";
import { accreditations } from "@/data/accreditations";
import type { Accreditation } from "@/data/accreditations";
interface AccreditationsSectionProps {
  compact?: boolean;
}

function isValidAccreditation(accreditation: Accreditation): boolean {
  const isComplete = (value: string) =>
    value.trim().length > 0 && !value.includes("TODO");

  if (
    !isComplete(accreditation.id) ||
    !isComplete(accreditation.name) ||
    !isComplete(accreditation.shortName) ||
    !accreditation.logo.src.startsWith("/") ||
    accreditation.logo.src.includes("..") ||
    !isComplete(accreditation.logo.alt) ||
    !Number.isFinite(accreditation.logo.width) ||
    accreditation.logo.width <= 0 ||
    !Number.isFinite(accreditation.logo.height) ||
    accreditation.logo.height <= 0
  ) {
    return false;
  }

  if (accreditation.href) {
    try {
      if (new URL(accreditation.href).protocol !== "https:") return false;
    } catch {
      return false;
    }
  }

  if (accreditation.validUntil) {
    const validUntil = new Date(`${accreditation.validUntil}T00:00:00Z`);
    if (
      !/^\d{4}-\d{2}-\d{2}$/.test(accreditation.validUntil) ||
      Number.isNaN(validUntil.getTime()) ||
      validUntil.toISOString().slice(0, 10) !== accreditation.validUntil
    ) {
      return false;
    }
  }

  return true;
}

const validAccreditations = accreditations.filter(isValidAccreditation);
const logoAvailability = new Map(
  validAccreditations.map((accreditation) => {
    const logoPath = join(
      process.cwd(),
      "public",
      accreditation.logo.src.slice(1),
    );
    const available = existsSync(logoPath);

    if (!available) {
      console.warn(
        `supply official NITA logo (SVG/PNG) and confirm usage permission. Missing file: ${accreditation.logo.src}`,
      );
    }

    return [accreditation.id, available] as const;
  }),
);

export function AccreditationsSection({
  compact = false,
}: AccreditationsSectionProps) {
  if (validAccreditations.length === 0) return null;

  return (
    <section
      aria-labelledby="accreditations-heading"
      className={`px-4 sm:px-6 lg:px-8 ${compact ? "py-12 sm:py-16" : "py-16 sm:py-20 lg:py-24"}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className={compact ? "max-w-3xl" : "mx-auto max-w-3xl text-center"}>
          <h2
            id="accreditations-heading"
            className="break-words text-3xl font-medium leading-tight tracking-[-0.035em] text-brand-navy sm:text-4xl"
          >
            Accreditations &amp; Professional Recognition
          </h2>
          <p className="mt-4 leading-7 text-brand-text-muted">
            Prestigious Consultancy is committed to delivering quality,
            professional and industry-relevant training.
          </p>
        </div>

        <div className="mt-8 rounded-[2rem] border border-brand-border bg-brand-cream p-5 shadow-sm sm:mt-10 sm:p-8 lg:p-10">
          <div className="mb-7 flex items-center justify-center gap-4 sm:mb-9 sm:gap-6">
            <span
              aria-hidden="true"
              className="h-px flex-1 max-w-40 bg-brand-border"
            />
            <p className="break-words text-center text-xs font-semibold uppercase tracking-[0.18em] text-brand-gold-ink">
              Accredited by
            </p>
            <span
              aria-hidden="true"
              className="h-px flex-1 max-w-40 bg-brand-border"
            />
          </div>

          <ul
            className={
              validAccreditations.length <= 3
                ? "flex flex-wrap items-stretch justify-center gap-4 sm:gap-6"
                : "grid grid-cols-2 items-stretch justify-items-center gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-4 xl:grid-cols-6"
            }
          >
            {validAccreditations.map((accreditation) => (
              <AccreditationLogo
                key={accreditation.id}
                accreditation={accreditation}
                logoAvailable={logoAvailability.get(accreditation.id) ?? false}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
