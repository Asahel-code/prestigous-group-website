import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  MapPin,
  Users,
} from "lucide-react";
import { eventsData } from "@/data/events";
import { EventBookingForm } from "@/components/forms/EventBookingForm";
import type { Metadata } from "next";

interface EventDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: EventDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const event = eventsData.find((entry) => entry.slug === slug);

  if (!event) {
    return {};
  }

  return {
    title: `${event.title} | Corporate Event | Prestigious Consultancy & Management Ltd`,
    description: event.description,
    openGraph: {
      title: `${event.title} | Prestigious Consultancy & Management Ltd`,
      description: event.description,
      images: [{ url: event.imageUrl, alt: event.title }],
    },
  };
}

export default async function EventDetailPage({ params }: EventDetailProps) {
  const { slug } = await params;
  const event = eventsData.find((entry) => entry.slug === slug);

  if (!event) {
    notFound();
  }

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
              {event.isBookingOpen ? "Delegate registration open" : "Registration closed"}
            </span>
            <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-slate-200">
              {event.category}
            </span>
          </div>

          <div className="max-w-4xl space-y-6">
              <h1 className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] sm:text-6xl">{event.title}</h1>
              {event.theme && (
                <p className="max-w-2xl text-sm font-semibold uppercase tracking-[0.18em] text-[#d4af6d]">
                  {event.theme}
                </p>
              )}
              {event.tagline && <p className="max-w-2xl text-lg font-semibold leading-8 text-[#d4af6d]">{event.tagline}</p>}
              <p className="max-w-3xl text-base leading-7 text-white/75">{event.description}</p>

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

          </div>
        </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6c45]">About the forum</p>
          <h2 className="text-2xl font-extrabold text-[#0d1b3d] sm:text-3xl">Meaningful conversations. Lasting connections.</h2>
          <p className="text-base leading-7 text-slate-600">{event.overview ?? event.description}</p>
        </div>
        {event.audience && event.audience.length > 0 && (
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6c45]">Who should attend?</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {event.audience.map((attendee) => (
                <li key={attendee} className="border-b border-slate-200 pb-3 text-sm font-medium text-[#0d1b3d]">{attendee}</li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {event.speakers && event.speakers.length > 0 && <section className="border-y border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-10">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a6c45]">Distinguished panel</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#0d1b3d] sm:text-3xl">Featured keynote speakers</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {event.speakers.map((speaker) => (
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
      </section>}

      <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <EventBookingForm
            eventTitle={event.title}
            registrationUrl={event.registrationUrl ?? "#"}
            partnershipOptions={event.partnershipOptions ?? []}
          />
        </div>
      </section>
    </div>
  );
}
