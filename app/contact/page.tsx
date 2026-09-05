"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Clock, Send } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
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
    <div className="min-h-screen bg-[#f8f6f1] pb-24 text-[#0d1b3d]">
      <PageHero
        eyebrow="Let's talk"
        title={<>A clear next step<br /><span className="text-[#d4af6d]">starts here.</span></>}
        description="Get in touch with our team of experts to discuss how we can support your organizational goals."
        imageUrl="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=85&w=2200"
      />

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Contact Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Our Offices</h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#f7f0e4] text-[#0d1b3d] rounded-xl shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Headquarters</h3>
                  <p className="text-slate-600 leading-relaxed">Pearl Collections Kenya,  Koinange St<br />Nairobi, Kenya</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-[#0A16A7] rounded-xl shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Direct Phone</h3>
                  <p className="text-slate-600 leading-relaxed">+254 700 000 000<br />+254 20 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-[#0A16A7] rounded-xl shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Email Support</h3>
                  <p className="text-slate-600 leading-relaxed">info@company.co.ke<br />training@company.co.ke</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-[#0A16A7] rounded-xl shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Operating Hours</h3>
                  <p className="text-slate-600 leading-relaxed">Monday - Friday: 8:00 AM - 5:00 PM<br />Saturday: 9:00 AM - 1:00 PM</p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e8e2d5] bg-slate-100">
              <iframe
                title="Prestigious Consultancy location on Google Maps"
                src="https://www.google.com/maps?q=-1.2840114,36.8185837&z=16&output=embed"
                className="h-48 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="flex items-center justify-between gap-4 border-t border-[#e8e2d5] bg-white px-4 py-3">
                <span className="flex min-w-0 items-center gap-2 text-xs text-[#596170]">
                  <MapPin className="h-4 w-4 shrink-0 text-[#a88445]" />
                  <span className="truncate">Koinange Street, Nairobi</span>
                </span>
                <a
                  href="https://maps.app.goo.gl/wHEKBALDesVYgzgS7"
                  target="_blank"
                  rel="noreferrer"
                  className="shrink-0 text-xs font-semibold text-[#0d1b3d] hover:text-[#a88445]"
                >
                  Open in Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-slate-100 relative">
            {isSubmitted ? (
               <div className="absolute inset-0 bg-white rounded-3xl flex flex-col items-center justify-center p-8 text-center z-20">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-lg text-slate-600 max-w-sm">
                  Thank you for reaching out. A member of our team will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-8 text-[#0d1b3d] font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField label="First Name" htmlFor="firstName">
                      <input required type="text" id="firstName" className={getControlClassName()} />
                    </FormField>
                    <FormField label="Last Name" htmlFor="lastName">
                      <input required type="text" id="lastName" className={getControlClassName()} />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <FormField label="Email Address" htmlFor="email">
                      <input required type="email" id="email" className={getControlClassName()} />
                    </FormField>
                    <FormField label="Phone Number" htmlFor="phone">
                      <input required type="tel" id="phone" className={getControlClassName()} />
                    </FormField>
                  </div>

                  <FormField label="Area of Interest" htmlFor="interest">
                    <select required id="interest" className={getControlClassName()}>
                      <option value="">Select an option...</option>
                      <optgroup label="Services">
                        <option value="training">Corporat Training</option>
                        <option value="consultancy">Enterprise Consultancy</option>
                        <option value="finishes">Space Finishes</option>
                      </optgroup>
                      <optgroup label="Events & Other">
                        <option value="events">Event Registration/Sponsorship</option>
                        <option value="general">General Inquiry</option>
                      </optgroup>
                    </select>
                  </FormField>

                  <FormField label="Message" htmlFor="message">
                    <textarea required id="message" rows={5} className={getControlClassName("resize-none")} />
                  </FormField>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center rounded-xl bg-[#0d1b3d] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[#08172f] focus:outline-none focus:ring-2 focus:ring-[#d4af6d] focus:ring-offset-2 disabled:opacity-70 shadow-lg shadow-[#0d1b3d]/20"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </>
            )}
          </div>
          
        </div>
      </section>
    </div>
  );
}
