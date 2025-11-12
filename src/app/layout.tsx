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
  title:
    "Bangladesh Army x Nusrat | AI Mini Film Companion Experience by NUR",
  description:
    "Dive into the world of NUR’s viral YouTube Short where Nusrat joins the Bangladesh Army on a high-tech mission to defend her school. Explore story beats, characters, and production insights.",
  openGraph: {
    title: "Bangladesh Army x Nusrat | AI Mini Film Companion",
    description:
      "Experience the story world of NUR’s viral YouTube Short with story beats, characters, and production insights.",
    url: "https://agentic-f41edb45.vercel.app",
    siteName: "Agentic Film Companion",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bangladesh Army x Nusrat | AI Mini Film Companion",
    description:
      "Explore the mission, characters, and craft behind the viral Bangladesh Army AI mini film by NUR.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
