"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/config/site";

const serviceLinks = servicesData.map((service) => ({
  label: service.urlTitle,
  href: `/services/${service.slug}`,
}));

export function Header() {
  const pathname = usePathname();
  const isDarkHero =
    pathname === "/contact" ||
    pathname === "/services" ||
    pathname === "/events" ||
    pathname.startsWith("/events/") ||
    pathname.startsWith("/services/");
  const isOpaqueHeader = pathname === "/contact";
  const isAboutPage = pathname === "/about";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const servicesButtonRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    }

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (isMenuOpen) {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
        mobileMenuButtonRef.current?.focus();
      } else if (isServicesOpen) {
        setIsServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isMenuOpen, isServicesOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full px-3 pt-3 backdrop-blur sm:px-5 ${
        isOpaqueHeader
          ? "bg-white/95 supports-[backdrop-filter]:bg-white/80"
          : isAboutPage
            ? "bg-white/95 supports-[backdrop-filter]:bg-white/80"
            : "bg-[#f8f6f1]/90 supports-[backdrop-filter]:bg-[#f8f6f1]/75"
      }`}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`flex h-[4.25rem] items-center justify-between rounded-[1.35rem] border px-4 shadow-[0_12px_35px_rgba(39,17,67,0.10)] sm:px-6 ${
            isDarkHero
              ? `border-white/15 ${isOpaqueHeader ? "bg-[#08172f]" : "bg-[#08172f]/95"}`
              : "border-white/80 bg-white/90"
          }`}
        >
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <div
                className={`flex items-center gap-2 ${isDarkHero ? "text-white" : "text-[#271143]"}`}
              >
                <Image
                  src="/logo2.png"
                  alt={`${siteConfig.brandName} logo`}
                  width={200}
                  height={100}
                  className={`h-15 w-50 object-contain ${isDarkHero ? "brightness-0 invert" : ""}`}
                />
              </div>
            </Link>
          </div>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-5 lg:flex xl:gap-8"
          >
            <Link
              href="/"
              className={`text-sm font-medium transition-colors ${isDarkHero ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-[#0d1b3d]"}`}
            >
              Home
            </Link>

            <div ref={servicesMenuRef} className="relative">
              <button
                ref={servicesButtonRef}
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
                    event.preventDefault();
                    setIsServicesOpen(true);
                    requestAnimationFrame(() =>
                      servicesMenuRef.current
                        ?.querySelector<HTMLElement>("[role='menuitem']")
                        ?.focus(),
                    );
                  }
                }}
                className={`flex items-center gap-1 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] ${isDarkHero ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-[#0d1b3d]"}`}
                aria-expanded={isServicesOpen}
                aria-controls="desktop-services-menu"
                aria-haspopup="menu"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {isServicesOpen && (
                <div
                  id="desktop-services-menu"
                  role="menu"
                  className="absolute left-0 top-full mt-3 w-64 rounded-2xl border border-slate-200 bg-white p-2 shadow-xl"
                  onKeyDown={(event) => {
                    if (event.key !== "ArrowDown" && event.key !== "ArrowUp")
                      return;
                    event.preventDefault();
                    const items = Array.from(
                      event.currentTarget.querySelectorAll<HTMLElement>(
                        "[role='menuitem']",
                      ),
                    );
                    const currentIndex = items.indexOf(
                      document.activeElement as HTMLElement,
                    );
                    const offset = event.key === "ArrowDown" ? 1 : -1;
                    items[
                      (currentIndex + offset + items.length) % items.length
                    ]?.focus();
                  }}
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      role="menuitem"
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
              href="/events/blue-print-2027"
              className={`text-sm font-medium transition-colors ${isDarkHero ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-[#0d1b3d]"}`}
            >
              Blueprint 2027
            </Link>
            <Link
              href="/about"
              className={`text-sm font-medium transition-colors ${isDarkHero ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-[#0d1b3d]"}`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`text-sm font-medium transition-colors ${isDarkHero ? "text-white/80 hover:text-white" : "text-slate-700 hover:text-[#0d1b3d]"}`}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-4 xl:flex">
            <Link
              href="/contact"
              className={`inline-flex h-10 items-center justify-center gap-1 rounded-2xl px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] ${isDarkHero ? "bg-[#d4af6d] text-[#08172f] hover:bg-[#c7a267]" : "bg-[#0d1b3d] text-white hover:bg-[#08172f]"}`}
            >
              Start a conversation <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              ref={mobileMenuButtonRef}
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
                setIsServicesOpen(false);
              }}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              className={`inline-flex items-center justify-center rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d] ${isDarkHero ? "text-white hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-100 hover:text-[#0d1b3d]"}`}
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
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`border-t lg:hidden ${isDarkHero ? "border-white/10 bg-[#08172f]" : "bg-white"}`}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            <Link
              href="/"
              className={`block rounded-md px-3 py-2 text-base font-medium ${isDarkHero ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-50 hover:text-[#0d1b3d]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            <div
              className={`rounded-md border px-3 py-2 ${isDarkHero ? "border-white/10 bg-white/5" : "border-slate-100 bg-slate-50"}`}
            >
              <button
                type="button"
                onClick={() => setIsServicesOpen((prev) => !prev)}
                className={`flex w-full items-center justify-between py-1 text-left text-base font-medium ${isDarkHero ? "text-white/85" : "text-slate-700"}`}
                aria-expanded={isServicesOpen}
                aria-controls="mobile-services-menu"
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isServicesOpen && (
                <div
                  id="mobile-services-menu"
                  className={`mt-2 space-y-1 border-t pt-2 ${isDarkHero ? "border-white/10" : "border-slate-200"}`}
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-md px-2 py-2 text-base font-medium ${isDarkHero ? "text-white/80 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-white hover:text-[#0d1b3d]"}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/events/blue-print-2027"
              className={`block rounded-md px-3 py-2 text-base font-medium ${isDarkHero ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-50 hover:text-[#0d1b3d]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blueprint 2027
            </Link>
            <Link
              href="/about"
              className={`block rounded-md px-3 py-2 text-base font-medium ${isDarkHero ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-50 hover:text-[#0d1b3d]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className={`block rounded-md px-3 py-2 text-base font-medium ${isDarkHero ? "text-white/85 hover:bg-white/10 hover:text-white" : "text-slate-700 hover:bg-slate-50 hover:text-[#0d1b3d]"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
