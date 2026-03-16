import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: "Looping Binary,We Build. We Grow. We Train.",
  description:
    "Looping Binary,Technology company based in Douala, Cameroon. We build software, drive digital growth, and train the engineers who build it.",
  authors: [{ name: "Looping Binary" }],
  openGraph: {
    title: "Looping Binary",
    description:
      "We Build. We Grow. We Train. Technology partner for businesses in Cameroon and Africa.",
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
      </body>
    </html>
  );
}
