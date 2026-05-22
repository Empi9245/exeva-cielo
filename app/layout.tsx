import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://exeva.it/'),
  title: "Exeva — Digital Agency",
  description: "Exeva è un'agenzia digitale specializzata in web design, branding, marketing e comunicazione. Trasformiamo idee in esperienze digitali memorabili.",
  keywords: "Exeva, Digital Agency, Web Design, Branding, Marketing, SEO, UI/UX, Comunicazione, Agenzia Digitale, Roma",
  authors: [{ name: "Exeva" }],
  creator: "Exeva",
  publisher: "Exeva",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Exeva — Digital Agency",
    description: "Agenzia digitale specializzata in web design, branding e marketing strategico.",
    siteName: "Exeva",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exeva — Digital Agency",
    description: "Agenzia digitale specializzata in web design, branding e marketing strategico.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NEXT_PUBLIC_GA_ID && <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />}
      </body>
    </html>
  );
}
