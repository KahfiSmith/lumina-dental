import { clinicData } from "@/data/dental";
import { LiveClinicStatus } from "@/components/LiveClinicStatus";
import { MapPin, Clock, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export function LocationHours() {
  const { contact, schedule } = clinicData;

  const mapEmbedUrl =
    "https://www.openstreetmap.org/export/embed.html?bbox=112.6950%2C-7.3050%2C112.7350%2C-7.2750&layer=mapnik&marker=-7.2930%2C112.7150";

  return (
    <section id="lokasi" className="scroll-mt-24 py-20 sm:py-28 bg-[#F2EFE9] text-[#1E242B] border-b border-[#E5DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <span className="text-xs font-semibold tracking-wider text-[#246A60] uppercase">
            Akses &amp; Lokasi
          </span>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#1E242B]">
            Kunjungi klinik kami di Surabaya Barat.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5E6773] leading-relaxed">
            Berlokasi strategis di koridor utama Mayjen Sungkono dengan akses mudah, fasilitas parkir luas, dan lingkungan klinik yang ramah kursi roda.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address & Hours Information */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-10 rounded-3xl border border-[#E5DFD5] shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              {/* Address */}
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-[#246A60]">
                  <MapPin className="w-4 h-4" />
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    Alamat Klinik
                  </span>
                </div>
                <address className="not-italic text-sm sm:text-base text-[#1E242B] font-medium leading-relaxed">
                  {contact.fullAddress}
                </address>
                <p className="text-xs text-[#5E6773]">
                  Patokan: Seberang gedung perkantoran, tersedia fasilitas parkir mobil dan motor gratis.
                </p>
              </div>

              {/* Operating Hours & Live Status */}
              <div className="space-y-3 pt-6 border-t border-[#EFEBE4]">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[#246A60]">
                    <Clock className="w-4 h-4" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Jadwal Praktik
                    </span>
                  </div>
                  <LiveClinicStatus variant="pill" />
                </div>

                <div className="space-y-2">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-[#FAF8F5] last:border-none"
                    >
                      <span className="text-[#5E6773]">{item.days}</span>
                      <span className="font-semibold text-[#1E242B]">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Channels */}
              <div className="space-y-3 pt-6 border-t border-[#EFEBE4]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#246A60] block">
                  Kontak Langsung
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`tel:${contact.emergencyPhone}`}
                    className="flex items-center gap-2 p-3 rounded-2xl bg-[#FAF8F5] hover:bg-[#E4EFEA] border border-[#E5DFD5] text-xs font-semibold text-[#1E242B] transition-colors min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-[#246A60]" />
                    <span>{contact.formattedEmergencyPhone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-2xl bg-[#FAF8F5] hover:bg-[#E4EFEA] border border-[#E5DFD5] text-xs font-semibold text-[#1E242B] transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#246A60]" />
                    <span>Chat WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EFEBE4]">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-6 py-4 rounded-full bg-[#246A60] hover:bg-[#1B524A] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs group"
              >
                <span>Petunjuk Arah di Google Maps</span>
                <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E5DFD5] shadow-xs overflow-hidden flex flex-col justify-between min-h-[420px]">
            <div className="p-4 px-6 bg-[#FAF8F5] border-b border-[#E5DFD5] flex items-center justify-between text-xs text-[#5E6773]">
              <span className="font-semibold text-[#1E242B]">Peta Lokasi Lumina Dental Studio</span>
              <span>Mayjen Sungkono, Surabaya Barat</span>
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
                title="Peta Lokasi Lumina Dental Studio Surabaya Barat"
                className="w-full h-full flex-grow filter saturate-90"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
