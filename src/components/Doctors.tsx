import Image from "next/image";
import { clinicData } from "@/data/dental";
import { CalendarCheck, Award, GraduationCap } from "lucide-react";

export function Doctors() {
  const { doctors } = clinicData;

  return (
    <section id="dokter" className="scroll-mt-24 py-20 sm:py-28 bg-[#F2EFE9] text-[#1E242B] border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 pb-8 border-b border-[#E5DFD5]">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-wider text-[#246A60] uppercase">
              Tim Dokter Spesialis
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1E242B]">
              Berpengalaman, komunikatif, dan penuh empati.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#5E6773] leading-relaxed">
              Seluruh penanganan klinis dilakukan langsung oleh dokter gigi spesialis lulusan universitas negeri terkemuka dengan izin praktik resmi dari Dinas Kesehatan Kota Surabaya.
            </p>
          </div>
          <div className="hidden sm:block text-xs text-[#5E6773] font-medium bg-white px-4 py-2 rounded-full border border-[#E5DFD5] shadow-xs">
            Izin Praktik Aktif KKI &amp; PBDI
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {doctors.map((doc) => (
            <div
              key={doc.id}
              className="rounded-3xl bg-white border border-[#E5DFD5] shadow-xs overflow-hidden flex flex-col justify-between group hover:border-[#246A60]/40 transition-all"
            >
              <div>
                {/* Photo with approachable framing */}
                <div className="relative aspect-4/5 w-full bg-[#FAF8F5] overflow-hidden">
                  <Image
                    src={doc.photo}
                    alt={`${doc.name} - Dokter Gigi Spesialis di Lumina Dental Surabaya`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#246A60] border border-[#BCD9D2] shadow-xs">
                    {doc.specialization}
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6 space-y-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#1E242B] leading-snug">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-medium text-[#246A60] mt-0.5">
                      {doc.title}
                    </p>
                  </div>

                  <div className="space-y-1.5 text-[11px] text-[#5E6773] pt-2 border-t border-[#EFEBE4]">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#246A60] shrink-0" />
                      <span>{doc.education}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-[#246A60] shrink-0" />
                      <span>{doc.sipNumber}</span>
                    </div>
                  </div>

                  <p className="text-xs text-[#5E6773] leading-relaxed line-clamp-3">
                    {doc.bio}
                  </p>

                  <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#EFEBE4] text-[11px] text-[#5E6773]">
                    <span className="font-semibold text-[#1E242B] block mb-0.5">
                      Jadwal Praktik:
                    </span>
                    <span>{doc.schedule}</span>
                  </div>
                </div>
              </div>

              {/* Action */}
              <div className="p-5 sm:p-6 pt-0">
                <a
                  href="#booking"
                  className="w-full inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-[#F2EFE9] hover:bg-[#246A60] text-[#1E242B] hover:text-white text-xs font-semibold transition-all"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Jadwalkan Konsultasi</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
