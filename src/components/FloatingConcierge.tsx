"use client";

import { useState, useEffect } from "react";
import { MessageCircle, ArrowUpRight, Calendar } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { clinicData } from "@/data/dental";
import { snappySpring } from "@/motion/motionTokens";

export function FloatingConcierge() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const { contact } = clinicData;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nearBottom = docHeight - scrollPosition < 350;
      setIsVisible(scrollPosition > 450 && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const waUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
    "Halo Resepsionis Lumina Dental Studio, saya ingin menanyakan jadwal konsultasi dokter gigi."
  )}`;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Aksi Cepat Concierge"
          initial={shouldReduceMotion ? { opacity: 0 } : { y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { y: 30, opacity: 0, scale: 0.95 }}
          transition={snappySpring}
          className="fixed bottom-5 right-4 sm:right-8 z-40 flex items-center gap-2 p-1.5 sm:p-2 bg-[#12151A]/95 backdrop-blur-md border border-slate-700/80 rounded-full shadow-2xl text-white font-mono text-xs"
        >
          <div className="hidden md:flex items-center gap-2 pl-3 pr-2 py-1 text-[11px] text-slate-300 border-r border-slate-700">
            <span className="w-2 h-2 rounded-full bg-[#00D284] animate-pulse" />
            <span className="uppercase tracking-wider font-semibold">Concierge Online</span>
          </div>

          <motion.a
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            transition={snappySpring}
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 bg-[#00D284] hover:bg-[#00A868] text-[#12151A] rounded-full font-bold uppercase tracking-wider text-[11px] transition-colors shadow-xs"
            aria-label="Hubungi WhatsApp Concierge Resmi"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
          </motion.a>

          <motion.a
            whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            transition={snappySpring}
            href="#booking"
            className="flex items-center gap-1.5 px-3.5 py-2 bg-white/10 hover:bg-[#1D4ED8] hover:text-white text-white rounded-full font-bold uppercase tracking-wider text-[11px] transition-colors border border-white/15"
          >
            <Calendar className="w-3.5 h-3.5 text-[#00D284]" />
            <span>Book Visit</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </motion.a>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
