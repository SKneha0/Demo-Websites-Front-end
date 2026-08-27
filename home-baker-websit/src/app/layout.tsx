import type { Metadata } from "next";
import { Fraunces, Work_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";
import Navbar from "@/components/layout/Navbar";
import WhatsAppFloatButton from "@/components/layout/WhatAppFloatButton";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
  default: `${siteConfig.bakeryName} | Home Bakery in Karachi`,
  template: `%s | ${siteConfig.bakeryName}`,
},
  description: siteConfig.description,
  keywords: [
    "home bakery Karachi",
    "custom cakes Karachi",
    "cupcakes Karachi",
    "birthday cake order WhatsApp",
    "Flour and Bloom",
  ],
  openGraph: {
    title: `${siteConfig.bakeryName} | Home Bakery in Karachi`,
  description: siteConfig.description,
  url: siteConfig.url,
  siteName: siteConfig.bakeryName,
    images: [
      {
        url: "https://picsum.photos/seed/og-flour-bloom/1200/630",
        width: 1200,
        height: 630,
        alt: siteConfig.bakeryName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.bakeryName} | Home Bakery in Karachi`,
    description: siteConfig.description,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:bg-crust focus:px-4 focus:py-2 focus:text-flour"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <WhatsAppFloatButton />
        <Footer />
      </body>
    </html>
  );
}