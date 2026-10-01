import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lumina Dental Studio - Modern Smile Culture",
    short_name: "Lumina Smile",
    description: "Studio dokter gigi modern di Surabaya Barat dengan pendekatan ramah cemas, teknologi 3D, dan kenyamanan maksimal.",
    start_url: "/",
    display: "standalone",
    background_color: "#F9F9FB",
    theme_color: "#12151A",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
