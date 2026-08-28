import {
  AirplaneTilt,
  FilmReel,
  ForkKnife,
  ShoppingCart,
  Storefront,
  Tent,
} from "@phosphor-icons/react";

export const venues = {
  id: "espacios",
  eyebrow: "Espacios ideales",
  title: "Tu local es perfecto para Planeta Algodón",
  subtitle:
    "Buscamos socios en todo México. Estos son los espacios donde la máquina brilla.",
  items: [
    {
      icon: ForkKnife,
      name: "Restaurantes con área de juegos",
      reason:
        "El mejor punto: la entrada al área infantil. Los papás comen tranquilos mientras los niños esperan su algodón.",
      highlight: true,
      badge: "El mejor punto",
    },
    {
      icon: Tent,
      name: "Parques de diversiones",
      reason: "Donde la diversión y lo dulce se encuentran.",
    },
    {
      icon: AirplaneTilt,
      name: "Aeropuertos internacionales",
      reason: "Una pausa dulce para viajeros de todas las edades.",
    },
    {
      icon: Storefront,
      name: "Plazas comerciales",
      reason: "El imán de familias que convierte visitas en clientes.",
    },
    {
      icon: FilmReel,
      name: "Cines",
      reason: "El complemento perfecto antes o después de la película.",
    },
    {
      icon: ShoppingCart,
      name: "Supermercados",
      reason: "La recompensa dulce al final de las compras.",
    },
  ],
};
