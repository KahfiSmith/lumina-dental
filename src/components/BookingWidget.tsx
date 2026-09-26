"use client";

import { useState } from "react";
import { clinicData } from "@/data/dental";
import {
  Calendar,
  User,
  MessageCircle,
  Phone,
  Clock,
  Stethoscope,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export function BookingWidget() {
  const { contact, doctors, treatments } = clinicData;

  const [selectedTreatment, setSelectedTreatment] = useState<string>(
    "Ultrasonic Scaling & Airflow"
  );
  const [selectedDoctor, setSelectedDoctor] = useState<string>(
    "Dokter yang Tersedia Paling Awal"
  );
  const [bookingDate, setBookingDate] = useState<string>("");
  const [patientName, setPatientName] = useState<string>("");

  const generateWhatsAppUrl = () => {
    const nameStr = patientName.trim() ? patientName.trim() : "Pasien Baru";
    const dateStr = bookingDate ? bookingDate : "Hari Ini / Terdekat";

    const msg = `Halo Resepsionis Lumina Dental Studio, saya ingin menjadwalkan kunjungan dokter gigi:
• Nama Pasien: ${nameStr}
• Rencana Tindakan: ${selectedTreatment}
• Pilihan Dokter: ${selectedDoctor}
• Tanggal Kunjungan: ${dateStr}

Mohon konfirmasi ketersediaan slot waktu dokter. Terima kasih!`;

    return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-white text-slate-900 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0E7490] block mb-2">
            Reservasi Cepat &amp; Bebas Antre
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
            Pilih Jadwal Konsultasi Anda
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Pilih layanan dan dokter spesialis. Tim kami akan mengonfirmasi slot waktu Anda via WhatsApp.
          </p>
        </div>

        {/* Simplified Clinical Booking Form */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm space-y-6">
          {/* 1. Pilih Tindakan */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2.5 flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
              <span>1. Rencana Tindakan</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              {treatments.map((t) => {
                const isSelected = selectedTreatment === t.name;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTreatment(t.name)}
                    className={`p-3 text-xs rounded-xl border text-left transition-all min-h-[48px] cursor-pointer flex items-center justify-between gap-1.5 ${
                      isSelected
                        ? "bg-cyan-50 border-[#0E7490] text-[#0E7490] font-bold shadow-2xs"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span className="truncate">{t.name}</span>
                    {isSelected && (
                      <CheckCircle2 className="w-4 h-4 text-[#0E7490] shrink-0" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Dokter & Tanggal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="select-doctor"
                className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2 flex items-center gap-2"
              >
                <User className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
                <span>2. Pilihan Dokter</span>
              </label>
              <select
                id="select-doctor"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus-visible:outline-2 focus-visible:outline-[#0E7490] min-h-[44px]"
              >
                <option value="Dokter yang Tersedia Paling Awal">
                  Dokter yang Tersedia Paling Awal (Rekomendasi Cepat)
                </option>
                {doctors.map((d) => (
                  <option key={d.id} value={`${d.name} (${d.title})`}>
                    {d.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="clinic-date"
                className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
                <span>3. Tanggal Kunjungan</span>
              </label>
              <input
                id="clinic-date"
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus-visible:outline-2 focus-visible:outline-[#0E7490] min-h-[44px]"
              />
            </div>
          </div>

          {/* 3. Nama Pasien */}
          <div>
            <label
              htmlFor="patient-name"
              className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2"
            >
              4. Nama Pasien
            </label>
            <input
              id="patient-name"
              type="text"
              placeholder="Ketik nama lengkap Anda"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus-visible:outline-2 focus-visible:outline-[#0E7490] min-h-[44px]"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base transition-all shadow-md shadow-emerald-700/20 min-h-[48px]"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              <span>Konfirmasi Jadwal via WhatsApp</span>
            </a>
            <p className="text-center text-xs text-slate-500 mt-2">
              Resepsionis Lumina Dental akan mengonfirmasi slot jam dokter dalam hitungan menit.
            </p>
          </div>
        </div>

        {/* Emergency Help */}
        <div className="text-center mt-6 text-xs text-slate-500">
          Sakit gigi akut atau darurat?{" "}
          <a
            href={`tel:${contact.emergencyPhone}`}
            className="text-[#0E7490] font-bold hover:underline inline-flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Telepon Langsung: {contact.formattedEmergencyPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
