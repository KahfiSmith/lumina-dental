"use client";

import { useState } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import {
  Clock,
  Sparkles,
  ShieldCheck,
  User,
  ArrowRight,
  MessageCircle,
  Smile,
} from "lucide-react";

export function Cases() {
  const { cases, contact } = clinicData;
  const [activeCaseId, setActiveCaseId] = useState<string>(cases[0].id);

  const activeCase = cases.find((c) => c.id === activeCaseId) || cases[0];

  return (
    <section id="hasil" className="py-20 sm:py-28 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 text-[#0E7490] border border-cyan-100 mb-3">
            <Smile className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Dokumentasi Klinis &amp; Hasil Nyata</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Transformasi Senyum &amp; Kesehatan Gigi
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Setiap rencana perawatan dirancang personal dengan prinsip *Digital Smile Design* agar hasil senyum proporsional dengan garis bibir dan bentuk wajah Anda.
          </p>
        </div>

        {/* Case Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {cases.map((c) => {
            const isActive = c.id === activeCase.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveCaseId(c.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all min-h-[44px] cursor-pointer ${
                  isActive
                    ? "bg-[#0E7490] text-white shadow-xs"
                    : "bg-slate-50 text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                }`}
                aria-pressed={isActive}
              >
                {c.treatmentType}
              </button>
            );
          })}
        </div>

        {/* Featured Case Study Hero Panel */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Visual Transformation Photo Showcase */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-200 border-2 border-white shadow-md">
                <Image
                  src={activeCase.image}
                  alt={activeCase.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 px-3 py-1 bg-white/95 backdrop-blur-xs rounded-lg text-xs font-bold text-[#0E7490] shadow-sm flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#0E7490]" aria-hidden="true" />
                  <span>Hasil Pasca Perawatan</span>
                </div>
              </div>
            </div>

            {/* Case Details & Medical Breakdown */}
            <div className="lg:col-span-6 space-y-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E7490] block mb-1">
                  {activeCase.treatmentType}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  {activeCase.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {activeCase.description}
              </p>

              {/* Clinical Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">
                    Durasi Penanganan
                  </span>
                  <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#0E7490]" aria-hidden="true" />
                    <span>{activeCase.durationText}</span>
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">
                    Profil Pasien
                  </span>
                  <span className="font-bold text-slate-800 flex items-center gap-1 mt-0.5">
                    <User className="w-3.5 h-3.5 text-[#0E7490]" aria-hidden="true" />
                    <span>Usia {activeCase.patientAge || "20-an"}</span>
                  </span>
                </div>
              </div>

              {/* Result Highlight Box */}
              <div className="p-3.5 rounded-xl bg-emerald-50/80 border border-emerald-200/70 text-xs text-emerald-900 space-y-1">
                <span className="font-bold block flex items-center gap-1.5 text-emerald-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>Hasil Dokumentasi Pasien</span>
                </span>
                <p className="leading-relaxed">
                  {activeCase.resultHighlight}
                </p>
                <div className="pt-1 text-[11px] text-emerald-700 font-medium">
                  Dokter Penanggung Jawab: <strong>{activeCase.doctorInCharge}</strong>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#booking"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#0E7490] hover:bg-[#155E75] text-white text-xs sm:text-sm font-bold transition-all shadow-xs min-h-[44px]"
                >
                  <span>Konsultasikan Kasus Serupa</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                    `Halo Lumina Dental, saya melihat kasus ${activeCase.title}. Saya ingin konsultasi apakah kondisi gigi saya bisa mendapatkan hasil serupa?`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 text-xs sm:text-sm font-semibold border border-slate-300 transition-colors min-h-[44px]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                  <span>Tanya WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
