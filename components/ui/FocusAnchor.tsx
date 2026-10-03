"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

export function FocusAnchor({
  href,
  onClick,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode }) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (!href?.startsWith("#")) return;
    const targetId = decodeURIComponent(href.slice(1));
    requestAnimationFrame(() => document.getElementById(targetId)?.focus({ preventScroll: true }));
  }

  return <a {...props} href={href} onClick={handleClick}>{children}</a>;
}