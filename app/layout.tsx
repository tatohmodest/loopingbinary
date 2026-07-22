import type { Metadata } from "next";
import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: "Looping Binary | We Build. We Grow. We Train.",
  description:
    "Looping Binary builds software, operates digital products across Africa, and trains the engineers who ship them. Intellex, Zela, Tech Shop, Auth, and more.",
  authors: [{ name: "Looping Binary" }],
  openGraph: {
    title: "Looping Binary",
    description:
      "One company. An entire digital stack. Technology partner for businesses in Cameroon and Africa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
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
