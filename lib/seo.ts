import { BRAND_NAME, SITE_NAME, SITE_URL, WHATSAPP_RAW } from "./site";
import { faq } from "@/content/faq";

/**
 * JSON-LD para la página: Organization, Product (sin ofertas — modelo de renta)
 * y FAQPage (espejo del acordeón). Se inyecta en el layout.
 */
export function jsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+${WHATSAPP_RAW}`,
      contactType: "sales",
      areaServed: "MX",
      availableLanguage: ["es"],
    },
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${SITE_NAME} — máquina expendedora de algodón de azúcar`,
    brand: { "@type": "Brand", name: BRAND_NAME },
    image: [`${SITE_URL}/images/machine/hero-machine.webp`],
    description:
      "Máquina expendedora de algodón de azúcar con pantalla táctil de 32\", pagos sin contacto y monitoreo IoT. VENDIQ la instala sin costo en tu local y te paga una renta mensual.",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return [organization, product, faqPage];
}
