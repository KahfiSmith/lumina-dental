import Link from "next/link";
import { clinicData } from "@/data/dental";
import { Phone, MessageCircle, Shield } from "lucide-react";

export function Footer() {
  const { contact, operatingLicense, schedule } = clinicData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          <div className="lg:col-span-4 space-y-4">
            <Link href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#0E7490] flex items-center justify-center text-white">
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" stroke="currentColor">
                  <path
                    d="M16 6c-4.5 0-7 2.5-7 6 0 3.5 1.5 8 2.5 11.5 1 3.5 2.5 3.5 1 1-2.5 1-2.5 1-2.5s0 0 1 2.5c1 2.5 2.5 2.5 3.5-1C21.5 20 23 15.5 23 12c0-3.5-2.5-6-7-6z"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-extrabold text-lg text-white tracking-tight">
                LUMINA DENTAL
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {clinicData.shortDescription}
            </p>

            <div className="pt-2 text-[11px] text-slate-400 flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
              <span>{operatingLicense}</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-xs uppercase tracking-wider text-white">
              Menu Layanan
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Scaling Gigi Ultrasonik
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Pemutihan Gigi (Teeth Whitening)
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Behel Gigi Sapphire &amp; Metal
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Clear Aligners Transparan
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-white transition-colors">
                  Dental Implan Permanen
                </a>
              </li>
              <li>
                <a href="#dokter" className="hover:text-white transition-colors">
                  Profil Dokter Spesialis
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-xs uppercase tracking-wider text-white">
              Jam Praktek Klinik
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-slate-400">
              {schedule.map((item, idx) => (
                <div key={idx} className="space-y-0.5">
                  <span className="text-slate-200 block font-medium">{item.days}</span>
                  <span className="text-[11px] text-slate-400">{item.time}</span>
                </div>
              ))}
              <p className="text-[11px] text-cyan-400 pt-2">
                Melayani janji temu terjadwal dan kasus darurat gigi.
              </p>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <p className="font-bold text-xs uppercase tracking-wider text-white">
              Kontak Cepat
            </p>
            <address className="not-italic text-xs text-slate-400 space-y-2">
              <p>{contact.address}</p>
              <p>{contact.city}</p>
              <div className="pt-2 space-y-1">
                <a
                  href={`tel:${contact.emergencyPhone}`}
                  className="flex items-center gap-1.5 text-cyan-400 hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{contact.formattedEmergencyPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}`}
                  className="flex items-center gap-1.5 text-emerald-400 hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>{contact.whatsappFormatted}</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} {clinicData.name}. All rights reserved.
          </p>
          <p className="text-slate-600">
            Didesain untuk kenyamanan &amp; kepercayaan pasien gigi di Surabaya.
          </p>
        </div>
      </div>
    </footer>
  );
}
