import type { NextConfig } from "next";
import { hasOwnerValue, isProduction, siteConfig } from "./config/site";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  {
    key: "Content-Security-Policy-Report-Only",
    value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com ws: wss:; frame-src 'self' https://www.google.com https://maps.google.com; frame-ancestors 'self'; base-uri 'self'; form-action 'self' https://docs.google.com",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        ...securityHeaders,
        ...(!isProduction ? [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] : []),
        ...(isProduction ? [{ key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" }] : []),
      ],
    }];
  },
  async redirects() {
    if (!isProduction) return [];

    const canonicalHost = new URL(siteConfig.productionUrl).hostname;
    const apexHost = canonicalHost.replace(/^www\./, "");
    const redirects = [
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: apexHost }],
        destination: `${siteConfig.productionUrl}/:path*`,
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "header" as const, key: "x-forwarded-proto", value: "http" }],
        destination: `${siteConfig.productionUrl}/:path*`,
        permanent: true,
      },
    ];

    if (hasOwnerValue(siteConfig.oldHost) && siteConfig.oldHost !== canonicalHost) {
      redirects.push({
        source: "/:path*",
        has: [{ type: "host" as const, value: siteConfig.oldHost }],
        destination: `${siteConfig.productionUrl}/:path*`,
        permanent: true,
      });
    }

    return redirects;
  },
};

export default nextConfig;
