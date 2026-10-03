"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { FormField, getControlClassName } from "@/components/ui/FormField";

export function ServiceEnquiryForm({
  serviceName,
  serviceOptions,
  defaultServiceOption,
  specialistFocus,
}: {
  serviceName: string;
  serviceOptions: string[];
  defaultServiceOption: string;
  specialistFocus?: { title: string; items: string[] };
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedService, setSubmittedService] = useState(defaultServiceOption);
  const [selectedService, setSelectedService] = useState(defaultServiceOption);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const serviceRequired = String(formData.get("serviceRequired") ?? serviceName);
    const specialistService = formData.get("specialistService");
    setSubmittedService(
      specialistService ? `${serviceRequired}: ${specialistService}` : serviceRequired,
    );
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Send className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-xl font-bold text-green-800">Enquiry Received</h3>
        <p className="text-green-700">Thank you for your interest in {submittedService}. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="text-2xl font-bold text-slate-900">Request a Proposal</h3>
      <p className="mt-2 mb-6 text-sm leading-6 text-slate-600">Let’s discuss how we can support your organization.</p>
      <form onSubmit={handleSubmit} className="space-y-5">
        <FormField label="Full Name" htmlFor="name">
          <input required type="text" id="name" name="name" autoComplete="name" className={getControlClassName()} />
        </FormField>
        <FormField label="Organization / Company" htmlFor="organization">
          <input required type="text" id="organization" name="organization" autoComplete="organization" className={getControlClassName()} />
        </FormField>
        <FormField label="Job Title" htmlFor="jobTitle">
          <input required type="text" id="jobTitle" name="jobTitle" autoComplete="organization-title" className={getControlClassName()} />
        </FormField>
        <FormField label="Email Address" htmlFor="email">
          <input required type="email" id="email" name="email" autoComplete="email" className={getControlClassName()} />
        </FormField>
        <FormField label="Phone/WhatsApp" htmlFor="phone">
          <input required type="tel" id="phone" name="phone" autoComplete="tel" className={getControlClassName()} />
        </FormField>
        <fieldset>
          <legend className="mb-2 text-sm font-medium text-slate-700">Service Required</legend>
          <div className="space-y-2">
            {serviceOptions.map((option) => (
              <label key={option} className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700">
                <input
                  required
                  type="radio"
                  name="serviceRequired"
                  value={option}
                  defaultChecked={option === defaultServiceOption}
                  onChange={() => setSelectedService(option)}
                  className="mt-1 h-4 w-4 shrink-0 accent-[#0d1b3d]"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </fieldset>
        {specialistFocus && selectedService === specialistFocus.title && (
          <FormField label="Select a specialist focus" htmlFor="specialistService">
            <select
              required
              id="specialistService"
              name="specialistService"
              defaultValue=""
              className={getControlClassName()}
            >
              <option value="" disabled>Select a focus area</option>
              {specialistFocus.items.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))}
            </select>
          </FormField>
        )}
        <FormField label="Briefly tell us what you need" htmlFor="message">
          <textarea required id="message" name="message" rows={4} className={getControlClassName("resize-y")} />
        </FormField>
        <FormField label="Preferred Start Date/Time Frame" htmlFor="startTimeframe">
          <input required type="text" id="startTimeframe" name="startTimeframe" className={getControlClassName()} placeholder="e.g. March 2027 or within 3 months" />
        </FormField>
        <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center rounded-xl bg-[#0d1b3d] px-6 py-4 text-base font-semibold text-white transition-all hover:bg-[#08172f] focus:outline-none focus:ring-2 focus:ring-[#d4af6d] focus:ring-offset-2 disabled:opacity-70">
          {isSubmitting ? "Submitting..." : "Submit Proposal Request"}
        </button>
      </form>
    </div>
  );
}
