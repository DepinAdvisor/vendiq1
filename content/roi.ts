import type { RoiScenario } from "./types";

export const roi = {
  id: "rentabilidad",
  eyebrow: "Rentabilidad",
  title: "Resultados reales, dulces ingresos",
  subtitle:
    "Casos reportados por el fabricante en ubicaciones reales alrededor del mundo.",
  disclaimer:
    "Cifras típicas reportadas por el fabricante (USD). Los resultados pueden variar según ubicación, aforo, precio local y temporada.",
  mexicoNote: "En México, cada algodón se vende típicamente en ~$50 MXN.",
  margin: {
    value: "93.8%",
    label: "de margen por porción",
  },
  uptime: {
    value: "99.5%",
    label: "de tiempo activo de la máquina",
  },
  scenarios: [
    {
      venue: "Aeropuerto internacional",
      vendsPerDay: 50,
      monthlyUsd: 7035,
      paybackMonths: 1,
    },
    {
      venue: "Parque de diversiones",
      vendsPerDay: 40,
      monthlyUsd: 5628,
      paybackMonths: 1.3,
    },
    {
      venue: "Plaza comercial",
      vendsPerDay: 30,
      monthlyUsd: 4221,
      paybackMonths: 1.7,
      weekendBoost: true,
    },
    {
      venue: "Cine",
      vendsPerDay: 20,
      monthlyUsd: 2814,
      paybackMonths: null,
    },
    {
      venue: "Supermercado",
      vendsPerDay: 20,
      monthlyUsd: 2814,
      paybackMonths: null,
    },
    {
      venue: "Escuela",
      vendsPerDay: 10,
      monthlyUsd: 1407,
      paybackMonths: null,
    },
  ] satisfies RoiScenario[],
};
