"use client";

import { useRef } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import { ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { editorialEase, snappySpring } from "@/motion/motionTokens";

export function Doctors() {
  const { doctors, contact } = clinicData;
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], ["8%", "-10%"]);

  return (
    <section
      ref={containerRef}
      id="dokter"
      className="scroll-mt-24 py-20 sm:py-28 bg-[#F1F3F7] text-[#12151A] border-b border-[#E5E7EB] relative overflow-hidden"
    >
      <motion.div
        style={{ x: shouldReduceMotion ? 0 : watermarkX }}
        className="absolute -top-10 left-0 text-[110px] sm:text-[180px] font-black uppercase font-sans text-slate-200/50 whitespace-nowrap pointer-events-none select-none tracking-tighter leading-none -z-0"
        aria-hidden="true"
      >
        SPECIALIST FACULTY PBDI
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="border-b border-[#E5E7EB] pb-10 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: editorialEase }}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A868] mb-3"
              >
                <span className="font-bold">SECTION 04</span>
                <span>/</span>
                <span>CLINICAL FACULTY</span>
              </motion.div>

              <KineticHeadline
                lines={["Dentists In", "Profile."]}
                highlightLineIndex={1}
                highlightClassName="text-[#1D4ED8]"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#12151A] font-sans"
              />
            </div>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: editorialEase }}
              className="max-w-md text-sm sm:text-base text-[#4B5563] leading-relaxed"
            >
              Profil dokter spesialis berlisensi resmi PBDI dan Dinas Kesehatan Surabaya. Memadukan kemahiran kuratif klinis dengan kepribadian yang ramah dan menenangkan.
            </motion.p>
          </div>
        </div>

        <div className="space-y-16">
          {doctors.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: editorialEase }}
              className="bg-white border border-[#E5E7EB] p-6 sm:p-10 lg:p-12 hover:border-[#1D4ED8] transition-all relative shadow-xs hover:shadow-xl group"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5 relative">
                  <div className="relative h-96 sm:h-[440px] w-full bg-[#12151A] overflow-hidden border border-[#E5E7EB]">
                    <motion.div
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                      transition={{ duration: 0.6, ease: editorialEase }}
                      className="relative w-full h-full"
                    >
                      <Image
                        src={doc.photo}
                        alt={`${doc.name} - Dokter Gigi Spesialis di Lumina Dental Surabaya`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover object-top filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                      />
                    </motion.div>

                    <div className="absolute top-3 left-3 bg-[#12151A]/90 text-[#00D284] px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider backdrop-blur-xs">
                      FACULTY 0{idx + 1} : SPESIALIS BERLISENSI
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 p-3 font-mono text-xs text-[#12151A] border border-[#E5E7EB]">
                      <div className="text-[10px] uppercase text-slate-400">NOMOR SIP RESMI</div>
                      <div className="font-bold">{doc.sipNumber}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase mb-2">
                      <span className="text-[#00A868] font-bold">SPESIALISASI UTAMA</span>
                      <span>/</span>
                      <span>{doc.specialization}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12151A] mb-2 font-sans group-hover:text-[#1D4ED8] transition-colors">
                      {doc.name}
                    </h3>

                    <div className="text-xs font-mono text-[#1D4ED8] font-bold uppercase mb-4">
                      {doc.title}
                    </div>

                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light mb-6">
                      {doc.bio}
                    </p>

                    <div className="p-4 bg-[#F9F9FB] border border-[#E5E7EB] font-mono text-xs space-y-3 mb-6">
                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-400 uppercase">LATAR BELAKANG PENDIDIKAN</span>
                        <span className="font-bold text-[#12151A]">{doc.education}</span>
                      </div>

                      <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                        <span className="text-slate-400 uppercase">JADWAL PRAKTIK AKTIF</span>
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#00D284] animate-pulse" />
                          <span className="font-bold text-[#00A868]">{doc.schedule}</span>
                        </div>
                      </div>

                      <div>
                        <span className="text-slate-400 uppercase block mb-1.5">SLOT KONSULTASI TERSEDIA HARI INI</span>
                        <div className="flex flex-wrap gap-2">
                          {doc.slots.map((slot, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 bg-white border border-[#E5E7EB] text-[#12151A] font-bold text-[11px]"
                            >
                              {slot}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {doc.focusTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 bg-[#12151A] text-white font-mono text-[11px] uppercase tracking-wider"
                        >
                          # {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#E5E7EB]">
                    <motion.a
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                      transition={snappySpring}
                      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                        `Halo Lumina Dental, saya ingin reservasi konsultasi dengan ${doc.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-[#12151A] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-widest transition-colors font-mono shadow-sm group"
                    >
                      <span>Reservasi Konsultasi Dengan {doc.name.split(",")[0]}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
