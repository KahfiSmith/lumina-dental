"use client";

import { useState } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import { LiveClinicStatus } from "@/components/LiveClinicStatus";
import {
  Calendar,
  MessageCircle,
  ShieldCheck,
  Award,
  Star,
  Activity,
  ArrowRight,
  Clock,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export function Hero() {
  const { symptoms, doctors, contact } = clinicData;
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>(symptoms[0].id);

  const activeSymptom =
    symptoms.find((s) => s.id === selectedSymptomId) || symptoms[0];

  const onDutyDoctor = doctors.find((d) => d.isTodayOnDuty) || doctors[0];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 bg-gradient-to-b from-sky-50/60 via-slate-50/40 to-white overflow-hidden border-b border-slate-100">
      {/* Subtle Background Glow Accent */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 left-0 w-80 h-80 bg-teal-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badges Bar */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <LiveClinicStatus variant="pill" />
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
            Surabaya Barat (Mayjen Sungkono)
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
            <Clock className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
            Waktu tunggu rata-rata pasien terjadwal: &lt; 15 menit
          </span>
        </div>

        {/* Main Grid: Asymmetrical Medical Portal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Headlines & Interactive Symptom Checker */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              Standar Baru Perawatan Gigi:{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0E7490] to-cyan-600">
                Presisi Medis, Nyaman, &amp; Bebas Rasa Cemas
              </span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Kami memadukan keahlian 4 dokter gigi spesialis dengan teknologi pemindaian digital 3D dan anestesi atraumatik. Seluruh tindakan higienis dengan protokol sterilisasi standar rumah sakit Eropa.
            </p>

            {/* Interactive Symptom Checker Card */}
            <div className="p-5 sm:p-6 bg-white rounded-2xl border border-cyan-100 shadow-md shadow-cyan-900/5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    Pemeriksa Keluhan Mandiri Cepat
                  </span>
                </div>
                <span className="text-[11px] font-medium text-slate-500">
                  Pilih gejala Anda di bawah:
                </span>
              </div>

              {/* Symptom Chips Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {symptoms.map((item) => {
                  const isSelected = item.id === selectedSymptomId;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedSymptomId(item.id)}
                      className={`p-2.5 rounded-xl text-left transition-all border min-h-[44px] cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "bg-cyan-50/80 border-cyan-500 ring-2 ring-cyan-500/20 text-[#0E7490]"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                      aria-pressed={isSelected}
                    >
                      <span className="text-xs font-bold leading-tight line-clamp-2">
                        {item.symptom}
                      </span>
                      <span
                        className={`text-[10px] font-semibold mt-1 inline-block ${
                          item.severity === "Perlu Penanganan Cepat"
                            ? "text-rose-600"
                            : item.severity === "Sedang"
                            ? "text-amber-600"
                            : "text-emerald-600"
                        }`}
                      >
                        {item.severity}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Recommendation Panel */}
              <div className="p-3.5 sm:p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="text-slate-500 font-medium">
                    Kemungkinan Penyebab:{" "}
                    <strong className="text-slate-800 font-semibold">{activeSymptom.possibleCause}</strong>
                  </span>
                  <span className="font-bold text-[#0E7490] sm:text-right">
                    {activeSymptom.estimatedCost}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2 border-t border-slate-200">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Rekomendasi Penanganan:</span>
                    <span className="font-bold text-slate-900 text-sm">
                      {activeSymptom.recommendedTreatment}
                    </span>
                  </div>
                  <a
                    href="#booking"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#0E7490] hover:bg-[#155E75] text-white font-bold transition-all shadow-xs min-h-[44px] shrink-0"
                  >
                    <span>Konsultasikan Ini</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-[#0E7490] hover:bg-[#155E75] rounded-xl transition-all shadow-md shadow-cyan-900/10 min-h-[48px]"
              >
                <Calendar className="w-5 h-5" aria-hidden="true" />
                <span>Pilih Jadwal &amp; Dokter Gigi</span>
              </a>

              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                  `Halo Resepsionis Lumina Dental, saya ingin konsultasi mengenai keluhan: ${activeSymptom.symptom}. Mohon info estimasi jadwal dokternya.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm sm:text-base font-semibold text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-all min-h-[48px] shadow-2xs"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                <span>Chat Resepsionis Medis (WA)</span>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-6 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0E7490] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">4 Dokter Spesialis</p>
                  <p className="text-slate-500">SIP &amp; STR Resmi PBDI</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0E7490] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Steril Kelas B Eropa</p>
                  <p className="text-slate-500">Pouch Dibuka Depan Pasien</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 fill-amber-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-bold text-slate-900">4.9 / 5.0 Rating</p>
                  <p className="text-slate-500">380+ Ulasan Asli Pasien</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Clinical Console & Today's On-Duty Doctor */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              {/* Doctor On-Duty Medical Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xl space-y-5 relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      Dokter Bertugas Hari Ini
                    </span>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-cyan-50 text-[#0E7490] font-semibold border border-cyan-100">
                    Slot Tersedia
                  </span>
                </div>

                {/* Doctor Bio Row */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-slate-100 border-2 border-cyan-500/20 shrink-0">
                    <Image
                      src={onDutyDoctor.photo}
                      alt={onDutyDoctor.name}
                      fill
                      priority
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E7490] block">
                      {onDutyDoctor.specialization}
                    </span>
                    <h2 className="text-base font-bold text-slate-900 leading-snug">
                      {onDutyDoctor.name}
                    </h2>
                    <p className="text-xs text-slate-500 leading-tight">
                      {onDutyDoctor.title}
                    </p>
                    <p className="text-[11px] font-mono text-slate-400">
                      {onDutyDoctor.sipNumber}
                    </p>
                  </div>
                </div>

                {/* Live Consultation Slots */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-700">Ketersediaan Jam Hari Ini:</span>
                    <span className="text-[11px] text-emerald-700 font-bold">Bisa Dipesan</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {onDutyDoctor.slots.map((slot, idx) => (
                      <a
                        key={idx}
                        href="#booking"
                        className="px-2.5 py-1.5 rounded-lg bg-white hover:bg-cyan-50 text-slate-700 hover:text-[#0E7490] font-semibold text-xs border border-slate-200 hover:border-cyan-300 transition-colors inline-flex items-center gap-1 shadow-2xs"
                      >
                        <Clock className="w-3 h-3 text-cyan-600" aria-hidden="true" />
                        <span>{slot}</span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Clinical Hygiene Assurance Micro-Banner */}
                <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/60 flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-xs text-emerald-900 leading-relaxed font-medium">
                    Instrumen dibersihkan melalui 4 siklus sterilisasi uap fraksinasi 134°C dan pouch dibuka di depan Anda.
                  </p>
                </div>

                <a
                  href="#booking"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors min-h-[44px]"
                >
                  <Sparkles className="w-4 h-4 text-cyan-400" aria-hidden="true" />
                  <span>Klaim Slot Konsultasi Hari Ini</span>
                </a>
              </div>

              {/* Secondary Feature Card: Dental Studio Environment */}
              <div className="p-4 bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3.5">
                <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                  <Image
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
                    alt="Ruang perawatan klinik Lumina Dental"
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-slate-900">Ruang Perawatan Privat &amp; Tenang</p>
                  <p className="text-slate-500 leading-relaxed">
                    Dental chair ergonomis, aromaterapi bebas bau obat, dan hiburan layar TV di atas kursi periksa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
