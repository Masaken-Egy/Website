import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Masaken — Verified apartment rentals & property management in New Cairo",
  description:
    "Rent out your unit or find your next apartment without the Facebook-group roulette. Verified listings, bilingual contracts, protected deposits, full rental management, and fixed-price housekeeping — starting in New Cairo.",
  openGraph: {
    title: "Masaken — The rental relationship, professionally cared for",
    description:
      "Cairo's verified alternative to Facebook rental groups and informal brokers: verified listings, bilingual contracts, protected deposits, full management, and hotel-standard housekeeping. Starting in New Cairo.",
    siteName: "Masaken",
    type: "website",
    locale: "en_US",
    images: ["/hero-villa.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masaken — Verified rentals & management in New Cairo",
    description:
      "Verified listings, bilingual contracts, protected deposits, full management, and fixed-price housekeeping. Starting in New Cairo.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${geist.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
