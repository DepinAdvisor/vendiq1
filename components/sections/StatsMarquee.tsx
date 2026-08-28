"use client";

import { Sparkle } from "@phosphor-icons/react";
import Marquee from "@/components/ui/Marquee";
import { STATS } from "@/content/stats";

/** Cinta infinita con los datos clave de la máquina. */
export default function StatsMarquee() {
  return (
    <section
      aria-label="Datos clave"
      className="relative border-y border-white/60 bg-white/50 py-6"
    >
      <Marquee>
        {STATS.map((stat) => (
          <span
            key={stat.value}
            className="flex items-center gap-3 rounded-full border border-white/80 bg-white/70 px-6 py-3 shadow-soft"
          >
            <span className="font-display text-lg font-semibold whitespace-nowrap text-ink">
              {stat.value}
            </span>
            <span className="text-sm whitespace-nowrap text-ink-soft">
              {stat.label}
            </span>
            <Sparkle
              size={16}
              weight="duotone"
              className="ml-2 text-sprinkle-lemon"
            />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
