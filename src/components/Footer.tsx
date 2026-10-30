"use client";

import Link from "next/link";
import { clinicData } from "@/data/dental";
import { ShieldCheck, ArrowUp } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { snappySpring } from "@/motion/motionTokens";

export function Footer() {
  const { contact, operatingLicense } = clinicData;
  const currentYear = new Date().getFullYear();
  const shouldReduceMotion = useReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#12151A] text-white pt-16 pb-12 border-t border-slate-800 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-slate-800">
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.08 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
                transition={snappySpring}
                className="w-8 h-8 bg-white text-[#12151A] flex items-center justify-center font-bold text-sm"
              >
                L
              </motion.div>
              <span className="text-xl font-extrabold tracking-tight text-white uppercase font-sans">
                Lumina <span className="text-xs text-[#00D284]">Studio</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm font-light">
              {clinicData.shortDescription}
            </p>

            <div className="pt-2 text-[11px] text-slate-400 flex items-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#00D284] shrink-0 mt-0.5" />
              <span className="leading-snug">{operatingLicense}</span>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-[11px] uppercase tracking-widest text-[#00D284]">
              SMILE MENU
            </p>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              {[
                "Ultrasonic Scaling & Airflow",
                "LED Teeth Whitening (1 Jam)",
                "Clear Aligners 3D Transparan",
                "Porcelain Veneers Estetik",
                "Implan Gigi Titanium",
              ].map((item, idx) => (
                <li key={idx}>
                  <motion.a
                    whileHover={shouldReduceMotion ? undefined : { x: 4, color: "#FFFFFF" }}
                    transition={snappySpring}
                    href="#layanan"
                    className="hover:text-white transition-colors block"
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <p className="font-bold text-[11px] uppercase tracking-widest text-[#00D284]">
              SECTIONS
            </p>
            <ul className="space-y-2 text-xs text-slate-400 font-sans">
              {[
                { label: "01 : Philosophy", href: "#kenyamanan" },
                { label: "02 : Experience", href: "#alur" },
                { label: "03 : Dentists", href: "#dokter" },
                { label: "04 : Case Results", href: "#hasil" },
                { label: "05 : Surabaya Studio", href: "#lokasi" },
              ].map((sec, idx) => (
                <li key={idx}>
                  <motion.a
                    whileHover={shouldReduceMotion ? undefined : { x: 4, color: "#FFFFFF" }}
                    transition={snappySpring}
                    href={sec.href}
                    className="hover:text-white transition-colors block"
                  >
                    {sec.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <p className="font-bold text-[11px] uppercase tracking-widest text-[#00D284]">
              STUDIO CONTACT
            </p>
            <div className="space-y-2.5 text-xs text-slate-400">
              <p className="font-sans leading-relaxed">
                {contact.address}, {contact.city}
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${contact.emergencyPhone}`}
                  className="text-white hover:text-[#00D284] transition-colors block font-bold"
                >
                  Direct: {contact.formattedEmergencyPhone}
                </a>
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    "Halo Lumina Dental Studio, saya ingin bertanya mengenai layanan."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00D284] hover:underline block mt-1"
                >
                  WA: {contact.whatsappFormatted}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3 h-3 text-[#00D284]" />
              </motion.button>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>
            &copy; {currentYear} {clinicData.name}. Modern Smile Culture.
          </p>
          <p className="text-center md:text-right text-slate-600 max-w-xl font-sans">
            Medical Disclaimer: Informasi pada situs ini ditujukan untuk kebutuhan edukasi kesehatan gigi dan tidak menggantikan diagnosis klinis tatap muka langsung oleh dokter gigi spesialis berlisensi.
          </p>
        </div>
      </div>
    </footer>
  );
}
