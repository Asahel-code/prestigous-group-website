"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { FormField, getControlClassName } from "@/components/ui/FormField";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white pb-20 text-[#171717]">
      <section className="mx-auto w-full max-w-7xl px-5 pb-20 pt-5 sm:px-8 sm:pt-8 lg:px-12 lg:pb-28 lg:pt-10">
        <div className="grid items-stretch gap-10 md:grid-cols-2 lg:gap-14">
          <div className="flex min-w-0 flex-col">
            <div className="relative isolate mb-12 min-h-[320px] overflow-hidden rounded-md bg-[#08172f] sm:min-h-[360px]">
              <Image
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=85&w=1600"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-cover object-[65%_center] opacity-80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,#08172f_0%,rgba(8,23,47,0.94)_42%,rgba(8,23,47,0.34)_100%)]" />
              <div className="relative z-10 flex min-h-[320px] flex-col justify-center px-5 py-10 text-white sm:min-h-[360px] sm:px-10">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af6d]">
                  Contact Prestigious Consultancy & Management Ltd
                </p>
                <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                  Love to hear from you,
                  <br className="hidden sm:block" /> let&apos;s get in touch.
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
                  Tell us what you&apos;re working on and our team will help you
                  find the right next step.
                </p>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#a88445]">
                Find us
              </p>
              <h2 className="mt-3 text-2xl font-semibold text-[#171717]">
                Nairobi, Kenya
              </h2>
              <div className="mt-8 space-y-6 text-sm leading-6 text-[#555]">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#a88445]"
                    aria-hidden="true"
                  />
                  <p>
                    Pearl Collections Kenya, Koinange Street
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#a88445]"
                    aria-hidden="true"
                  />
                  <p>+254 111 441 515</p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#a88445]"
                    aria-hidden="true"
                  />
                  <p>prestigiousconsultants@gmail.com</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#a88445]"
                    aria-hidden="true"
                  />
                  <p>
                    Mon - Fri: 8:00 AM - 5:00 PM
                    <br />
                    Sat: 9:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-w-0">
            {isSubmitted ? (
              <div
                className="flex h-full w-full flex-col justify-center rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                role="status"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f7f0e4] text-[#a88445]">
                  <Send className="h-5 w-5" aria-hidden="true" />
                </div>
                <h2 className="mt-5 text-2xl font-semibold text-[#171717]">
                  Message sent
                </h2>
                <p className="mt-2 max-w-md leading-7 text-[#666]">
                  Thank you for reaching out. A member of our team will get back
                  to you within 24 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-[#0d1b3d] underline underline-offset-4 hover:text-[#a88445]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex h-full w-full flex-col rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  Send us a message
                </h2>
                <p className="mt-2 mb-6 text-sm leading-6 text-slate-600">
                  Share a few details and our team will be in touch.
                </p>
                <div className="flex flex-1 flex-col gap-5">
                  <FormField label="Full Name" htmlFor="name">
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      className={getControlClassName()}
                    />
                  </FormField>
                  <FormField label="Email Address" htmlFor="email">
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      className={getControlClassName()}
                    />
                  </FormField>
                  <FormField label="Phone/WhatsApp (optional)" htmlFor="phone">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      className={getControlClassName()}
                    />
                  </FormField>
                  <FormField label="How can we help?" htmlFor="message">
                    <textarea
                      required
                      id="message"
                      name="message"
                      rows={4}
                      className={getControlClassName("resize-y")}
                    />
                  </FormField>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-auto inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-[#0d1b3d] px-7 text-sm font-semibold text-white transition-colors hover:bg-[#08172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2 disabled:opacity-70"
                  >
                    {isSubmitting ? "Sending..." : "Send your message"}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
