import { BRAND_NAME, SITE_NAME } from "@/lib/site";

export const footer = {
  description: `${SITE_NAME} es la máquina expendedora de algodón de azúcar más avanzada de México. Renta tu espacio a ${BRAND_NAME} y deja que la dulzura trabaje por ti.`,
  linksTitle: "Explora",
  contactTitle: "Contacto",
  whatsappCta: "Escríbenos por WhatsApp",
  legal: `© ${new Date().getFullYear()} ${BRAND_NAME} — ${SITE_NAME}. Todos los derechos reservados.`,
  legalLinks: [
    { label: "Aviso de privacidad", href: "#" },
    { label: "Términos y condiciones", href: "#" },
  ],
  madeWith: "Hecho con dulzura en México",
};
