import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC, Geist_Mono } from "next/font/google";
import "./globals.css";

// ─────────────────────────────────────────────────────────────
// Fonts: serif for cinematic display, sans for body, mono for flow
// ─────────────────────────────────────────────────────────────
const serif = Noto_Serif_SC({
  weight: ["400", "500", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
  preload: false,
});

const sans = Noto_Sans_SC({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  preload: false,
});

const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "故事，不该从剧本开始 · Story Before Script",
  description:
    "AI 时代的故事创作范式重构。人们从来不是用文字做梦的——让创作者从脑中的电影开始，而不是从剧本开始。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${serif.variable} ${sans.variable} ${mono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
