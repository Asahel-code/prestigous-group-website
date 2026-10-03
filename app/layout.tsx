import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getCanonicalUrl, getSiteUrl, isProduction, siteConfig } from "@/config/site";
import { getVerificationMetadata } from "@/lib/metadata";
import { SiteJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const homeTitle = "Corporate Training & Consultancy in Nairobi, Kenya | Prestigious Consultancy";

export const metadata: Metadata = {
  title: {
    default: homeTitle,
    template: `%s | ${siteConfig.brandName}`,
  },
  metadataBase: new URL(getSiteUrl()),
  description: siteConfig.defaultDescription,
  applicationName: siteConfig.brandName,
  alternates: { canonical: getCanonicalUrl() },
  robots: { index: isProduction, follow: isProduction },
  verification: getVerificationMetadata(),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.brandName,
    title: homeTitle,
    description: siteConfig.defaultDescription,
    url: getCanonicalUrl(),
    images: [{ url: getCanonicalUrl("opengraph-image"), width: 1200, height: 630, alt: siteConfig.brandName }],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: siteConfig.defaultDescription,
    images: [{ url: getCanonicalUrl("opengraph-image"), alt: siteConfig.brandName }],
  },
};

import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-KE" className={`h-full antialiased font-sans ${inter.variable}`}>
      <body className="min-h-full flex flex-col bg-[#f8f6f1]">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-white px-4 py-3 text-[#0d1b3d] focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af6d]"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <SiteJsonLd />
      </body>
    </html>
  );
}
