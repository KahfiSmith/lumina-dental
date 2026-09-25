# Design Direction: Lumina Dental Care & Studio

## 1. Identity & Mood
- **Brand Aesthetic:** Warm Clinical Luxury (Modern dental care meets soothing, calming comfort).
- **Tone:** Empathetic, highly professional, sterile, transparent, comforting.
- **Dials:** `ENERGY 1 / RHYTHM 2 / MOTION 1`
  - **ENERGY 1 (Calm):** Generous whitespace, reassuring typography, medical clarity, no aggressive pressure.
  - **RHYTHM 2 (Balanced):** Purposeful layout changes between clinical hero, doctor credentials, treatment cards, hygiene standards, patient social proof, and appointment booking.
  - **MOTION 1 (Subtle):** Micro-interactions on buttons, smooth drawer/modal transitions only; zero perpetual loops or bouncing elements.

## 2. Palette (3 Core + 1 Accent)
- **Background Core:** `#FFFFFF` and `#F8FAFC` (Pure Clinical Slate)
- **Container / Card Core:** `#F1F5F9` (Soft Medical Pearl)
- **Text & Contrast Core:** `#0F172A` (Deep Slate Navy, contrast > 18:1)
- **Muted Subtext:** `#475569` (Muted Slate, contrast > 6.5:1)
- **Single Deliberate Accent:** `#0E7490` (Deep Medical Teal, contrast > 5.0:1)
- **Border:** `#E2E8F0` (1px clean hairline)

## 3. Typography
- **Headings (Display):** Plus Jakarta Sans (Clean, modern, crisp, professional)
- **Body & Data:** Plus Jakarta Sans (Optimized for legibility of medical terms and pricing)

## 4. Anti-Slop Enforcement
- **Copywriting:** Zero em dashes (`—`). Clear, reassuring, patient-centric Indonesian copy.
- **Interactive Controls:** Every button links to real sections or triggers WhatsApp consultation with prefilled patient complaint details.
- **Mobile First:** Minimum 44px tap targets, zero horizontal overflow.
- **Real Content:** Data isolated in `src/data/dental.ts`.
