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
    "Hold Your Ground is an upcoming multiplayer arena brawler from IOLegends. Up to 10 armed circles fight with wooden swords while a horde of 100 merging zombies closes in. Last circle standing wins.",
  keywords: [
    "Hold Your Ground",
    "IOLegends",
    "multiplayer arena game",
    "browser game",
    "io game",
    "zombie survival",
    "battle royale",
  ],
  authors: [{ name: "IOLegends" }],
  openGraph: {
    title: "Hold Your Ground — IOLegends",
    description:
      "Upcoming multiplayer arena brawler. Fight with a wooden sword, survive a merging zombie horde, and be the last circle standing.",
    type: "website",
    siteName: "IOLegends",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hold Your Ground — IOLegends",
    description:
      "Upcoming multiplayer arena brawler. Fight with a wooden sword, survive a merging zombie horde, and be the last circle standing.",
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
