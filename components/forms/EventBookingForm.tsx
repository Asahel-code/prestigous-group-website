"use client";

import { useState } from "react";
import { FormField, getControlClassName } from "@/components/ui/FormField";

interface EventBookingFormProps {
  eventTitle: string;
  registrationUrl: string;
  partnershipOptions: string[];
}

export function EventBookingForm({ eventTitle, registrationUrl, partnershipOptions }: EventBookingFormProps) {
  const [isPartnerFormOpen, setIsPartnerFormOpen] = useState(false);
  const [isEmailPrepared, setIsEmailPrepared] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      `Organization/Company: ${formData.get("organization")}`,
      `Contact Person: ${formData.get("contactPerson")}`,
      `Job Title: ${formData.get("jobTitle")}`,
      `Email Address: ${formData.get("email")}`,
      `Phone/WhatsApp: ${formData.get("phone")}`,
      `Partnership Interest: ${formData.get("partnershipInterest")}`,
      `Brief Enquiry: ${formData.get("briefEnquiry")}`,
    ].join("\n");
    const subject = encodeURIComponent(`${eventTitle} Partnership Enquiry`);
    const body = encodeURIComponent(message);
    window.location.href = `mailto:info@company.co.ke?subject=${subject}&body=${body}`;
    setIsEmailPrepared(true);
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-[#f8f6f1] p-6 text-slate-900 sm:p-8">
      <div className="text-center">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#8a6c45]">Blueprint 2027</p>
        <h2 className="mt-3 text-2xl font-bold text-[#0d1b3d]">Ready to be part of {eventTitle}?</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Register as a delegate or connect with us about partnering with the forum.</p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={registrationUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#0d1b3d] px-6 py-3 text-sm font-semibold uppercase text-white transition-colors hover:bg-[#08172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2"
          >
            Register as a delegate
          </a>
          <button
            type="button"
            onClick={() => setIsPartnerFormOpen((isOpen) => !isOpen)}
            aria-expanded={isPartnerFormOpen}
            aria-controls="blueprint-partnership-form"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-[#0d1b3d] px-6 py-3 text-sm font-semibold uppercase text-[#0d1b3d] transition-colors hover:bg-[#0d1b3d] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2"
          >
            {isPartnerFormOpen ? "Close partnership form" : "Become a partner"}
          </button>
        </div>
      </div>

      {isPartnerFormOpen && (
        <div id="blueprint-partnership-form" className="mx-auto mt-10 max-w-2xl border-t border-slate-200 pt-8">
          <h3 className="text-xl font-bold text-[#0d1b3d]">Become a partner</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">Partner with Blueprint 2027 and connect your organization with leaders, professionals and business decision makers.</p>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-5 sm:grid-cols-2">
            <FormField label="Organization/Company" htmlFor="organization">
              <input required type="text" id="organization" name="organization" className={getControlClassName()} />
            </FormField>
            <FormField label="Contact Person" htmlFor="contactPerson">
              <input required type="text" id="contactPerson" name="contactPerson" className={getControlClassName()} />
            </FormField>
            <FormField label="Job Title" htmlFor="jobTitle">
              <input required type="text" id="jobTitle" name="jobTitle" className={getControlClassName()} />
            </FormField>
            <FormField label="Email Address" htmlFor="email">
              <input required type="email" id="email" name="email" className={getControlClassName()} />
            </FormField>
            <FormField label="Phone/WhatsApp" htmlFor="phone">
              <input required type="tel" id="phone" name="phone" className={getControlClassName()} />
            </FormField>
            <FormField label="Partnership Interest" htmlFor="partnershipInterest">
              <select required id="partnershipInterest" name="partnershipInterest" defaultValue="" className={getControlClassName()}>
                <option value="" disabled>Select an interest</option>
                {partnershipOptions.map((option) => <option key={option} value={option}>{option}</option>)}
              </select>
            </FormField>
            <div className="sm:col-span-2">
              <FormField label="Brief Enquiry" htmlFor="briefEnquiry">
                <textarea required id="briefEnquiry" name="briefEnquiry" rows={4} className={`${getControlClassName()} resize-y`} />
              </FormField>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#d4af6d] px-6 py-3 text-sm font-semibold text-[#08172f] transition-colors hover:bg-[#c7a267] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0d1b3d] focus-visible:ring-offset-2 sm:w-auto">
                Submit partnership enquiry
              </button>
              {isEmailPrepared && <p role="status" className="mt-3 text-sm text-slate-600">Your email app should open with the enquiry. Send the email to complete your submission.</p>}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
