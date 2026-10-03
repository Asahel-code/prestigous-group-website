"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface EventBookingFormProps {
  eventTitle: string;
  registrationUrl: string;
}

export function EventBookingForm({ eventTitle, registrationUrl }: EventBookingFormProps) {
  return (
    <section className="rounded-md border border-slate-200 bg-[#f8f6f1] p-6 text-slate-900 sm:p-8" aria-labelledby="event-actions-title">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#715426]">Blueprint 2027</p>
        <h2 id="event-actions-title" className="mt-3 text-2xl font-bold text-[#0d1b3d]">Ready to be part of {eventTitle}?</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Register as a delegate or connect with us about partnering with the forum.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("event_register_click")}
            aria-label="Register as a delegate (opens in a new tab)"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0d1b3d] px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-[#08172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2"
          >
            Register as a delegate <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <Link
            href="/contact?interest=sponsorship"
            onClick={() => trackEvent("partner_click")}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-[#0d1b3d] px-6 py-3 text-sm font-semibold uppercase text-[#0d1b3d] transition-colors hover:bg-[#0d1b3d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2"
          >
            Become a partner <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}