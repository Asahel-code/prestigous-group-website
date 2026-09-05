import { MessageCircle } from "lucide-react";

const whatsappUrl =
  "https://wa.me/254720785900?text=Hello%20Prestigious";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Prestigious Consultancy on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
