"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { FormField, getControlClassName } from "@/components/ui/FormField";

export function ServiceEnquiryForm({ serviceName }: { serviceName: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
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
        <p className="text-green-700">Thank you for your interest in {serviceName}. Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h3 className="mb-6 text-2xl font-bold text-slate-900">Request Service</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField label="Full Name" htmlFor="name">
          <input required type="text" id="name" className={getControlClassName()} placeholder="John Doe" />
        </FormField>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField label="Work Email" htmlFor="email">
            <input required type="email" id="email" className={getControlClassName()} placeholder="john@company.com" />
          </FormField>
          <FormField label="Phone" htmlFor="phone">
            <input required type="tel" id="phone" className={getControlClassName()} placeholder="+254..." />
          </FormField>
        </div>
        <FormField label="Organization Name" htmlFor="organization">
          <input required type="text" id="organization" className={getControlClassName()} placeholder="Acme Corp" />
        </FormField>
        <FormField label="Number of Participants" htmlFor="participants">
          <select id="participants" className={getControlClassName()}>
            <option>1-10</option>
            <option>11-50</option>
            <option>51-200</option>
            <option>200+</option>
          </select>
        </FormField>
        <FormField label="Message" htmlFor="message">
          <textarea id="message" rows={4} className={getControlClassName("resize-none")} placeholder="Tell us about your specific requirements..." />
        </FormField>
        <button type="submit" disabled={isSubmitting} className="inline-flex w-full items-center justify-center rounded-xl bg-[#0d1b3d] px-6 py-4 text-base font-semibold text-white transition-all hover:bg-[#08172f] focus:outline-none focus:ring-2 focus:ring-[#d4af6d] focus:ring-offset-2 disabled:opacity-70">
          {isSubmitting ? "Submitting..." : "Submit Service Enquiry"}
        </button>
      </form>
    </div>
  );
}
