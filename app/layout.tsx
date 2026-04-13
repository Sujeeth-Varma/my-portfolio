import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import Navbar from "@/components/Navbar";
import "./globals.css";
import Dock from "@/components/Dock";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700", "900", "100", "200", "300", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Sujeeth Varma ",
  description:
    "Portfolio of Sujeeth Varma - Aspiring FullStack Engineer and Tech Enthusiast",
  openGraph: {
    title: "Sujeeth Varma",
    description:
      "Portfolio of Sujeeth Varma - Aspiring FullStack Engineer and Tech Enthusiast",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sujeeth Varma Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujeeth Varma",
    description:
      "Portfolio of Sujeeth Varma - Aspiring FullStack Engineer and Tech Enthusiast",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen app-shell`}>
        <main className="min-h-screen">
          <div className="relative min-h-screen max-w-4xl border-2 border-y-0 app-frame mx-auto px-6 py-12">
            {/* <Navbar /> */}
            {children}
            <Dock />
          </div>
        </main>
      </body>
    </html>
  );
}
