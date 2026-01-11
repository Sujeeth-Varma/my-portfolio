import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "700", "900", "100", "200", "300", "500", "600", "800"],
});

export const metadata: Metadata = {
  title: "Sujeeth Varma ",
  description:
    "Portfolio of Sujeeth Varma - Aspiring FullStack Engineer and Tech Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
