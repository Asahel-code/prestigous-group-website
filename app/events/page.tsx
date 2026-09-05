"use client";

import { useState } from "react";
import { EventCard } from "@/components/ui/EventCard";
import { PageHero } from "@/components/ui/PageHero";
import { eventsData } from "@/data/events";
import { Megaphone } from "lucide-react";

type FilterTab = "Upcoming" | "Recent" | "Past";

export default function EventsDirectoryPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("Upcoming");
  
  const filteredEvents = eventsData.filter(event => event.category === activeTab);

  return (
    <div className="min-h-screen bg-[#f8f6f1] pb-24 text-[#0d1b3d]">
      <PageHero
        eyebrow="Gather, learn, connect"
        title={<>Ideas worth<br /><span className="text-[#d4af6d]">showing up for.</span></>}
        description="Join industry leaders, experts, and professionals at our upcoming events, conferences, and strategic learning sessions."
        imageUrl="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=85&w=2200"
      />

      {/* Main Content */}
      <section className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Tab/Filter Control */}
        <div className="mb-12 flex max-w-full justify-center overflow-x-auto">
          <div className="inline-flex min-w-max rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            {(["Upcoming", "Recent", "Past"] as FilterTab[]).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all sm:px-6 ${
                  activeTab === tab 
                    ? "bg-[#0d1b3d] text-white shadow-md" 
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {tab} Events
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-slate-500">
              No {activeTab.toLowerCase()} events found at this time.
            </div>
          )}
        </div>

        {/* Sponsorship CTA Box */}
        <div className="bg-gradient-to-br from-[#0d1b3d] to-[#08172f] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4">
            <Megaphone className="w-64 h-64" />
          </div>
          
          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="text-blue-100 text-lg">
              Partner with us to create meaningful industry conversations, expand your reach, and connect with key decision-makers.
            </p>
          </div>
          
          <div className="relative z-10 shrink-0">
            <button className="inline-flex h-12 items-center justify-center rounded-xl bg-white px-8 text-base font-semibold text-[#0d1b3d] transition-all hover:bg-[#f7f0e4] hover:shadow-lg">
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
