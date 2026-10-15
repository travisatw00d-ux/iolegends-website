import type { Metadata } from "next";
import { Geist, Geist_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const display = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const description =
  "IOLegends makes small browser games for playing with your friends. Nothing to install: open a link and play.";

export const metadata: Metadata = {
  metadataBase: new URL("https://iolegends.com"),
  title: "IOLegends — games to play with your friends",
  description,
  keywords: ["IOLegends", "browser games", "co-op games", "play with friends", "Nutfall", "io games"],
  authors: [{ name: "IOLegends" }],
  openGraph: {
    title: "IOLegends — games to play with your friends",
    description,
    type: "website",
    siteName: "IOLegends",
    images: ["/covers/nutfall.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "IOLegends — games to play with your friends",
    description,
    images: ["/covers/nutfall.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} h-full antialiased`}
    >
      <body className="min-h-full text-text font-sans selection:bg-brand selection:text-black">
        {children}
      </body>
    </html>
  );
}
