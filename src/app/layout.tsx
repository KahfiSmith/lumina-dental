import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import { clinicData } from "@/data/dental";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(clinicData.seo.siteUrl),
  title: {
    default: clinicData.seo.title,
    template: `%s | ${clinicData.name}`,
  },
  description: clinicData.seo.description,
  keywords: clinicData.seo.keywords,
  authors: [{ name: clinicData.name }],
  creator: clinicData.name,
  publisher: clinicData.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: clinicData.seo.title,
    description: clinicData.seo.description,
    url: clinicData.seo.siteUrl,
    siteName: clinicData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=85&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: `${clinicData.name} Surabaya`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: clinicData.seo.title,
    description: clinicData.seo.description,
    images: ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=85&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#8F6E4D",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} ${newsreader.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FBFBFA] text-[#1C1D1F] antialiased font-sans selection:bg-[#E5E0D8] selection:text-[#1C1D1F]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#8F6E4D] focus:text-white focus:rounded-lg focus:shadow-xl text-sm font-bold"
        >
          Lewati ke konten utama
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
