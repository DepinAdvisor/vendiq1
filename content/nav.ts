import { DEFAULT_WA_MESSAGE } from "@/lib/site";
import type { NavLink } from "./types";

export const NAV_LINKS: NavLink[] = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#rentabilidad", label: "Rentabilidad" },
  { href: "#sabores", label: "Sabores" },
  { href: "#faq", label: "Preguntas" },
];

export const NAV_CTA = {
  label: "Quiero mi máquina",
  message: DEFAULT_WA_MESSAGE,
};
