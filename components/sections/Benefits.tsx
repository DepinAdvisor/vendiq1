"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Blob from "@/components/decorative/Blob";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { benefits } from "@/content/benefits";

/** Los 4 pilares del pitch: renta, familias, cero esfuerzo, tecnología. */
export default function Benefits() {
  return (
    <section
      id={benefits.id}
      className="relative overflow-hidden bg-cotton py-20 sm:py-24"
    >
      <Blob className="top-[-5rem] right-[-7rem] size-[20rem]" gradient="from-sprinkle-pink/30 via-cotton to-sprinkle-lavender/25" />

      <Container className="relative">
        <SectionHeading
          eyebrow={benefits.eyebrow}
          title={benefits.title}
          subtitle={benefits.subtitle}
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {benefits.items.map((item) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="rounded-card border border-white/80 bg-white/70 p-7 shadow-soft backdrop-blur-sm transition-shadow hover:shadow-lift"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-gradient-to-br from-cotton to-sky text-violet-600 transition-transform group-hover:scale-110">
                  <Icon size={30} weight="duotone" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm text-ink-soft">{item.description}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
