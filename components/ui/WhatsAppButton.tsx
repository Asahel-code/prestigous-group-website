"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

export function WhatsAppButton() {
  const buttonRef = useRef<HTMLAnchorElement | null>(null);
  const [isOverlapping, setIsOverlapping] = useState(false);

  useEffect(() => {
    function updateOverlap() {
      const button = buttonRef.current;
      if (!button) return;
      const bounds = button.getBoundingClientRect();
      const elements = document.elementsFromPoint(
        bounds.left + bounds.width / 2,
        bounds.top + bounds.height / 2,
      );
      setIsOverlapping(elements.some((element) =>
        element !== button && !button.contains(element) && Boolean(element.closest("form, footer")),
      ));
    }

    const frame = requestAnimationFrame(updateOverlap);
    window.addEventListener("scroll", updateOverlap, { passive: true });
    window.addEventListener("resize", updateOverlap);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateOverlap);
      window.removeEventListener("resize", updateOverlap);
    };
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <a
      ref={buttonRef}
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      aria-hidden={isOverlapping}
      tabIndex={isOverlapping ? -1 : 0}
      onClick={() => trackEvent("whatsapp_click")}
      title="Chat on WhatsApp"
      className={`fixed bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] right-[calc(env(safe-area-inset-right)+1.25rem)] z-50 inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-[#08172f] shadow-lg transition-[opacity,transform] hover:-translate-y-0.5 hover:bg-[#20bd5a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 ${isOverlapping ? "pointer-events-none opacity-0" : ""}`}
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
