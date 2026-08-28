"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { CaretDown, Clock, Sparkle } from "@phosphor-icons/react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import StarField from "@/components/decorative/StarField";
import Clouds from "@/components/decorative/Clouds";
import Blob from "@/components/decorative/Blob";
import Sprinkles from "@/components/decorative/Sprinkles";
import MascotCopito from "@/components/decorative/MascotCopito";
import { fadeUp, stagger } from "@/lib/motion";
import { hero } from "@/content/hero";

export default function Hero() {
  const { scrollY } = useScroll();
  const starsFar = useTransform(scrollY, [0, 600], [0, -90]);
  const cloudsY = useTransform(scrollY, [0, 600], [0, 60]);

  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-36 pb-24 lg:pt-44"
    >
      {/* Fondo: cielo pastel con galaxias */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-cosmos via-sky to-cotton"
      />
      <Blob className="top-[-8rem] right-[-10rem] size-[30rem]" />
      <Blob
        className="bottom-[-6rem] left-[-8rem] size-[24rem]"
        gradient="from-sprinkle-blue/40 via-sprinkle-mint/25 to-sprinkle-lavender/35"
      />
      <motion.div style={{ y: starsFar }} className="absolute inset-0">
        <StarField />
      </motion.div>
      <motion.div style={{ y: cloudsY }} className="absolute inset-0">
        <Clouds />
      </motion.div>
      <Sprinkles className="opacity-60" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* Columna de texto */}
          <motion.div variants={stagger(0.12)} initial="hidden" animate="show">
            <motion.p
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-bold tracking-widest text-violet-600 uppercase shadow-soft"
            >
              <Sparkle size={16} weight="duotone" className="text-sprinkle-lemon" />
              {hero.kicker}
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-5 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.08] font-semibold text-ink"
            >
              {hero.titleTop}{" "}
              <span className="bg-gradient-to-r from-brand-500 via-violet-500 to-sprinkle-blue bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>{" "}
              {hero.titleBottom}
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-ink-soft">
              {hero.subtitle}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsAppButton label={hero.primaryCta} size="lg" />
              <Button
                href={hero.secondaryCtaHref}
                variant="secondary"
                size="lg"
                icon={<CaretDown size={20} weight="bold" />}
              >
                {hero.secondaryCta}
              </Button>
            </motion.div>

            <motion.ul variants={fadeUp} className="mt-8 flex flex-wrap gap-2.5">
              {hero.trustChips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-full border border-white/80 bg-white/60 px-4 py-2 text-sm font-semibold text-ink-soft"
                >
                  ✨ {chip}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Columna visual: máquina + mascota */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg"
          >
            <div className="animate-float-slow">
              <div className="relative aspect-[4/3] overflow-hidden rounded-blob border border-white/80 bg-white/60 p-3 shadow-glow-pink backdrop-blur-sm">
                <Image
                  src="/images/machine/hero-machine.webp"
                  alt={hero.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="rounded-[calc(var(--radius-blob)-0.75rem)] object-cover"
                />
              </div>
            </div>

            {/* Insignia flotante */}
            <div className="absolute -bottom-6 -left-2 flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-5 py-3 shadow-lift sm:-left-8">
              <Clock size={22} weight="duotone" className="text-violet-600" />
              <span className="font-display text-sm font-semibold text-ink">
                {hero.imageBadge}
              </span>
            </div>

            {/* Copito asomándose */}
            <div className="absolute -top-12 -right-2 animate-float sm:-right-6">
              <MascotCopito size={110} />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
