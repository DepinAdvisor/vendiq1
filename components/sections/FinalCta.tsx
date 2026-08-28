"use client";

import { motion } from "motion/react";
import Container from "@/components/ui/Container";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StarField from "@/components/decorative/StarField";
import MascotCopito from "@/components/decorative/MascotCopito";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { finalCta } from "@/content/finalCta";

/** Panel final de conversión: gradiente rosa-violeta con mascota y WhatsApp. */
export default function FinalCta() {
  return (
    <section id={finalCta.id} className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="relative overflow-hidden rounded-blob bg-gradient-to-br from-brand-500 via-brand-500 to-violet-500 px-6 py-16 text-center shadow-glow-pink sm:px-16 sm:py-20"
        >
          <StarField className="opacity-40" />
          <MascotCopito size={130} className="animate-float" />

          <motion.p
            variants={fadeUp}
            className="mt-6 font-display text-sm font-semibold tracking-widest text-white/80 uppercase"
          >
            {finalCta.kicker}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-3 max-w-2xl text-[clamp(2rem,5vw,3.25rem)] leading-tight font-semibold text-white"
          >
            {finalCta.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-white/85"
          >
            {finalCta.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <WhatsAppButton
              label={finalCta.cta}
              size="lg"
              className="bg-white text-whatsapp shadow-lift hover:brightness-95"
            />
          </motion.div>
          <motion.p variants={fadeUp} className="mt-4 text-sm text-white/75">
            {finalCta.whatsappNote}
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
