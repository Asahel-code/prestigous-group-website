"use client";

import { useEffect, useSyncExternalStore } from "react";

const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

function subscribeToConsent(callback: () => void) {
  window.addEventListener("analytics-consent-change", callback);
  return () => window.removeEventListener("analytics-consent-change", callback);
}

function getConsentSnapshot(): "accepted" | "rejected" | null {
  const saved = document.cookie.split("; ").find((item) => item.startsWith("analytics-consent="));
  if (saved?.endsWith("=accepted")) return "accepted";
  if (saved?.endsWith("=rejected")) return "rejected";
  return null;
}

function getServerConsentSnapshot(): null {
  return null;
}

export function AnalyticsConsent() {
  const choice = useSyncExternalStore(subscribeToConsent, getConsentSnapshot, getServerConsentSnapshot);

  useEffect(() => {
    if (!isProduction || choice !== "accepted" || !measurementId) return;
    window.dataLayer = window.dataLayer ?? [];
    window.gtag = (...args: unknown[]) => window.dataLayer?.push(args);
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true });

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    return () => script.remove();
  }, [choice]);

  function choose(value: "accepted" | "rejected") {
    document.cookie = `analytics-consent=${value}; max-age=31536000; path=/; SameSite=Lax; Secure`;
    window.dispatchEvent(new Event("analytics-consent-change"));
  }

  if (!isProduction || choice) return null;

  return (
    <aside className="fixed bottom-4 left-4 right-4 z-[60] max-w-xl border border-slate-200 bg-white p-5 text-[#0d1b3d] shadow-xl" aria-label="Analytics cookie preferences">
      <p className="text-sm leading-6">Allow analytics cookies? Analytics are optional and used only to understand site visits.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" onClick={() => choose("accepted")} className="min-h-11 rounded-md bg-[#0d1b3d] px-4 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d]">Accept analytics</button>
        <button type="button" onClick={() => choose("rejected")} className="min-h-11 rounded-md border border-slate-300 px-4 text-sm font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d]">Reject</button>
      </div>
    </aside>
  );
}