import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { KEYWORDS, SITE_DESCRIPTION, SITE_URL } from "@/lib/seo";
import "./globals.css";

const OG_IMAGE = {
  url: "/assets/og-loopingbinary.jpg",
  width: 1200,
  height: 630,
  alt: "Looping Binary — We Build. We Grow. We Train.",
  type: "image/jpeg",
} as const;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Looping Binary — We Build. We Grow. We Train.",
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
  icons: {
    icon: [{ url: "/lblogo/infinity.png", type: "image/png" }],
    apple: [{ url: "/lblogo/infinity.png", type: "image/png" }],
    shortcut: "/lblogo/infinity.png",
  },
  openGraph: {
    title: "Looping Binary — We Build. We Grow. We Train.",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: "Looping Binary",
    locale: "en_CM",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Looping Binary — Software from Douala",
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE.url],
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
        {/* Explicit OG tags help WhatsApp / Facebook scrapers */}
        <meta property="og:image" content={`${SITE_URL}/assets/og-loopingbinary.jpg`} />
        <meta property="og:image:secure_url" content={`${SITE_URL}/assets/og-loopingbinary.jpg`} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Looping Binary — We Build. We Grow. We Train." />
        <meta name="twitter:image" content={`${SITE_URL}/assets/og-loopingbinary.jpg`} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd />
        <Nav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
