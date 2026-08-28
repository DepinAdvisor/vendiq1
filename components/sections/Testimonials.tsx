"use client";

import { motion } from "motion/react";
import { Quotes } from "@phosphor-icons/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { testimonials } from "@/content/testimonials";

/** Iniciales del avatar: primeras dos letras del nombre. */
function initials(name: string) {
  return name.slice(0, 2);
}

/** 3 tarjetas de testimonios (placeholder hasta el primer piloto). */
export default function Testimonials() {
  return (
    <section
      id={testimonials.id}
      className="relative overflow-hidden bg-sky py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          subtitle={testimonials.subtitle}
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.items.map((testimonial) => (
            <motion.figure
              key={testimonial.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="flex h-full flex-col rounded-card border border-white/80 bg-white/70 p-7 shadow-soft backdrop-blur-sm transition-shadow hover:shadow-lift"
            >
              <Quotes size={32} weight="duotone" className="text-sprinkle-lavender" />
              <blockquote className="mt-4 flex-1 text-ink-soft">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-sprinkle-pink to-violet-500 font-display text-sm font-semibold text-white">
                  {initials(testimonial.name)}
                </span>
                <span>
                  <span className="block font-display text-sm font-semibold text-ink">
                    {testimonial.name}
                  </span>
                  <span className="block text-xs text-ink-faint">
                    {testimonial.venue} · {testimonial.location}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
