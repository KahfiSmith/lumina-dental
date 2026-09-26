"use client";

import { useState } from "react";
import { clinicData } from "@/data/dental";
import { Calendar, User, Phone, Check, ArrowRight, Sparkles, Stethoscope } from "lucide-react";

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
    const dateStr = bookingDate ? bookingDate : "Hari Ini / Jadwal Terdekat";

    const msg = `Halo Resepsionis Lumina Dental Studio, saya ingin menjadwalkan kunjungan dokter gigi:
• Nama Pasien: ${nameStr}
• Rencana Tindakan: ${selectedTreatment}
• Pilihan Dokter: ${selectedDoctor}
• Tanggal Kunjungan: ${dateStr}

Mohon informasi ketersediaan slot waktu dokter. Terima kasih!`;

    return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="booking" className="scroll-mt-24 py-20 sm:py-28 bg-[#FAF8F5] text-[#1E242B] border-b border-[#E5DFD5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-wider text-[#246A60] uppercase">
            Reservasi Jadwal
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1E242B]">
            Siap untuk kunjungan berikutnya?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5E6773] leading-relaxed">
            Mari temukan jadwal yang paling nyaman untuk Anda. Tim resepsionis kami siap mengonfirmasi waktu dan persiapan awal secara ramah.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E5DFD5] shadow-xs space-y-8">
          {/* Step 1: Treatment */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#1E242B] block mb-3 flex items-center gap-2">
              <Stethoscope className="w-3.5 h-3.5 text-[#246A60]" />
              <span>01. Pilih Rencana Perawatan</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {treatments.map((t) => {
                const isSelected = selectedTreatment === t.name;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTreatment(t.name)}
                    className={`p-3.5 text-xs rounded-2xl border text-left transition-all min-h-[48px] cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? "bg-[#E4EFEA] border-[#246A60] text-[#1E242B] font-semibold shadow-xs"
                        : "bg-[#FAF8F5] text-[#5E6773] border-[#E5DFD5] hover:border-[#246A60]/40 hover:text-[#1E242B]"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span className="truncate">{t.name}</span>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#246A60] shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2 & 3: Doctor and Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="select-doctor"
                className="text-xs font-semibold uppercase tracking-wider text-[#1E242B] block mb-2 flex items-center gap-2"
              >
                <User className="w-3.5 h-3.5 text-[#246A60]" />
                <span>02. Pilihan Dokter</span>
              </label>
              <select
                id="select-doctor"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#E5DFD5] rounded-xl px-4 py-3 text-[#1E242B] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#246A60] min-h-[46px]"
              >
                <option value="Dokter yang Tersedia Paling Awal">
                  Dokter yang Tersedia Paling Awal (Rekomendasi Cepat)
                </option>
                {doctors.map((d) => (
                  <option key={d.id} value={`${d.name} (${d.title})`}>
                    {d.name} ({d.title})
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="clinic-date"
                className="text-xs font-semibold uppercase tracking-wider text-[#1E242B] block mb-2 flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-[#246A60]" />
                <span>03. Tanggal Kunjungan yang Dikehendaki</span>
              </label>
              <input
                id="clinic-date"
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#E5DFD5] rounded-xl px-4 py-3 text-[#1E242B] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#246A60] min-h-[46px]"
              />
            </div>
          </div>

          {/* Step 4: Patient Name */}
          <div>
            <label
              htmlFor="patient-name"
              className="text-xs font-semibold uppercase tracking-wider text-[#1E242B] block mb-2"
            >
              04. Nama Lengkap Pasien
            </label>
            <input
              id="patient-name"
              type="text"
              placeholder="Contoh: Jessica Handayani"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#E5DFD5] rounded-xl px-4 py-3 text-[#1E242B] placeholder-[#A6A49F] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#246A60] min-h-[46px]"
            />
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-full bg-[#246A60] hover:bg-[#1B524A] text-white font-semibold text-sm transition-all shadow-xs group"
            >
              <span>Konfirmasi Jadwal via WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="mt-3 flex items-center justify-center gap-2 text-xs text-[#5E6773]">
              <Sparkles className="w-3.5 h-3.5 text-[#246A60]" />
              <span>Tanpa uang muka atau biaya reservasi tersembunyi.</span>
            </div>
          </div>
        </div>

        {/* Emergency Assistance */}
        <div className="text-center mt-8 text-xs text-[#5E6773]">
          Gigi sakit mendadak atau membutuhkan penanganan segera?{" "}
          <a
            href={`tel:${contact.emergencyPhone}`}
            className="text-[#246A60] font-semibold hover:underline inline-flex items-center gap-1.5 ml-1"
          >
            <Phone className="w-3.5 h-3.5 text-[#246A60]" />
            <span>Telepon Langsung: {contact.formattedEmergencyPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
