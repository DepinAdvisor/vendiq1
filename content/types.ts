import type { Icon } from "@phosphor-icons/react";

export interface NavLink {
  href: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Flavor {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface Feature {
  icon: Icon;
  title: string;
  description: string;
}

export interface RoiScenario {
  venue: string;
  vendsPerDay: number;
  monthlyUsd: number;
  /** Meses estimados para recuperar la inversión (null = no reportado). */
  paybackMonths: number | null;
  weekendBoost?: boolean;
}

export interface Venue {
  icon: Icon;
  name: string;
  reason: string;
  highlight?: boolean;
  /** Texto del chip flotante cuando highlight es true. */
  badge?: string;
}

export interface ProcessStep {
  title: string;
  description: string;
  badge: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  venue: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
