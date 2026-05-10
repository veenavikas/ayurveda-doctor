import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Sushrutha Nature Cure | Ancestral Wisdom. Modern Equilibrium.",
  description:
    "A sanctuary of Nature Cure rooted in the lineage of Sushrutha.",
  keywords: ["Ayurveda", "Panchakarma", "Nadi Pariksha", "Holistic Healing", "Dosha", "Wellness"],
  openGraph: {
    title: "Sushrutha Nature Cure | Ancestral Wisdom. Modern Equilibrium.",
    description: "A sanctuary of Nature Cure rooted in the lineage of Sushrutha.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushrutha Nature Cure | Ancestral Wisdom. Modern Equilibrium.",
    description: "A sanctuary of Nature Cure rooted in the lineage of Sushrutha.",
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
        <link 
          href="https://fonts.googleapis.com/icon?family=Material+Icons" 
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
