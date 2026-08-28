"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Broadcast } from "@phosphor-icons/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, scaleIn, stagger, VIEWPORT } from "@/lib/motion";
import { features } from "@/content/features";

/** Imagen grande de la máquina + rejilla de 8 características técnicas. */
export default function FeaturesGrid() {
  return (
    <section
      id={features.id}
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={features.eyebrow}
          title={features.title}
          subtitle={features.subtitle}
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[2fr_3fr]">
          {/* Máquina */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="animate-float-slow relative aspect-[3/4] overflow-hidden rounded-blob border border-white/80 bg-white/60 p-3 shadow-glow-violet backdrop-blur-sm">
              <Image
                src="/images/machine/machine-touchscreen.jpg"
                alt={features.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="rounded-[calc(var(--radius-blob)-0.75rem)] object-cover"
              />
            </div>
            {/* Chip flotante de monitoreo */}
            <div className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/80 bg-white/90 px-4 py-2 shadow-lift">
              <Broadcast size={18} weight="duotone" className="text-violet-600" />
              <span className="text-sm font-semibold whitespace-nowrap text-ink">
                {features.items[3].title}
              </span>
            </div>
          </motion.div>

          {/* Características */}
          <motion.ul
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="show"
            viewport={VIEWPORT}
            className="grid gap-4 sm:grid-cols-2"
          >
            {features.items.map((item) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  variants={fadeUp}
                  className="flex gap-4 rounded-card border border-white/80 bg-white/70 p-5 shadow-soft backdrop-blur-sm"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-cotton to-sky text-violet-600">
                    <Icon size={24} weight="duotone" />
                  </span>
                  <span>
                    <h3 className="font-display text-base font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-ink-soft">{item.description}</p>
                  </span>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </Container>
    </section>
  );
}
