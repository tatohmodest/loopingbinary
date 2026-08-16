import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SiteFooter from "@/components/SiteFooter";
import Cursor from "@/components/Cursor";
import Preloader from "@/components/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Looping Binary — We make gravity",
    template: "%s · Looping Binary",
  },
  description:
    "Looping Binary builds products, sites, and systems from Douala. Pejah, Presto, Laji, Strategix, Intellex, Zela.",
  authors: [{ name: "Looping Binary" }],
  openGraph: {
    title: "Looping Binary",
    description: "We Build. We Grow. We Train.",
    type: "website",
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
        <Preloader />
        <Cursor />
        <Nav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
