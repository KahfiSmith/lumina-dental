"use client";

import { motion, useReducedMotion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { editorialEase } from "@/motion/motionTokens";

export function PatientComfort() {
  const shouldReduceMotion = useReducedMotion();

  const pillars = [
    {
      num: "01",
      title: "Gentle Sensory Experience",
      desc: "Ruang studio kedap suara dengan aromaterapi alami dan musik tenang. Tidak ada aroma kimia menyengat khas rumah sakit lama.",
    },
    {
      num: "02",
      title: "Digital Optical 3D Scanning",
      desc: "Pemetaan kontur mulut digital instan dengan kamera optik mikro. Ucapkan selamat tinggal pada adonan cetak gips yang memicu rasa mual.",
    },
    {
      num: "03",
      title: "Invasive-Minimal Treatment",
      desc: "Dokter mengutamakan pelestarian struktur enamel asli. Kami tidak merekomendasikan tindakan agresif yang tidak esensial.",
    },
    {
      num: "04",
      title: "Hospital-Grade Asepsis",
      desc: "Sterilisasi uap autoklaf Kelas B 134 derajat Celsius dan filtrasi udara HEPA H14. Segel instrumen steril selalu dibuka di depan Anda.",
    },
  ];

  return (
    <section id="kenyamanan" className="scroll-mt-24 py-20 sm:py-28 bg-white text-[#12151A] border-b border-[#E5E7EB]">
      <span id="sterilisasi" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-b border-[#E5E7EB] pb-12 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, ease: editorialEase }}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A868] mb-4"
              >
                <span className="font-bold">SECTION 01</span>
                <span>/</span>
                <span>STUDIO PHILOSOPHY</span>
              </motion.div>

              <KineticHeadline
                lines={["Dentistry Doesn’t", "Have To Feel", "Clinical."]}
                highlightLineIndex={2}
                highlightClassName="text-[#1D4ED8]"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#12151A] leading-[1.02] font-sans"
              />
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.15, ease: editorialEase }}
              className="max-w-md text-sm sm:text-base text-[#4B5563] leading-relaxed font-normal"
            >
              <p className="mb-3">
                Kami mendefinisikan ulang pengalaman berkunjung ke dokter gigi. Menggabungkan standar keilmuan spesialis kedokteran gigi dengan kenyamanan ruang kontemporer yang memanusiakan pasien.
              </p>
              <div className="font-mono text-xs text-[#00A868] font-bold">
                COMFORT + PRECISION + CONTEMPORARY CULTURE
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#E5E7EB]">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.num}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
                ease: editorialEase,
              }}
              whileHover={shouldReduceMotion ? undefined : { y: -4, backgroundColor: "#F9F9FB" }}
              className="p-8 border-r border-b border-[#E5E7EB] flex flex-col justify-between transition-colors group cursor-default"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-mono font-extrabold text-slate-300 group-hover:text-[#1D4ED8] transition-colors">
                    {item.num}
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#00D284] group-hover:scale-125 transition-transform" />
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-[#12151A] mb-3 font-sans">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>VERIFIED STANDARD</span>
                <span className="font-bold text-[#12151A] group-hover:text-[#00A868] transition-colors">
                  ACTIVE
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
