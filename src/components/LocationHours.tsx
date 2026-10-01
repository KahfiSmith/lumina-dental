import Image from "next/image";
import { clinicData } from "@/data/dental";
import { LiveClinicStatus } from "@/components/LiveClinicStatus";
import { MapPin, Clock, Phone, ArrowUpRight, ShieldCheck, Car, Coffee, Music } from "lucide-react";

export function LocationHours() {
  const { contact, schedule } = clinicData;

  const mapEmbedUrl =
    "https://www.openstreetmap.org/export/embed.html?bbox=112.6950%2C-7.3050%2C112.7350%2C-7.2750&layer=mapnik&marker=-7.2930%2C112.7150";

  return (
    <section id="lokasi" className="scroll-mt-24 py-20 sm:py-28 bg-white text-[#12151A] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-b border-[#E5E7EB] pb-10 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A868] mb-3">
                <span className="font-bold">SECTION 07</span>
                <span>/</span>
                <span>STUDIO ARCHITECTURE & ACCESS</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#12151A] font-sans">
                The Space.
                <br />
                Surabaya Studio.
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Sebuah studio dental di koridor Mayjen Sungkono yang dirancang dengan estetika kontemporer, pencahayaan alami yang hangat, serta fasilitas relaksasi untuk menghadirkan rasa tenang sejak awal.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-start">
          <div className="lg:col-span-8 relative h-[380px] sm:h-[460px] bg-[#12151A] overflow-hidden border border-[#E5E7EB]">
            <Image
              src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
              alt="Lumina Dental Studio Interior Architecture Surabaya"
              fill
              className="object-cover object-center filter grayscale-[10%]"
              sizes="(max-width: 1024px) 100vw, 65vw"
            />
            <div className="absolute top-4 left-4 bg-[#12151A]/90 text-white font-mono text-[10px] px-3 py-1 uppercase tracking-widest">
              PLATE 01 : PRIVATE TREATMENT LOUNGE
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-4 border border-[#E5E7EB] font-sans text-xs text-[#12151A] max-w-md">
              <span className="font-bold uppercase block mb-1">Acoustic Comfort Insulation</span>
              Ruang perawatan privat dengan partisi kedap suara, bebas aroma menyengat, dan tata cahaya menenangkan.
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="relative h-[220px] bg-[#12151A] overflow-hidden border border-[#E5E7EB]">
              <Image
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                alt="Digital 3D Intraoral Scanning at Lumina Dental"
                fill
                className="object-cover object-center filter grayscale-[10%]"
                sizes="(max-width: 1024px) 100vw, 35vw"
              />
              <div className="absolute top-3 left-3 bg-[#12151A]/90 text-[#00D284] font-mono text-[10px] px-2.5 py-1">
                PLATE 02 : 3D PRECISION SCAN
              </div>
            </div>

            <div className="p-6 bg-[#F9F9FB] border border-[#E5E7EB] font-mono text-xs space-y-3">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                STUDIO AMENITIES
              </span>
              <div className="grid grid-cols-2 gap-3 text-[11px] text-[#12151A]">
                <div className="flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-[#00A868]" />
                  <span>Artisan Brew</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 text-[#00A868]" />
                  <span>Ambient Audio</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-[#00A868]" />
                  <span>Free Valet</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00A868]" />
                  <span>HEPA Clean Air</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 bg-[#F9F9FB] border border-[#E5E7EB]">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00A868] mb-2 font-bold">
                <MapPin className="w-4 h-4" />
                <span>STUDIO ADDRESS</span>
              </div>
              <address className="not-italic text-sm font-bold text-[#12151A] leading-relaxed mb-2 font-sans">
                {contact.fullAddress}
              </address>
              <p className="text-xs text-[#4B5563]">
                Patokan: Mayjen Sungkono koridor barat, seberang kompleks perkantoran. Tersedia fasilitas parkir privat luas.
              </p>
            </div>

            <div className="p-6 bg-[#F9F9FB] border border-[#E5E7EB]">
              <div className="flex items-center justify-between gap-2 font-mono text-xs text-[#00A868] mb-3 font-bold">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>JADWAL OPERASIONAL</span>
                </div>
                <LiveClinicStatus variant="pill" />
              </div>

              <div className="space-y-2 text-xs font-mono">
                {schedule.map((h, idx) => (
                  <div key={idx} className="flex items-center justify-between pb-1.5 border-b border-[#E5E7EB]">
                    <span className="text-slate-500 uppercase">{h.days}</span>
                    <span className="font-bold text-[#12151A]">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#12151A] hover:bg-[#1D4ED8] text-white text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <span>Buka Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${contact.emergencyPhone}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E5E7EB] hover:border-[#12151A] text-[#12151A] text-xs font-mono uppercase tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00D284]" />
                <span>Telepon: {contact.formattedEmergencyPhone}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 border border-[#E5E7EB] overflow-hidden relative">
            <div className="h-80 sm:h-96 w-full bg-[#12151A]">
              <iframe
                title="Peta Lokasi Lumina Dental Studio Surabaya"
                src={mapEmbedUrl}
                className="w-full h-full border-0 filter grayscale-[40%] contrast-[1.1]"
                loading="lazy"
              />
            </div>
            <div className="p-4 bg-[#F9F9FB] border-t border-[#E5E7EB] font-mono text-xs flex items-center justify-between text-slate-500">
              <span>SURABAYA DUKUH PAKIS ACCESS</span>
              <span>PARKING & VALET: READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
