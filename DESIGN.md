# Design Direction: Lumina Dental Studio

## 1. Identity & Mood: Warm Modern Healthcare
- **Concept:** Warm Modern Healthcare (Comfort + Trust + Human Connection).
- **Visual Personality:**
  - Welcoming rather than clinical
  - Human rather than corporate
  - Calm rather than dramatic
  - Friendly rather than excessively luxurious or sterile
- **Core Emotional Goal:** "Tempat ini terlihat nyaman, bersih, profesional, dan saya tidak perlu takut untuk datang."
- **Dials:** `ENERGY 1 / RHYTHM 2 / MOTION 1`
  - **ENERGY 1 (Calm):** Generous whitespace, reassuring typography, transparent treatment details, zero artificial urgency.
  - **RHYTHM 2 (Balanced):** Purposeful variety across sections (split hero, comfort highlights, horizontal patient journey, clean treatment catalog, approachable specialist profiles, verified patient stories, and location concierge).
  - **MOTION 1 (Subtle):** Gentle hover states, smooth menu toggle, accessible modal transitions; zero aggressive parallax or distracting loops.

## 2. Color System (3 Core + 1 Accent)
- **Base Background:** `#FAF8F5` (Warm Alabaster Ivory) and `#FFFFFF` (Clean Studio White)
- **Surface & Subtle Tints:** `#F2EFE9` (Soft Oat Linen) and `#EBF2EE` (Calming Pale Sage Tint)
- **Text & Contrast:** `#1E242B` (Deep Warm Slate, contrast > 14:1)
- **Muted Subtext:** `#5E6773` (Muted Warm Slate, contrast > 5.2:1)
- **Single Deliberate Accent:** `#246A60` (Muted Healing Teal, contrast > 4.8:1 on light backgrounds)
- **Accent Hover:** `#1B524A`
- **Soft Accent Container:** `#E4EFEA`
- **Borders & Dividers:** `#E5DFD5` (Soft warm hairline border)

## 3. Typography
- **Primary Typeface:** `Plus Jakarta Sans` (Humanist, clean, friendly, with gentle curves that feel approachable and highly legible).
- **Hierarchy:** Warm sentence case and title case headings; comfortable line-height (`leading-relaxed` / `leading-snug`) to ease patient reading. No aggressive all-caps tracking.

## 4. Section Composition & Flow
1. **Navbar:** Approachable, sticky with subtle blur, clear navigation, direct phone link and booking CTA.
2. **Hero:** Modern split composition with authentic patient-doctor interaction photo, reassuring heading, and dual CTA (Janji Temu + Tanya WhatsApp).
3. **Patient Comfort ("Kenyamanan Anda Prioritas Kami"):** Dedicated anxiety-reduction highlights (ruang privat kedap suara, anestesi lembut, teknologi digital 3D bebas cetak mual, udara berfiltrasi HEPA H14).
4. **Patient Journey ("Alur Kunjungan yang Tenang & Sederhana"):** 01 Konsultasi Ramah -> 02 Pemeriksaan 3D -> 03 Rencana Tindakan Personal -> 04 Perawatan Nyaman & Evaluasi.
5. **Treatments Catalog ("Layanan & Estetika Senyum"):** Modern, airy layout with filterable categories, featured smile design spotlight, duration, comfort rating, and upfront pricing.
6. **Specialist Doctors ("Tim Dokter Spesialis"):** Approachable portraits, official SIP licenses, university credentials, and consultation hours.
7. **Clinical Cases ("Dokumentasi Hasil"):** Respectful before/after case documentation highlighting functional and aesthetic results.
8. **Patient Stories ("Kisah & Kenyamanan Pasien"):** Verified Google Maps reviews with prominent quote spotlight and 4.9 rating badge.
9. **Booking Concierge ("Reservasi Jadwal Konsultasi"):** Interactive selector linking directly to pre-formatted WhatsApp confirmation.
10. **Location & Studio ("Lokasi & Jam Praktik"):** Real-time open/closed status, full address, interactive map, and directions.
11. **Footer:** Comprehensive site directory, license number, emergency hotline, and clinic operating hours.

## 5. Anti-Slop Safeguards
- Zero em dashes (`—`).
- Every interactive element has a functional destination or trigger.
- Verified data only (from `src/data/dental.ts`).
- Mobile-first responsiveness with tap targets >= 44px and zero overflow.
