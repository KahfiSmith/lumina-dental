"use client";

import { useRef } from "react";
import { clinicData } from "@/data/dental";
import { CheckCircle2, Star, Quote } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { Counter } from "@/components/motion/Counter";
import { editorialEase } from "@/motion/motionTokens";

export function Testimonials() {
  const { reviews } = clinicData;
  const primaryReview = reviews[1];
  const sideReviews = reviews.filter((r) => r.id !== primaryReview.id);
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      ref={containerRef}
      id="ulasan"
      className="scroll-mt-24 py-20 sm:py-28 bg-[#F1F3F7] text-[#12151A] border-b border-[#E5E7EB] relative overflow-hidden"
    >
      <motion.div
        style={{ x: shouldReduceMotion ? 0 : watermarkX }}
        className="absolute -top-10 left-0 text-[110px] sm:text-[180px] font-black uppercase font-sans text-slate-200/50 whitespace-nowrap pointer-events-none select-none tracking-tighter leading-none -z-0"
        aria-hidden="true"
      >
        VERIFIED REVIEWS 4.9 STARS
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
                <span className="font-bold">SECTION 06</span>
                <span>/</span>
                <span>COMMUNITY VOICES</span>
              </motion.div>

              <KineticHeadline
                lines={["Real People.", "Real Smiles."]}
                highlightLineIndex={1}
                highlightClassName="text-[#1D4ED8]"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#12151A] font-sans"
              />
            </div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: editorialEase }}
              className="flex items-center gap-4 bg-white p-4 border border-[#E5E7EB] font-mono text-xs shadow-xs"
            >
              <div className="text-3xl font-extrabold text-[#12151A] flex items-center gap-1">
                <Counter value={4.9} decimals={1} />
                <Star className="w-5 h-5 fill-[#FF5A36] text-[#FF5A36]" />
              </div>
              <div className="border-l border-[#E5E7EB] pl-3 text-slate-500">
                <div>5.0 GOOGLE RATING</div>
                <div className="text-[10px] text-[#00A868] font-bold">VERIFIED PATIENTS</div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: editorialEase }}
          className="bg-white border-2 border-[#12151A] p-8 sm:p-14 lg:p-16 mb-12 relative overflow-hidden shadow-lg"
        >
          <Quote
            className="w-36 h-36 text-slate-100 absolute -top-4 -right-4 pointer-events-none select-none -z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-4xl space-y-8">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00A868] uppercase bg-[#E6FBF2] px-3 py-1">
              <span>{primaryReview.treatment}</span>
              <span>:</span>
              <span>PATIENT SPOTLIGHT</span>
            </div>

            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight text-[#12151A] leading-[1.15] font-sans">
              &ldquo;{primaryReview.comment}&rdquo;
            </blockquote>

            <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
              <div>
                <div className="font-bold text-base text-[#12151A] font-sans">
                  {primaryReview.author}
                </div>
                <div className="text-slate-400 text-[11px]">
                  {primaryReview.verifiedStatus} : {primaryReview.date}
                </div>
              </div>

              <div className="flex items-center gap-1 text-[#00A868]">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-bold">VERIFIED GOOGLE REVIEW</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sideReviews.map((rev, idx) => (
            <motion.div
              key={rev.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: editorialEase }}
              whileHover={shouldReduceMotion ? undefined : { y: -6, borderColor: "#1D4ED8" }}
              className="p-6 bg-white border border-[#E5E7EB] flex flex-col justify-between hover:border-[#1D4ED8] transition-all cursor-default shadow-2xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-3">
                  <span className="text-[#1D4ED8] font-bold">{rev.treatment}</span>
                  <span>{rev.date}</span>
                </div>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-6 font-light">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-[#12151A]">{rev.author}</span>
                <span className="text-slate-400 text-[11px]">{rev.verifiedStatus}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
