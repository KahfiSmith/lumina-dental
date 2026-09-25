"use client";

import { useState } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import {
  Clock,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
} from "lucide-react";

export function Treatments() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>(
    clinicData.treatments[0].id
  );

  const categories = [
    { id: "all", label: "Semua Tindakan" },
    { id: "umum", label: "Scaling & Perawatan Dasar" },
    { id: "estetika", label: "Whitening & Veneer" },
    { id: "ortodonti", label: "Behel & Aligners" },
    { id: "bedah", label: "Implan & Bedah Mulut" },
  ];

  const filtered =
    activeCategory === "all"
      ? clinicData.treatments
      : clinicData.treatments.filter((t) => t.category === activeCategory);

  // If the active filter hides the selected treatment, reset to first filtered item
  const activeTreatment =
    filtered.find((t) => t.id === selectedTreatmentId) || filtered[0] || clinicData.treatments[0];

  return (
    <section id="layanan" className="py-20 sm:py-28 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 text-[#0E7490] border border-cyan-100 mb-3">
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Katalog Tindakan Medis Terpadu</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Layanan Gigi Spesialis &amp; Presisi
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Eksplorasi seluruh prosedur medis dengan transparansi biaya, estimasi durasi, dan tingkat kenyamanan tanpa rasa sakit (*painless dentistry*).
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
                onClick={() => {
                  setActiveCategory(cat.id);
                  const firstOfCat =
                    cat.id === "all"
                      ? clinicData.treatments[0]
                      : clinicData.treatments.find((t) => t.category === cat.id);
                  if (firstOfCat) setSelectedTreatmentId(firstOfCat.id);
                }}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all min-h-[44px] cursor-pointer ${
                  isActive
                    ? "bg-[#0E7490] text-white shadow-xs"
                    : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                }`}
                aria-pressed={isActive}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Split Console Layout: Left List vs Right Detailed Medical Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Treatment Selector List */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between text-xs text-slate-500 font-medium px-1 mb-1">
              <span>Daftar Prosedur ({filtered.length})</span>
              <span>Klik untuk melihat protokol &amp; rincian</span>
            </div>

            <div className="space-y-3">
              {filtered.map((item) => {
                const isSelected = item.id === activeTreatment.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedTreatmentId(item.id)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer min-h-[72px] flex items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-cyan-50/70 border-[#0E7490] ring-2 ring-[#0E7490]/20 shadow-sm"
                        : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/70"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="space-y-1 pr-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-slate-900">
                          {item.name}
                        </span>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-[#0E7490] shrink-0">
                          {item.tag}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <span className="font-bold text-slate-700">{item.priceStart}</span>
                        <span>•</span>
                        <span>{item.duration}</span>
                        {item.painScale && (
                          <>
                            <span>•</span>
                            <span className="text-emerald-700 font-medium">{item.painScale}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isSelected ? "text-[#0E7490] translate-x-1" : "text-slate-400"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Interactive Clinical Showcase Panel */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-lg space-y-6">
              {/* Photo Showcase & Badges */}
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-200 border border-slate-200 shadow-sm">
                <Image
                  src={activeTreatment.image}
                  alt={activeTreatment.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-bold rounded-lg bg-white/95 text-[#0E7490] shadow-sm flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#0E7490]" aria-hidden="true" />
                    <span>{activeTreatment.tag}</span>
                  </span>
                  {activeTreatment.technologyBadge && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-900/90 text-white shadow-sm">
                      {activeTreatment.technologyBadge}
                    </span>
                  )}
                </div>

                {activeTreatment.comfortScore && (
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-xl border border-slate-200 shadow-md text-right">
                    <span className="text-[10px] uppercase font-bold text-slate-500 block">
                      Tingkat Kenyamanan Pasien
                    </span>
                    <span className="text-sm font-extrabold text-emerald-700">
                      {activeTreatment.comfortScore} ({activeTreatment.painScale})
                    </span>
                  </div>
                )}
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                    {activeTreatment.name}
                  </h3>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                      Estimasi Biaya Transparan
                    </span>
                    <span className="text-lg font-extrabold text-[#0E7490]">
                      {activeTreatment.priceStart}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {activeTreatment.description}
                </p>

                <div className="p-3 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                  <span className="font-bold text-slate-900 shrink-0">Indikasi Klinis:</span>
                  <span>{activeTreatment.recommendedFor}</span>
                </div>
              </div>

              {/* Step by Step Procedure Checklist */}
              {activeTreatment.procedureSteps && (
                <div className="space-y-3 pt-2 border-t border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
                    <span>Tahapan Prosedur Klinis Standar</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeTreatment.procedureSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7490] shrink-0 mt-0.5" aria-hidden="true" />
                        <span className="leading-snug">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons for Active Treatment */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-4 h-4 text-slate-400" aria-hidden="true" />
                  <span>Estimasi Pengerjaan: <strong className="text-slate-800">{activeTreatment.duration}</strong></span>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href="#booking"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#0E7490] hover:bg-[#155E75] text-white text-xs sm:text-sm font-bold transition-all shadow-sm min-h-[44px]"
                  >
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span>Pilih Tanggal Janji Temu</span>
                  </a>

                  <a
                    href={`https://wa.me/${clinicData.contact.whatsapp}?text=${encodeURIComponent(
                      `Halo Lumina Dental, saya ingin konsultasi dan tanya jadwal untuk tindakan ${activeTreatment.name} (${activeTreatment.priceStart}).`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs sm:text-sm font-bold border border-emerald-200 transition-colors min-h-[44px]"
                    aria-label={`Tanya ${activeTreatment.name} via WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>Chat Resepsionis</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
