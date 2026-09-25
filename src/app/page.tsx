import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Treatments } from "@/components/Treatments";
import { Doctors } from "@/components/Doctors";
import { Sterilization } from "@/components/Sterilization";
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
        <Treatments />
        <Doctors />
        <Sterilization />
        <Cases />
        <Testimonials />
        <BookingWidget />
        <LocationHours />
      </main>
      <Footer />
    </>
  );
}
