import Image from "next/image";
import { clinicData } from "@/data/dental";
import { ArrowUpRight } from "lucide-react";

export function Doctors() {
  const { doctors, contact } = clinicData;

  return (
    <section id="dokter" className="scroll-mt-24 py-20 sm:py-28 bg-[#F1F3F7] text-[#12151A] border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="border-b border-[#E5E7EB] pb-10 mb-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#00A868] mb-3">
                <span className="font-bold">SECTION 04</span>
                <span>/</span>
                <span>CLINICAL FACULTY</span>
              </div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#12151A] font-sans">
                Dentists In
                <br />
                Profile.
              </h2>
            </div>

            <p className="max-w-md text-sm sm:text-base text-[#4B5563] leading-relaxed">
              Profil dokter spesialis berlisensi resmi PBDI dan Dinas Kesehatan Surabaya. Memadukan kemahiran kuratif klinis dengan kepribadian yang ramah dan menenangkan.
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {doctors.map((doc, idx) => (
            <div
              key={doc.id}
              className="bg-white border border-[#E5E7EB] p-6 sm:p-10 lg:p-12 hover:border-[#1D4ED8] transition-colors relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                <div className="lg:col-span-5 relative">
                  <div className="relative h-96 sm:h-[440px] w-full bg-[#12151A] overflow-hidden border border-[#E5E7EB]">
                    <Image
                      src={doc.photo}
                      alt={`${doc.name} - Dokter Gigi Spesialis di Lumina Dental Surabaya`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top filter grayscale-[10%]"
                    />
                    <div className="absolute top-3 left-3 bg-[#12151A]/90 text-[#00D284] px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider">
                      FACULTY 0{idx + 1} : SPESIALIS BERLISENSI
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 p-3 font-mono text-xs text-[#12151A] border border-[#E5E7EB]">
                      <div className="text-[10px] uppercase text-slate-400">NOMOR SIP RESMI</div>
                      <div className="font-bold">{doc.sipNumber}</div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400 uppercase mb-2">
                      <span className="text-[#00A868] font-bold">SPESIALISASI UTAMA</span>
                      <span>/</span>
                      <span>{doc.specialization}</span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#12151A] mb-2 font-sans">
                      {doc.name}
                    </h3>

                    <div className="text-xs font-mono text-[#1D4ED8] font-bold uppercase mb-4">
                      {doc.title}
                    </div>

                    <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed font-light mb-6">
                      {doc.bio}
                    </p>

                    <div className="p-4 bg-[#F9F9FB] border border-[#E5E7EB] font-mono text-xs space-y-3 mb-6">
                      <div>
                        <span className="text-[10px] uppercase text-slate-400 block font-bold">
                          ALMAMATER PENDIDIKAN:
                        </span>
                        <span className="text-[#12151A] font-sans text-xs">
                          {doc.education}
                        </span>
                      </div>

                      <div className="pt-2 border-t border-[#E5E7EB]">
                        <span className="text-[10px] uppercase text-slate-400 block font-bold">
                          FOKUS KLINIS:
                        </span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {doc.focusTags.map((f: string, fIdx: number) => (
                            <span
                              key={fIdx}
                              className="px-2 py-0.5 bg-white border border-[#E5E7EB] text-[11px] text-slate-700"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#E5E7EB] flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-slate-400 block">
                        JADWAL PRAKTIK KLINIK:
                      </span>
                      <span className="font-bold text-[#12151A] font-sans text-xs sm:text-sm">
                        {doc.schedule}
                      </span>
                    </div>

                    <a
                      href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
                        `Halo Lumina Dental, saya ingin reservasi jadwal konsultasi bersama ${doc.name}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#12151A] hover:bg-[#1D4ED8] text-white text-xs font-mono uppercase tracking-wider transition-colors"
                    >
                      <span>Jadwalkan Konsultasi</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
