export interface EnquiryResponse {
  ok: boolean;
  message?: string;
  errors?: Record<string, string>;
}

export async function submitEnquiry(
  form: HTMLFormElement,
  formType: "contact" | "service",
): Promise<EnquiryResponse> {
  const payload = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;
  payload.formType = formType;

  try {
    const response = await fetch("/api/enquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await response.json() as EnquiryResponse;
  } catch {
    return { ok: false, message: "We could not send your enquiry. Please try again." };
  }
}