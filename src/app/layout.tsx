import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Sushrutha Nature Cure | Ancestral Wisdom. Modern Equilibrium.",
  description:
    "A sanctuary of Nature Cure rooted in ancestral wisdom.",
  keywords: ["Ayurveda", "Panchakarma", "Nadi Pariksha", "Holistic Healing", "Dosha", "Wellness"],
  openGraph: {
    title: "Sushrutha Nature Cure | Ancestral Wisdom. Modern Equilibrium.",
    description: "A sanctuary of Nature Cure rooted in ancestral wisdom.",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sushrutha Nature Cure | Ancestral Wisdom. Modern Equilibrium.",
    description: "A sanctuary of Nature Cure rooted in ancestral wisdom.",
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
        <link rel="icon" href="/assets/susrutha_logo.png" type="image/png" />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N2P4WT74"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-N2P4WT74');`}
        </Script>

        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FXKEBDGHHZ"
          strategy="afterInteractive"
        />
        <Script id="ga-script" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FXKEBDGHHZ');
          `}
        </Script>

        <div className="texture-overlay" aria-hidden="true" />
        <SmoothScroll>
          <Navbar />
          {children}
          <WhatsAppWidget />
        </SmoothScroll>
      </body>
    </html>
  );
}
