export interface Doctor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  sipNumber: string;
  education: string;
  schedule: string;
  photo: string;
  bio: string;
  availableDays: string[];
  slots: string[];
  focusTags: string[];
  isTodayOnDuty?: boolean;
}

export interface Treatment {
  id: string;
  name: string;
  category: "estetika" | "ortodonti" | "bedah" | "umum" | "anak";
  tag: string;
  description: string;
  priceStart: string;
  duration: string;
  recommendedFor: string;
  image: string;
  comfortScore?: string;
  painScale?: string;
  procedureSteps?: string[];
  technologyBadge?: string;
}

export interface SymptomGuide {
  id: string;
  symptom: string;
  severity: "Ringan" | "Sedang" | "Perlu Penanganan Cepat";
  possibleCause: string;
  recommendedTreatment: string;
  recommendedTreatmentId: string;
  doctorType: string;
  estimatedCost: string;
}

export interface SterilizationStep {
  number: string;
  title: string;
  description: string;
  standardDetail: string;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  treatmentType: string;
  description: string;
  durationText: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  doctorInCharge?: string;
  patientAge?: string;
  resultHighlight?: string;
}

export interface PatientReview {
  id: string;
  author: string;
  treatment: string;
  rating: number;
  date: string;
  comment: string;
  verifiedStatus: string;
}

export interface ClinicConfig {
  name: string;
  tagline: string;
  shortDescription: string;
  operatingLicense: string;
  contact: {
    emergencyPhone: string;
    formattedEmergencyPhone: string;
    whatsapp: string;
    whatsappFormatted: string;
    email: string;
    address: string;
    city: string;
    fullAddress: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  schedule: {
    days: string;
    time: string;
  }[];
  symptoms: SymptomGuide[];
  doctors: Doctor[];
  treatments: Treatment[];
  sterilizationSteps: SterilizationStep[];
  cases: BeforeAfterCase[];
  reviews: PatientReview[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    siteUrl: string;
    city: string;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
}
