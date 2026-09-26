import { clinicData } from "@/data/dental";
import { LiveClinicStatus } from "@/components/LiveClinicStatus";
import { MapPin, Clock, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export function LocationHours() {
  const { contact, schedule } = clinicData;

  const mapEmbedUrl =
    "https://www.openstreetmap.org/export/embed.html?bbox=112.6950%2C-7.3050%2C112.7350%2C-7.2750&layer=mapnik&marker=-7.2930%2C112.7150";

  return (
    <section id="lokasi" className="py-24 sm:py-32 bg-[#FBFBFA] text-[#1C1D1F] border-t border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#8F6E4D]" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#8F6E4D]">
              07 / Studio &amp; Lokasi
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#1C1D1F] tracking-tight leading-[1.15] mb-5">
            Akses Studio &amp; Jadwal Praktek.
          </h2>

          <p className="text-base sm:text-lg text-[#6E7178] leading-relaxed font-normal max-w-2xl">
            Berlokasi strategis di koridor utama Surabaya Barat dengan fasilitas parkir valet pribadi serta akses ramah kursi roda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-[#E8E5DF] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[#8F6E4D]">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span className="text-[11px] font-semibold uppercase tracking-wider">
                    Alamat Studio
                  </span>
                </div>
                <address className="not-italic text-sm sm:text-base text-[#1C1D1F] font-serif leading-relaxed">
                  {contact.fullAddress}
                </address>
                <p className="text-xs text-[#6E7178]">
                  Patokan: Seberang gedung perkantoran, tersedia fasilitas valet parkir gratis.
                </p>
              </div>

              <div className="space-y-4 pt-6 border-t border-[#F0EDE8]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[#8F6E4D]">
                    <Clock className="w-4 h-4" aria-hidden="true" />
                    <span className="text-[11px] font-semibold uppercase tracking-wider">
                      Jadwal Praktek
                    </span>
                  </div>
                  <LiveClinicStatus variant="pill" />
                </div>

                <div className="space-y-2.5">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-xs sm:text-sm py-2 border-b border-[#F5F3EF] last:border-none"
                    >
                      <span className="text-[#6E7178]">{item.days}</span>
                      <span className="font-semibold text-[#1C1D1F]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-[#F0EDE8]">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#8F6E4D] block">
                  Kontak Langsung
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${contact.emergencyPhone}`}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F5F3EF] hover:bg-[#EFECE6] border border-[#E8E5DF] text-xs font-medium text-[#1C1D1F] transition-colors min-h-[44px]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#8F6E4D]" aria-hidden="true" />
                    <span>{contact.formattedEmergencyPhone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F5F3EF] hover:bg-[#EFECE6] border border-[#E8E5DF] text-xs font-medium text-[#1C1D1F] transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#8F6E4D]" aria-hidden="true" />
                    <span>Chat WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#F0EDE8]">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-6 py-4 rounded-xl bg-[#1C1D1F] hover:bg-black text-white text-xs font-medium tracking-wide transition-colors group"
              >
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ArrowUpRight className="w-4 h-4 text-[#8F6E4D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#F5F3EF] rounded-3xl border border-[#E8E5DF] overflow-hidden flex flex-col justify-between min-h-[420px]">
            <div className="p-4 px-6 bg-white border-b border-[#E8E5DF] flex items-center justify-between text-xs text-[#6E7178]">
              <span className="font-semibold text-[#1C1D1F]">Peta Lokasi Studio</span>
              <span>Surabaya Barat, Jawa Timur</span>
            </div>
            <div className="relative w-full flex-grow min-h-[380px]">
              <iframe
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "380px" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Peta Lokasi Lumina Dental Studio Surabaya"
                className="w-full h-full flex-grow filter saturate-80 contrast-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
