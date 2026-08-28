import type { FaqItem } from "./types";

export const faq = {
  id: "faq",
  eyebrow: "Preguntas frecuentes",
  title: "Todo lo que quieres saber",
  subtitle: "¿Falta algo? Escríbenos por WhatsApp y respondemos el mismo día.",
  items: [
    {
      question: "¿Cuánto me cuesta tener la máquina?",
      answer:
        "Nada. VENDIQ instala la máquina sin costo para ti y te paga una renta mensual por el espacio. No hay inversión, ni mensualidades, ni riesgo.",
    },
    {
      question: "¿Quién se encarga del mantenimiento y el reabastecimiento?",
      answer:
        "VENDIQ se encarga de todo: limpieza, reabastecimiento de azúcar, palitos y agua, reparaciones y monitoreo remoto. Tú no mueves un dedo.",
    },
    {
      question: "¿Cuánta electricidad consume?",
      answer:
        "Muy poca: comparable a una pantalla comercial. Además entra en modo de espera automáticamente y se apaga fuera del horario de tu local.",
    },
    {
      question: "¿Cuánto espacio necesita?",
      answer:
        "Menos de 1 m²: mide 136 cm de ancho, 72 cm de fondo y 205 cm de alto.",
    },
    {
      question: "¿Qué métodos de pago acepta?",
      answer:
        "Monedas, billetes, tarjetas bancarias (sin contacto) y código QR. Sin manejo de efectivo para tu personal.",
    },
    {
      question: "¿Qué pasa si la máquina se descompone o sufre un daño?",
      answer:
        "El equipo es responsabilidad de VENDIQ: está asegurado, cuenta con monitoreo remoto que detecta fallas antes de que las veas, y el servicio técnico está incluido.",
    },
  ] satisfies FaqItem[],
};
