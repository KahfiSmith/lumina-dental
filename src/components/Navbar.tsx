"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { clinicData } from "@/data/dental";
import { Menu, X, Phone } from "lucide-react";

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
    { href: "#layanan", label: "Perawatan" },
    { href: "#dokter", label: "Dokter Spesialis" },
    { href: "#sterilisasi", label: "Standar Keamanan" },
    { href: "#hasil", label: "Kasus Senyum" },
    { href: "#booking", label: "Reservasi" },
    { href: "#lokasi", label: "Lokasi & Jam" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FBFBFA]/95 backdrop-blur-md border-b border-[#E5E0D8] shadow-xs py-3"
          : "bg-[#FBFBFA]/80 backdrop-blur-xs border-b border-[#E5E0D8]/60 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          <Link
            href="#"
            className="flex flex-col tracking-tight group"
          >
            <span className="font-[family-name:var(--font-display)] text-2xl font-bold tracking-[0.1em] text-[#1C1D1F] uppercase">
              LUMINA <span className="font-sans text-sm font-semibold tracking-[0.2em] text-[#8F6E4D]">STUDIO</span>
            </span>
            <span className="text-[10px] font-medium tracking-[0.25em] text-[#6E7178] uppercase">
              Modern Dental Atelier &bull; Surabaya
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-[0.15em] text-[#6E7178] uppercase transition-colors hover:text-[#1C1D1F]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden sm:flex items-center gap-5">
            <a
              href={`tel:${clinicData.contact.emergencyPhone}`}
              className="flex items-center gap-2 text-xs font-mono tracking-wider text-[#6E7178] hover:text-[#1C1D1F] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#8F6E4D]" />
              <span>{clinicData.contact.formattedEmergencyPhone}</span>
            </a>

            <a
              href="#booking"
              className="inline-flex h-10 items-center justify-center border border-[#8F6E4D] bg-[#8F6E4D] px-5 text-xs font-bold tracking-[0.15em] text-white uppercase transition-all duration-300 hover:bg-transparent hover:text-[#8F6E4D]"
            >
              Janji Temu &rarr;
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg border border-[#E5E0D8] text-[#1C1D1F] hover:bg-[#EFECE6] lg:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label="Buka menu navigasi"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-b border-[#E5E0D8] bg-[#FBFBFA] px-6 pt-4 pb-8 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-semibold tracking-[0.15em] text-[#6E7178] uppercase hover:text-[#1C1D1F]"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 flex flex-col gap-4 border-t border-[#E5E0D8] pt-6">
              <a
                href={`tel:${clinicData.contact.emergencyPhone}`}
                className="text-xs font-mono text-[#6E7178]"
              >
                {clinicData.contact.formattedEmergencyPhone}
              </a>
              <a
                href="#booking"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex h-11 items-center justify-center border border-[#8F6E4D] bg-[#8F6E4D] text-xs font-bold tracking-[0.2em] text-white uppercase hover:bg-transparent hover:text-[#8F6E4D]"
              >
                Janji Temu &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
