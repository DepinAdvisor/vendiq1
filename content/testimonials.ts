import type { Testimonial } from "./types";

// TODO: reemplazar con testimonios reales del primer piloto en Puebla.
export const testimonials = {
  id: "testimonios",
  eyebrow: "Testimonios",
  title: "Lo que dicen nuestros socios",
  subtitle:
    "Muy pronto: las voces reales de los primeros locales con Planeta Algodón.",
  items: [
    {
      quote:
        "Desde que llegó la máquina, el área de juegos nunca se ve vacía. Los papás comen tranquilos y los niños esperan su algodón.",
      name: "Gerente de restaurante familiar",
      venue: "Restaurante",
      location: "Puebla",
    },
    {
      quote:
        "Es un ingreso que no esperábamos: la máquina trabaja sola y nosotros solo recibimos la renta.",
      name: "Administrador de plaza",
      venue: "Plaza comercial",
      location: "Puebla",
    },
    {
      quote:
        "Los visitantes se detienen a ver el espectáculo y se van con una sonrisa. Ya es parte de la experiencia.",
      name: "Operador de entretenimiento",
      venue: "Centro de entretenimiento",
      location: "México",
    },
  ] satisfies Testimonial[],
};
