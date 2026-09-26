"use client";

import { useState } from "react";
import { clinicData } from "@/data/dental";
import { Calendar, User, Phone, Stethoscope, Check, ArrowRight } from "lucide-react";

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
    <section id="booking" className="py-24 sm:py-32 bg-[#F5F3EF] text-[#1C1D1F] border-t border-[#E8E5DF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#8F6E4D]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8F6E4D]">
              06 / Reservasi &amp; Konsultasi
            </span>
            <span className="w-8 h-[1px] bg-[#8F6E4D]" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1D1F] tracking-tight leading-[1.15] mb-4">
            Mulai Perawatan Senyum Anda.
          </h2>

          <p className="text-base text-[#6E7178] leading-relaxed">
            Pilih tindakan dan jadwal yang Anda kehendaki. Concierge medis kami akan mengonfirmasi slot waktu dalam hitungan menit via WhatsApp.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E8E5DF] shadow-xs space-y-8">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-[#1C1D1F] block mb-3 flex items-center gap-2">
              <Stethoscope className="w-3.5 h-3.5 text-[#8F6E4D]" aria-hidden="true" />
              <span>01. Pilih Rencana Tindakan</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {treatments.map((t) => {
                const isSelected = selectedTreatment === t.name;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTreatment(t.name)}
                    className={`p-3.5 text-xs rounded-xl border text-left transition-all min-h-[48px] cursor-pointer flex items-center justify-between gap-2 ${
                      isSelected
                        ? "bg-[#1C1D1F] border-[#1C1D1F] text-white font-medium shadow-xs"
                        : "bg-[#FBFBFA] text-[#6E7178] border-[#E8E5DF] hover:border-[#1C1D1F]/30 hover:text-[#1C1D1F]"
                    }`}
                    aria-pressed={isSelected}
                  >
                    <span className="truncate">{t.name}</span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-[#8F6E4D] shrink-0" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label
                htmlFor="select-doctor"
                className="text-xs font-semibold uppercase tracking-wider text-[#1C1D1F] block mb-2 flex items-center gap-2"
              >
                <User className="w-3.5 h-3.5 text-[#8F6E4D]" aria-hidden="true" />
                <span>02. Pilihan Dokter</span>
              </label>
              <select
                id="select-doctor"
                value={selectedDoctor}
                onChange={(e) => setSelectedDoctor(e.target.value)}
                className="w-full bg-[#FBFBFA] border border-[#E8E5DF] rounded-xl px-4 py-3 text-[#1C1D1F] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#8F6E4D] min-h-[46px]"
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
                className="text-xs font-semibold uppercase tracking-wider text-[#1C1D1F] block mb-2 flex items-center gap-2"
              >
                <Calendar className="w-3.5 h-3.5 text-[#8F6E4D]" aria-hidden="true" />
                <span>03. Rencana Tanggal Kunjungan</span>
              </label>
              <input
                id="clinic-date"
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full bg-[#FBFBFA] border border-[#E8E5DF] rounded-xl px-4 py-3 text-[#1C1D1F] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#8F6E4D] min-h-[46px]"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="patient-name"
              className="text-xs font-semibold uppercase tracking-wider text-[#1C1D1F] block mb-2"
            >
              04. Nama Lengkap Pasien
            </label>
            <input
              id="patient-name"
              type="text"
              placeholder="Contoh: Jessica Handayani"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full bg-[#FBFBFA] border border-[#E8E5DF] rounded-xl px-4 py-3 text-[#1C1D1F] placeholder-[#A6A49F] text-xs sm:text-sm focus-visible:outline-2 focus-visible:outline-[#8F6E4D] min-h-[46px]"
            />
          </div>

          <div className="pt-2">
            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#1C1D1F] hover:bg-black text-white font-medium text-sm transition-all shadow-sm group"
            >
              <span>Konfirmasi Reservasi Jadwal via WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-[#8F6E4D] group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <p className="text-center text-xs text-[#A6A49F] mt-3">
              Tim resepsionis Lumina Dental Studio melayani konfirmasi reservasi dan estimasi jadwal setiap hari kerja.
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-xs text-[#6E7178]">
          Kebutuhan tindakan darurat atau sakit gigi akut?{" "}
          <a
            href={`tel:${contact.emergencyPhone}`}
            className="text-[#1C1D1F] font-semibold hover:text-[#8F6E4D] transition-colors inline-flex items-center gap-1.5 underline underline-offset-4"
          >
            <Phone className="w-3.5 h-3.5 text-[#8F6E4D]" aria-hidden="true" />
            <span>Telepon Langsung: {contact.formattedEmergencyPhone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
