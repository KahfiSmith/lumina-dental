"use client";

import { useState } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import {
  Calendar,
  GraduationCap,
  FileCheck2,
  Clock,
  Sparkles,
  CheckCircle2,
  UserCheck,
} from "lucide-react";

export function Doctors() {
  const { doctors } = clinicData;
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "Semua Dokter Spesialis" },
    { id: "today", label: "Bertugas Hari Ini" },
    { id: "orto", label: "Spesialis Behel & Aligners" },
    { id: "implan", label: "Spesialis Implan & Prostodonsia" },
    { id: "anak", label: "Spesialis Gigi Anak" },
  ];

  const filteredDoctors = doctors.filter((doc) => {
    if (activeFilter === "today") return doc.isTodayOnDuty;
    if (activeFilter === "orto") return doc.specialization.includes("Estetika") || doc.title.includes("Ortodonti");
    if (activeFilter === "implan") return doc.title.includes("Prostodonsia") || doc.specialization.includes("Implan");
    if (activeFilter === "anak") return doc.title.includes("Anak");
    return true;
  });

  return (
    <section id="dokter" className="py-20 sm:py-28 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-teal-50 text-[#0E7490] border border-teal-200 mb-3">
            <UserCheck className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Kolegium Dokter Gigi Indonesia (PBDI)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Tim Dokter Gigi Spesialis &amp; Jadwal Praktek
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Seluruh tindakan klinis dilakukan langsung oleh dokter spesialis lulusan universitas terkemuka dengan izin SIP resmi, pendekatan ramah trauma, dan komunikasi transparan.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterOptions.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all min-h-[44px] cursor-pointer ${
                  isActive
                    ? "bg-[#0E7490] text-white shadow-xs"
                    : "bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200"
                }`}
                aria-pressed={isActive}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Expanded Clinical Doctor Profiles */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Doctor Header: Photo + Core Credentials */}
                <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 border-2 border-cyan-500/20 shrink-0 shadow-sm">
                    <Image
                      src={doc.photo}
                      alt={doc.name}
                      fill
                      sizes="(max-width: 640px) 96px, 112px"
                      className="object-cover object-top"
                    />
                    {doc.isTodayOnDuty && (
                      <span className="absolute bottom-1 left-1 right-1 py-0.5 text-[9px] font-bold text-center bg-emerald-600 text-white rounded-md shadow-xs">
                        Bertugas Hari Ini
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E7490] bg-cyan-50 px-2.5 py-0.5 rounded-md border border-cyan-100">
                        {doc.specialization}
                      </span>
                      {doc.isTodayOnDuty && (
                        <span className="flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                          <span>Praktek Buka</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-600">
                      {doc.title}
                    </p>

                    <div className="space-y-1 pt-1 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5 font-mono text-[11px]">
                        <FileCheck2 className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                        <span>{doc.sipNumber}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <GraduationCap className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                        <span className="line-clamp-1">{doc.education}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio text */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {doc.bio}
                </p>

                {/* Focus Skill Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {doc.focusTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-200 text-[11px] font-medium text-slate-700 flex items-center gap-1"
                    >
                      <Sparkles className="w-3 h-3 text-[#0E7490]" aria-hidden="true" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>

                {/* Timetable & Live Consultation Slot Chips */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                    <span className="font-bold text-slate-900 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#0E7490]" aria-hidden="true" />
                      <span>Jadwal Praktek: {doc.schedule}</span>
                    </span>
                    <span className="text-[11px] text-slate-500">Klik slot untuk reservasi:</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {doc.slots.map((slot, sIdx) => (
                      <a
                        key={sIdx}
                        href="#booking"
                        className="px-3 py-1.5 rounded-lg bg-white hover:bg-cyan-50 border border-slate-200 hover:border-cyan-400 text-slate-800 hover:text-[#0E7490] text-xs font-bold transition-all shadow-2xs inline-flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-600" aria-hidden="true" />
                        <span>{slot}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center gap-3">
                <a
                  href="#booking"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0E7490] hover:bg-[#155E75] text-white text-xs sm:text-sm font-bold transition-colors shadow-xs min-h-[44px]"
                >
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>Pilih Janji Temu dengan {doc.name.split(",")[0]}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
