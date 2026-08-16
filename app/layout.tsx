import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import { KEYWORDS, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Looping Binary — Software company in Douala, Cameroon",
    template: "%s · Looping Binary",
  },
  description: SITE_DESCRIPTION,
  keywords: KEYWORDS,
  authors: [{ name: "Looping Binary", url: SITE_URL }],
  creator: "Looping Binary",
  publisher: "Looping Binary",
  category: "technology",
  applicationName: "Looping Binary",
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: "Looping Binary — We Build. We Grow. We Train.",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Looping Binary",
    locale: "en_CM",
    type: "website",
    images: [
      {
        url: "/assets/og-loopingbinary.png",
        width: 1920,
        height: 1080,
        alt: "Looping Binary — Douala software company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Looping Binary — Software from Douala",
    description: SITE_DESCRIPTION,
    images: ["/assets/og-loopingbinary.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@600,700&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd />
        <Preloader />
        <SmoothScroll />
        <Cursor />
        <Nav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
