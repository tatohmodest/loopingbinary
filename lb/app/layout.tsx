import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Looping Binary — Software the market can feel",
    template: "%s · Looping Binary",
  },
  description:
    "Looping Binary designs and ships websites, platforms, and systems from Douala. Client work includes Pejah, Presto, Laji, and Strategix Africa.",
  authors: [{ name: "Looping Binary" }],
  openGraph: {
    title: "Looping Binary",
    description:
      "We Build. We Grow. We Train. Technology house for businesses in Cameroon, Africa, and beyond.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400,500,700,800,900&f[]=satoshi@400,500,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <ScrollProgress />
        <Nav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
