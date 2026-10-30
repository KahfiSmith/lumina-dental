"use client";

import { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import { SlidersHorizontal, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { editorialEase, snappySpring } from "@/motion/motionTokens";

export function Cases() {
  const { cases, contact } = clinicData;
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement>(null);
  const comparisonRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  const featuredCase = cases[1];
  const sideCases = cases.filter((c) => c.id !== featuredCase.id);

  const handlePointerMove = useCallback(
    (clientX: number) => {
      if (!comparisonRef.current) return;
      const rect = comparisonRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPos(percentage);
    },
    []
  );

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      handlePointerMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      handlePointerMove(e.clientX);
    }
  };

  return (
    <section
      ref={containerRef}
      id="hasil"
      className="scroll-mt-24 py-20 sm:py-28 bg-white text-[#12151A] border-b border-[#E5E7EB] relative overflow-hidden"
    >
      <span id="kasus" className="sr-only" aria-hidden="true" />

      <motion.div
        style={{ x: shouldReduceMotion ? 0 : watermarkX }}
        className="absolute -top-10 left-0 text-[110px] sm:text-[180px] font-black uppercase font-sans text-slate-100 whitespace-nowrap pointer-events-none select-none tracking-tighter leading-none -z-0"
        aria-hidden="true"
      >
        CLINICAL EVIDENCE ARCHIVE
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="border-b border-[#E5E7EB] pb-10 mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: editorialEase }}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A868] mb-3"
              >
                <span className="font-bold">SECTION 05</span>
                <span>/</span>
                <span>CLINICAL EVIDENCE</span>
              </motion.div>

              <KineticHeadline
                lines={["Real Smiles.", "Real Results."]}
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
              Dokumentasi klinis autentik sebelum dan sesudah perawatan. Tanpa manipulasi digital kecantikan, mengedepankan keselarasan fungsional dan estetika natural.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: editorialEase }}
          className="bg-[#F9F9FB] border border-[#E5E7EB] p-6 sm:p-10 mb-16 shadow-xs"
        >
          <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-[#E5E7EB] font-mono text-xs text-slate-500">
            <span className="font-bold text-[#1D4ED8] uppercase">
              FEATURED COMPARISON : {featuredCase.treatmentType}
            </span>
            <span>TIMELINE: {featuredCase.durationText}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <div
                ref={comparisonRef}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onMouseMove={handleMouseMove}
                onTouchMove={handleTouchMove}
                className="relative aspect-16/10 w-full overflow-hidden select-none bg-black border border-[#E5E7EB] cursor-ew-resize group"
              >
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop"
                  alt="Hasil sesudah perawatan teeth whitening Lumina Dental"
                  fill
                  className="object-cover pointer-events-none"
                />

                <div
                  className="absolute inset-0 overflow-hidden pointer-events-none"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop"
                    alt="Kondisi sebelum perawatan teeth whitening Lumina Dental"
                    fill
                    className="object-cover filter contrast-90 brightness-95 saturate-80"
                  />
                </div>

                <div
                  className="absolute top-0 bottom-0 w-[2px] bg-white shadow-xl pointer-events-none transition-opacity"
                  style={{ left: `${sliderPos}%` }}
                >
                  <motion.div
                    animate={
                      isDragging
                        ? { scale: 1.25 }
                        : { scale: [1, 1.1, 1] }
                    }
                    transition={
                      isDragging
                        ? snappySpring
                        : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                    }
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-[#12151A] text-white flex items-center justify-center text-xs font-mono border-2 border-white shadow-xl"
                  >
                    <SlidersHorizontal className="w-4 h-4 text-[#00D284]" />
                  </motion.div>
                </div>

                <div className="absolute bottom-4 left-4 bg-[#12151A]/90 px-3 py-1 font-mono text-[10px] text-white uppercase tracking-widest backdrop-blur-xs pointer-events-none">
                  BEFORE
                </div>

                <div className="absolute bottom-4 right-4 bg-[#00D284] px-3 py-1 font-mono text-[10px] text-[#12151A] uppercase tracking-widest font-bold pointer-events-none">
                  AFTER
                </div>
              </div>

              <div className="mt-4 flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="w-full accent-[#12151A] cursor-ew-resize h-1.5 bg-[#E5E7EB] rounded-lg"
                  aria-label="Geser untuk perbandingan sebelum dan sesudah"
                />
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="text-[10px] font-mono uppercase text-[#00A868] font-bold mb-1">
                  CASE ARCHIVE 01
                </div>

                <h3 className="text-xl font-bold uppercase tracking-tight text-[#12151A] mb-2 font-sans">
                  {featuredCase.title}
                </h3>

                <p className="text-xs text-[#4B5563] leading-relaxed mb-6 font-light">
                  {featuredCase.description}
                </p>

                <div className="space-y-3 font-mono text-xs p-4 bg-white border border-[#E5E7EB]">
                  <div>
                    <span className="text-[9px] uppercase text-slate-400 block font-bold">
                      PROSEDUR TINDAKAN:
                    </span>
                    <span className="text-[#12151A] font-bold">
                      {featuredCase.treatmentType}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase text-slate-400 block font-bold">
                      DOKTER PENANGGUNG JAWAB:
                    </span>
                    <span className="text-[#12151A]">
                      {featuredCase.doctorInCharge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[9px] uppercase text-slate-400 block font-bold">
                      HASIL OBSERVASI KLINIS:
                    </span>
                    <span className="text-[#00A868] font-bold">
                      {featuredCase.resultHighlight}
                    </span>
                  </div>
                </div>
              </div>

              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  `Halo Lumina Dental, saya tertarik dengan hasil kasus ${featuredCase.title} (${featuredCase.treatmentType}). Mau konsultasi awal.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#12151A] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-widest transition-colors font-mono shadow-sm group"
              >
                <span>Konsultasikan Kasus Serupa</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>
          </div>
        </motion.div>

        <div className="font-mono text-xs text-slate-400 uppercase tracking-widest mb-6 font-bold">
          DOKUMENTASI KASUS KLINIS LAINNYA
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sideCases.map((c, idx) => (
            <motion.div
              key={c.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: editorialEase }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              className="p-6 bg-[#F9F9FB] border border-[#E5E7EB] flex flex-col justify-between hover:border-[#1D4ED8] transition-all cursor-default shadow-2xs hover:shadow-lg group"
            >
              <div>
                <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-200 border border-[#E5E7EB] mb-4">
                  <Image
                    src={c.image}
                    alt={`Dokumentasi kasus ${c.title} Lumina Dental`}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-2 left-2 bg-[#12151A]/90 text-white font-mono text-[9px] px-2 py-0.5 uppercase tracking-wider backdrop-blur-xs">
                    {c.durationText}
                  </div>
                </div>

                <div className="text-[10px] font-mono text-[#1D4ED8] font-bold uppercase mb-1">
                  {c.treatmentType}
                </div>

                <h4 className="text-base font-bold uppercase tracking-tight text-[#12151A] mb-2 font-sans group-hover:text-[#1D4ED8] transition-colors">
                  {c.title}
                </h4>

                <p className="text-xs text-[#4B5563] leading-relaxed font-light mb-4 font-sans">
                  {c.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] text-[11px] font-mono flex items-center justify-between text-slate-500">
                <span>{c.doctorInCharge}</span>
                <span className="text-[#00A868] font-bold">VERIFIED</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
