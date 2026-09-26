import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PatientComfort } from "@/components/PatientComfort";
import { PatientJourney } from "@/components/PatientJourney";
import { Treatments } from "@/components/Treatments";
import { Doctors } from "@/components/Doctors";
import { Cases } from "@/components/Cases";
import { Testimonials } from "@/components/Testimonials";
import { BookingWidget } from "@/components/BookingWidget";
import { LocationHours } from "@/components/LocationHours";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <PatientComfort />
        <PatientJourney />
        <Treatments />
        <Doctors />
        <Cases />
        <Testimonials />
        <BookingWidget />
        <LocationHours />
      </main>
      <Footer />
    </>
  );
}
