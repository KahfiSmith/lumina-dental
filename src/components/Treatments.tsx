"use client";

import { useState } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import { ArrowUpRight, Sparkles } from "lucide-react";

export function Treatments() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Perawatan" },
    { id: "umum", label: "Scaling & Rutin" },
    { id: "estetika", label: "Whitening & Veneer" },
    { id: "ortodonti", label: "Behel & Aligners" },
    { id: "bedah", label: "Implan Presisi" },
  ];

  const filtered =
    activeCategory === "all"
      ? clinicData.treatments
      : clinicData.treatments.filter((t) => t.category === activeCategory);

  return (
    <section id="layanan" className="scroll-mt-24 py-24 sm:py-32 bg-[#FBFBFA] text-[#1C1D1F] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E5E0D8] pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-[#8F6E4D] uppercase">
              Katalog Perawatan
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#1C1D1F] sm:text-4xl lg:text-5xl uppercase">
              Layanan &amp; Estetika Senyum
            </h2>
          </div>

          <div className="flex flex-wrap gap-6 text-xs font-mono tracking-[0.15em] uppercase">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`pb-2 transition-all ${
                  activeCategory === cat.id
                    ? "border-b-2 border-[#8F6E4D] text-[#1C1D1F] font-bold"
                    : "text-[#6E7178] hover:text-[#1C1D1F]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 border border-[#E5E0D8] bg-[#F5F3EF] p-8 sm:p-12 mb-20">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="relative aspect-16/10 w-full overflow-hidden border border-[#E5E0D8] bg-[#EFECE6] lg:col-span-7">
              <Image
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1200&auto=format&fit=crop"
                alt="Digital Smile Design Lumina Dental Studio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute top-4 left-4 border border-[#E5E0D8] bg-[#FBFBFA]/90 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-[#8F6E4D] uppercase backdrop-blur-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-[#8F6E4D]" />
                <span>Featured Positioning</span>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="font-mono text-xs font-semibold tracking-[0.25em] text-[#8F6E4D] uppercase">
                Fokus Utama Studio
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-[#1C1D1F] uppercase leading-tight">
                Digital Smile Design &amp; Clear Aligners 3D
              </h3>
              <p className="text-xs sm:text-sm text-[#6E7178] font-light leading-relaxed">
                Kami menggabungkan pemindaian intraoral 3D dengan analisis proporsi wajah untuk merancang bentuk, lengkungan, dan warna gigi yang paling natural bagi kepribadian Anda sebelum perawatan dimulai.
              </p>
              <div className="pt-2 font-mono text-xs text-[#8F6E4D] space-y-1.5">
                <p>&bull; Simulasi hasil sebelum tindakan dimulai</p>
                <p>&bull; Aligner transparan tanpa behel logam</p>
                <p>&bull; Ditangani langsung dokter gigi spesialis ortodonti</p>
              </div>
              <div className="pt-4">
                <a
                  href="#booking"
                  className="inline-flex h-11 items-center justify-center border border-[#8F6E4D] bg-[#8F6E4D] px-6 text-xs font-bold tracking-[0.15em] text-white uppercase transition-all duration-300 hover:bg-transparent hover:text-[#8F6E4D]"
                >
                  Konsultasi Smile Design &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-20">
          {filtered.map((t, index) => (
            <article
              key={t.id}
              className="grid items-center gap-8 lg:grid-cols-12 lg:gap-16 border-b border-[#E5E0D8] pb-16 last:border-b-0"
            >
              <div
                className={`relative aspect-16/10 w-full overflow-hidden border border-[#E5E0D8] bg-[#EFECE6] lg:col-span-6 group ${
                  index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 border border-[#E5E0D8] bg-[#FBFBFA]/90 px-3 py-1 font-mono text-[10px] tracking-[0.2em] text-[#8F6E4D] uppercase backdrop-blur-md">
                  {t.tag}
                </div>
              </div>

              <div
                className={`flex flex-col justify-between lg:col-span-6 ${
                  index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#E5E0D8] pb-3">
                    <span className="font-mono text-sm font-bold text-[#8F6E4D]">
                      PERAWATAN 0{index + 1}
                    </span>
                    <span className="font-mono text-xs text-[#6E7178]">
                      Durasi: {t.duration}
                    </span>
                  </div>

                  <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-bold tracking-tight text-[#1C1D1F] uppercase sm:text-3xl">
                    {t.name}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-[#6E7178] sm:text-sm font-light">
                    {t.description}
                  </p>

                  <div className="mt-6 border-t border-[#E5E0D8] pt-5">
                    <span className="block text-[10px] font-mono tracking-[0.2em] text-[#6E7178] uppercase">
                      Indikasi &amp; Teknologi Tindakan
                    </span>
                    <ul className="mt-2.5 space-y-1.5 text-xs text-[#6E7178]">
                      <li className="flex items-start gap-2.5">
                        <span className="text-[#8F6E4D] font-mono">&bull;</span>
                        <span><strong className="text-[#1C1D1F] font-medium">Indikasi:</strong> {t.recommendedFor}</span>
                      </li>
                      {t.technologyBadge && (
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#8F6E4D] font-mono">&bull;</span>
                          <span><strong className="text-[#1C1D1F] font-medium">Teknologi:</strong> {t.technologyBadge}</span>
                        </li>
                      )}
                      {t.painScale && (
                        <li className="flex items-start gap-2.5">
                          <span className="text-[#8F6E4D] font-mono">&bull;</span>
                          <span><strong className="text-[#1C1D1F] font-medium">Tingkat Kenyamanan:</strong> {t.painScale} (Skor: {t.comfortScore})</span>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-[#E5E0D8] pt-6">
                  <div>
                    <span className="block text-[10px] font-mono tracking-[0.2em] text-[#6E7178] uppercase">
                      Estimasi Biaya
                    </span>
                    <span className="font-mono text-lg font-bold text-[#1C1D1F]">
                      {t.priceStart}
                    </span>
                  </div>

                  <a
                    href="#booking"
                    className="inline-flex items-center gap-2 border border-[#8F6E4D] px-4 py-2 text-xs font-semibold tracking-[0.15em] text-[#8F6E4D] uppercase transition-all duration-300 hover:bg-[#8F6E4D] hover:text-white"
                  >
                    <span>Reservasi Tindakan</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
