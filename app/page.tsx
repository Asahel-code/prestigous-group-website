import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardCheck,
  Compass,
  GraduationCap,
  Sparkles,
  Users,
} from "lucide-react";
import { eventsData } from "@/data/events";
import { servicesData } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";
import { TrackedLink } from "@/components/analytics/TrackedLink";

export const metadata = createPageMetadata({
  title: "Corporate Training & Consultancy in Nairobi, Kenya | Prestigious Consultancy",
  description: "Practical corporate training and consultancy in Nairobi, Kenya, helping organisations strengthen workplace safety, develop people and improve performance.",
  path: "/",
  absoluteTitle: true,
});

const capabilityTracks = servicesData.map((service, index) => ({
  ...service,
  number: `0${index + 1}`,
  eyebrow: service.title,
  title: service.theme,
  href: `/services/${service.slug}`,
  icon: index === 0 ? Users : index === 1 ? BriefcaseBusiness : Sparkles,
}));

const heroPillars = [
  { label: "Professional Training", icon: GraduationCap, href: "/services/training" },
  { label: "Executive Consultancy", icon: BriefcaseBusiness, href: "/services/consultancy" },
  { label: "Corporate Events", icon: CalendarDays, href: "/events" },
];

const googleReviewsUrl =
  "https://www.google.com/search?q=prestigiousconsultancy&oq=prestigiousconsultancy&sourceid=chrome&ie=UTF-8#lrd=0x182f112c7d852efd:0xe4ca61acbf365d58,1,,,";

const googleReviews = [
  {
    name: "Nelvin Omondi",
    quote:
      "I attended one of the latest conferences by the company and it was well organized and educative. Am looking forward to their next property conference.",
    href: "https://www.google.com/maps/contrib/106199361657369378042/reviews?hl=en-GB",
  },
  {
    name: "STACEY OLULO",
    quote:
      "Your services are extraordinary. Hoping to sign up for your consultancy services soon.",
    href: "https://www.google.com/maps/contrib/114410356139465255627/reviews?hl=en-GB",
  },
  {
    name: "CEO Mutua",
    quote:
      "It's amazing and tremendous visit Prestigious Consultancy for the best 👌",
    href: "https://www.google.com/maps/contrib/107778980151511349539/reviews?hl=en-GB",
  },
];

export default function HomePage() {
  const featuredEvent = eventsData.find(
    (event) => event.category === "Upcoming",
  );

  return (
    <div className="overflow-hidden bg-[#f8f6f1] text-[#0d1b3d]">
      <section className="px-4 pb-12 pt-5 sm:px-6 lg:px-8 lg:pb-16">
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl border border-[#e8e2d5] bg-[#f8f6f1] sm:rounded-[2rem]">
          <Image
            src="/img/home-hero.webp"
            alt="Construction professional at work on a building site"
            fill
            preload
            quality={60}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className="object-cover object-[58%_center]"
          />
          <div className="absolute inset-0 bg-[#f8f6f1]/90 sm:bg-transparent sm:bg-[linear-gradient(90deg,#f8f6f1_0%,rgba(248,246,241,0.98)_34%,rgba(248,246,241,0.86)_52%,rgba(248,246,241,0.18)_76%,rgba(8,23,47,0.12)_100%)]" />
          <div className="relative z-10 flex min-h-[620px] flex-col justify-center px-6 py-10 sm:min-h-[640px] sm:px-10 sm:py-12 lg:min-h-[680px] lg:px-14 lg:py-14">
            <div className="max-w-xl">
              <h1 className="max-w-xl text-4xl font-bold uppercase leading-[1.04] text-[#0d1b3d] sm:text-5xl xl:text-6xl">
                Building safer,
                <br />
                <span className="text-[#715426]">stronger</span>
                <br />
                organisations
              </h1>
              <div className="mt-5 h-1 w-24 bg-[#d4af6d]" />
              <p className="mt-5 max-w-lg text-base leading-7 text-[#0d1b3d]/80 sm:text-lg">
                Practical training and consultancy solutions that help people
                grow, teams perform, and organisations move forward.
              </p>
              <div className="mt-7 grid grid-cols-3 divide-x divide-[#d4af6d]/70">
                {heroPillars.map(({ label, icon: Icon, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="flex flex-col items-center gap-2 px-2 text-center text-xs font-semibold leading-4 text-[#0d1b3d] sm:px-3 sm:text-sm"
                  >
                    <Icon className="h-6 w-6 text-[#715426]" aria-hidden="true" />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/services"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#d4af6d] px-6 text-sm font-semibold text-[#08172f] transition-colors hover:bg-[#c7a267]"
                >
                  Explore our services <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[#0d1b3d]/60 px-6 text-sm font-semibold text-[#0d1b3d] transition-colors hover:bg-[#0d1b3d] hover:text-white"
                >
                  Request a proposal <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#715426]">
              One Partner. Practical Solutions. Lasting Results.
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
              Practical solutions for people and performance.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#596170]">
              From people, performance and solutions, we bring expertise,
              structure and purpose to the work that matters.
            </p>
          </div>
          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {capabilityTracks.map((track) => {
              const Icon = track.icon;
              return (
                <article
                  key={track.number}
                  className="group relative min-h-[520px] overflow-hidden border border-[#e8e2d5] bg-white p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-9"
                >
                  <div className="relative z-10 text-sm font-semibold text-[#0d1b3d]">
                    <span>{track.number}</span>
                  </div>
                  <div className="relative z-10 mt-16 max-w-xs pb-4 sm:mt-24">
                    <div className="mb-5 inline-flex bg-[#f1e8d4] p-3 text-[#715426]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#715426]">
                      {track.eyebrow}
                    </p>
                    <h3 className="mt-3 text-3xl font-medium leading-tight tracking-[-0.035em]">
                      {track.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-[#596170]">
                      {track.description}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-44 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_35%)]">
                    <Image
                      src={track.imageUrl}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative z-10 mt-8 flex flex-col gap-2 pb-8 sm:flex-row sm:flex-wrap">
                    <Link
                      href={track.href}
                      className="inline-flex h-11 items-center justify-center gap-2 bg-[#08172f] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#0d1b3d]"
                    >
                      {track.primaryCta} <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#f1e8d4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#715426]">
              <Sparkles className="h-4 w-4" /> Built for momentum
            </div>
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
              The work gets better when the plan is clear.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#596170]">
              Our approach is direct: understand the real constraint, equip the
                people closest to it, and leave your organisation stronger than we
              found it.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0d1b3d] hover:text-[#715426]"
            >
              Meet Prestigious Consultancy & Management Ltd <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-[2rem] bg-[#08172f] p-7 text-white sm:p-10">
              <ClipboardCheck className="h-7 w-7 text-[#d4af6d]" />
              <p className="mt-12 text-5xl font-medium tracking-[-0.05em]">2</p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                connected areas of organisational support
              </p>
            </div>
            <div className="mt-10 rounded-[2rem] bg-[#f1e8d4] p-7 text-[#0d1b3d] sm:p-10">
              <Compass className="h-7 w-7 text-[#715426]" />
              <p className="mt-12 text-5xl font-medium tracking-[-0.05em]">
                360°
              </p>
              <p className="mt-2 text-sm leading-6 text-[#596170]">
                perspective on people, process, and performance
              </p>
            </div>
          </div>
        </div>
      </section>

      {featuredEvent && (
        <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#715426]">
                  Keep learning
                </p>
                <h2 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  What&apos;s happening next
                </h2>
              </div>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0d1b3d]"
              >
                View all events <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="group grid overflow-hidden rounded-[2rem] bg-[#08172f] text-white lg:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[280px] overflow-hidden">
                <Image
                  src={featuredEvent.imageUrl}
                  alt={featuredEvent.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#08172f]/25" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d4af6d]">
                  {featuredEvent.category} · {featuredEvent.venue}
                </p>
                <h3 className="mt-4 max-w-xl text-3xl font-medium tracking-[-0.035em] sm:text-5xl">
                  {featuredEvent.title}
                </h3>
                <p className="mt-5 max-w-lg leading-7 text-white/70">
                  {featuredEvent.description}
                </p>
                <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link
                    href={`/events/${featuredEvent.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#d4af6d]"
                  >
                    Register now <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <TrackedLink
                    href="/contact?interest=sponsorship"
                    eventName="partner_click"
                    className="inline-flex items-center gap-2 border border-[#d4af6d]/60 px-4 py-2 text-sm font-semibold text-[#d4af6d] transition-colors hover:bg-[#d4af6d]/10"
                  >
                    Partner with us <ArrowUpRight className="h-4 w-4" />
                  </TrackedLink>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#715426]">
              Client perspective
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
              Trusted by the people we work with.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#596170]">
              See what clients are saying about their experience with
              Prestigious Consultancy on Google.
            </p>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {googleReviews.map((review) => (
              <article
                key={review.name}
                className="flex min-h-[260px] flex-col border border-[#e8e2d5] bg-[#f8f6f1] p-7 sm:p-9"
              >
                <blockquote className="mt-6 flex-1 text-lg leading-8 text-[#0d1b3d]">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-[#e8e2d5] pt-5">
                  <Link
                    href={review.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read ${review.name}'s Google review (opens in a new tab)`}
                    className="text-xs font-semibold text-[#715426] hover:text-[#0d1b3d]"
                  >
                    View on Google
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <Link
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leave a review on Google (opens in a new tab)"
            className="mt-8 inline-flex items-center gap-2 bg-[#08172f] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#0d1b3d]"
          >
            Leave a review on Google <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:pb-28">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 rounded-[2rem] bg-[#d4af6d] px-7 py-10 sm:px-12 lg:flex-row lg:items-center lg:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#08172f]/70">
              Ready when you are
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-medium tracking-[-0.035em] text-[#08172f] sm:text-5xl">
              Let&apos;s make your next step a meaningful one.
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#08172f] px-7 py-4 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Talk to our team <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
