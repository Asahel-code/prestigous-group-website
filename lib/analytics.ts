import { isProduction, siteConfig } from "@/config/site";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
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

export function trackEvent(eventName: AnalyticsEvent, formName?: string): void {
  if (!isProduction || !siteConfig.analytics.gaMeasurementId) return;
  if (!document.cookie.split("; ").includes("analytics-consent=accepted")) return;
  window.gtag?.("event", eventName, formName ? { form_name: formName } : undefined);
}