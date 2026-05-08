import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Prana Ayurveda | Ancient Wisdom. Modern Healing.",
  description:
    "A world-class Ayurvedic sanctuary bridging ancestral healing lineages with modern clinical precision. Book your consultation today.",
  keywords: ["Ayurveda", "Panchakarma", "Nadi Pariksha", "Holistic Healing", "Dosha", "Wellness"],
  openGraph: {
    title: "Prana Ayurveda | Ancient Wisdom. Modern Healing.",
    description: "A world-class Ayurvedic sanctuary bridging ancestral healing lineages with modern clinical precision.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="texture-overlay" aria-hidden="true" />
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
