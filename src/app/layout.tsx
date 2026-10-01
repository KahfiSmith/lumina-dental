import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { clinicData } from "@/data/dental";
import { JsonLd } from "@/components/JsonLd";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(clinicData.seo.siteUrl),
  title: {
    default: "Lumina Dental Studio - Modern Smile Culture Surabaya",
    template: `%s | ${clinicData.name}`,
  },
  description: "Studio dokter gigi modern di Surabaya Barat yang mengedepankan presisi digital 3D, dokter spesialis ramah, dan suasana studio kontemporer tanpa rasa takut.",
  keywords: clinicData.seo.keywords,
  authors: [{ name: clinicData.name }],
  creator: clinicData.name,
  publisher: clinicData.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Lumina Dental Studio - Modern Smile Culture",
    description: "Perawatan gigi modern yang dirancang untuk kenyamanan dan senyum percaya diri Anda di Surabaya Barat.",
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
    title: "Lumina Dental Studio - Modern Smile Culture",
    description: "Perawatan gigi modern yang dirancang untuk kenyamanan dan senyum percaya diri Anda di Surabaya Barat.",
    images: ["https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=85&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#12151A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${jakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F9F9FB] text-[#12151A] antialiased font-sans selection:bg-[#00D284] selection:text-[#12151A]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-[#12151A] focus:text-white focus:rounded-none text-xs font-mono uppercase"
        >
          Lewati ke konten utama
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
