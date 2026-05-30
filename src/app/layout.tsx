import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zenith Multipurposes",
  description: "Your Brand + Our Creativity = Success",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  openGraph: {
    title: "Zenith Multipurposes",
    description: "Your Brand + Our Creativity = Success",
    siteName: "Zenith Multipurposes",
    type: "website",
    images: [
      {
        url: "/logogreen.jpeg",
        width: 1080,
        height: 1080,
        alt: "Zenith Multipurposes logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenith Multipurposes",
    description: "Your Brand + Our Creativity = Success",
    images: ["/logogreen.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
