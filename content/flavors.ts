import type { Flavor } from "./types";

export const flavors = {
  id: "sabores",
  eyebrow: "Sabores y diseños",
  title: "Seis sabores que enamoran",
  subtitle: "Un menú que los niños recuerdan y piden de regreso.",
  list: [
    {
      id: "fresa",
      name: "Fresa",
      description: "El clásico favorito de las niñas y los niños.",
      color: "#FF8FB3",
    },
    {
      id: "vainilla",
      name: "Vainilla",
      description: "Suave, dulce y reconfortante.",
      color: "#FFE3B3",
    },
    {
      id: "mora-azul",
      name: "Mora azul",
      description: "El toque de color que sorprende.",
      color: "#7FB8FF",
    },
    {
      id: "naranja",
      name: "Naranja",
      description: "Cítrico y lleno de energía.",
      color: "#FFB77F",
    },
    {
      id: "melon",
      name: "Melón",
      description: "Fresco y veraniego.",
      color: "#7FE0C8",
    },
    {
      id: "uva",
      name: "Uva",
      description: "Dulzura con personalidad.",
      color: "#C58FFF",
    },
  ] satisfies Flavor[],
  designsTitle: "Más de 31 diseños",
  designs: ["Flores", "Corazones", "Nubes", "Estrellas", "Honguitos"],
  designsNote: "…y mucho más, todos con chispitas opcionales de colores.",
};
