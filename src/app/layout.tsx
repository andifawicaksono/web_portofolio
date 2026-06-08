/**
 * Root layout untuk seluruh aplikasi Next.js.
 * Mengatur font, metadata global, dan struktur dasar HTML.
 * Komponen ini dirender di server (Server Component).
 */

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Konfigurasi font Inter dari Google Fonts dengan CSS variable
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

// ============================================
// SEO METADATA - Update dengan data aktual
// ============================================
export const metadata: Metadata = {
  title: {
    default: "Andifa W. | Software Engineer & AI Developer",
    template: "%s | Andifa W.",
  },
  description:
    "Software Engineer & AI Developer specializing in ASP.NET Core, Spring Boot, Machine Learning, and full-stack web development. Building scalable enterprise applications and intelligent systems.",
  keywords: [
    "Andifa W.",
    "Software Engineer",
    "AI Developer",
    "Machine Learning",
    "ASP.NET Core",
    "Spring Boot",
    "Backend Developer",
    "Java Developer",
    "C# Developer",
    "Python Developer",
    "Data Science",
    "Indonesia",
    "Portfolio",
    "Web Developer",
  ],
  // Canonical base URL - ganti dengan domain deployment Anda
  metadataBase: new URL("https://andifawicaksono.cloud"),
  alternates: { canonical: "/" },
  // OpenGraph untuk preview di Facebook, LinkedIn, dsb
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://andifawicaksono.cloud",
    title: "Andifa Nur Wicaksono. | Software Engineer & AI Enthusiast",
    description:
      "Software Engineer & AI Enthusiast. ASP.NET Core, Spring Boot, Machine Learning, Data Science.",
    siteName: "Andifa W. Portfolio",
    images: [
      {
        url: "/images/og-image.png", // TODO: Buat OG image 1200x630px
        width: 1200,
        height: 630,
        alt: "Andifa Nur Wicaksono. - Software Engineer & AI Enthusiast",
      },
    ],
  },
  // Twitter/X card untuk preview
  twitter: {
    card: "summary_large_image",
    title: "Andifa W. | Software Engineer & AI Enthusiast",
    description: "Software Engineer & AI Enthusiast specializing in backend and data science.",
    images: ["/images/og-image.png"],
  },
  // Instruksi untuk search engine bots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Andifa Nur Wicaksono" }],
  creator: "Andifa Nur Wicaksono",
  category: "technology",
};

// Viewport: responsive dan theme color untuk browser chrome
export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect ke Google Fonts untuk performa loading yang lebih cepat */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* JSON-LD Structured Data untuk SEO rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Andifa W.",
              jobTitle: "Software Engineer & AI Enthusiast",
              description:
                "Software Engineer specializing in ASP.NET Core, Spring Boot, and Machine Learning",
              url: "https://andifawicaksono.cloud",
              sameAs: [
                "https://www.linkedin.com/in/andifa-w-951418132/",
              ],
              knowsAbout: [
                "Software Engineering",
                "Backend Development",
                "Machine Learning",
                "ASP.NET Core",
                "Spring Boot",
                "Java",
                "C#",
                "Python",
                "Data Science",
              ],
              nationality: "Indonesian",
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-text-primary antialiased">
        {children}
      </body>
    </html>
  );
}
