"use client";

import { useState } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import { Sparkles, CalendarCheck, Clock, CheckCircle2 } from "lucide-react";

export function Treatments() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Perawatan" },
    { id: "umum", label: "Scaling & Rutin" },
    { id: "estetika", label: "Whitening & Veneer" },
    { id: "ortodonti", label: "Behel & Aligners" },
    { id: "bedah", label: "Implan Titanium" },
  ];

  const filtered =
    activeCategory === "all"
      ? clinicData.treatments
      : clinicData.treatments.filter((t) => t.category === activeCategory);

  return (
    <section id="layanan" className="scroll-mt-24 py-20 sm:py-28 bg-[#FAF8F5] text-[#1E242B] border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-[#E5DFD5]">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-[#246A60] uppercase">
              Katalog Perawatan
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1E242B]">
              Layanan menyeluruh untuk kesehatan dan senyum alami Anda.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5E6773] leading-relaxed">
              Setiap tindakan mengedepankan pendekatan invasif minimal untuk melestarikan jaringan gigi asli Anda dengan kenyamanan maksimal.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 text-xs font-medium">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-[#246A60] text-white font-semibold shadow-xs"
                    : "bg-[#F2EFE9] text-[#5E6773] hover:text-[#1E242B] hover:bg-[#EFEBE4]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Treatment Spotlight: Smile Makeover & Aligners */}
        <div className="mt-12 rounded-3xl bg-[#F2EFE9] border border-[#E5DFD5] p-6 sm:p-10 lg:p-12 mb-16 shadow-xs">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden bg-white border border-[#E5DFD5] lg:col-span-6">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
                alt="Simulasi Digital Smile Design dan Clear Aligners di Lumina Dental"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-semibold text-[#246A60] border border-[#BCD9D2] flex items-center gap-1.5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#246A60]" />
                <span>Perawatan Unggulan</span>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-5">
              <div>
                <span className="text-xs font-semibold text-[#246A60] uppercase tracking-wider">
                  Estetika Senyum Presisi
                </span>
                <h3 className="mt-1 text-2xl sm:text-3xl font-bold text-[#1E242B] leading-snug">
                  Digital Smile Makeover &amp; Clear Aligners 3D
                </h3>
                <p className="mt-3 text-sm text-[#5E6773] leading-relaxed">
                  Kami menggabungkan pemindaian optik 3D dengan analisis harmoni wajah untuk merancang bentuk, lengkungan, dan senyum proporsional tanpa rasa cemas dan tanpa kawat logam yang mencolok.
                </p>

                <div className="mt-5 space-y-2 text-xs sm:text-sm text-[#1E242B]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#246A60] shrink-0 mt-0.5" />
                    <span>Pemindaian intraoral 3D instan tanpa cetak adonan mual</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#246A60] shrink-0 mt-0.5" />
                    <span>Simulasi visual hasil akhir senyum sebelum perawatan dimulai</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#246A60] shrink-0 mt-0.5" />
                    <span>Ditangani langsung oleh dokter gigi spesialis ortodonti</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#246A60] hover:bg-[#1B524A] px-6 text-xs font-semibold text-white transition-all shadow-xs"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Konsultasi Smile Makeover</span>
                </a>
                <span className="text-xs text-[#5E6773]">
                  Mulai Rp 12.000.000 • Tersedia cicilan 0%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment Rows (Airy, Structured, Readable) */}
        <div className="space-y-6">
          {filtered.map((t, index) => (
            <article
              key={t.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E5DFD5] shadow-xs hover:border-[#246A60]/40 transition-all grid lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Photo */}
              <div className="relative aspect-16/10 lg:aspect-4/3 w-full rounded-2xl overflow-hidden bg-[#F2EFE9] border border-[#E5DFD5] lg:col-span-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 30vw"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-0.5 rounded-full text-[10px] font-semibold text-[#246A60] border border-[#BCD9D2]">
                  {t.tag}
                </div>
              </div>

              {/* Information */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-2 text-xs text-[#5E6773]">
                  <span className="font-mono text-[#246A60] font-semibold">
                    0{index + 1}
                  </span>
                  <span>&bull;</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#5E6773]" />
                    {t.duration}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1E242B]">
                  {t.name}
                </h3>

                <p className="text-xs sm:text-sm text-[#5E6773] leading-relaxed">
                  {t.description}
                </p>

                <div className="pt-2 text-xs text-[#5E6773] space-y-1">
                  <p>
                    <strong className="text-[#1E242B] font-medium">Cocok untuk:</strong> {t.recommendedFor}
                  </p>
                  {t.technologyBadge && (
                    <p>
                      <strong className="text-[#1E242B] font-medium">Teknologi:</strong> {t.technologyBadge}
                    </p>
                  )}
                  {t.painScale && (
                    <p>
                      <strong className="text-[#1E242B] font-medium">Kenyamanan:</strong> {t.painScale} (Skor kepuasan: {t.comfortScore})
                    </p>
                  )}
                </div>
              </div>

              {/* Price & CTA */}
              <div className="lg:col-span-3 flex lg:flex-col items-center lg:items-end justify-between gap-4 pt-4 lg:pt-0 border-t lg:border-t-0 border-[#EFEBE4]">
                <div className="lg:text-right">
                  <span className="block text-[11px] text-[#5E6773]">
                    Estimasi Biaya
                  </span>
                  <span className="text-base sm:text-lg font-bold text-[#1E242B]">
                    {t.priceStart}
                  </span>
                </div>

                <a
                  href="#booking"
                  className="inline-flex h-10 items-center justify-center gap-1.5 rounded-full border border-[#246A60] text-[#246A60] hover:bg-[#246A60] hover:text-white px-5 text-xs font-semibold transition-all"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Pilih Jadwal</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
