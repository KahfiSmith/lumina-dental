"use client";

import { useRef } from "react";
import Image from "next/image";
import { clinicData } from "@/data/dental";
import { LiveClinicStatus } from "@/components/LiveClinicStatus";
import { MapPin, Clock, Phone, ArrowUpRight, ShieldCheck, Car, Coffee, Music } from "lucide-react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { KineticHeadline } from "@/components/motion/KineticHeadline";
import { editorialEase, snappySpring } from "@/motion/motionTokens";

export function LocationHours() {
  const { contact, schedule } = clinicData;
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const watermarkX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const mapEmbedUrl =
    "https://www.openstreetmap.org/export/embed.html?bbox=112.6950%2C-7.3050%2C112.7350%2C-7.2750&layer=mapnik&marker=-7.2930%2C112.7150";

  return (
    <section
      ref={containerRef}
      id="lokasi"
      className="scroll-mt-24 py-20 sm:py-28 bg-white text-[#12151A] border-b border-[#E5E7EB] relative overflow-hidden"
    >
      <motion.div
        style={{ x: shouldReduceMotion ? 0 : watermarkX }}
        className="absolute -top-10 left-0 text-[110px] sm:text-[180px] font-black uppercase font-sans text-slate-100 whitespace-nowrap pointer-events-none select-none tracking-tighter leading-none -z-0"
        aria-hidden="true"
      >
        MAYJEN SUNGKONO 88 SURABAYA
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="border-b border-[#E5E7EB] pb-10 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, ease: editorialEase }}
                className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A868] mb-3"
              >
                <span className="font-bold">SECTION 07</span>
                <span>/</span>
                <span>STUDIO ARCHITECTURE & ACCESS</span>
              </motion.div>

              <KineticHeadline
                lines={["The Space.", "Surabaya Studio."]}
                highlightLineIndex={1}
                highlightClassName="text-[#1D4ED8]"
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#12151A] font-sans"
              />
            </div>

            <motion.p
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: editorialEase }}
              className="max-w-md text-sm sm:text-base text-[#4B5563] leading-relaxed"
            >
              Sebuah studio dental di koridor Mayjen Sungkono yang dirancang dengan estetika kontemporer, pencahayaan alami yang hangat, serta fasilitas relaksasi untuk menghadirkan rasa tenang sejak awal.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-start">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: editorialEase }}
            className="lg:col-span-8 relative h-[380px] sm:h-[460px] bg-[#12151A] overflow-hidden border border-[#E5E7EB] group"
          >
            <motion.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
              transition={{ duration: 0.7, ease: editorialEase }}
              className="relative w-full h-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80"
                alt="Lumina Dental Studio Interior Architecture Surabaya"
                fill
                className="object-cover object-center filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 65vw"
              />
            </motion.div>
            <div className="absolute top-4 left-4 bg-[#12151A]/90 text-white font-mono text-[10px] px-3 py-1 uppercase tracking-widest backdrop-blur-xs">
              PLATE 01 : PRIVATE TREATMENT LOUNGE
            </div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 p-4 border border-[#E5E7EB] font-sans text-xs text-[#12151A] max-w-md shadow-md">
              <span className="font-bold uppercase block mb-1">Acoustic Comfort Insulation</span>
              Ruang perawatan privat dengan partisi kedap suara, bebas aroma menyengat, dan tata cahaya menenangkan.
            </div>
          </motion.div>

          <div className="lg:col-span-4 space-y-6">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: editorialEase }}
              className="relative h-[220px] bg-[#12151A] overflow-hidden border border-[#E5E7EB] group"
            >
              <motion.div
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                transition={{ duration: 0.7, ease: editorialEase }}
                className="relative w-full h-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80"
                  alt="Digital 3D Intraoral Scanning at Lumina Dental"
                  fill
                  className="object-cover object-center filter grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 35vw"
                />
              </motion.div>
              <div className="absolute top-3 left-3 bg-[#12151A]/90 text-[#00D284] font-mono text-[10px] px-2.5 py-1 backdrop-blur-xs">
                PLATE 02 : 3D PRECISION SCAN
              </div>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.25, ease: editorialEase }}
              className="p-6 bg-[#F9F9FB] border border-[#E5E7EB] font-mono text-xs space-y-3"
            >
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                STUDIO AMENITIES
              </span>
              <div className="grid grid-cols-2 gap-3 text-[11px] text-[#12151A]">
                {[
                  { icon: Coffee, label: "Artisan Brew" },
                  { icon: Music, label: "Ambient Audio" },
                  { icon: Car, label: "Free Valet" },
                  { icon: ShieldCheck, label: "HEPA Clean Air" },
                ].map((amenity, idx) => {
                  const Icon = amenity.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={shouldReduceMotion ? undefined : { scale: 1.04, x: 2 }}
                      transition={snappySpring}
                      className="flex items-center gap-1.5 p-2 bg-white border border-[#E5E7EB] rounded-xs cursor-default"
                    >
                      <Icon className="w-3.5 h-3.5 text-[#00A868]" />
                      <span>{amenity.label}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: editorialEase }}
              className="p-6 bg-[#F9F9FB] border border-[#E5E7EB]"
            >
              <div className="flex items-center gap-2 font-mono text-xs text-[#00A868] mb-2 font-bold">
                <MapPin className="w-4 h-4" />
                <span>STUDIO ADDRESS</span>
              </div>
              <address className="not-italic text-sm font-bold text-[#12151A] leading-relaxed mb-2 font-sans">
                {contact.fullAddress}
              </address>
              <p className="text-xs text-[#4B5563]">
                Patokan: Mayjen Sungkono koridor barat, seberang kompleks perkantoran. Tersedia fasilitas parkir privat luas.
              </p>
            </motion.div>

            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: editorialEase }}
              className="p-6 bg-[#F9F9FB] border border-[#E5E7EB]"
            >
              <div className="flex items-center justify-between gap-2 font-mono text-xs text-[#00A868] mb-3 font-bold">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>JADWAL OPERASIONAL</span>
                </div>
                <LiveClinicStatus variant="pill" />
              </div>

              <div className="space-y-2.5 font-mono text-xs text-[#12151A]">
                {schedule.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1.5 border-b border-slate-200/80 last:border-0"
                  >
                    <span className="text-slate-500">{item.days}</span>
                    <span className="font-bold">{item.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row gap-3">
              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 p-3.5 bg-[#12151A] hover:bg-[#1D4ED8] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shadow-xs group"
              >
                <span>Buka Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                href={`tel:${contact.emergencyPhone}`}
                className="inline-flex items-center justify-center gap-2 p-3.5 bg-white hover:bg-[#F1F3F7] border border-[#E5E7EB] text-[#12151A] font-mono text-xs font-bold uppercase tracking-wider transition-colors group"
              >
                <Phone className="w-3.5 h-3.5 text-[#00A868]" />
                <span>Telepon Front Desk</span>
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.2, ease: editorialEase }}
            className="lg:col-span-7 h-[390px] w-full border border-[#E5E7EB] relative bg-slate-100 overflow-hidden"
          >
            <iframe
              title="Peta Lokasi Lumina Dental Studio Surabaya"
              src={mapEmbedUrl}
              className="w-full h-full border-0 filter grayscale-[20%] contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-3 left-3 bg-[#12151A]/90 text-white font-mono text-[10px] px-2.5 py-1 backdrop-blur-xs">
              GPS: -7.2930, 112.7150 : MAYJEN SUNGKONO
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
