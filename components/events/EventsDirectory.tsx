"use client";

import { useState } from "react";
import { Megaphone } from "lucide-react";
import { EventCard } from "@/components/ui/EventCard";
import { PageHero } from "@/components/ui/PageHero";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { eventsData } from "@/data/events";

type FilterTab = "Upcoming" | "Recent" | "Past";

export function EventsDirectory() {
  const [activeTab, setActiveTab] = useState<FilterTab>("Upcoming");
  const filteredEvents = eventsData.filter((event) => event.category === activeTab);

  return (
    <div className="min-h-screen bg-[#f8f6f1] pb-24 text-[#0d1b3d]">
      <PageHero
        variant="events"
        eyebrow="Gather, learn, connect"
        title={<>Ideas worth<br /><span className="text-[#d4af6d]">showing up for.</span></>}
        description="Join industry leaders, experts and professionals at our corporate learning events and strategic forums."
        imageUrl="/blueprint-forum.webp"
        preload
      />
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-12 flex max-w-full justify-center overflow-x-auto">
          <div role="group" aria-label="Filter events" className="inline-flex min-w-max rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            {(["Upcoming", "Recent", "Past"] as FilterTab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] sm:px-6 ${activeTab === tab ? "bg-[#0d1b3d] text-white shadow-md" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"}`}
              >
                {tab} Events
              </button>
            ))}
          </div>
        </div>

        <h2 className="sr-only">Events</h2>
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.length > 0 ? filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          )) : (
            <p role="status" className="col-span-full py-20 text-center text-slate-600">
              No {activeTab.toLowerCase()} events found at this time.
            </p>
          )}
        </div>

        <div className="relative flex flex-col items-center justify-between gap-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#0d1b3d] to-[#08172f] p-8 text-white shadow-xl md:flex-row sm:p-12">
          <div className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4 opacity-10" aria-hidden="true">
            <Megaphone className="h-64 w-64" />
          </div>
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <h2 className="mb-4 text-3xl font-bold">Partner with us</h2>
            <p className="text-lg text-blue-100">Partner with us to create meaningful industry conversations, expand your reach and connect with key decision-makers.</p>
          </div>
          <TrackedLink
            href="/contact?interest=sponsorship"
            eventName="partner_click"
            className="relative z-10 inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-white px-8 text-base font-semibold text-[#0d1b3d] transition-colors hover:bg-[#f7f0e4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08172f]"
          >
            Partner with us
          </TrackedLink>
        </div>
      </section>
    </div>
  );
}