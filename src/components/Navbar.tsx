"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { motion, AnimatePresence, useScroll, useSpring, useReducedMotion } from "motion/react";
import { clinicData } from "@/data/dental";
import { editorialEase, snappySpring } from "@/motion/motionTokens";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#kenyamanan", label: "Philosophy", num: "01" },
    { href: "#alur", label: "Experience", num: "02" },
    { href: "#layanan", label: "Smile Menu", num: "03" },
    { href: "#dokter", label: "Dentists", num: "04" },
    { href: "#hasil", label: "Results", num: "05" },
    { href: "#lokasi", label: "Studio", num: "06" },
  ];

  return (
    <>
      {!shouldReduceMotion && (
        <motion.div
          className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#00D284] via-[#1D4ED8] to-[#00D284] z-[60] origin-left pointer-events-none"
          style={{ scaleX }}
        />
      )}

      <motion.header
        initial={shouldReduceMotion ? false : { y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: editorialEase }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <div
            className={`pointer-events-auto rounded-full border transition-all duration-300 flex items-center justify-between gap-3 ${
              isScrolled
                ? "bg-white/95 backdrop-blur-md border-[#E5E7EB] shadow-md shadow-slate-900/5 py-2 px-3 sm:px-5"
                : "bg-white/90 backdrop-blur-sm border-[#E5E7EB]/80 shadow-xs py-2.5 px-3.5 sm:px-6"
            }`}
          >
            <Link href="/" className="flex items-center gap-2.5 group shrink-0">
              <motion.div
                whileHover={{ scale: 1.08, rotate: 3 }}
                whileTap={{ scale: 0.95 }}
                transition={snappySpring}
                className="w-8 h-8 rounded-full bg-[#12151A] text-[#00D284] flex items-center justify-center font-bold text-sm tracking-wider shadow-xs"
              >
                L
              </motion.div>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#12151A] uppercase font-sans">
                  Lumina
                </span>
                <span className="hidden sm:inline-block text-[10px] font-mono tracking-wider uppercase bg-[#E6FBF2] text-[#00A868] px-2.5 py-0.5 rounded-full font-semibold border border-[#00D284]/20">
                  Studio
                </span>
              </div>
            </Link>

            <nav
              className="hidden lg:flex items-center gap-1 bg-[#F1F3F7] p-1 rounded-full border border-[#E5E7EB] relative"
              onMouseLeave={() => setHoveredNav(null)}
            >
              {navLinks.map((link) => {
                const isHovered = hoveredNav === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onMouseEnter={() => setHoveredNav(link.href)}
                    className="relative px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#4B5563] hover:text-[#12151A] transition-colors tracking-wide z-10"
                  >
                    {isHovered && (
                      <motion.span
                        layoutId="navHoverPill"
                        className="absolute inset-0 bg-white rounded-full shadow-xs -z-10"
                        transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      />
                    )}
                    {link.label}
                  </a>
                );
              })}
            </nav>

            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`tel:${clinicData.contact.emergencyPhone}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-[#64748B] hover:text-[#12151A] hover:bg-[#F1F3F7] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#00D284]" />
                <span className="hidden xl:inline">{clinicData.contact.formattedEmergencyPhone}</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={snappySpring}
                href="#booking"
                className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#12151A] hover:bg-[#1D4ED8] text-white text-xs font-bold tracking-wider uppercase transition-colors shadow-xs group"
              >
                <span>Book A Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#00D284] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>
            </div>

            <motion.button
              whileTap={{ scale: 0.92 }}
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-[#12151A] hover:bg-[#F1F3F7] rounded-full transition-colors"
              aria-label={isMobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#12151A]/60 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: editorialEase }}
              className="absolute top-20 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl border border-[#E5E7EB] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB]">
                <div className="font-mono text-xs uppercase tracking-widest text-[#00A868] font-bold">
                  STUDIO DIRECTORY
                </div>
                <div className="font-mono text-[11px] text-slate-400">
                  SBY WEST
                </div>
              </div>

              <div className="flex flex-col gap-2 py-4">
                {navLinks.map((link, idx) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.3 }}
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[#F1F3F7] text-base font-extrabold uppercase text-[#12151A] tracking-tight transition-colors"
                  >
                    <span>{link.label}</span>
                    <span className="font-mono text-xs text-slate-400">{link.num}</span>
                  </motion.a>
                ))}
              </div>

              <div className="pt-4 border-t border-[#E5E7EB] flex flex-col gap-3">
                <a
                  href={`tel:${clinicData.contact.emergencyPhone}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-full border border-[#E5E7EB] text-xs font-mono font-bold text-[#12151A]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#00A868]" />
                  <span>{clinicData.contact.formattedEmergencyPhone}</span>
                </a>

                <a
                  href="#booking"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#12151A] hover:bg-[#1D4ED8] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <span>Book A Visit Now</span>
                  <ArrowUpRight className="w-4 h-4 text-[#00D284]" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
