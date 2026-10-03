import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prestigious Group | Prestigious Consultancy",
    template: "%s | Prestigious Group",
  },
  description:
    "Prestigious Group helps organizations across Kenya build capability, strengthen workplace safety, and improve performance through practical training and consultancy.",
  applicationName: "Prestigious Group",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  keywords: [
    "Prestigious Group",
    "Prestigious Consultancy",
    "Prestigious Group Kenya",
    "Prestigious Consultancy Kenya",
    "corporate training Kenya",
    "consultancy services Nairobi",
    "executive advisory Kenya",
    "work at heights training Kenya",
    "leadership development training Kenya",
    "corporate events Kenya",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Prestigious Group",
    title: "Prestigious Group | Prestigious Consultancy",
    description:
      "Prestigious Group provides professional training, consultancy, and corporate events in Kenya.",
  },
};

import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
    >
      <body className="min-h-full flex flex-col bg-[#f8f6f1]">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
