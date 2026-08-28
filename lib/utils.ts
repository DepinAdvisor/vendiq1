import { DEFAULT_WA_MESSAGE, WHATSAPP_RAW } from "@/lib/site";

/** Une clases condicionales. */
export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

/** Construye un enlace wa.me con mensaje precargado. */
export function waLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${WHATSAPP_RAW}?text=${encodeURIComponent(message)}`;
}

/** Formatea montos en dólares (cifras típicas del fabricante). */
export function formatUsd(value: number) {
  return `$${value.toLocaleString("en-US")} USD`;
}
