import Link from "next/link";
import Image from "next/image";
import { EventItem } from "@/data/events";
import { Calendar, MapPin, ArrowRight } from "lucide-react";

export function EventCard({ event }: { event: EventItem }) {
  const isUpcoming = event.category === "Upcoming";
  const buttonClasses = isUpcoming
    ? "bg-[#0d1b3d] text-white hover:bg-[#08172f]"
    : "bg-[#f7f0e4] text-[#0d1b3d] hover:bg-[#ead4a3]";

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#08172f]/70 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0d1b3d] shadow-sm">
            {event.category}
          </span>
          {event.isBookingOpen && (
            <span className="inline-flex items-center rounded-full bg-[#d4af6d] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#0d1b3d] shadow-sm">
              Booking Open
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6c45]">
          {event.category}
        </p>
        <h3 className="mb-3 text-xl font-bold text-slate-900 line-clamp-2">{event.title}</h3>

        <div className="mb-4 space-y-2 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-[#0d1b3d]" />
            <time dateTime={event.date}>
              {new Date(event.date).toLocaleDateString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[#0d1b3d]" />
            <span className="line-clamp-2 min-w-0 break-words">{event.venue}{event.location ? `, ${event.location}` : ""}</span>
          </div>
        </div>

        <p className="mb-6 flex-1 text-sm leading-6 text-slate-600 line-clamp-3">{event.description}</p>

        <Link
          href={`/events/${event.slug}`}
          className={`mt-auto inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${buttonClasses}`}
        >
          {isUpcoming ? "Book Seat" : "View Details"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
