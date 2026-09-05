"use client";

import Link from "next/link";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { servicesData } from "@/data/services";

const serviceLinks = servicesData.map((service) => ({
  label: service.urlTitle,
  href: `/services/${service.slug}`,
}));

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#f8f6f1]/90 px-3 pt-3 backdrop-blur supports-[backdrop-filter]:bg-[#f8f6f1]/75 sm:px-5">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex h-[4.25rem] items-center justify-between rounded-[1.35rem] border border-white/80 bg-white/90 px-4 shadow-[0_12px_35px_rgba(39,17,67,0.10)] sm:px-6">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-2 text-[#271143]">
                <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#08172f] text-sm font-bold text-[#d4af6d]">P</span>
                <span className="text-lg font-semibold tracking-[-0.03em]">Prestigious<span className="text-[#a88445]">.</span></span>
              </div>
            </Link>
          </div>

          <nav className="hidden items-center gap-5 lg:flex xl:gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-slate-700 hover:text-[#0d1b3d] transition-colors"
            >
                Home
            </Link>

            <div ref={servicesMenuRef} className="relative">
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className="flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-[#0d1b3d] transition-colors"
                aria-expanded={isServicesOpen}
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-[#f7f0e4] hover:text-[#0d1b3d]"
                      onClick={() => setIsServicesOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/events"
              className="text-sm font-medium text-slate-700 hover:text-[#0d1b3d] transition-colors"
            >
              Corporate Events
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-slate-700 hover:text-[#0d1b3d] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-700 hover:text-[#0d1b3d] transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center rounded-2xl bg-[#0d1b3d] px-6 text-sm font-medium text-white transition-colors hover:bg-[#08172f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d]"
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
                setIsServicesOpen(false);
              }}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 hover:text-[#0d1b3d] focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t bg-white lg:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0d1b3d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div className="rounded-md border border-slate-100 bg-slate-50 px-3 py-2">
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className="flex w-full items-center justify-between py-1 text-left text-base font-medium text-slate-700"
                aria-expanded={isServicesOpen}
                aria-controls="mobile-services-menu"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isServicesOpen && (
                <div id="mobile-services-menu" className="mt-2 space-y-1 border-t border-slate-200 pt-2">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-md px-2 py-2 text-base font-medium text-slate-700 hover:bg-white hover:text-[#0d1b3d]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/events"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0d1b3d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Corporate Events
            </Link>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0d1b3d]"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0d1b3d]"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
