"use client";

import type { AnchorHTMLAttributes, MouseEvent } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

interface TrackedAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: AnalyticsEvent;
}

export function TrackedAnchor({ eventName, onClick, ...props }: TrackedAnchorProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackEvent(eventName);
    onClick?.(event);
  }

  return <a {...props} onClick={handleClick} />;
}