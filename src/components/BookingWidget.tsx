"use client";

import { useRef, useState } from "react";
import { clinicData } from "@/data/dental";
import { Check, ArrowRight, Calendar, User, Stethoscope } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { editorialEase, snappySpring, buttonHoverVariants } from "@/motion/motionTokens";

export function BookingWidget() {
  const { contact, doctors, treatments } = clinicData;
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

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
    <section
      ref={containerRef}
      id="booking"
      className="scroll-mt-24 py-20 sm:py-28 bg-[#12151A] text-white border-b border-slate-800 relative overflow-hidden"
    >
      <motion.div
        style={{ x: shouldReduceMotion ? 0 : watermarkX }}
        className="absolute -top-10 left-0 text-[110px] sm:text-[180px] font-black uppercase font-sans text-slate-800/40 whitespace-nowrap pointer-events-none select-none tracking-tighter leading-none -z-0"
        aria-hidden="true"
      >
        DIRECT CONCIERGE PROTOCOL
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="border-b border-slate-800 pb-12 mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, ease: editorialEase }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-slate-800 text-[#00D284] text-[11px] font-mono tracking-widest uppercase mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00D284] animate-pulse" />
            <span>DIRECT INTAKE CONCIERGE</span>
          </motion.div>

          <KineticHeadline
            lines={["Ready For Your", "Next Smile?"]}
            highlightLineIndex={1}
            highlightClassName="text-[#00D284]"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white leading-[1.02] font-sans"
          />

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: editorialEase }}
            className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed font-light max-w-xl mx-auto"
          >
            Pilih tindakan dan jadwal yang paling nyaman untuk Anda. Tim resepsionis kami siap mengonfirmasi reservasi via WhatsApp resmi secara cepat.
          </motion.p>
        </div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: editorialEase }}
          className="bg-white text-[#12151A] p-6 sm:p-10 lg:p-12 border-2 border-white shadow-2xl space-y-10"
        >
          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <span className="text-[#1D4ED8]">01</span>
              <span>/ PILIH PERAWATAN SENYUM:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              {treatments.map((t) => {
                const isSelected = selectedTreatment === t.name;
                return (
                  <motion.button
                    key={t.id}
                    type="button"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={snappySpring}
                    onClick={() => setSelectedTreatment(t.name)}
                    className={`p-3.5 text-left border transition-all cursor-pointer font-sans relative ${
                      isSelected
                        ? "bg-[#12151A] text-white border-[#12151A] shadow-sm"
                        : "bg-[#F9F9FB] text-[#4B5563] hover:text-[#12151A] border-[#E5E7EB] hover:border-[#1D4ED8]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold leading-tight">
                        {t.name}
                      </span>
                      {isSelected && (
                        <motion.span
                          initial={shouldReduceMotion ? false : { scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={snappySpring}
                        >
                          <Check className="w-3.5 h-3.5 text-[#00D284] shrink-0" />
                        </motion.span>
                      )}
                    </div>
                    <span className={`block text-[11px] font-mono mt-1 ${
                      isSelected ? "text-slate-300" : "text-slate-500"
                    }`}>
                      {t.priceStart}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-2">
              <span className="text-[#1D4ED8]">02</span>
              <span>/ PILIH DOKTER SPESIALIS:</span>
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <motion.button
                type="button"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                transition={snappySpring}
                onClick={() => setSelectedDoctor("Dokter yang Tersedia Paling Awal")}
                className={`p-3.5 text-left border transition-all cursor-pointer font-sans ${
                  selectedDoctor === "Dokter yang Tersedia Paling Awal"
                    ? "bg-[#12151A] text-white border-[#12151A] shadow-sm"
                    : "bg-[#F9F9FB] text-[#4B5563] hover:text-[#12151A] border-[#E5E7EB] hover:border-[#1D4ED8]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold">Jadwal Tercepat</span>
                  {selectedDoctor === "Dokter yang Tersedia Paling Awal" && (
                    <motion.span
                      initial={shouldReduceMotion ? false : { scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={snappySpring}
                    >
                      <Check className="w-3.5 h-3.5 text-[#00D284]" />
                    </motion.span>
                  )}
                </div>
                <span className="block text-[11px] font-mono text-slate-400 mt-0.5">
                  Slot pertama yang tersedia hari ini
                </span>
              </motion.button>

              {doctors.map((d) => {
                const isSelected = selectedDoctor === d.name;
                return (
                  <motion.button
                    key={d.id}
                    type="button"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.015 }}
                    whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                    transition={snappySpring}
                    onClick={() => setSelectedDoctor(d.name)}
                    className={`p-3.5 text-left border transition-all cursor-pointer font-sans ${
                      isSelected
                        ? "bg-[#12151A] text-white border-[#12151A] shadow-sm"
                        : "bg-[#F9F9FB] text-[#4B5563] hover:text-[#12151A] border-[#E5E7EB] hover:border-[#1D4ED8]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold">{d.name}</span>
                      {isSelected && (
                        <motion.span
                          initial={shouldReduceMotion ? false : { scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={snappySpring}
                        >
                          <Check className="w-3.5 h-3.5 text-[#00D284]" />
                        </motion.span>
                      )}
                    </div>
                    <span className={`block text-[11px] font-mono mt-0.5 ${
                      isSelected ? "text-slate-300" : "text-slate-500"
                    }`}>
                      {d.specialization}
                    </span>
                  </motion.button>
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
                className="w-full h-12 px-4 bg-[#F9F9FB] border border-[#E5E7EB] text-xs font-mono text-[#12151A] focus:outline-none focus:border-[#1D4ED8] transition-colors"
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
                className="w-full h-12 px-4 bg-[#F9F9FB] border border-[#E5E7EB] text-xs font-sans text-[#12151A] focus:outline-none focus:border-[#1D4ED8] transition-colors"
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedTreatment}-${selectedDoctor}-${bookingDate}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="p-4 bg-[#F1F3F7] border border-[#E5E7EB] rounded-none font-mono text-xs flex flex-wrap items-center gap-3"
            >
              <div className="text-[10px] uppercase font-bold text-slate-400">
                LIVE SELECTION SUMMARY :
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#E5E7EB] text-[#12151A] font-bold">
                <Stethoscope className="w-3 h-3 text-[#1D4ED8]" />
                <span>{selectedTreatment}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#E5E7EB] text-[#12151A]">
                <User className="w-3 h-3 text-[#00A868]" />
                <span>{selectedDoctor.split(",")[0]}</span>
              </div>
              {bookingDate && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-[#E5E7EB] text-[#12151A]">
                  <Calendar className="w-3 h-3 text-[#FF5A36]" />
                  <span>{bookingDate}</span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs">
            <div className="text-slate-500 text-[11px]">
              KONFIRMASI AKAN DITERUSKAN KE WHATSAPP CONCIERGE RESMI
            </div>

            <motion.a
              variants={buttonHoverVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              href={generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#12151A] hover:bg-[#1D4ED8] text-white font-bold tracking-widest uppercase transition-colors shadow-md group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-[#1D4ED8] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10">Book A Visit Now</span>
              <ArrowRight className="w-4 h-4 text-[#00D284] relative z-10 group-hover:translate-x-1.5 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
