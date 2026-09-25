import { clinicData } from "@/data/dental";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Dentist", "MedicalClinic"],
    "name": clinicData.name,
    "url": clinicData.seo.siteUrl,
    "telephone": clinicData.contact.emergencyPhone,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": clinicData.contact.address,
      "addressLocality": clinicData.contact.city,
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": clinicData.seo.coordinates.latitude,
      "longitude": clinicData.seo.coordinates.longitude
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "21:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Sunday"],
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "medicalSpecialty": [
      "Dentistry",
      "Orthodontics",
      "Prosthodontics",
      "PediatricDentistry"
    ],
    "acceptsReservations": "True"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
