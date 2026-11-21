import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import MotionProvider from "@/components/motion/MotionProvider";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sujeeth.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sujeeth Varma",
    template: "%s — Sujeeth Varma",
  },
  description:
    "Sujeeth Varma is a backend-focused software engineer building applications around APIs, data, and realtime communication.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.webp", type: "image/webp" }],
    shortcut: "/icon.webp",
  },
  openGraph: {
    title: "Sujeeth Varma",
    description:
      "Selected systems and engineering decisions by Sujeeth Varma.",
    type: "website",
    url: "/",
    images: [
      {
        url: "/og-image.webp",
        width: 1638,
        height: 1072,
        alt: "Sujeeth Varma portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujeeth Varma",
    description:
      "Selected systems and engineering decisions by Sujeeth Varma.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <MotionProvider>
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <div className="site-shell">
            <SiteHeader />
            <main id="main-content">{children}</main>
            <SiteFooter />
          </div>
        </MotionProvider>
      </body>
    </html>
  );
}
