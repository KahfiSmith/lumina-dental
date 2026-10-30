import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { EditorialTicker } from "@/components/motion/EditorialTicker";
import { PatientComfort } from "@/components/PatientComfort";
import { PatientJourney } from "@/components/PatientJourney";
import { Treatments } from "@/components/Treatments";
import { Doctors } from "@/components/Doctors";
import { Cases } from "@/components/Cases";
import { Testimonials } from "@/components/Testimonials";
import { BookingWidget } from "@/components/BookingWidget";
import { LocationHours } from "@/components/LocationHours";
import { Footer } from "@/components/Footer";
import { FloatingConcierge } from "@/components/FloatingConcierge";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <EditorialTicker />
        <PatientComfort />
        <PatientJourney />
        <Treatments />
        <Doctors />
        <Cases />
        <EditorialTicker
          reverse={true}
          speedSeconds={32}
          items={[
            "SMILE CULTURE SURABAYA",
            "DOKTER SPESIALIS RESMI PBDI",
            "GARANSI RESTORASI ESTETIK",
            "PENGALAMAN KLINIS TERUJI",
            "TEKNOLOGI 3D INTRAORAL PRECISION",
            "RUANG STUDIO NYAMAN TANPA CEMAS",
          ]}
        />
        <Testimonials />
        <BookingWidget />
        <LocationHours />
      </main>
      <FloatingConcierge />
      <Footer />
    </>
  );
}
