import Link from "next/link";
import { clinicData } from "@/data/dental";
import { Phone, MessageCircle, ShieldCheck, Heart } from "lucide-react";

export function Footer() {
  const { contact, operatingLicense, schedule } = clinicData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E242B] text-[#9DA4AE] pt-16 pb-12 border-t border-[#2D353F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#2D353F]">
          {/* Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#" className="inline-flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#246A60] text-white flex items-center justify-center font-bold text-sm">
                L
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Lumina Dental <span className="text-xs font-semibold text-[#BCD9D2]">Surabaya</span>
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-[#9DA4AE] leading-relaxed max-w-sm">
              {clinicData.shortDescription}
            </p>

            <div className="pt-2 text-xs text-[#9DA4AE] flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#BCD9D2] shrink-0 mt-0.5" />
              <span className="leading-snug">{operatingLicense}</span>
            </div>
          </div>

          {/* Treatments Navigation */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-semibold text-xs uppercase tracking-wider text-white">
              Katalog Layanan
            </p>
            <ul className="space-y-2 text-xs text-[#9DA4AE]">
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
                  Tim Dokter Gigi Spesialis
                </a>
              </li>
            </ul>
          </div>

          {/* Schedule */}
          <div className="lg:col-span-3 space-y-3">
            <p className="font-semibold text-xs uppercase tracking-wider text-white">
              Jadwal Praktik
            </p>
            <div className="space-y-2.5 text-xs text-[#9DA4AE]">
              {schedule.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-white block font-medium">{item.days}</span>
                  <span className="text-[11px] text-[#9DA4AE]">{item.time}</span>
                </div>
              ))}
              <p className="text-[11px] text-[#BCD9D2] pt-1">
                Melayani janji temu terjadwal dan penanganan kasus gigi darurat.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 space-y-3">
            <p className="font-semibold text-xs uppercase tracking-wider text-white">
              Kontak Klinik
            </p>
            <address className="not-italic text-xs text-[#9DA4AE] space-y-2 leading-relaxed">
              <p>{contact.address}</p>
              <p>{contact.city}</p>
              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${contact.emergencyPhone}`}
                  className="flex items-center gap-2 text-white hover:text-[#BCD9D2] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#BCD9D2]" />
                  <span>{contact.formattedEmergencyPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  className="flex items-center gap-2 text-white hover:text-[#BCD9D2] transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#BCD9D2]" />
                  <span>{contact.whatsappFormatted}</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#6E7178] gap-4">
          <p>
            &copy; {currentYear} {clinicData.name}. Hak cipta dilindungi undang-undang.
          </p>
          <p className="flex items-center gap-1.5 text-[#9DA4AE]">
            <span>Perawatan gigi ramah cemas di Surabaya</span>
            <Heart className="w-3 h-3 text-[#BCD9D2] fill-[#BCD9D2]" />
          </p>
        </div>
      </div>
    </footer>
  );
}
