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
  Ticket,
  ShieldCheck,
  Building,
} from "lucide-react";

export function BookingWidget() {
  const { contact, doctors, treatments } = clinicData;

  const [selectedTreatment, setSelectedTreatment] = useState<string>(
    "Ultrasonic Scaling & Airflow Polishing"
  );
  const [selectedDoctor, setSelectedDoctor] = useState<string>(
    "Dokter yang Tersedia Paling Awal (Rekomendasi Cepat)"
  );
  const [bookingDate, setBookingDate] = useState<string>("");
  const [selectedSession, setSelectedSession] = useState<string>(
    "Sore / Malam (17:00 - 20:30 WIB)"
  );
  const [patientName, setPatientName] = useState<string>("");
  const [notes, setNotes] = useState<string>("");

  const sessions = [
    { label: "Pagi", time: "09:00 - 12:00 WIB" },
    { label: "Siang", time: "13:00 - 16:00 WIB" },
    { label: "Sore / Malam", time: "17:00 - 20:30 WIB" },
  ];

  const generateWhatsAppUrl = () => {
    const nameStr = patientName.trim() ? patientName.trim() : "Pasien Baru";
    const dateStr = bookingDate ? bookingDate : "Hari Ini / Terdekat";
    const notesStr = notes.trim() ? notes.trim() : "Tidak ada keluhan khusus";

    const msg = `Halo Resepsionis Lumina Dental Studio, saya ingin mengonfirmasi jadwal janji temu dokter gigi:
• Nama Pasien: ${nameStr}
• Rencana Tindakan: ${selectedTreatment}
• Pilihan Dokter: ${selectedDoctor}
• Tanggal Kunjungan: ${dateStr}
• Pilihan Sesi: ${selectedSession}
• Catatan Keluhan: ${notesStr}

Mohon konfirmasi ketersediaan slot waktu dokter. Terima kasih!`;

    return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-t border-slate-200">
      {/* Decorative Blur Accent */}
      <div
        className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-50 text-[#0E7490] border border-cyan-200 mb-3">
            <Ticket className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Clinical Appointment Concierge</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Jadwalkan Konsultasi Dokter Gigi
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Hindari antrean panjang. Pilih rencana tindakan, dokter spesialis, dan waktu kunjungan Anda. Sistem kami menyiapkan tiket janji temu yang dapat langsung Anda konfirmasikan ke resepsionis via WhatsApp.
          </p>
        </div>

        {/* 2-Column Clinical Booking Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Left Column: Interactive Form Controls */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-lg space-y-6">
            {/* Step 1: Select Treatment / Issue */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2.5 flex items-center gap-2">
                <Stethoscope className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
                <span>1. Pilih Rencana Tindakan / Keluhan</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {treatments.map((t) => {
                  const isSelected = selectedTreatment === t.name;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTreatment(t.name)}
                      className={`p-3 text-xs font-semibold rounded-xl border text-left transition-all min-h-[52px] cursor-pointer flex items-center justify-between gap-2 ${
                        isSelected
                          ? "bg-cyan-50 border-[#0E7490] text-[#0E7490] ring-1 ring-[#0E7490]/20"
                          : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                      aria-pressed={isSelected}
                    >
                      <div className="leading-tight">
                        <span className="block font-bold">{t.name}</span>
                        <span className="text-[10px] text-slate-500 font-normal">{t.priceStart}</span>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-4 h-4 text-[#0E7490] shrink-0" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Select Doctor */}
            <div>
              <label
                htmlFor="select-doctor"
                className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2 flex items-center gap-2"
              >
                <User className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
                <span>2. Pilihan Dokter Gigi Spesialis</span>
              </label>
              <select
                id="select-doctor"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 text-sm focus-visible:outline-2 focus-visible:outline-[#0E7490] min-h-[44px]"
              >
                <option value="Dokter yang Tersedia Paling Awal (Rekomendasi Cepat)">
                  Dokter yang Tersedia Paling Awal (Rekomendasi Cepat)
                </option>
                {doctors.map((d) => (
                  <option key={d.id} value={`${d.name} (${d.title})`}>
                    {d.name} - {d.title}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Date & Time Session */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 text-sm focus-visible:outline-2 focus-visible:outline-[#0E7490] min-h-[44px]"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
                  <span>Sesi Waktu Kunjungan</span>
                </label>
                <div className="space-y-1.5">
                  {sessions.map((ses) => {
                    const sessionFullStr = `${ses.label} (${ses.time})`;
                    const isSelected = selectedSession === sessionFullStr;
                    return (
                      <button
                        key={ses.label}
                        type="button"
                        onClick={() => setSelectedSession(sessionFullStr)}
                        className={`w-full py-2 px-3 text-xs rounded-lg border text-left transition-all min-h-[38px] cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? "bg-cyan-50 border-[#0E7490] text-[#0E7490] font-bold"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                        aria-pressed={isSelected}
                      >
                        <span>
                          <strong>{ses.label}</strong> ({ses.time})
                        </span>
                        {isSelected && (
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0E7490]" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Step 4: Patient Name & Notes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div>
                <label
                  htmlFor="patient-name"
                  className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2"
                >
                  4. Nama Lengkap Pasien
                </label>
                <input
                  id="patient-name"
                  type="text"
                  placeholder="Contoh: Jessica Handayani"
                  value={patientName}
                  onChange={(e) => setPatientName(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus-visible:outline-2 focus-visible:outline-[#0E7490] min-h-[44px]"
                />
              </div>

              <div>
                <label
                  htmlFor="patient-notes"
                  className="text-xs font-bold uppercase tracking-wider text-slate-800 block mb-2"
                >
                  Keluhan Singkat (Opsional)
                </label>
                <input
                  id="patient-notes"
                  type="text"
                  placeholder="Misal: Gigi geraham kiri sakit bila minum dingin"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-900 placeholder-slate-400 text-sm focus-visible:outline-2 focus-visible:outline-[#0E7490] min-h-[44px]"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Live Digital Clinical Appointment Pass */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-cyan-600/30 shadow-xl relative overflow-hidden space-y-5">
              {/* Pass Header */}
              <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#0E7490] block">
                    Lumina Dental Studio
                  </span>
                  <h3 className="font-extrabold text-base text-slate-900">
                    Tiket Janji Temu Medis
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[9px] font-mono uppercase bg-cyan-50 text-[#0E7490] px-2 py-1 rounded border border-cyan-100 font-bold block">
                    DRAF RESMI
                  </span>
                </div>
              </div>

              {/* Dynamic Pass Data */}
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Nama Pasien
                  </span>
                  <span className="font-bold text-slate-900 text-sm">
                    {patientName.trim() ? patientName : "Pasien Baru (Isi Nama Anda)"}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Rencana Tindakan
                  </span>
                  <span className="font-bold text-[#0E7490]">
                    {selectedTreatment}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Pilihan Tanggal
                    </span>
                    <span className="font-bold text-slate-800">
                      {bookingDate || "Fleksibel / Hari Ini"}
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Sesi Jam
                    </span>
                    <span className="font-bold text-slate-800">
                      {selectedSession.split(" ")[0]}
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">
                    Dokter Gigi
                  </span>
                  <span className="font-semibold text-slate-800">
                    {selectedDoctor}
                  </span>
                </div>

                {notes.trim() && (
                  <div className="p-2.5 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-[11px]">
                    <span className="font-bold">Catatan:</span> {notes}
                  </div>
                )}
              </div>

              {/* Guarantees */}
              <div className="pt-2 border-t border-dashed border-slate-200 space-y-1.5 text-[11px] text-slate-500">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span>Jaminan antrean diprioritaskan untuk reservasi terjadwal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[#0E7490] shrink-0" aria-hidden="true" />
                  <span>Gratis parkir dan welcome beverage di lounge klinik</span>
                </div>
              </div>

              {/* Confirm to WhatsApp Action */}
              <div className="pt-2">
                <a
                  href={generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-all shadow-md shadow-emerald-700/20 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>Kirim Tiket Janji Temu ke WhatsApp</span>
                </a>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  Resepsionis klinik akan segera mengonfirmasi ketersediaan jam dokter dalam hitungan menit.
                </p>
              </div>
            </div>

            {/* Emergency Acute Pain Banner */}
            <div className="p-4 bg-white rounded-2xl border border-rose-200 shadow-xs flex items-center justify-between gap-3 text-xs">
              <div>
                <p className="font-bold text-rose-900">Sakit Gigi Akut / Gawat Darurat?</p>
                <p className="text-slate-500">Layanan konsultasi darurat 24 jam</p>
              </div>
              <a
                href={`tel:${contact.emergencyPhone}`}
                className="px-3 py-2 rounded-lg bg-rose-50 text-rose-700 font-bold hover:bg-rose-100 transition-colors inline-flex items-center gap-1.5 shrink-0 min-h-[44px]"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <span>{contact.formattedEmergencyPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
