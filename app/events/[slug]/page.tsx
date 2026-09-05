import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  FileText,
  MapPin,
  Users,
} from "lucide-react";
import { eventsData } from "@/data/events";
import { EventBookingForm } from "@/components/forms/EventBookingForm";

interface EventDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function EventDetailPage({ params }: EventDetailProps) {
  const { slug } = await params;
  const event = eventsData.find((entry) => entry.slug === slug);

  if (!event) {
    notFound();
  }

  const agendaHighlights = event.agenda ?? [
    { time: "09:00 AM", activity: "Registration & Welcome" },
    { time: "10:00 AM", activity: "Executive Briefing" },
    { time: "01:00 PM", activity: "Networking Session" },
  ];

  const speakerList = event.speakers ?? [
    {
      name: "Event Speaker",
      role: "Industry Leader",
      company: "Prestigious Consulting",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const dateLabel = new Date(event.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="min-h-screen bg-[#f8f6f1] text-[#0d1b3d] selection:bg-[#d4af6d] selection:text-[#0d1b3d]">
      <section className="px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pb-24 lg:pt-12">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-[#08172f] px-6 py-12 text-white sm:px-12 lg:px-20 lg:py-16">
          <Image src={event.imageUrl} alt="" fill priority sizes="(max-width: 1280px) 100vw, 1200px" className="object-cover opacity-25" />
          <div className="absolute inset-0 bg-[linear-gradient(110deg,#08172f_15%,rgba(8,23,47,0.88),rgba(8,23,47,0.4))]" />
          <div className="relative z-10">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.2em]">
            <span className="rounded-full bg-[#d4af6d] px-3 py-1 text-[#0d1b3d]">
              {event.isBookingOpen ? "Registration Open" : "Registration Closed"}
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-200">
              {event.category}
            </span>
          </div>

          <div className="grid items-center gap-10 xl:grid-cols-12">
            <div className="space-y-6 xl:col-span-8">
              <h1 className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl">{event.title}</h1>
              {event.theme && (
                <p className="max-w-2xl text-sm font-semibold uppercase tracking-[0.18em] text-[#d4af6d]">
                  {event.theme}
                </p>
              )}
              <p className="max-w-2xl text-lg leading-8 text-white/75">{event.tagline ?? event.description}</p>

              <div className="grid gap-4 border-t border-white/10 pt-5 text-sm text-slate-200 sm:grid-cols-2">
                <div className="flex min-w-0 items-start gap-3">
                  <Calendar className="h-5 w-5 text-[#d4af6d]" />
                  <span className="min-w-0 break-words whitespace-normal">{dateLabel}</span>
                </div>
                <div className="flex min-w-0 items-start gap-3">
                  <Clock className="h-5 w-5 text-[#d4af6d]" />
                  <span className="min-w-0 break-words whitespace-normal">{event.time ?? "09:00 AM – 05:00 PM EAT"}</span>
                </div>
                <div className="flex min-w-0 items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#d4af6d]" />
                  <span className="min-w-0 break-words whitespace-normal">{event.venue}{event.location ? `, ${event.location}` : ""}</span>
                </div>
                <div className="flex min-w-0 items-start gap-3">
                  <Users className="h-5 w-5 text-[#d4af6d]" />
                  <span className="min-w-0 break-words whitespace-normal">250 Executive Delegates</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10"
                >
                  <FileText className="h-4 w-4 text-[#d4af6d]" />
                  Download Brochure
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10"
                >
                  <Download className="h-4 w-4 text-[#d4af6d]" />
                  Sponsorship Deck
                </a>
              </div>
            </div>

            <div className="xl:col-span-4"><EventBookingForm isBookingOpen={event.isBookingOpen} eventTitle={event.title} /></div>
          </div>
        </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6c45]">About the forum</p>
          <h2 className="text-2xl font-extrabold text-[#0d1b3d] sm:text-3xl">Event overview & strategic focus</h2>
          <p className="text-base leading-7 text-slate-600">{event.overview ?? event.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {(agendaHighlights.length ? agendaHighlights : []).map((item, index) => (
            <div key={`${item.time}-${item.activity}`} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0d1b3d]/10 text-sm font-extrabold text-[#0d1b3d]">
                0{index + 1}
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#0d1b3d]">{item.activity}</h3>
              <p className="text-sm text-slate-500">{item.time}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6c45]">Distinguished panel</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0d1b3d] sm:text-3xl">Featured keynote speakers</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {speakerList.map((speaker) => (
              <div key={speaker.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                <div className="relative flex h-72 items-center justify-center bg-[#f1e8d4]">
                  <div className="text-center text-[#8a6c45]" aria-label={`${speaker.name} portrait placeholder`}>
                    <Users className="mx-auto h-16 w-16 opacity-60" strokeWidth={1.25} />
                    <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em]">Portrait coming soon</p>
                  </div>
                </div>
                <div className="space-y-1 p-6">
                  <h3 className="text-lg font-bold text-[#0d1b3d]">{speaker.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#8a6c45]">{speaker.role}</p>
                  <p className="text-sm text-slate-500">{speaker.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6c45]">Corporate partnerships</p>
          <h2 className="mt-2 text-2xl font-extrabold text-[#0d1b3d] sm:text-3xl">Become an official event sponsor</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            { tier: "Gold", title: "Headline Partner", perks: ["Keynote speaking slot", "8 complimentary executive passes", "Premium exhibition booth"], accent: "#0d1b3d" },
            { tier: "Silver", title: "Panel Partner", perks: ["Panel participation seat", "4 complimentary passes", "Brand placement across materials"], accent: "#d4af6d" },
            { tier: "Bronze", title: "Exhibition Partner", perks: ["Standard exhibition space", "2 complimentary passes", "Digital logo listing on website"], accent: "#c9b48a" },
          ].map((item) => (
            <div key={item.tier} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0d1b3d]" style={{ backgroundColor: "rgba(212, 175, 109, 0.2)" }}>
                {item.tier} Sponsor
              </span>
              <h3 className="mt-5 text-2xl font-extrabold text-[#0d1b3d]">{item.title}</h3>
              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {item.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0d1b3d]" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: item.accent }}
              >
                Apply for {item.tier} Tier
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
