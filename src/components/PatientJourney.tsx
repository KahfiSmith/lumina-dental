"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useGSAP } from "@gsap/react";
import { gsap, registerGSAP } from "@/motion/gsapSetup";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { editorialEase } from "@/motion/motionTokens";

export function PatientJourney() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], ["5%", "-15%"]);

  const steps = [
    {
      num: "01",
      title: "ARRIVE",
      label: "Studio Welcome",
      desc: "Disambut di lobi kontemporer yang tenang dengan alunan musik lembut, tanpa deru mesin bor yang bising.",
    },
    {
      num: "02",
      title: "CHECK",
      label: "3D Digital Scan",
      desc: "Pemindaian optik intraoral tanpa adonan cetak mual. Kondisi gigi langsung divisualisasikan di monitor di depan Anda.",
    },
    {
      num: "03",
      title: "TALK",
      label: "Clear Discussion",
      desc: "Diskusi santai dan transparan dengan dokter spesialis mengenai opsi tindakan, durasi, dan biaya tanpa tekanan.",
    },
    {
      num: "04",
      title: "TREAT",
      label: "Gentle Hands",
      desc: "Perawatan dengan anestesi lembut dan pendekatan minim nyeri, didampingi kacamata pelindung dan jeda saat Anda butuh.",
    },
    {
      num: "05",
      title: "SMILE",
      label: "Walk Out Confident",
      desc: "Selesai perawatan dengan instruksi pemulihan yang jelas serta kemudahan follow-up langsung via WhatsApp.",
    },
  ];

  useGSAP(
    () => {
      if (shouldReduceMotion) return;
      registerGSAP();

      const cards = cardsRef.current?.children;
      if (!cards || cards.length === 0) return;

      if (lineProgressRef.current) {
        gsap.fromTo(
          lineProgressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 75%",
              end: "bottom 80%",
              scrub: 0.5,
            },
          }
        );
      }

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 78%",
            toggleActions: "play none none none",
          },
        }
      );
    },
    { scope: containerRef, dependencies: [shouldReduceMotion] }
  );

  return (
    <section
      ref={containerRef}
      id="alur"
      className="scroll-mt-24 py-20 sm:py-28 bg-[#F1F3F7] text-[#12151A] border-b border-[#E5E7EB] relative overflow-hidden"
    >
      <motion.div
        style={{ x: shouldReduceMotion ? 0 : watermarkX }}
        className="absolute -top-10 left-0 text-[110px] sm:text-[180px] font-black uppercase font-sans text-slate-200/50 whitespace-nowrap pointer-events-none select-none tracking-tighter leading-none -z-0"
        aria-hidden="true"
      >
        JOURNEY 01 TO 05 PROTOCOL
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
                <span className="font-bold">SECTION 02</span>
                <span>/</span>
                <span>THE DENTAL EXPERIENCE</span>
              </motion.div>

              <KineticHeadline
                lines={["What Happens", "During Your Visit."]}
                highlightLineIndex={1}
                highlightClassName="text-[#12151A]"
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight text-[#12151A] font-sans"
              />
            </div>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: editorialEase }}
              className="max-w-md text-sm sm:text-base text-[#4B5563] leading-relaxed"
            >
              Lima tahapan kunjungan yang dirancang runtut, transparan, dan mengikis kecemasan Anda sejak detik pertama melangkah masuk studio.
            </motion.p>
          </div>
        </div>

        <div className="relative mb-6 hidden lg:block">
          <div className="h-[2px] w-full bg-[#E5E7EB]" />
          <div
            ref={lineProgressRef}
            className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#00D284] via-[#1D4ED8] to-[#00D284] origin-left shadow-[0_0_12px_rgba(0,210,132,0.6)]"
            style={{ transform: "scaleX(0)" }}
          />
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {steps.map((item, idx) => (
            <motion.div
              key={item.num}
              whileHover={shouldReduceMotion ? undefined : { y: -8, borderColor: "#1D4ED8" }}
              transition={{ duration: 0.25, ease: editorialEase }}
              className="p-6 bg-white border border-[#E5E7EB] flex flex-col justify-between hover:border-[#1D4ED8] transition-all group relative shadow-xs hover:shadow-xl cursor-default overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#1D4ED8] transition-colors" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6 font-mono">
                  <span className="text-xs font-bold text-[#00D284] group-hover:text-[#1D4ED8] transition-colors">
                    PHASE {item.num}
                  </span>
                  <span className="text-[10px] text-slate-400">
                    0{idx + 1}/05
                  </span>
                </div>

                <div className="text-[10px] font-mono tracking-widest uppercase text-slate-400 mb-1">
                  {item.label}
                </div>

                <h3 className="text-2xl font-extrabold uppercase tracking-tight text-[#12151A] mb-3 font-sans group-hover:text-[#1D4ED8] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-[#4B5563] leading-relaxed font-light font-sans">
                  {item.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>STAGE COMPLETE</span>
                <span className="text-[#00A868] font-bold group-hover:tracking-wider transition-all">
                  READY
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
