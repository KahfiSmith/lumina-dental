"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { clinicData } from "@/data/dental";
import { Menu, X, Phone, Calendar } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ["layanan", "dokter", "sterilisasi", "hasil", "booking", "lokasi"];
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 180;
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on Escape key (R-32)
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
    { href: "#layanan", label: "Layanan Medis", id: "layanan" },
    { href: "#dokter", label: "Jadwal Dokter", id: "dokter" },
    { href: "#sterilisasi", label: "Standar Steril", id: "sterilisasi" },
    { href: "#hasil", label: "Kasus Senyum", id: "hasil" },
    { href: "#booking", label: "Janji Temu", id: "booking" },
    { href: "#lokasi", label: "Lokasi & Jam", id: "lokasi" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs py-3"
          : "bg-white/80 backdrop-blur-xs border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Clinical Brand */}
          <Link
            href="#"
            className="flex items-center gap-3 focus-visible:outline-2 focus-visible:outline-[#0E7490] rounded-md p-1"
            aria-label={`${clinicData.name} Beranda`}
          >
            <div className="w-10 h-10 rounded-xl bg-[#0E7490] flex items-center justify-center text-white shadow-xs">
              <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" stroke="currentColor">
                <path
                  d="M16 6c-4.5 0-7 2.5-7 6 0 3.5 1.5 8 2.5 11.5 1 3.5 2.5 3.5 3.5 1 1-2.5 1-2.5 1-2.5s0 0 1 2.5c1 2.5 2.5 2.5 3.5-1C21.5 20 23 15.5 23 12c0-3.5-2.5-6-7-6z"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-tight text-slate-900 leading-none">
                LUMINA
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-[#0E7490] mt-0.5">
                Dental Studio
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links with Scroll Spy */}
          <nav
            className="hidden lg:flex items-center space-x-7"
            aria-label="Navigasi Utama"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-2 relative min-h-[44px] flex items-center ${
                    isActive
                      ? "text-[#0E7490] font-bold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-[#0E7490] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Emergency Phone & Appointment CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href={`tel:${clinicData.contact.emergencyPhone}`}
              className="hidden xl:flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0E7490] px-3 py-2 rounded-lg hover:bg-slate-100 transition-colors min-h-[44px]"
            >
              <Phone className="w-3.5 h-3.5 text-[#0E7490]" aria-hidden="true" />
              <span>{clinicData.contact.formattedEmergencyPhone}</span>
            </a>

            <a
              href="#booking"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#0E7490] hover:bg-[#155E75] rounded-lg transition-colors shadow-xs min-h-[44px]"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Jadwalkan Janji Temu</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="#booking"
              className="sm:hidden inline-flex items-center px-3 py-2 text-xs font-semibold text-white bg-[#0E7490] rounded-md min-h-[44px]"
            >
              Janji Temu
            </a>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#0E7490]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-dental-menu"
              aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-dental-menu"
          className="fixed inset-0 top-[65px] bg-white z-40 lg:hidden flex flex-col justify-between px-6 py-6 overflow-y-auto border-t border-slate-200 animate-in fade-in duration-200"
        >
          <nav className="flex flex-col space-y-1" aria-label="Navigasi Mobile">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-semibold py-3.5 border-b border-slate-100 min-h-[48px] flex items-center justify-between ${
                    isActive ? "text-[#0E7490]" : "text-slate-800"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-slate-400">→</span>
                </a>
              );
            })}
          </nav>

          <div className="pt-6 space-y-3">
            <a
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#0E7490] hover:bg-[#155E75] rounded-xl transition-colors min-h-[48px]"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Jadwalkan Janji Temu</span>
            </a>

            <a
              href={`https://wa.me/${clinicData.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors min-h-[48px]"
            >
              <span>Konsultasi WhatsApp Resepsionis</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
