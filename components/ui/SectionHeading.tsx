"use client";

import { motion } from "motion/react";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
};

/** Encabezado de sección: chip eyebrow + h2 + subtítulo, con reveal en scroll. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={cn(
        "mx-auto max-w-2xl",
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow && (
        <motion.p
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/70 px-4 py-1.5 text-xs font-bold tracking-widest text-violet-600 uppercase shadow-soft"
        >
          <span className="size-1.5 rounded-full bg-sprinkle-pink" />
          {eyebrow}
          <span className="size-1.5 rounded-full bg-sprinkle-blue" />
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className="mt-4 text-3xl font-semibold text-ink sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p variants={fadeUp} className="mt-4 text-lg text-ink-soft">
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
