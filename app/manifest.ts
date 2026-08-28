import type { MetadataRoute } from "next";
import { BRAND_NAME, SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${BRAND_NAME} · ${SITE_NAME}`,
    short_name: SITE_NAME,
    description:
      "Máquina expendedora de algodón de azúcar. Renta tu espacio y recibe un ingreso mensual garantizado.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3effc",
    theme_color: "#f3effc",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
    lang: "es-MX",
  };
}
