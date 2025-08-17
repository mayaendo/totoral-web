import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Load the custom fonts
const lora = localFont({
  src: "../public/fonts/Lora-Regular.ttf",
  variable: "--font-lora",
  display: "swap",
});

const andaleMono = localFont({
  src: "../public/fonts/Andale Mono.ttf",
  variable: "--font-andale-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eltotoral.com"), // Reemplaza con tu dominio
  title:
    "El Totoral - Estudio de Grabación en Lima, Perú | Grabación, Mezcla y Masterización",
  description:
    "Estudio de grabación profesional en Lima, Perú. Ofrecemos servicios de grabación, mezcla y masterización de alta calidad para artistas y bandas. ¡Da vida a tu música en El Totoral!",
  keywords: [
    "estudio de grabación",
    "grabación de música",
    "mezcla de audio",
    "masterización",
    "producción musical",
    "Lima",
    "Perú",
    "El Totoral",
    "estudio de música",
    "grabación de voces",
    "grabación de instrumentos",
  ],
  authors: [{ name: "El Totoral", url: "https://eltotoral.com" }], // Reemplaza con tu dominio
  creator: "El Totoral",
  publisher: "El Totoral",
  openGraph: {
    title:
      "El Totoral | Estudio de Grabación Profesional en Lima, Perú",
    description:
      "Servicios de grabación, mezcla y masterización para llevar tu música al siguiente nivel.",
    url: "https://eltotoral.com", // Reemplaza con tu dominio
    siteName: "El Totoral",
    images: [
      {
        url: "/images/inicio/inicio_raices_color.png", // Reemplaza con una imagen representativa
        width: 1200,
        height: 630,
        alt: "Logo El Totoral Estudio de Grabación",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "El Totoral | Estudio de Grabación Profesional en Lima, Perú",
    description:
      "Servicios de grabación, mezcla y masterización para llevar tu música al siguiente nivel.",
    images: ["/images/inicio/inicio_raices_color.png"], // Reemplaza con una imagen representativa
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="overflow-x-hidden">
      <body
        className={`${lora.variable} ${andaleMono.variable} antialiased font-lora overflow-x-hidden m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}
