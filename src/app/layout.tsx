import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hold Your Ground — IOLegends",
  description:
    "Hold Your Ground is a multiplayer zombie survival IO game. Up to 10 knights prepare during the day and fight waves of zombies, trolls, and goblins at night. Loot gear, upgrade your build, and hold your ground.",
  keywords: [
    "Hold Your Ground",
    "IOLegends",
    "multiplayer zombie survival",
    "browser game",
    "io game",
    "knight",
    "loot",
    "wave survival",
  ],
  authors: [{ name: "IOLegends" }],
  openGraph: {
    title: "Hold Your Ground — IOLegends",
    description:
      "A multiplayer zombie survival IO game. Prepare during the day, fight merging zombie hordes at night, loot gear across 7 rarities, and hold your ground.",
    type: "website",
    siteName: "IOLegends",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hold Your Ground — IOLegends",
    description:
      "A multiplayer zombie survival IO game. Prepare during the day, fight merging zombie hordes at night, loot gear across 7 rarities, and hold your ground.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-bg text-text font-sans selection:bg-brand selection:text-black">
        {children}
      </body>
    </html>
  );
}
