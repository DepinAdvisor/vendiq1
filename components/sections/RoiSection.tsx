"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView } from "motion/react";
import { Percent, Timer, TrendUp } from "@phosphor-icons/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { roi } from "@/content/roi";

const MAX_VENDS = 50; // máximo de la tabla, para normalizar las barras

/** Contador animado que sube de 0 al valor cuando entra en viewport. */
function Counter({
  to,
  prefix = "$",
  decimals = 0,
}: {
  to: number;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${v.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, prefix, decimals]);

  return (
    <span ref={ref} aria-label={`${prefix}${to.toLocaleString("en-US")}`}>
      {prefix}0
    </span>
  );
}

/** 6 escenarios de rentabilidad con contadores y barras animadas. */
export default function RoiSection() {
  return (
    <section
      id={roi.id}
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <Container className="relative">
        <SectionHeading
          eyebrow={roi.eyebrow}
          title={roi.title}
          subtitle={roi.subtitle}
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {roi.scenarios.map((scenario) => (
            <motion.article key={scenario.venue} variants={fadeUp}>
              <GlassCard className="h-full p-6">
                <h3 className="font-display text-lg font-semibold text-ink">
                  {scenario.venue}
                </h3>

                <p className="mt-4 flex items-baseline gap-2">
                  <span className="bg-gradient-to-r from-brand-500 to-violet-500 bg-clip-text font-display text-4xl font-semibold text-transparent">
                    <Counter to={scenario.monthlyUsd} />
                  </span>
                  <span className="text-sm text-ink-faint">USD / mes</span>
                </p>

                {/* Barra de ventas diarias */}
                <div className="mt-5">
                  <div className="flex items-center justify-between text-xs font-semibold text-ink-faint">
                    <span>{scenario.vendsPerDay} algodones / día</span>
                    {scenario.weekendBoost && (
                      <span className="rounded-full bg-sprinkle-lemon/25 px-2 py-0.5 text-sprinkle-orange">
                        📈 finde
                      </span>
                    )}
                  </div>
                  <div className="mt-1.5 h-2.5 overflow-hidden rounded-full bg-white/80">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: scenario.vendsPerDay / MAX_VENDS }}
                      viewport={{ once: true, margin: "-60px" }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                      className="h-full origin-left rounded-full bg-gradient-to-r from-sprinkle-pink via-brand-500 to-violet-500"
                    />
                  </div>
                </div>

                {scenario.paybackMonths !== null && (
                  <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-sprinkle-mint/60 bg-sprinkle-mint/15 px-3 py-1 text-xs font-bold text-ink">
                    <TrendUp size={14} weight="duotone" />
                    ROI en {scenario.paybackMonths}{" "}
                    {scenario.paybackMonths === 1 ? "mes" : "meses"}
                  </p>
                )}
              </GlassCard>
            </motion.article>
          ))}
        </motion.div>

        {/* Cifras de margen y disponibilidad */}
        <motion.div
          variants={stagger(0.15)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto mt-10 flex w-fit flex-col gap-3 sm:flex-row"
        >
          {[
            { icon: Percent, ...roi.margin },
            { icon: Timer, ...roi.uptime },
          ].map(({ icon: Icon, value, label }) => (
            <motion.p
              key={label}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-full border border-white/80 bg-white/70 px-6 py-3 shadow-soft"
            >
              <Icon size={22} weight="duotone" className="text-violet-600" />
              <span className="font-display text-lg font-semibold text-ink">{value}</span>
              <span className="text-sm text-ink-soft">{label}</span>
            </motion.p>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink-faint"
        >
          {roi.disclaimer}
          <br />
          {roi.mexicoNote}
        </motion.p>
      </Container>
    </section>
  );
}
