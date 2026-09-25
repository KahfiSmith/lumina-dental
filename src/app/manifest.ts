import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lumina Dental Studio",
    short_name: "Lumina Dental",
    description: "Klinik dokter gigi modern dan implan center di Surabaya dengan standar sterilisasi tinggi dan kenyamanan maksimal.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFFFFF",
    theme_color: "#0E7490",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
