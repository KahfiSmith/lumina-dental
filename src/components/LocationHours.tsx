import { clinicData } from "@/data/dental";
import { LiveClinicStatus } from "@/components/LiveClinicStatus";
import { MapPin, Clock, Phone, MessageCircle, ArrowUpRight } from "lucide-react";

export function LocationHours() {
  const { contact, schedule } = clinicData;

  return (
    <section id="lokasi" className="py-20 sm:py-28 bg-slate-50 text-slate-900 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0E7490] block mb-2">
            Akses Mudah &amp; Nyaman
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Lokasi Klinik &amp; Jadwal Praktek
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Berlokasi strategis di koridor utama Surabaya Barat dengan area parkir mobil dan motor yang luas serta akses ramah kursi roda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[#0E7490]">
                  <MapPin className="w-5 h-5" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider">
                    Alamat Lengkap
                  </span>
                </div>
                <address className="not-italic text-sm sm:text-base text-slate-800 font-medium leading-relaxed">
                  {contact.fullAddress}
                </address>
                <p className="text-xs text-slate-500">
                  (Patokan: Seberang gedung perkantoran, tersedia parkir valet gratis)
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-[#0E7490]">
                    <Clock className="w-5 h-5" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Jadwal Operasional
                    </span>
                  </div>
                  <LiveClinicStatus variant="pill" />
                </div>

                <div className="space-y-2">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-xs sm:text-sm py-1.5 border-b border-slate-100 last:border-none"
                    >
                      <span className="text-slate-600 font-medium">{item.days}</span>
                      <span className="font-bold text-slate-900">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100">
                <div className="text-xs font-bold uppercase tracking-wider text-[#0E7490]">
                  Kontak Cepat
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <a
                    href={`tel:${contact.emergencyPhone}`}
                    className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-[#0E7490]" aria-hidden="true" />
                    <span>{contact.formattedEmergencyPhone}</span>
                  </a>

                  <a
                    href={`https://wa.me/${contact.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800 transition-colors min-h-[44px]"
                  >
                    <MessageCircle className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                    <span>Chat WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E7490] hover:bg-[#155E75] text-white font-bold text-sm transition-colors shadow-xs min-h-[48px]"
              >
                <span>Buka Petunjuk Arah di Google Maps</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs min-h-[380px] lg:min-h-full">
            <iframe
              src={contact.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "360px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Lumina Dental Studio Surabaya"
              className="w-full h-full flex-grow filter contrast-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
