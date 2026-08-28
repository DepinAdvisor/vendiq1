"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Play, Sparkle } from "@phosphor-icons/react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Blob from "@/components/decorative/Blob";
import MascotCopito from "@/components/decorative/MascotCopito";
import { scaleIn, VIEWPORT } from "@/lib/motion";
import { video, videoSection } from "@/content/video";

/**
 * Sección de video con tres modos (content/video.ts):
 *  - "none":    tarjeta ilustrada "próximamente" (v1)
 *  - "file":    <video> nativo con controles
 *  - "youtube": fachada con poster que carga el iframe al hacer clic
 */
export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id={videoSection.id} className="relative overflow-hidden py-20 sm:py-24">
      <Blob className="top-[-6rem] left-[-8rem] size-[22rem]" gradient="from-sprinkle-lavender/35 via-sky to-sprinkle-mint/25" />

      <Container className="relative">
        <SectionHeading
          eyebrow={videoSection.eyebrow}
          title={videoSection.title}
          subtitle={videoSection.description}
        />

        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="show"
          viewport={VIEWPORT}
          className="relative mx-auto mt-12 max-w-4xl"
        >
          <div className="relative aspect-video overflow-hidden rounded-blob border border-white/80 bg-white/70 shadow-glow-pink backdrop-blur-sm">
            {video.type === "youtube" ? (
              playing ? (
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                  title={videoSection.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label={videoSection.playLabel}
                  className="group absolute inset-0 grid cursor-pointer place-items-center"
                >
                  {video.poster && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={video.poster}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                  <span className="relative grid place-items-center">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full bg-white/40 animate-pulse-ring"
                    />
                    <span className="relative grid size-20 place-items-center rounded-full bg-gradient-to-r from-brand-500 to-violet-500 text-white shadow-glow-pink transition-transform group-hover:scale-110">
                      <Play size={36} weight="fill" />
                    </span>
                  </span>
                </button>
              )
            ) : video.type === "file" ? (
              <video
                src={video.src}
                poster={video.poster}
                controls
                preload="none"
                className="absolute inset-0 h-full w-full object-cover"
              />
            ) : (
              /* Modo "none": ilustración mientras llega el video real */
              <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-cotton via-sky to-cosmos p-8 text-center">
                <div>
                  <MascotCopito size={120} className="mx-auto animate-float" />
                  <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-1.5 font-display text-sm font-semibold text-violet-600 shadow-soft">
                    <Sparkle size={16} weight="duotone" className="text-sprinkle-lemon" />
                    Próximamente
                  </p>
                  <p className="mt-3 text-sm text-ink-soft">{videoSection.comingSoon}</p>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
