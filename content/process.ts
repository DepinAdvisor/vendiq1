import type { ProcessStep } from "./types";

export const process = {
  id: "proceso",
  eyebrow: "Proceso",
  title: "Empezar es más fácil que pedir un algodón",
  subtitle:
    "De tu primer mensaje a tu primera renta, todo puede pasar en una semana.",
  steps: [
    {
      title: "Escríbenos por WhatsApp",
      description: "Cuéntanos de tu local y despejamos todas tus dudas.",
      badge: "Hoy mismo",
    },
    {
      title: "Evaluamos tu espacio",
      description: "Visitamos tu local y confirmamos que sea un punto ideal.",
      badge: "Sin costo",
    },
    {
      title: "Instalamos la máquina",
      description: "Nuestro equipo la deja lista para vender en menos de un día.",
      badge: "Sin costo",
    },
    {
      title: "Recibes tu renta",
      description: "Ingreso mensual garantizado, directo a tu cuenta.",
      badge: "Cada mes",
    },
  ] satisfies ProcessStep[],
};
