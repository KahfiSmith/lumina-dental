import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lumina Dental Studio Surabaya",
    short_name: "Lumina Dental",
    description: "Klinik dokter gigi spesialis di Surabaya Barat dengan pendekatan ramah cemas, teknologi 3D, dan kenyamanan maksimal.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAF8F5",
    theme_color: "#246A60",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
