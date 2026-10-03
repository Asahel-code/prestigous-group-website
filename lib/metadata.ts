import type { Metadata } from "next";
import { getCanonicalUrl, isProduction, siteConfig } from "@/config/site";

const defaultImage = {
  url: getCanonicalUrl("opengraph-image"),
  width: 1200,
  height: 630,
  alt: `${siteConfig.brandName} corporate training and consultancy`,
};

export function createPageMetadata({
  title,
  description,
  path,
  image = defaultImage,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  image?: { url: string; width?: number; height?: number; alt: string };
  absoluteTitle?: boolean;
}): Metadata {
  const url = getCanonicalUrl(path);
  const robots = { index: isProduction, follow: isProduction };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots,
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.brandName,
      title,
      description,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: image.url, alt: image.alt }],
    },
  };
}

export function getVerificationMetadata(): Metadata["verification"] | undefined {
  const { googleVerification, bingVerification } = siteConfig.analytics;
  const verification: NonNullable<Metadata["verification"]> = {};
  if (googleVerification) verification.google = googleVerification;
  if (bingVerification) verification.other = { "msvalidate.01": bingVerification };
  return Object.keys(verification).length ? verification : undefined;
}