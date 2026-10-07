"use client";

import { useState } from "react";
import Link from "next/link";
import { Send } from "lucide-react";
import { FormField, getControlClassName } from "@/components/ui/FormField";
import { trackEvent } from "@/lib/analytics";
import { submitEnquiry } from "@/lib/enquiry-client";

export function ServiceEnquiryForm({
  serviceName,
  serviceOptions,
  defaultServiceOption,
  specialistFocus,
  isTrainingPage = false,
}: {
  serviceName: string;
  serviceOptions: string[];
  defaultServiceOption: string;
  specialistFocus?: { title: string; items: string[] };
  courseCategories?: string[];
  defaultCourse?: string;
  isTrainingPage?: boolean;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(defaultServiceOption);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const serviceRequired = String(formData.get("serviceRequired") ?? serviceName);
    const specialistService = formData.get("specialistService");
    setIsSubmitting(true);
    setErrors({});
    const result = await submitEnquiry(event.currentTarget, "service");
    setIsSubmitting(false);
    setMessage(result.message ?? "");
    if (!result.ok) {
      const nextErrors = result.errors ?? {};
      setErrors(nextErrors);
      const firstInvalidField = Object.keys(nextErrors)[0];
      if (firstInvalidField) document.getElementById(firstInvalidField)?.focus();
      return;
    }
    trackEvent("form_submit", "service_proposal");
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Send className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-green-800">Enquiry Received</h3>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-2xl font-bold text-slate-900">Request a Proposal</h3>
      <p className="mt-2 mb-6 text-sm leading-6 text-slate-600">Let’s discuss how we can support your organisation.</p>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <input type="hidden" name="serviceName" value={serviceName} />
        <input type="hidden" name="isTrainingPage" value={String(isTrainingPage)} />
        <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor="website">Leave this field empty</label>
          <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <FormField label="Full Name" htmlFor="name">
          <input required type="text" id="name" name="name" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} className={getControlClassName()} />
          {errors.name && <p id="name-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.name}</p>}
        </FormField>
        <FormField label="Organisation / Company" htmlFor="organization">
          <input required type="text" id="organization" name="organization" autoComplete="organization" aria-invalid={Boolean(errors.organization)} aria-describedby={errors.organization ? "organization-error" : undefined} className={getControlClassName()} />
          {errors.organization && <p id="organization-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.organization}</p>}
        </FormField>
        <FormField label="Job Title" htmlFor="jobTitle">
          <input required type="text" id="jobTitle" name="jobTitle" autoComplete="organization-title" aria-invalid={Boolean(errors.jobTitle)} aria-describedby={errors.jobTitle ? "jobTitle-error" : undefined} className={getControlClassName()} />
          {errors.jobTitle && <p id="jobTitle-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.jobTitle}</p>}
        </FormField>
        <FormField label="Email Address" htmlFor="email">
          <input required type="email" id="email" name="email" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} className={getControlClassName()} />
          {errors.email && <p id="email-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.email}</p>}
        </FormField>
        <FormField label="Phone/WhatsApp" htmlFor="phone">
          <input required type="tel" id="phone" name="phone" autoComplete="tel" aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? "phone-error" : undefined} className={getControlClassName()} />
          {errors.phone && <p id="phone-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.phone}</p>}
        </FormField>
        <FormField label="Service Required" htmlFor="serviceRequired">
          <select
            required
            id="serviceRequired"
            name="serviceRequired"
            value={selectedService}
            onChange={(event) => {
              setSelectedService(event.target.value);
            }}
            aria-invalid={Boolean(errors.serviceRequired)}
            aria-describedby={errors.serviceRequired ? "serviceRequired-error" : undefined}
            className={getControlClassName()}
          >
            {serviceOptions.map((option) => <option key={option} value={option}>{option}</option>)}
          </select>
          {errors.serviceRequired && <p id="serviceRequired-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.serviceRequired}</p>}
        </FormField>
        {specialistFocus && selectedService === specialistFocus.title && (
          <FormField label="Select a specialist focus" htmlFor="specialistService">
            <select
              required
              id="specialistService"
              name="specialistService"
              defaultValue=""
              aria-invalid={Boolean(errors.specialistService)}
              aria-describedby={errors.specialistService ? "specialistService-error" : undefined}
              className={getControlClassName()}
            >
              <option value="" disabled>Select a focus area</option>
              {specialistFocus.items.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
            {errors.specialistService && <p id="specialistService-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.specialistService}</p>}
          </FormField>
        )}
        {isTrainingPage && (
          <>
            <FormField label="Number of Delegates" htmlFor="delegateCount">
              <input required type="number" id="delegateCount" name="delegateCount" min="1" step="1" aria-invalid={Boolean(errors.delegateCount)} aria-describedby={errors.delegateCount ? "delegateCount-error" : undefined} className={getControlClassName()} />
              {errors.delegateCount && <p id="delegateCount-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.delegateCount}</p>}
            </FormField>
            <FormField label="Training Location" htmlFor="location">
              <input required type="text" id="location" name="location" autoComplete="address-level2" aria-invalid={Boolean(errors.location)} aria-describedby={errors.location ? "location-error" : undefined} className={getControlClassName()} />
              {errors.location && <p id="location-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.location}</p>}
            </FormField>
          </>
        )}
        <FormField label="Briefly tell us what you need" htmlFor="message">
          <textarea required id="message" name="message" rows={4} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "message-error" : undefined} className={getControlClassName("resize-y")} />
          {errors.message && <p id="message-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.message}</p>}
        </FormField>
        <FormField label="Preferred Start Date/Time Frame" htmlFor="startTimeframe">
          <input required type="text" id="startTimeframe" name="startTimeframe" aria-invalid={Boolean(errors.startTimeframe)} aria-describedby={errors.startTimeframe ? "startTimeframe-error" : undefined} className={getControlClassName()} placeholder="e.g. March 2027 or within 3 months" />
          {errors.startTimeframe && <p id="startTimeframe-error" className="mt-1 text-sm text-red-700" aria-live="polite">{errors.startTimeframe}</p>}
        </FormField>
        <label htmlFor="privacyConsent" className="flex items-start gap-3 text-sm leading-6 text-slate-600">
          <input required type="checkbox" id="privacyConsent" name="privacyConsent" value="yes" aria-invalid={Boolean(errors.privacyConsent)} aria-describedby={errors.privacyConsent ? "privacyConsent-error" : undefined} className="mt-1 h-4 w-4 shrink-0 accent-[#0d1b3d]" />
          <span>I have read the <Link href="/privacy" className="font-medium text-[#0d1b3d] underline underline-offset-2">Privacy Notice</Link>.</span>
        </label>
        {errors.privacyConsent && <p id="privacyConsent-error" className="text-sm text-red-700" aria-live="polite">{errors.privacyConsent}</p>}
        <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center rounded-xl bg-[#0d1b3d] px-6 py-4 text-base font-semibold text-white transition-all hover:bg-[#08172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2 disabled:opacity-70">
          {isSubmitting ? "Submitting..." : "Submit Proposal Request"}
        </button>
        {message && !isSubmitted && <p role="status" aria-live="polite" className="text-sm text-red-700">{message}</p>}
      </form>
    </div>
  );
}
