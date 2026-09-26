import Link from "next/link";
import { clinicData } from "@/data/dental";
import { Phone, MessageCircle, Shield } from "lucide-react";

export function Footer() {
  const { contact, operatingLicense, schedule } = clinicData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1D1F] text-[#A6A49F] pt-20 pb-12 border-t border-[#2C2D30]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-[#2C2D30]">
          <div className="lg:col-span-4 space-y-5">
            <Link href="#" className="inline-block">
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                LUMINA STUDIO
              </span>
              <span className="block text-[10px] tracking-[0.25em] text-[#8F6E4D] uppercase font-sans mt-0.5">
                Dental Artistry &amp; Clinical Precision
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#A6A49F] leading-relaxed max-w-sm font-normal">
              {clinicData.shortDescription}
            </p>

            <div className="pt-2 text-[11px] text-[#A6A49F] flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-[#8F6E4D] shrink-0 mt-0.5" aria-hidden="true" />
              <span className="leading-snug">{operatingLicense}</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="font-semibold text-xs uppercase tracking-widest text-white">
              Menu Layanan
            </p>
            <ul className="space-y-2.5 text-xs text-[#A6A49F]">
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Ultrasonic Scaling &amp; Airflow
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  LED Teeth Whitening (1 Jam)
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Behel Sapphire &amp; Ortodonti
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Clear Aligners 3D Transparan
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Dental Implan Titanium
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Porcelain Veneer E-Max
                </a>
              </li>
              <li>
                <a href="#dokter" className="hover:text-white transition-colors">
                  Profil Tim Dokter Spesialis
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-4">
            <p className="font-semibold text-xs uppercase tracking-widest text-white">
              Jadwal Praktek
            </p>
            <div className="space-y-3 text-xs text-[#A6A49F]">
              {schedule.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-[#EFECE6] block font-medium">{item.days}</span>
                  <span className="text-[11px] text-[#A6A49F]">{item.time}</span>
                </div>
              ))}
              <p className="text-[11px] text-[#8F6E4D] pt-1">
                Melayani janji temu terjadwal dan penanganan kasus darurat.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <p className="font-semibold text-xs uppercase tracking-widest text-white">
              Akses &amp; Kontak
            </p>
            <address className="not-italic text-xs text-[#A6A49F] space-y-2 leading-relaxed">
              <p>{contact.address}</p>
              <p>{contact.city}</p>
              <div className="pt-3 space-y-2">
                <a
                  href={`tel:${contact.emergencyPhone}`}
                  className="flex items-center gap-2 text-[#EFECE6] hover:text-[#8F6E4D] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8F6E4D]" aria-hidden="true" />
                  <span>{contact.formattedEmergencyPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  className="flex items-center gap-2 text-[#EFECE6] hover:text-[#8F6E4D] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#8F6E4D]" aria-hidden="true" />
                  <span>{contact.whatsappFormatted}</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6E7178] gap-4">
          <p>
            &copy; {currentYear} {clinicData.name}. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-[#6E7178]">
            Perawatan gigi presisi dengan kenyamanan personal di Surabaya.
          </p>
        </div>
      </div>
    </footer>
  );
}
