"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { clinicData } from "@/data/dental";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto">
        <div
          className={`pointer-events-auto rounded-full border transition-all duration-300 flex items-center justify-between gap-3 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-md border-[#E5E7EB] shadow-md shadow-slate-900/5 py-2 px-3 sm:px-5"
              : "bg-white/90 backdrop-blur-sm border-[#E5E7EB]/80 shadow-xs py-2.5 px-3.5 sm:px-6"
          }`}
        >
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#12151A] text-[#00D284] flex items-center justify-center font-bold text-sm tracking-wider transition-transform group-hover:scale-105 shadow-xs">
              L
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-[#12151A] uppercase font-sans">
                Lumina
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono tracking-wider uppercase bg-[#E6FBF2] text-[#00A868] px-2.5 py-0.5 rounded-full font-semibold border border-[#00D284]/20">
                Studio
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 bg-[#F1F3F7] p-1 rounded-full border border-[#E5E7EB]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#4B5563] hover:text-[#12151A] hover:bg-white transition-all tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-2 shrink-0">
            <a
              href={`tel:${clinicData.contact.emergencyPhone}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-[#64748B] hover:text-[#12151A] hover:bg-[#F1F3F7] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#00D284]" />
              <span className="hidden xl:inline">{clinicData.contact.formattedEmergencyPhone}</span>
            </a>

            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-[#12151A] hover:bg-[#1D4ED8] text-white text-xs font-bold tracking-wider uppercase transition-all shadow-xs hover:shadow group"
            >
              <span>Book A Visit</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-[#12151A] hover:bg-[#F1F3F7] transition-colors shrink-0"
            aria-label="Toggle navigation"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-2 p-4 bg-white/95 backdrop-blur-xl border border-[#E5E7EB] rounded-3xl shadow-xl pointer-events-auto transition-all animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col space-y-1 font-mono text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-[#12151A] hover:bg-[#F1F3F7] uppercase font-bold tracking-wider transition-colors"
                >
                  <span>{link.label}</span>
                  <span className="text-[10px] text-[#00D284]">{link.num}</span>
                </a>
              ))}
            </nav>

            <div className="pt-3 mt-2 border-t border-[#E5E7EB] flex flex-col gap-2">
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-[#12151A] text-white font-bold text-xs uppercase tracking-wider shadow-xs"
              >
                <span>Book A Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
                  "Halo Lumina Dental Studio, saya ingin konsultasi mengenai jadwal dokter dan perawatan."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-[#E6FBF2] text-[#00A868] font-bold text-xs uppercase tracking-wider border border-[#00D284]/30"
              >
                <Phone className="w-3.5 h-3.5 text-[#00D284]" />
                <span>Chat WhatsApp Concierge</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
