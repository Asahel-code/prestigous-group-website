"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Send } from "lucide-react";
import { FormField, getControlClassName } from "@/components/ui/FormField";
import { trackEvent } from "@/lib/analytics";
import { submitEnquiry } from "@/lib/enquiry-client";

export function ContactForm({ initialInterest = "" }: { initialInterest?: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const interestLabel = initialInterest === "sponsorship"
    ? "Partnership enquiry"
    : initialInterest
      ? `${initialInterest.replaceAll("-", " ")} enquiry`
      : "";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    const result = await submitEnquiry(event.currentTarget, "contact");
    setIsSubmitting(false);
    setMessage(result.message ?? "");

    if (!result.ok) {
      const nextErrors = result.errors ?? {};
      setErrors(nextErrors);
      const firstInvalidField = Object.keys(nextErrors)[0];
      if (firstInvalidField) document.getElementById(firstInvalidField)?.focus();
      return;
    }

    trackEvent("form_submit", "contact");
    setIsSubmitted(true);
  }

  if (isSubmitted) {
    return (
      <div className="flex h-full w-full flex-col justify-center rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8" role="status">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f0e4] text-[#715426]">
          <Send className="h-5 w-5" aria-hidden="true" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold text-[#171717]">Enquiry received</h2>
        <p aria-live="polite" className="mt-2 max-w-md leading-7 text-[#666]">{message}</p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 self-start text-sm font-semibold text-[#0d1b3d] underline underline-offset-4 hover:text-[#715426] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d]"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex h-full w-full flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold text-slate-900">Send us a message</h2>
      <p className="mt-2 mb-6 text-sm leading-6 text-slate-600">Share a few details and our team will be in touch.</p>
      {interestLabel && <p className="mb-5 border-l-2 border-[#d4af6d] pl-3 text-sm font-medium text-[#0d1b3d]">Enquiry type: {interestLabel}</p>}
      <input type="hidden" name="interest" value={initialInterest} />
      <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex flex-1 flex-col gap-5">
        <FormField label="Full Name" htmlFor="name">
          <input required type="text" id="name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={getControlClassName()} />
          {errors.name && <p id="name-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.name}</p>}
        </FormField>
        <FormField label="Email Address" htmlFor="email">
          <input required type="email" id="email" name="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={getControlClassName()} />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.email}</p>}
        </FormField>
        <FormField label="Phone/WhatsApp (optional)" htmlFor="phone">
          <input type="tel" id="phone" name="phone" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} className={getControlClassName()} />
          {errors.phone && <p id="phone-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.phone}</p>}
        </FormField>
        <FormField label="How can we help?" htmlFor="message">
          <textarea required id="message" name="message" rows={4} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className={getControlClassName("resize-y")} />
          {errors.message && <p id="message-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.message}</p>}
        </FormField>
        <label htmlFor="privacyConsent" className="flex items-start gap-3 text-sm leading-6 text-slate-600">
          <input required type="checkbox" id="privacyConsent" name="privacyConsent" value="yes" aria-invalid={Boolean(errors.privacyConsent)} aria-describedby={errors.privacyConsent ? "privacyConsent-error" : undefined} className="mt-1 h-4 w-4 shrink-0 accent-[#0d1b3d]" />
          <span>I have read the <Link href="/privacy" className="font-medium text-[#0d1b3d] underline underline-offset-2">Privacy Notice</Link>.</span>
        </label>
        {errors.privacyConsent && <p id="privacyConsent-error" className="text-sm text-red-700" aria-live="polite">{errors.privacyConsent}</p>}
        <button type="submit" disabled={isSubmitting} className="mt-auto inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#0d1b3d] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#08172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2 disabled:opacity-70">
          {isSubmitting ? "Sending..." : "Send your message"}
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </button>
        {message && <p role="status" aria-live="polite" className="text-sm text-red-700">{message}</p>}
      </div>
    </form>
  );
}