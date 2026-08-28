export type VideoConfig =
  | { type: "none" }
  | { type: "file"; src: string; poster?: string }
  | { type: "youtube"; id: string; poster?: string };

/**
 * Configuración del video de la máquina.
 * v1: video de referencia (cottonsugar.es) en public/video/.
 * Cuando exista video propio del sitio piloto: reemplazar el mp4 en
 * public/video/ y ajustar src/poster aquí — cero cambios en componentes.
 */
export const video: VideoConfig = {
  type: "file",
  src: "/video/maquina-algodon.mp4",
  poster: "/images/machine/machine-shapes.jpg",
};

export const videoSection = {
  id: "video",
  eyebrow: "Planeta Algodón en acción",
  title: "La magia que llena de dulzura tu local",
  description:
    "Elige, paga y observa: en menos de dos minutos, la máquina convierte el azúcar en una nube de dulzura frente a los ojos de tus visitantes.",
  comingSoon: "Muy pronto: el video real de nuestra máquina en operación.",
  playLabel: "Reproducir video",
};
