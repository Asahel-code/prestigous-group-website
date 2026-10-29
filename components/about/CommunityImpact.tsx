"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Users, X } from "lucide-react";

interface ImpactPhoto {
  caption: string;
  imageUrl: string;
  description: string;
}

const featuredPhotos: ImpactPhoto[] = [
  {
    caption: "Student Mentorship",
    imageUrl: "/img/impacts_images/001.jpg",
    description:
      "Guiding learners through one-on-one mentorship and study support.",
  },
  {
    caption: "Career Guidance",
    imageUrl: "/img/impacts_images/002.jpg",
    description: "Helping young people map pathways into meaningful work.",
  },
  {
    caption: "Youth Empowerment",
    imageUrl: "/img/impacts_images/003.webp",
    description: "Skills development that turns potential into opportunity.",
  },
  {
    caption: "Community Outreach",
    imageUrl: "/img/impacts_images/004.jpg",
    description: "Working alongside communities to create lasting change.",
  },
];

const galleryPhotos: ImpactPhoto[] = [...featuredPhotos];

export function CommunityImpact() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const closeGallery = useCallback(() => setIsGalleryOpen(false), []);

  useEffect(() => {
    if (!isGalleryOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeGallery();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isGalleryOpen, closeGallery]);

  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold text-[#715426]">
              Community Impact
            </p>
            <h2 className="mt-5 text-3xl font-medium leading-tight sm:text-5xl">
              Beyond Business.
              <br />
              <span className="text-[#715426]">Creating Opportunity.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#596170] sm:text-lg">
              Through <strong>Mysomo Foundation</strong>, we support education, mentorship, youth
              skills development and community empowerment initiatives that
              create lasting opportunities.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setIsGalleryOpen(true)}
                className="group inline-flex min-h-11 items-center gap-2 rounded-md bg-[#0d1b3d] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#08172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#715426] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f8f6f1]"
              >
                Our Community Impact
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#6b665c]">
                <Users className="h-4 w-4 text-[#715426]" aria-hidden="true" />
                Powered by Mysomo Foundation
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {featuredPhotos.map((photo) => (
              <figure
                key={photo.caption}
                className="overflow-hidden rounded-md border border-[#ece8df] bg-white"
              >
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={photo.imageUrl}
                    alt={photo.caption}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="px-4 py-3 text-sm font-semibold text-[#0d1b3d]">
                  {photo.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>

      {isGalleryOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Community impact gallery"
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-[#08172f]/80 p-4 backdrop-blur-sm sm:p-8"
          onClick={closeGallery}
        >
          <div
            className="relative my-4 w-full max-w-5xl rounded-2xl bg-white p-6 sm:my-8 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-[#715426]">
                  Mysomo Foundation
                </p>
                <h3 className="mt-2 text-2xl font-medium sm:text-3xl">
                  Our Community Impact
                </h3>
              </div>
              <button
                type="button"
                onClick={closeGallery}
                aria-label="Close gallery"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#ece8df] text-[#0d1b3d] transition-colors hover:bg-[#f8f6f1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#715426]"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {galleryPhotos.map((photo) => (
                <figure
                  key={photo.caption}
                  className="overflow-hidden rounded-md border border-[#ece8df] bg-[#faf9f6]"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={photo.imageUrl}
                      alt={photo.caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-3 py-3">
                    <p className="text-sm font-semibold text-[#0d1b3d]">
                      {photo.caption}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#596170]">
                      {photo.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
