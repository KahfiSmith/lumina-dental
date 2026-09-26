"use client";

import { useState } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import {
  Clock,
  MessageCircle,
  Sparkles,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export function Treatments() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Layanan" },
    { id: "umum", label: "Scaling & Rutin" },
    { id: "estetika", label: "Whitening & Veneer" },
    { id: "ortodonti", label: "Behel & Aligners" },
    { id: "bedah", label: "Implan Gigi" },
  ];

  const filtered =
    activeCategory === "all"
      ? clinicData.treatments
      : clinicData.treatments.filter((t) => t.category === activeCategory);

  return (
    <section id="layanan" className="py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Clean Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0E7490] block mb-2">
            Perawatan Gigi Komprehensif
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Layanan Spesialis Lumina Dental
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Biaya transparan tanpa biaya tersembunyi, pengerjaan nyaman, dan ditangani oleh dokter spesialis.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all min-h-[44px] cursor-pointer ${
                  isActive
                    ? "bg-[#0E7490] text-white shadow-xs"
                    : "bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200 border border-slate-200/80"
                }`}
                aria-pressed={isActive}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Visual-First Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0E7490]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo with Overlay Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-white/95 text-[#0E7490] shadow-2xs flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#0E7490]" aria-hidden="true" />
                      <span>{item.tag}</span>
                    </span>
                  </div>

                  {item.painScale && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-slate-900/80 backdrop-blur-xs text-[10px] font-semibold text-emerald-300">
                      {item.painScale}
                    </div>
                  )}
                </div>

                {/* Details */}
                <div className="p-5 space-y-2.5">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 group-hover:text-[#0E7490] transition-colors leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3 pt-1 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                      <span>{item.duration}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>{item.technologyBadge}</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Price & Action Row */}
              <div className="p-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-3 bg-slate-50/50">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Biaya Mulai
                  </span>
                  <span className="font-extrabold text-sm sm:text-base text-slate-900">
                    {item.priceStart}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <a
                    href="#booking"
                    className="inline-flex items-center justify-center gap-1 px-3 py-2 rounded-lg bg-[#0E7490] hover:bg-[#155E75] text-white text-xs font-bold transition-colors min-h-[44px]"
                  >
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Jadwal</span>
                  </a>

                  <a
                    href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
                      `Halo Lumina Dental, saya ingin tanya estimasi jadwal dan rincian untuk perawatan ${item.name}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-2.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition-colors min-h-[44px] min-w-[44px]"
                    aria-label={`Tanya ${item.name} via WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
