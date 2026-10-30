"use client";

import { useRef, useState } from "react";
import { clinicData } from "@/data/dental";
import { ArrowUpRight, Check } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { editorialEase, snappySpring } from "@/motion/motionTokens";

export function Treatments() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  const categories = [
    { id: "all", label: "00 ALL SERVICES" },
    { id: "umum", label: "01 SCALING & ROUTINE" },
    { id: "estetika", label: "02 WHITENING & VENEERS" },
    { id: "ortodonti", label: "03 BRACES & ALIGNERS" },
    { id: "bedah", label: "04 TITANIUM IMPLANTS" },
  ];

  const filtered =
    activeCategory === "all"
      ? clinicData.treatments
      : clinicData.treatments.filter((t) => t.category === activeCategory);

  const patientNeeds = [
    {
      question: "NEED A CHECK-UP?",
      action: "Pembersihan karang gigi & deteksi dini digital",
      desc: "Menghilangkan plak membandel dengan teknologi air-flow tanpa rasa ngilu tajam.",
      treatment: "Ultrasonic Scaling & Airflow",
    },
    {
      question: "NEED A BRIGHTER SMILE?",
      action: "Pemutihan enamel instan tanpa merusak gigi",
      desc: "Protokol LED whitening 1 jam mengangkat noda kopi dan teh hingga 4 tingkat lebih cerah.",
      treatment: "LED Teeth Whitening",
    },
    {
      question: "NEED TO FIX ALIGNMENT?",
      action: "Merapikan susunan gigi tanpa behel kawat mencolok",
      desc: "Clear aligners transparan dan behel sapphire estetik untuk proporsi gigitan yang rapi.",
      treatment: "Clear Aligners 3D / Behel Sapphire",
    },
    {
      question: "NEED TO REPLACE A TOOTH?",
      action: "Restorasi gigi tanggal dengan pondasi titanium",
      desc: "Implan gigi permanen yang menyatu dengan tulang rahang, berfungsi persis gigi asli.",
      treatment: "Implan Gigi Titanium",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="layanan"
      className="scroll-mt-24 py-20 sm:py-28 bg-white text-[#12151A] border-b border-[#E5E7EB] relative overflow-hidden"
    >
      <motion.div
        style={{ x: shouldReduceMotion ? 0 : watermarkX }}
        className="absolute -top-10 left-0 text-[110px] sm:text-[180px] font-black uppercase font-sans text-slate-100 whitespace-nowrap pointer-events-none select-none tracking-tighter leading-none -z-0"
        aria-hidden="true"
      >
        TREATMENT CATALOGUE INDEX
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="border-b border-[#E5E7EB] pb-12 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: editorialEase }}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A868] mb-3"
              >
                <span className="font-bold">SECTION 03</span>
                <span>/</span>
                <span>TREATMENT INDEX</span>
              </motion.div>

              <KineticHeadline
                lines={["The Smile", "Menu."]}
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
              className="max-w-md text-sm sm:text-base text-[#4B5563] leading-relaxed font-light"
            >
              Katalog perawatan dental terpadu dengan estimasi waktu dan tarif transparan. Ditangani langsung oleh dokter gigi spesialis dengan pendekatan pelestarian gigi asli.
            </motion.p>
          </div>
        </div>

        <div className="mb-20">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-6 font-bold flex items-center justify-between"
          >
            <span>PATIENT EDITORIAL GUIDE : WHAT DO YOU NEED TODAY?</span>
            <span className="hidden sm:inline text-[#00A868]">PANDUAN KLINIS 01 - 04</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {patientNeeds.map((need, idx) => (
              <motion.div
                key={idx}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: editorialEase }}
                whileHover={shouldReduceMotion ? undefined : { y: -6, borderColor: "#1D4ED8" }}
                className="p-6 bg-[#F9F9FB] border border-[#E5E7EB] flex flex-col justify-between hover:border-[#1D4ED8] transition-all group cursor-default shadow-2xs hover:shadow-lg relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#1D4ED8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div>
                  <span className="font-mono text-xs text-[#1D4ED8] font-bold block mb-3 group-hover:tracking-wider transition-all">
                    NEED 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-extrabold uppercase tracking-tight text-[#12151A] mb-2 font-sans group-hover:text-[#1D4ED8] transition-colors">
                    {need.question}
                  </h3>
                  <p className="text-xs text-[#4B5563] leading-relaxed mb-4 font-light">
                    {need.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-[#12151A] group-hover:text-[#1D4ED8] transition-colors">
                    {need.treatment}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00A868] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#E5E7EB] font-mono text-xs">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`relative px-4 py-2 transition-colors cursor-pointer uppercase ${
                  isActive
                    ? "text-white font-bold"
                    : "text-[#4B5563] hover:text-[#12151A] bg-[#F9F9FB] border border-[#E5E7EB]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeTreatmentCategory"
                    className="absolute inset-0 bg-[#12151A] -z-10"
                    transition={snappySpring}
                  />
                )}
                <span className="relative z-10">{cat.label}</span>
              </button>
            );
          })}
        </div>

        <div className="border-t border-[#E5E7EB] divide-y divide-[#E5E7EB]">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                layout={!shouldReduceMotion}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="py-8 lg:py-10 hover:bg-[#F9F9FB] transition-all group px-2 sm:px-4 relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-1 font-mono text-xs font-bold text-slate-400 group-hover:text-[#00A868] transition-colors">
                    0{idx + 1}
                  </div>

                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-2 mb-1 font-mono text-[10px] text-slate-400 uppercase">
                      <span className="text-[#1D4ED8] font-bold">{item.id.toUpperCase()}</span>
                      <span>/</span>
                      <span>{item.category.toUpperCase()}</span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-extrabold uppercase tracking-tight text-[#12151A] mb-2 group-hover:text-[#1D4ED8] transition-colors font-sans">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#4B5563] leading-relaxed font-light font-sans mb-3">
                      {item.description}
                    </p>

                    <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#00A868] font-semibold bg-[#E6FBF2] px-2 py-0.5 border border-[#00D284]/20">
                      <Check className="w-3 h-3 text-[#00A868]" />
                      <span>{item.tag}</span>
                    </div>
                  </div>

                  <div className="lg:col-span-4 space-y-2 font-mono text-xs">
                    <div className="p-3 bg-[#F9F9FB] border border-[#E5E7EB] group-hover:bg-white group-hover:border-[#1D4ED8]/30 transition-all">
                      <span className="text-[9px] uppercase text-slate-400 block mb-1">
                        KETERANGAN KLINIS:
                      </span>
                      <span className="text-[#12151A] font-sans text-xs">
                        {item.recommendedFor}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <div className="p-2 border border-[#E5E7EB] bg-white group-hover:border-[#1D4ED8]/30 transition-colors">
                        <span className="text-[9px] text-slate-400 block uppercase">ESTIMASI WAKTU</span>
                        <span className="text-[#12151A]">{item.duration}</span>
                      </div>
                      <div className="p-2 border border-[#E5E7EB] bg-white group-hover:border-[#1D4ED8]/30 transition-colors">
                        <span className="text-[9px] text-slate-400 block uppercase">LEVEL NYERI</span>
                        <span className="text-[#00A868] font-bold">{item.painScale || "Nyaman"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end h-full">
                    <div className="text-left lg:text-right mb-4">
                      <span className="text-[10px] font-mono uppercase text-slate-400 block">
                        TARIF TINDAKAN
                      </span>
                      <span className="text-lg font-bold text-[#12151A] font-mono">
                        {item.priceStart}
                      </span>
                      <span className="text-[10px] text-slate-400 block">
                        Transparan di Awal
                      </span>
                    </div>

                    <motion.a
                      whileHover={{ scale: 1.04 }}
                      whileTap={{ scale: 0.96 }}
                      transition={snappySpring}
                      href={`#booking`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#12151A] text-[#12151A] hover:text-white border border-[#E5E7EB] hover:border-[#12151A] text-xs font-mono uppercase tracking-wider transition-colors shadow-2xs group/btn"
                    >
                      <span>Pilih Perawatan</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
