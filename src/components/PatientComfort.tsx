"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { Counter } from "@/components/motion/Counter";
import { editorialEase } from "@/motion/motionTokens";

export function PatientComfort() {
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

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

  const stats = [
    { value: 100, suffix: "%", label: "Sterilisasi Autoclave Kelas B", detail: "Standar medis rumah sakit Eropa" },
    { value: 0, suffix: "%", label: "Adonan Cetak Mual", detail: "Digantikan pemindaian 3D optik" },
    { value: 380, prefix: "+", label: "Pasien Tersenyum Puas", detail: "Ulasan bintang 5 Google Maps" },
    { value: 4, suffix: " Sp.", label: "Dokter Spesialis", detail: "Sp.Ort, Sp.Pros, Sp.KGA, Drg." },
  ];

  return (
    <section
      ref={containerRef}
      id="kenyamanan"
      className="scroll-mt-24 py-20 sm:py-28 bg-white text-[#12151A] border-b border-[#E5E7EB] relative overflow-hidden"
    >
      <span id="sterilisasi" className="sr-only" aria-hidden="true" />

      <motion.div
        style={{ x: shouldReduceMotion ? 0 : watermarkX }}
        className="absolute -top-10 left-0 text-[120px] sm:text-[180px] font-black uppercase font-sans text-slate-100 whitespace-nowrap pointer-events-none select-none tracking-tighter leading-none -z-0"
        aria-hidden="true"
      >
        COMFORT PRECISION TRANQUILITY
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
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
              whileHover={shouldReduceMotion ? undefined : { y: -6, backgroundColor: "#F9F9FB" }}
              className="p-8 border-r border-b border-[#E5E7EB] flex flex-col justify-between transition-all group cursor-default relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-[#1D4ED8] transition-colors" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-2xl font-mono font-extrabold text-slate-300 group-hover:text-[#1D4ED8] transition-colors">
                    {item.num}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00D284] group-hover:scale-125 transition-transform" />
                </div>

                <h3 className="text-lg font-bold uppercase tracking-tight text-[#12151A] mb-3 font-sans group-hover:text-[#1D4ED8] transition-colors">
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

        <div className="mt-14 pt-10 border-t border-[#E5E7EB] grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: editorialEase }}
              className="p-5 bg-[#F9F9FB] border border-[#E5E7EB]"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-[#12151A] tracking-tight">
                <Counter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <div className="text-xs font-bold text-[#1D4ED8] mt-1.5 uppercase font-mono">
                {stat.label}
              </div>
              <div className="text-[11px] text-[#64748B] mt-0.5 font-sans">
                {stat.detail}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
