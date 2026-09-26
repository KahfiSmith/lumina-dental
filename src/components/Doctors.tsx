import Image from "next/image";
import { clinicData } from "@/data/dental";
import { ArrowUpRight } from "lucide-react";

export function Doctors() {
  const { doctors } = clinicData;

  return (
    <section id="dokter" className="scroll-mt-24 py-24 sm:py-32 bg-[#F5F3EF] text-[#1C1D1F] border-b border-[#E5E0D8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col justify-between gap-6 border-b border-[#E5E0D8] pb-8 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold tracking-[0.3em] text-[#8F6E4D] uppercase">
              Tenaga Medis Berpengalaman
            </span>
            <h2 className="mt-2 font-[family-name:var(--font-display)] text-3xl font-bold tracking-tight text-[#1C1D1F] sm:text-4xl lg:text-5xl uppercase">
              Meet Your Dentists
            </h2>
          </div>
          <p className="max-w-md text-xs leading-relaxed text-[#6E7178] font-light">
            Seluruh penanganan klinis dilakukan langsung oleh dokter gigi spesialis lulusan universitas terkemuka dengan izin resmi KKI dan PBDI.
          </p>
        </div>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doc, idx) => (
            <div
              key={doc.id}
              className="flex flex-col justify-between border border-[#E5E0D8] bg-[#FBFBFA] group transition-all duration-300 hover:border-[#8F6E4D]"
            >
              <div>
                <div className="relative aspect-3/4 w-full overflow-hidden bg-[#EFECE6]">
                  <Image
                    src={doc.photo}
                    alt={doc.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 border border-[#E5E0D8] bg-[#FBFBFA]/90 px-2.5 py-0.5 font-mono text-[9px] tracking-wider text-[#8F6E4D] uppercase backdrop-blur-md">
                    Spesialis 0{idx + 1}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[#1C1D1F] leading-snug">
                      {doc.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#8F6E4D] mt-1 font-mono">
                      {doc.title}
                    </p>
                  </div>

                  <p className="text-[11px] text-[#6E7178] font-mono border-t border-[#E5E0D8] pt-2">
                    {doc.sipNumber}
                  </p>

                  <p className="text-xs text-[#6E7178] font-light leading-relaxed line-clamp-3">
                    {doc.bio}
                  </p>

                  <div className="border-t border-[#E5E0D8] pt-3 text-[11px] font-mono text-[#6E7178]">
                    <span className="block text-[10px] uppercase text-[#8F6E4D] font-bold">Praktek:</span>
                    <span>{doc.schedule}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <a
                  href="#booking"
                  className="flex h-10 w-full items-center justify-center gap-1.5 border border-[#E5E0D8] bg-[#F5F3EF] text-xs font-semibold tracking-wider text-[#1C1D1F] uppercase transition-all duration-300 hover:border-[#8F6E4D] hover:bg-[#8F6E4D] hover:text-white"
                >
                  <span>Pilih Jadwal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
