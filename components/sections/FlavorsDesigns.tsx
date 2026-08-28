"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CottonCandyShape, {
  type CandyShape,
} from "@/components/decorative/CottonCandyShape";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { flavors } from "@/content/flavors";

/** Ciclo de formas para que cada sabor luzca distinto. */
const SHAPE_CYCLE: CandyShape[] = [
  "cloud",
  "heart",
  "flower",
  "star",
  "cloud",
  "heart",
];

const DESIGN_SHAPES: Record<string, CandyShape> = {
  Flores: "flower",
  Corazones: "heart",
  Nubes: "cloud",
  Estrellas: "star",
  Honguitos: "cloud",
};

/** 6 sabores con su algodón ilustrado + banda de diseños. */
export default function FlavorsDesigns() {
  return (
    <section
      id={flavors.id}
      className="relative overflow-hidden bg-sky py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={flavors.eyebrow}
          title={flavors.title}
          subtitle={flavors.subtitle}
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {flavors.list.map((flavor, i) => (
            <motion.article
              key={flavor.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="flex items-center gap-5 rounded-card border border-white/80 bg-white/70 p-5 shadow-soft backdrop-blur-sm transition-shadow hover:shadow-lift"
            >
              <span className="grid size-24 shrink-0 place-items-center rounded-2xl bg-white/70">
                <CottonCandyShape
                  shape={SHAPE_CYCLE[i % SHAPE_CYCLE.length]}
                  color={flavor.color}
                  size={64}
                />
              </span>
              <span>
                <h3 className="font-display text-lg font-semibold text-ink">
                  {flavor.name}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">{flavor.description}</p>
              </span>
            </motion.article>
          ))}
        </motion.div>

        {/* Banda de diseños */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-16 text-center"
        >
          <h3 className="font-display text-2xl font-semibold text-ink">
            {flavors.designsTitle}
          </h3>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {flavors.designs.map((design) => (
              <span
                key={design}
                className="flex items-center gap-2 rounded-full border border-white/80 bg-white/70 py-1.5 pr-5 pl-2 shadow-soft"
              >
                <CottonCandyShape
                  shape={DESIGN_SHAPES[design] ?? "cloud"}
                  color="#B49CFF"
                  size={34}
                />
                <span className="font-display text-sm font-semibold text-ink">
                  {design}
                </span>
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink-soft">{flavors.designsNote}</p>
        </motion.div>
      </Container>
    </section>
  );
}
