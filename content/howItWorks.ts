import type { Step } from "./types";

export const howItWorks = {
  id: "como-funciona",
  eyebrow: "Cómo funciona",
  title: "Tan simple como pedir un algodón",
  subtitle:
    "Dos perspectivas, una misma magia: lo fácil que es para tu negocio y lo irresistible que es para tus visitantes.",
  venue: {
    label: "Para tu negocio",
    intro:
      "Sin inversión y sin esfuerzo: VENDIQ se encarga de todo. Tú solo cobras tu renta.",
    steps: [
      {
        title: "Nos escribes por WhatsApp",
        description: "Cuéntanos de tu local y despejamos todas tus dudas hoy mismo.",
      },
      {
        title: "Evaluamos tu espacio",
        description: "Visitamos tu local y confirmamos que sea un punto con potencial.",
      },
      {
        title: "Instalamos la máquina",
        description: "Sin costo para ti y lista para vender el mismo día.",
      },
      {
        title: "Recibes tu renta",
        description: "Ingreso mensual garantizado, directo y sin esfuerzo.",
      },
    ] satisfies Step[],
  },
  visitors: {
    label: "Para tus visitantes",
    intro:
      "Un espectáculo de 60 a 110 segundos que encanta a niños y adultos por igual.",
    steps: [
      {
        title: "Eligen forma y sabor",
        description: "Flores, corazones, nubes y más, en seis sabores.",
      },
      {
        title: "Pagan como prefieran",
        description: "Tarjeta, efectivo o QR: sin manejo de efectivo para tu personal.",
      },
      {
        title: "Ven girar su algodón",
        description: "La máquina lo prepara en vivo, detrás de un cristal.",
      },
      {
        title: "¡A disfrutar!",
        description: "Un algodón perfecto, higiénico y listo en segundos.",
      },
    ] satisfies Step[],
  },
};
