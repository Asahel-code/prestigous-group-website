"use client";

import Link from "next/link";
import type { LinkProps } from "next/link";
import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { trackEvent, type AnalyticsEvent } from "@/lib/analytics";

interface TrackedLinkProps extends LinkProps, Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  eventName: AnalyticsEvent;
  children: ReactNode;
}

export function TrackedLink({ eventName, onClick, ...props }: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackEvent(eventName);
    onClick?.(event);
  }

  return <Link {...props} onClick={handleClick} />;
}