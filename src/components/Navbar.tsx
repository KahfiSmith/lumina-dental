"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, CalendarCheck } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
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
    { href: "#kenyamanan", label: "Kenyamanan" },
    { href: "#alur", label: "Alur Kunjungan" },
    { href: "#layanan", label: "Perawatan" },
    { href: "#dokter", label: "Dokter" },
    { href: "#hasil", label: "Hasil Kasus" },
    { href: "#ulasan", label: "Ulasan" },
    { href: "#lokasi", label: "Lokasi" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md border-[#E5DFD5] shadow-xs py-3"
          : "bg-[#FAF8F5]/90 backdrop-blur-sm border-[#E5DFD5]/80 py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo Minimalist */}
          <Link
            href="#"
            className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-[#246A60] rounded-lg"
          >
            <div className="w-8 h-8 rounded-xl bg-[#246A60] text-white flex items-center justify-center font-bold text-sm tracking-wider">
              L
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-[#1E242B] group-hover:text-[#246A60] transition-colors">
                Lumina Dental
              </span>
              <span className="text-[10px] text-[#5E6773] tracking-wide font-normal -mt-0.5">
                Surabaya Barat
              </span>
            </div>
          </Link>

          {/* Navigasi Desktop Minimalist */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium text-[#5E6773] transition-colors hover:text-[#246A60] focus-visible:outline-2 focus-visible:outline-[#246A60] rounded-sm py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Tombol Aksi */}
          <div className="hidden sm:flex items-center">
            <a
              href="#booking"
              className="inline-flex h-9 sm:h-10 items-center justify-center gap-2 rounded-full bg-[#246A60] hover:bg-[#1B524A] px-5 text-xs font-semibold text-white transition-all shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#246A60]"
            >
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Reservasi Jadwal</span>
            </a>
          </div>

          {/* Tombol Hamburger Mobile */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl text-[#1E242B] hover:bg-[#F2EFE9] border border-transparent hover:border-[#E5DFD5] transition-colors lg:hidden focus-visible:outline-2 focus-visible:outline-[#246A60]"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Menu Dropdown Mobile Minimalist */}
      {isMobileMenuOpen && (
        <div className="border-t border-[#E5DFD5] bg-[#FAF8F5] px-6 py-6 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm font-medium text-[#5E6773] hover:text-[#246A60] py-2.5 px-3 rounded-lg hover:bg-[#F2EFE9] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mt-5 pt-5 border-t border-[#E5DFD5]">
            <a
              href="#booking"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#246A60] text-xs font-semibold text-white shadow-xs"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Reservasi Jadwal Konsultasi</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
