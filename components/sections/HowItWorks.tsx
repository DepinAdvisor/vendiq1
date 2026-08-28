"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Blob from "@/components/decorative/Blob";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { howItWorks } from "@/content/howItWorks";

type TabKey = "venue" | "visitors";

const TABS: { key: TabKey; label: string }[] = [
  { key: "venue", label: howItWorks.venue.label },
  { key: "visitors", label: howItWorks.visitors.label },
];

/** Pestañas "Para tu negocio" / "Para tus visitantes" con 4 pasos cada una. */
export default function HowItWorks() {
  const [active, setActive] = useState<TabKey>("venue");
  const current = howItWorks[active];

  return (
    <section
      id={howItWorks.id}
      className="relative overflow-hidden bg-sky py-20 sm:py-24"
    >
      <Blob className="top-[-6rem] right-[-8rem] size-[24rem]" gradient="from-sprinkle-blue/35 via-sky to-sprinkle-lavender/25" />

      <Container className="relative">
        <SectionHeading
          eyebrow={howItWorks.eyebrow}
          title={howItWorks.title}
          subtitle={howItWorks.subtitle}
        />

        {/* Pestañas */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          role="tablist"
          aria-label="Perspectiva"
          className="mx-auto mt-10 flex w-fit gap-1 rounded-full border border-white/80 bg-white/70 p-1.5 shadow-soft"
        >
          {TABS.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={active === tab.key}
              onClick={() => setActive(tab.key)}
              className="relative cursor-pointer rounded-full px-6 py-2.5 text-sm font-bold"
            >
              {active === tab.key && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 to-violet-500 shadow-glow-pink"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors ${active === tab.key ? "text-white" : "text-ink-soft hover:text-ink"}`}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Contenido de la pestaña activa */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            role="tabpanel"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-ink-soft">
              {current.intro}
            </p>

            <motion.ol
              variants={stagger(0.1)}
              initial="hidden"
              animate="show"
              className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {current.steps.map((step, i) => (
                <motion.li key={step.title} variants={fadeUp} className="h-full">
                  <GlassCard className="h-full p-6">
                    <span className="grid size-11 place-items-center rounded-full bg-gradient-to-r from-brand-500 to-violet-500 font-display text-lg font-semibold text-white shadow-glow-pink">
                      {i + 1}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink-soft">{step.description}</p>
                  </GlassCard>
                </motion.li>
              ))}
            </motion.ol>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
}
