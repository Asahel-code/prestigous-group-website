"use client";

import Link from "next/link";

export default function ErrorPage({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return (
    <section className="mx-auto max-w-4xl px-5 py-24 text-center text-[#0d1b3d] sm:px-8" role="alert">
      <h1 className="text-4xl font-semibold">Something went wrong</h1>
      <p className="mx-auto mt-4 max-w-xl leading-7 text-[#596170]">Please try again, or use one of the main pages to continue.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm font-semibold">
        <button type="button" onClick={retry} className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d]">Try again</button>
        <Link className="underline underline-offset-4" href="/">Home</Link>
        <Link className="underline underline-offset-4" href="/contact">Contact</Link>
      </div>
    </section>
  );
}