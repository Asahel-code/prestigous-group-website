const TODO = "TODO(owner)";

export const siteConfig = {
  brandName: "Prestigious Consultancy",
  legalName: "Prestigious Consultancy & Management Ltd",
  productionUrl: "https://www.prestigiousconsultancy.co.ke",
  locale: "en_KE",
  defaultDescription:
    "Corporate training and consultancy in Nairobi, Kenya, helping organisations build capability, strengthen workplace safety and improve performance.",
  summaryServices: ["Corporate training", "Professional consultancy", "Leadership forums and events"],
  contact: {
    email: process.env.CONTACT_EMAIL ?? TODO,
    phone: "+254 111 441 515",
    phoneHref: "+254111441515",
    whatsappNumber: "254720785900",
    whatsappMessage: "Hello Prestigious",
    streetAddress: "Pearl Collections Kenya, Koinange Street",
    addressLocality: "Nairobi",
    addressRegion: TODO,
    postalCode: TODO,
    addressCountry: "KE",
    latitude: TODO,
    longitude: TODO,
    openingHours: TODO,
  },
  nita: {
    approvalLabel: TODO,
    accreditationNumberOrUrl: TODO,
  },
  socialUrls: {
    facebook: "https://www.facebook.com/PrestigiousConsultancy",
    instagram: "https://www.instagram.com/PrestigiousConsultancy",
    linkedin: "https://www.linkedin.com/company/prestigious-consultancy",
    googleBusinessProfile: null,
  },
  oldHost: process.env.OLD_HOST ?? TODO,
  analytics: {
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "",
    googleVerification: process.env.GOOGLE_SITE_VERIFICATION ?? "",
    bingVerification: process.env.BING_SITE_VERIFICATION ?? "",
  },
  formRecipient: process.env.FORM_RECIPIENT_EMAIL ?? "",
  enquiryWebhookUrl: process.env.ENQUIRY_WEBHOOK_URL ?? "",
  enquiryWebhookSecret: process.env.ENQUIRY_WEBHOOK_SECRET ?? "",
} as const;

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(
    /\/+$/,
    "",
  );
}

export function getCanonicalUrl(path = ""): string {
  const pathname = path ? `/${path.replace(/^\/+/, "")}` : "/";
  return new URL(pathname, `${getSiteUrl()}/`).toString();
}

export const isProduction = process.env.NEXT_PUBLIC_SITE_ENV === "production";

export function hasOwnerValue(value: string): boolean {
  return value.length > 0 && !value.includes(TODO);
}