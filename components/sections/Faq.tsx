"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CaretDown } from "@phosphor-icons/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { faq } from "@/content/faq";
import type { FaqItem } from "@/content/types";

function AccordionItem({
  item,
  open,
  onToggle,
}: {
  item: FaqItem;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-card border border-white/80 bg-white/70 shadow-soft backdrop-blur-sm">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-lg font-semibold text-ink">
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="grid size-8 shrink-0 place-items-center rounded-full bg-cotton text-violet-600"
        >
          <CaretDown size={18} weight="bold" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="px-6 pb-5 text-ink-soft">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/** Acordeón de preguntas frecuentes, una abierta a la vez. */
export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={faq.id} className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          subtitle={faq.subtitle}
        />

        <motion.div
          variants={stagger(0.07)}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="mx-auto mt-14 flex max-w-3xl flex-col gap-4"
        >
          {faq.items.map((item, i) => (
            <motion.div key={item.question} variants={fadeUp}>
              <AccordionItem
                item={item}
                open={open === i}
                onToggle={() => setOpen(open === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
