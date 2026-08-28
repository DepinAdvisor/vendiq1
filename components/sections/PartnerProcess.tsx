"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { process } from "@/content/process";

/** 4 pasos con conector punteado que se dibuja al entrar en pantalla. */
export default function PartnerProcess() {
  return (
    <section
      id={process.id}
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          subtitle={process.subtitle}
        />

        <motion.ol
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6"
        >
          {/* Conector punteado (solo desktop) */}
          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="absolute top-6 right-[12.5%] left-[12.5%] hidden origin-left border-t-2 border-dashed border-sprinkle-lavender md:block"
          />

          {process.steps.map((step, i) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              className="flex flex-col items-center text-center"
            >
              <span className="relative z-10 grid size-12 place-items-center rounded-full border border-white/80 bg-white font-display text-lg font-semibold text-ink shadow-soft">
                {i + 1}
              </span>
              <span className="mt-3 rounded-full bg-gradient-to-r from-brand-500 to-violet-500 px-4 py-1 text-xs font-bold text-white shadow-glow-pink">
                {step.badge}
              </span>
              <h3 className="mt-3 font-display text-lg font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
