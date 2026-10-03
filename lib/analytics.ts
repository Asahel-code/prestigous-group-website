const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";
const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[][];
  }
}

export type AnalyticsEvent =
  | "form_submit"
  | "whatsapp_click"
  | "phone_click"
  | "email_click"
  | "event_register_click"
  | "partner_click"
  | "course_view";

export function trackEvent(eventName: AnalyticsEvent, detail?: string): void {
  if (!isProduction || !measurementId) return;
  if (!document.cookie.split("; ").includes("analytics-consent=accepted")) return;
  const parameters = eventName === "form_submit" && detail
    ? { form_name: detail }
    : eventName === "course_view" && detail
      ? { course_name: detail }
      : undefined;
  window.gtag?.("event", eventName, parameters);
}