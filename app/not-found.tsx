import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center text-[#0d1b3d] sm:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#715426]">404</p>
      <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-[#596170]">The page may have moved or the address may be incorrect.</p>
      <nav aria-label="Helpful pages" className="mt-8 flex flex-wrap justify-center gap-5 text-sm font-semibold">
        <Link className="underline underline-offset-4" href="/">Home</Link>
        <Link className="underline underline-offset-4" href="/services">Services</Link>
        <Link className="underline underline-offset-4" href="/events">Events</Link>
        <Link className="underline underline-offset-4" href="/contact">Contact</Link>
      </nav>
    </section>
  );
}