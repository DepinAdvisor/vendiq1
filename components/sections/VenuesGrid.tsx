"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { venues } from "@/content/venues";

/** Los 6 espacios ideales; restaurantes resaltado como mejor punto. */
export default function VenuesGrid() {
  return (
    <section
      id={venues.id}
      className="relative overflow-hidden bg-cotton py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={venues.eyebrow}
          title={venues.title}
          subtitle={venues.subtitle}
        />

        <motion.ul
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {venues.items.map((venue) => {
            const Icon = venue.icon;
            return (
              <motion.li
                key={venue.name}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className={`relative h-full rounded-card border p-7 shadow-soft backdrop-blur-sm transition-shadow hover:shadow-lift ${
                  venue.highlight
                    ? "border-transparent bg-gradient-to-br from-white/90 via-white/75 to-sprinkle-pink/40 ring-2 ring-brand-500/60"
                    : "border-white/80 bg-white/70"
                }`}
              >
                {venue.highlight && venue.badge && (
                  <span className="absolute -top-3.5 left-6 rounded-full bg-gradient-to-r from-brand-500 to-violet-500 px-4 py-1 text-xs font-bold text-white shadow-glow-pink">
                    ⭐ {venue.badge}
                  </span>
                )}
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-to-br from-cotton to-sky text-violet-600">
                  <Icon size={26} weight="duotone" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {venue.name}
                </h3>
                <p className="mt-2 text-sm text-ink-soft">{venue.reason}</p>
              </motion.li>
            );
          })}
        </motion.ul>
      </Container>
    </section>
  );
}
