import { NextRequest } from "next/server";
import { getTrainingCourseBySlug, trainingCourses } from "@/data/courses";
import { servicesData, specialistFocusData } from "@/data/services";
import { hasOwnerValue, isProduction, siteConfig } from "@/config/site";

const WINDOW_MS = 60_000;
const MAX_REQUESTS = 5;
const MAX_BODY_LENGTH = 20_000;
const rateLimits = new Map<string, { count: number; expiresAt: number }>();

type EnquiryPayload = Record<string, string>;

function cleanValue(value: unknown, maxLength = 2_000): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").trim().slice(0, maxLength);
}

function takeRateLimit(key: string): boolean {
  const now = Date.now();
  const current = rateLimits.get(key);
  if (!current || current.expiresAt <= now) {
    rateLimits.set(key, { count: 1, expiresAt: now + WINDOW_MS });
    return true;
  }
  if (current.count >= MAX_REQUESTS) return false;
  current.count += 1;
  return true;
}

function validate(payload: EnquiryPayload): Record<string, string> {
  const errors: Record<string, string> = {};
  const formType = payload.formType;
  const trainingService = servicesData.find((service) => service.slug === "training");
  const trainingCategories = trainingService?.supportingAreas ?? [];
  const serviceChoices = new Set(servicesData.flatMap((service) => [
    ...service.proposalOptions,
    ...service.supportingAreas,
  ]));
  const required = formType === "contact"
    ? ["name", "email", "message"]
    : ["name", "organization", "jobTitle", "email", "phone", "serviceRequired", "message", "startTimeframe"];

  if (!["contact", "service"].includes(formType)) {
    errors.formType = "Choose a valid enquiry form.";
  }
  for (const field of required) {
    if (!payload[field]) errors[field] = "This field is required.";
  }
  if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (payload.phone && !/^[+\d][+\d\s().-]{5,24}$/.test(payload.phone)) {
    errors.phone = "Enter a valid telephone number.";
  }
  if (formType === "service" && payload.serviceRequired && !serviceChoices.has(payload.serviceRequired)) {
    errors.serviceRequired = "Choose a listed service.";
  }
  if (payload.privacyConsent !== "yes") {
    errors.privacyConsent = "Consent is required to submit this enquiry.";
  }
  if (payload.course && !getTrainingCourseBySlug(payload.course)) {
    errors.course = "Choose a valid course.";
  }
  if (formType === "service" && trainingCategories.includes(payload.serviceRequired ?? "")) {
    const course = trainingCourses.find((item) => item.slug === payload.course);
    if (!course) errors.course = "Choose a course for this training area.";
    else if (course.category !== payload.serviceRequired) errors.course = "Choose a course from the selected training area.";
    if (!/^\d{1,4}$/.test(payload.delegateCount ?? "") || Number(payload.delegateCount) < 1) {
      errors.delegateCount = "Enter a valid number of delegates.";
    }
    if (!payload.location) errors.location = "Enter the training location.";
  }
  if (payload.serviceRequired === specialistFocusData.title && !payload.specialistService) {
    errors.specialistService = "Choose a specialist focus.";
  }
  if (payload.specialistService && !specialistFocusData.items.includes(payload.specialistService)) {
    errors.specialistService = "Choose a valid specialist focus.";
  }
  if (payload.formType === "service" && payload.isTrainingPage === "true") {
    if (!/^\d{1,4}$/.test(payload.delegateCount ?? "") || Number(payload.delegateCount) < 1) {
      errors.delegateCount = "Enter a valid number of delegates.";
    }
    if (!payload.location) errors.location = "Enter the training location.";
  }
  return errors;
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_LENGTH) {
    return Response.json({ ok: false, message: "The enquiry is too large." }, { status: 413 });
  }

  const origin = request.headers.get("origin");
  const host = request.headers.get("x-forwarded-host")?.split(",")[0]?.trim() ?? request.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) {
        return Response.json({ ok: false, message: "Invalid request origin." }, { status: 403 });
      }
    } catch {
      return Response.json({ ok: false, message: "Invalid request origin." }, { status: 403 });
    }
  }

  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const clientKey = forwardedFor || request.headers.get("x-real-ip") || "unknown";
  if (!takeRateLimit(clientKey)) {
    return Response.json({ ok: false, message: "Too many requests. Please try again shortly." }, { status: 429 });
  }

  let rawPayload: unknown;
  try {
    const body = await request.text();
    if (new TextEncoder().encode(body).byteLength > MAX_BODY_LENGTH) {
      return Response.json({ ok: false, message: "The enquiry is too large." }, { status: 413 });
    }
    rawPayload = JSON.parse(body);
  } catch {
    return Response.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }
  if (!rawPayload || typeof rawPayload !== "object" || Array.isArray(rawPayload)) {
    return Response.json({ ok: false, message: "Invalid request body." }, { status: 400 });
  }

  const input = rawPayload as Record<string, unknown>;
  if (cleanValue(input.website, 200)) {
    return Response.json({ ok: true, message: "Enquiry received." });
  }

  const payload = Object.fromEntries(
    Object.entries(input)
      .filter(([key]) => key !== "website")
      .map(([key, value]) => [key, cleanValue(value)]),
  ) as EnquiryPayload;
  const errors = validate(payload);
  if (Object.keys(errors).length) {
    return Response.json({ ok: false, message: "Check the highlighted fields.", errors }, { status: 422 });
  }

  if (!isProduction) {
    console.info("[enquiry-test]", JSON.stringify(payload));
    return Response.json({ ok: true, message: "Test enquiry logged on the server. No email was sent." });
  }

  if (!hasOwnerValue(siteConfig.enquiryWebhookUrl)) {
    return Response.json({
      ok: false,
      message: "Online enquiries are temporarily unavailable. Please use the contact details on this page.",
    }, { status: 503 });
  }

  const destination = new URL(siteConfig.enquiryWebhookUrl);
  if (destination.protocol !== "https:") {
    return Response.json({ ok: false, message: "Enquiry delivery is not configured securely." }, { status: 503 });
  }

  try {
    const delivery = await fetch(destination, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(siteConfig.enquiryWebhookSecret
          ? { Authorization: `Bearer ${siteConfig.enquiryWebhookSecret}` }
          : {}),
      },
      body: JSON.stringify({
        ...payload,
        ...(hasOwnerValue(siteConfig.formRecipient)
          ? { recipient: siteConfig.formRecipient }
          : {}),
      }),
      signal: AbortSignal.timeout(8_000),
    });
    if (!delivery.ok) throw new Error("Webhook rejected enquiry");
    return Response.json({ ok: true, message: "Thank you. Your enquiry has been sent." });
  } catch {
    return Response.json({ ok: false, message: "We could not send your enquiry. Please try again later." }, { status: 502 });
  }
}