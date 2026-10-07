import type { MetadataRoute } from "next";
import { eventsData } from "@/data/events";
import { servicesData } from "@/data/services";
import { getCanonicalUrl, isProduction } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isProduction) return [];

  const lastModified = new Date();
  const paths = [
    "/",
    "/about",
    "/services",
    ...servicesData.map((service) => `/services/${service.slug}`),
    "/events",
    ...eventsData.map((event) => `/events/${event.slug}`),
    "/contact",
    "/privacy",
    "/terms",
  ];

  return paths.map((path) => ({
    url: getCanonicalUrl(path),
    lastModified,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}