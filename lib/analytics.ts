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
  | "explore_event_click"
  | "phone_click"
  | "email_click"
  | "event_register_click"
  | "partner_click"
  | "proposal_click"
  | "book_course_click"
  | "custom_training_click"
  | "explore_services_click"
  | "training_registration_click";

export function trackEvent(eventName: AnalyticsEvent, detail?: string): void {
  if (!isProduction || !measurementId) return;
  if (!document.cookie.split("; ").includes("analytics-consent=accepted"))
    return;
  const parameters =
    eventName === "form_submit" && detail
      ? { form_name: detail }
        : undefined;
  window.gtag?.("event", eventName, parameters);
}
