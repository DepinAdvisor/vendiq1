import {
  Broadcast,
  Broom,
  CreditCard,
  Cylinder,
  Leaf,
  MonitorPlay,
  MoonStars,
  Shapes,
} from "@phosphor-icons/react";

export const features = {
  id: "la-maquina",
  eyebrow: "La máquina",
  title: "Tecnología de otro planeta",
  subtitle:
    "Diseñada para operar sola, monitoreada las 24 horas y lista para los espacios más exigentes.",
  imageAlt: "Pantalla táctil de la máquina de algodón de azúcar Planeta Algodón",
  items: [
    {
      icon: MonitorPlay,
      title: 'Pantalla táctil HD de 32"',
      description: "Interfaz intuitiva y divertida que guía a cada cliente paso a paso.",
    },
    {
      icon: Cylinder,
      title: "Hasta 6 tolvas de azúcar",
      description: "Seis sabores disponibles sin intervención humana.",
    },
    {
      icon: CreditCard,
      title: "Pagos sin contacto",
      description: "Monedas, billetes, tarjeta bancaria y código QR.",
    },
    {
      icon: Broadcast,
      title: "Monitoreo IoT 24/7",
      description: "GPS, alertas de inventario y control remoto de precios desde una app.",
    },
    {
      icon: Broom,
      title: "Limpieza automática",
      description: "Sistema higiénico de limpieza entre preparaciones (modelos selectos).",
    },
    {
      icon: MoonStars,
      title: "Modo ahorro inteligente",
      description: "Entra en espera sola y se apaga fuera del horario del local.",
    },
    {
      icon: Leaf,
      title: "Palitos ecológicos",
      description: "Palitos de papel, amigables con el planeta.",
    },
    {
      icon: Shapes,
      title: "31+ diseños y chispitas",
      description: "Flores, corazones, nubes y más, con chispas opcionales.",
    },
  ],
};
