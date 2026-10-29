"use client";

import { ArrowUpRight } from "lucide-react";
import { TrackedLink } from "../analytics/TrackedLink";

interface EventBookingFormProps {
  eventTitle: string;
  registrationUrl: string;
  partnerFormUrl?: string
}

export function EventBookingForm({
  eventTitle,
  registrationUrl,
  partnerFormUrl
}: EventBookingFormProps) {
  return (
    <section
      className="rounded-md border border-slate-200 bg-[#f8f6f1] p-6 text-slate-900 sm:p-8"
      aria-labelledby="event-actions-title"
    >
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#715426]">
          Blueprint 2027
        </p>
        <h2
          id="event-actions-title"
          className="mt-3 text-2xl font-bold text-[#0d1b3d]"
        >
          Ready to be part of {eventTitle}?
        </h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Register as a delegate or connect with us about partnering with the
          forum.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <TrackedLink
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            eventName="event_register_click"
            aria-label="Register as a delegate (opens in a new tab)"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0d1b3d] px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-[#08172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2"
          >
            Reserve your seat{" "}
          </TrackedLink>
          {partnerFormUrl ? (
            <TrackedLink
              href={partnerFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              eventName="partner_click"
              aria-label="Partner with us (opens in a new tab)"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#0d1b3d] px-6 py-3 text-sm font-semibold uppercase text-[#0d1b3d] transition-colors hover:bg-[#0d1b3d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2"
            >
              Partner with us <ArrowUpRight className="h-4 w-4" />
            </TrackedLink>
          ) : (
            <TrackedLink
              href="/contact?interest=sponsorship"
              eventName="partner_click"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#0d1b3d] px-6 py-3 text-sm font-semibold uppercase text-[#0d1b3d] transition-colors hover:bg-[#0d1b3d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2"
            >
              Partner with us{" "}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </TrackedLink>
          )}
        </div>
      </div>
    </section>
  );
}
