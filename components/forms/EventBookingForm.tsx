"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { FormField, getControlClassName } from "@/components/ui/FormField";

interface EventBookingFormProps {
  isBookingOpen: boolean;
  eventTitle: string;
}

export function EventBookingForm({ isBookingOpen, eventTitle }: EventBookingFormProps) {
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
        <h3 className="mb-2 text-xl font-bold text-green-800">{isBookingOpen ? "Booking Confirmed" : "Added to Waitlist"}</h3>
        <p className="text-green-700">
          {isBookingOpen
            ? `Thank you for booking a seat for ${eventTitle}. We have sent the confirmation to your email.`
            : `You have been added to the waitlist for ${eventTitle}. We will notify you if a spot opens up.`}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm sm:p-8">
      <h3 className="mb-2 text-2xl font-bold text-slate-900">{isBookingOpen ? "Book Your Seat" : "Join the Waitlist"}</h3>
      <p className="mb-6 text-sm text-slate-600">
        {isBookingOpen ? "Reserve your spot by filling out the details below." : "Registration is currently closed. Join the waitlist and be the first to know if spots open up."}
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormField label="Attendee Name" htmlFor="name">
          <input required type="text" id="name" className={getControlClassName()} placeholder="John Doe" />
        </FormField>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormField label="Corporate Email" htmlFor="email">
            <input required type="email" id="email" className={getControlClassName()} placeholder="john@company.com" />
          </FormField>
          <FormField label="Phone" htmlFor="phone">
            <input required type="tel" id="phone" className={getControlClassName()} placeholder="+254..." />
          </FormField>
        </div>
        <FormField label="Company" htmlFor="company">
          <input required type="text" id="company" className={getControlClassName()} placeholder="Acme Corp" />
        </FormField>
        {isBookingOpen && (
          <>
            <FormField label="Ticket Count" htmlFor="tickets">
              <select id="tickets" className={getControlClassName()}>
                <option value="1">1 Ticket</option>
                <option value="2">2 Tickets</option>
                <option value="3">3 Tickets</option>
                <option value="4">4 Tickets</option>
                <option value="5+">5+ Tickets (Group)</option>
              </select>
            </FormField>
            <FormField label="Payment/Invoice Preference" htmlFor="payment">
              <select id="payment" className={getControlClassName()}>
                <option value="invoice">Send Corporate Invoice</option>
                <option value="card">Pay Online (Card/M-Pesa)</option>
              </select>
            </FormField>
          </>
        )}
        <button type="submit" disabled={isSubmitting} className={`inline-flex w-full items-center justify-center rounded-xl px-6 py-4 text-base font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-70 ${isBookingOpen ? "bg-[#0d1b3d] text-white hover:bg-[#08172f] focus:ring-[#d4af6d]" : "bg-[#d4af6d] text-[#0d1b3d] hover:bg-[#c7a267] focus:ring-[#d4af6d]"}`}>
          {isSubmitting ? "Processing..." : isBookingOpen ? "Confirm Booking" : "Join Waitlist"}
        </button>
      </form>
    </div>
  );
}
