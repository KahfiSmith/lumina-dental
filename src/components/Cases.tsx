"use client";

import { useState } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import { Clock, MessageCircle, CheckCircle2, SlidersHorizontal } from "lucide-react";

export function Cases() {
  const { cases, contact } = clinicData;
  const [sliderPos, setSliderPos] = useState<number>(50);

  const featuredCase = cases[1]; // Whitening case

  return (
    <section id="hasil" className="scroll-mt-24 py-20 sm:py-28 bg-[#FAF8F5] text-[#1E242B] border-b border-[#E5DFD5]">
      {/* Anchor alias */}
      <span id="kasus" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-wider text-[#246A60] uppercase">
            Dokumentasi Perawatan
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1E242B]">
            Presisi klinis dan transformasi senyum sehat.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5E6773] leading-relaxed">
            Setiap perawatan direncanakan secara individual dengan mempertimbangkan integritas enamel gigi, profil wajah, dan fungsi kunyah alami jangka panjang.
          </p>
        </div>

        {/* Interactive Before & After Feature Comparison */}
        <div className="rounded-3xl bg-[#F2EFE9] border border-[#E5DFD5] p-6 sm:p-10 mb-16 shadow-xs">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Interactive Slider */}
            <div className="lg:col-span-7">
              <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden select-none bg-white border border-[#E5DFD5] shadow-xs">
                {/* Background image (Sesudah / After) */}
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop"
                  alt="Hasil sesudah perawatan teeth whitening Lumina Dental"
                  fill
                  className="object-cover"
                />

                {/* Foreground image (Sebelum / Before) with clip-path */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                  <Image
                    src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1200&auto=format&fit=crop"
                    alt="Kondisi sebelum perawatan teeth whitening Lumina Dental"
                    fill
                    className="object-cover filter contrast-90 brightness-95 saturate-80"
                  />
                </div>

                {/* Slider divider line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#246A60] text-white flex items-center justify-center shadow-md">
                    <SlidersHorizontal className="w-4 h-4" />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-[#1E242B] border border-[#E5DFD5] pointer-events-none">
                  Sebelum
                </div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-bold text-[#246A60] border border-[#BCD9D2] pointer-events-none">
                  Sesudah (1 Jam)
                </div>
              </div>

              {/* Slider control input for accessibility */}
              <div className="mt-4 flex items-center gap-3">
                <label htmlFor="comparison-range" className="text-xs text-[#5E6773] shrink-0 font-medium">
                  Geser untuk membandingkan:
                </label>
                <input
                  id="comparison-range"
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="w-full accent-[#246A60] cursor-ew-resize"
                  aria-label="Penggeser perbandingan sebelum dan sesudah perawatan"
                />
              </div>
            </div>

            {/* Case Highlight Details */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold text-[#246A60] uppercase tracking-wider">
                Studi Kasus Unggulan
              </span>
              <h3 className="text-2xl font-bold text-[#1E242B] leading-snug">
                {featuredCase.title}
              </h3>
              <p className="text-sm text-[#5E6773] leading-relaxed">
                {featuredCase.description}
              </p>

              <div className="space-y-2 text-xs text-[#1E242B] pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#246A60]" />
                  <span><strong>Hasil:</strong> {featuredCase.resultHighlight}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#246A60]" />
                  <span><strong>Durasi Tindakan:</strong> {featuredCase.durationText}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#E4EFEA] text-[#246A60] flex items-center justify-center font-bold text-[10px]">dr</span>
                  <span><strong>Dokter Penanggung Jawab:</strong> {featuredCase.doctorInCharge}</span>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Lumina Dental, saya melihat studi kasus ${featuredCase.title}. Saya ingin konsultasi apakah kondisi gigi saya cocok dengan perawatan ini?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#246A60] hover:bg-[#1B524A] text-white px-6 text-xs font-semibold transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Konsultasi Kasus Ini via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Other Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {cases.filter((c) => c.id !== featuredCase.id).map((c, index) => (
            <article
              key={c.id}
              className="p-6 rounded-3xl bg-white border border-[#E5DFD5] shadow-xs flex flex-col justify-between hover:border-[#246A60]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#EFEBE4]">
                  <span className="text-xs font-mono text-[#246A60] font-semibold">
                    Kasus 0{index + 1}
                  </span>
                  <span className="text-[11px] font-medium text-[#5E6773] bg-[#FAF8F5] px-2.5 py-0.5 rounded-full border border-[#E5DFD5]">
                    {c.treatmentType}
                  </span>
                </div>

                <div className="relative aspect-16/10 w-full rounded-2xl overflow-hidden bg-[#F2EFE9] border border-[#E5DFD5] my-4">
                  <Image
                    src={c.image}
                    alt={c.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[10px] px-2 py-0.5 rounded-md flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{c.durationText}</span>
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#1E242B]">
                  {c.title}
                </h3>
                <p className="mt-1.5 text-xs text-[#5E6773] leading-relaxed">
                  {c.description}
                </p>

                <div className="mt-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#EFEBE4] text-[11px] text-[#1E242B]">
                  <p className="font-medium text-[#246A60]">Hasil:</p>
                  <p className="text-[#5E6773] mt-0.5">{c.resultHighlight}</p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#EFEBE4]">
                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Lumina Dental, saya melihat kasus ${c.title}. Saya ingin konsultasi apakah kondisi gigi saya dapat dirawat dengan cara serupa?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex h-9 items-center justify-center gap-1.5 rounded-xl bg-[#F2EFE9] hover:bg-[#246A60] text-[#1E242B] hover:text-white text-xs font-semibold transition-all"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Tanya Perawatan Ini</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Privacy Note */}
        <p className="mt-8 text-center text-xs text-[#5E6773]">
          Seluruh dokumentasi klinis dipublikasikan atas persetujuan pasien untuk tujuan edukasi dan transparansi medis.
        </p>
      </div>
    </section>
  );
}
