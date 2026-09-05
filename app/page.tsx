import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  ClipboardCheck,
  Compass,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { eventsData } from "@/data/events";
import { servicesData } from "@/data/services";

const capabilityTracks = servicesData.map((service, index) => ({
  ...service,
  number: `0${index + 1}`,
  eyebrow: service.title,
  title: service.theme,
  href: `/services/${service.slug}`,
  icon: index === 0 ? Users : index === 1 ? BriefcaseBusiness : Sparkles,
}));

const outcomes = [
  "NITA approved training provider",
  "Solutions tailored to your context",
  "A partner for measurable, lasting impact",
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
      <section className="relative px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#08172f] px-5 py-12 text-white sm:min-h-[600px] sm:rounded-[2.5rem] sm:px-12 sm:py-16 lg:min-h-[700px] lg:px-20 lg:py-24">
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375b902?auto=format&fit=crop&q=85&w=2200"
              alt="Leaders collaborating around a table"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-[linear-gradient(110deg,#08172f_15%,rgba(8,23,47,0.82),rgba(8,23,47,0.3))]" />
            <div className="relative z-10 flex min-h-[520px] flex-col justify-between sm:min-h-[520px] lg:min-h-[600px]">
              <div className="max-w-4xl pt-6 lg:pt-10">
                <h1 className="max-w-4xl text-4xl font-medium leading-[0.98] tracking-[-0.045em] sm:text-7xl lg:text-[5.2rem]">
                  Empowering People.
                  <br />
                  <span className="text-[#d4af6d]"> Creating Impact.</span>{" "}
                  Transforming Spaces
                </h1>
                <p className="mt-8 max-w-xl text-lg leading-8 text-white/75 sm:text-xl">
                  From developing people to strengthening performance and
                  transforming spaces, we deliver practical solutions that
                  create measurable, lasting impact.
                </p>
                <div className="my-10 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href="/services/training"
                    className="inline-flex h-13 items-center justify-center gap-2 rounded-full bg-[#d4af6d] px-7 text-sm font-semibold text-[#08172f] transition-transform hover:-translate-y-0.5"
                  >
                    Start a conversation <ArrowUpRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/events"
                    className="inline-flex h-13 items-center justify-center rounded-full border border-white/25 px-7 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    Explore upcoming events
                  </Link>
                  <Link
                    href="/contact?interest=sponsorship"
                    className="inline-flex h-13 items-center justify-center rounded-full border border-[#d4af6d]/70 px-7 text-sm font-semibold text-[#d4af6d] transition-colors hover:bg-[#d4af6d]/10"
                  >
                    Become a sponsor
                  </Link>
                </div>
              </div>
              <div className="grid max-w-3xl grid-cols-1 gap-6 border-t border-white/20 pt-7 text-sm text-white/70 sm:grid-cols-3">
                {outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#d4af6d]" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a88445]">
              One Partner. Practical Solutions. Lasting Results.
            </p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
              Practical solutions for people, performance and spaces.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#596170]">
              From people and performance to spaces and solutions, we bring
              expertise, structure, and purpose to the work that matters.
            </p>
          </div>
          <div className="mt-16 grid gap-5 lg:grid-cols-3">
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
                    <div className="mb-5 inline-flex bg-[#f1e8d4] p-3 text-[#a88445]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#a88445]">
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
                    <Link
                      href="/contact"
                      className="inline-flex h-11 items-center justify-center border border-[#d4af6d] px-4 text-xs font-semibold text-[#0d1b3d] transition-colors hover:bg-[#f1e8d4]"
                    >
                      {track.secondaryCta}
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#f1e8d4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#a88445]">
              <Sparkles className="h-4 w-4" /> Built for momentum
            </div>
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-6xl">
              The work gets better when the plan is clear.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#596170]">
              Our approach is direct: understand the real constraint, equip the
              people closest to it, and leave your organization stronger than we
              found it.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#0d1b3d] hover:text-[#a88445]"
            >
              Meet Prestigious Group <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="rounded-[2rem] bg-[#08172f] p-7 text-white sm:p-10">
              <ClipboardCheck className="h-7 w-7 text-[#d4af6d]" />
              <p className="mt-12 text-5xl font-medium tracking-[-0.05em]">3</p>
              <p className="mt-2 text-sm leading-6 text-white/65">
                connected areas of organizational support
              </p>
            </div>
            <div className="mt-10 rounded-[2rem] bg-[#f1e8d4] p-7 text-[#0d1b3d] sm:p-10">
              <Compass className="h-7 w-7 text-[#a88445]" />
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
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a88445]">
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
                  <Link
                    href="/contact?interest=sponsorship"
                    className="inline-flex items-center gap-2 border border-[#d4af6d]/60 px-4 py-2 text-sm font-semibold text-[#d4af6d] transition-colors hover:bg-[#d4af6d]/10"
                  >
                    Partner with us <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a88445]">
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
                <div
                  className="flex items-center gap-1 text-[#d4af6d]"
                  aria-label="5 star review"
                >
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-6 flex-1 text-lg leading-8 text-[#0d1b3d]">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-end justify-between gap-4 border-t border-[#e8e2d5] pt-5">
                  <Link
                    href={review.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-[#a88445] hover:text-[#0d1b3d]"
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
            rel="noreferrer"
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
