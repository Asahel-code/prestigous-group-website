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
    "Prestigious Group, formerly Prestigious Consultancy, helps organizations and property owners in Kenya build capability, improve performance, and create elevated residential and office spaces.",
  applicationName: "Prestigious Group",
  keywords: [
    "Prestigious Group",
    "Prestigious Consultancy",
    "Prestigious Group Kenya",
    "Prestigious Consultancy Kenya",
    "corporate training Kenya",
    "consultancy services Nairobi",
    "executive advisory Kenya",
    "office interior finishes Kenya",
    "residential interior finishes Nairobi",
    "corporate events Kenya",
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: "Prestigious Group",
    title: "Prestigious Group | Prestigious Consultancy",
    description:
      "Prestigious Group, formerly Prestigious Consultancy, provides professional training, executive consultancy, corporate events, and elegant finishes in Kenya.",
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
