"use client";

import { useState } from "react";
import { clinicData } from "@/data/dental";
import { Check, ArrowRight } from "lucide-react";

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
    <section id="booking" className="scroll-mt-24 py-20 sm:py-28 bg-[#12151A] text-white border-b border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-b border-slate-800 pb-12 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-[#00D284] text-[11px] font-mono tracking-widest uppercase mb-6">
            <span>DIRECT INTAKE CONCIERGE</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.02] font-sans">
            Ready For Your
            <br />
            <span className="text-[#00D284]">Next Smile?</span>
          </h2>

          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed font-light max-w-xl mx-auto">
            Pilih tindakan dan jadwal yang paling nyaman untuk Anda. Tim resepsionis kami siap mengonfirmasi reservasi via WhatsApp resmi secara cepat.
          </p>
        </div>

        <div className="bg-white text-[#12151A] p-6 sm:p-10 lg:p-12 border-2 border-white shadow-2xl space-y-10">
          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-4 flex items-center gap-2">
              <span className="text-[#1D4ED8]">01</span>
              <span>/ PILIH PERAWATAN SENYUM:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {treatments.map((t) => {
                const isSelected = selectedTreatment === t.name;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTreatment(t.name)}
                    className={`p-3.5 text-left border transition-all cursor-pointer font-sans ${
                      isSelected
                        ? "bg-[#12151A] text-white border-[#12151A]"
                        : "bg-[#F9F9FB] text-[#4B5563] hover:text-[#12151A] border-[#E5E7EB]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold leading-tight">
                        {t.name}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#00D284] shrink-0" />}
                    </div>
                    <span className={`block text-[11px] font-mono mt-1 ${
                      isSelected ? "text-slate-300" : "text-slate-500"
                    }`}>
                      {t.priceStart}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-4 flex items-center gap-2">
              <span className="text-[#1D4ED8]">02</span>
              <span>/ PILIH DOKTER SPESIALIS:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setSelectedDoctor("Dokter yang Tersedia Paling Awal")}
                className={`p-3.5 text-left border transition-all cursor-pointer font-sans ${
                  selectedDoctor === "Dokter yang Tersedia Paling Awal"
                    ? "bg-[#12151A] text-white border-[#12151A]"
                    : "bg-[#F9F9FB] text-[#4B5563] hover:text-[#12151A] border-[#E5E7EB]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">Jadwal Tercepat</span>
                  {selectedDoctor === "Dokter yang Tersedia Paling Awal" && (
                    <Check className="w-3.5 h-3.5 text-[#00D284]" />
                  )}
                </div>
                <span className="block text-[11px] font-mono text-slate-400 mt-0.5">
                  Slot pertama yang tersedia hari ini
                </span>
              </button>

              {doctors.map((d) => {
                const isSelected = selectedDoctor === d.name;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => setSelectedDoctor(d.name)}
                    className={`p-3.5 text-left border transition-all cursor-pointer font-sans ${
                      isSelected
                        ? "bg-[#12151A] text-white border-[#12151A]"
                        : "bg-[#F9F9FB] text-[#4B5563] hover:text-[#12151A] border-[#E5E7EB]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{d.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#00D284]" />}
                    </div>
                    <span className={`block text-[11px] font-mono mt-0.5 ${
                      isSelected ? "text-slate-300" : "text-slate-500"
                    }`}>
                      {d.specialization}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                03 / TANGGAL PILIHAN:
              </label>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full h-12 px-4 bg-[#F9F9FB] border border-[#E5E7EB] text-xs font-mono text-[#12151A] focus:outline-none focus:border-[#1D4ED8]"
              />
            </div>

            <div>
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-2">
                04 / NAMA LENGKAP PASIEN:
              </label>
              <input
                type="text"
                placeholder="Contoh: Anita Wijaya"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
                className="w-full h-12 px-4 bg-[#F9F9FB] border border-[#E5E7EB] text-xs font-sans text-[#12151A] focus:outline-none focus:border-[#1D4ED8]"
              />
            </div>
          </div>

          <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="text-slate-500 text-[11px]">
              KONFIRMASI AKAN DITERUSKAN KE WHATSAPP CONCIERGE RESMI
            </div>

            <a
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#12151A] hover:bg-[#1D4ED8] text-white font-bold tracking-widest uppercase transition-all shadow-md"
            >
              <span>Book A Visit Now</span>
              <ArrowRight className="w-4 h-4 text-[#00D284]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
