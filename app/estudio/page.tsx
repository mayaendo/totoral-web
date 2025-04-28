// app/estudio/page.tsx
"use client";

import Navegacion from "../../components/Navegacion";
import ElEstudio from "../../components/ElEstudio";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Footer from "../../components/Footer";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

const galleryItems = [
  { src: "/images/elestudio/estudio_setupescritorio.jpg", alt: "Setup de escritorio del estudio" },
  { src: "/images/elestudio/estudio_setupescritorio1.jpg", alt: "Setup de escritorio alternativo" },
  { src: "/images/elestudio/estudio_espacio.jpg", alt: "Espacio del estudio" },
  { src: "/images/elestudio/estudio_pad.jpg", alt: "Pad controlador" },
  { src: "/images/elestudio/estudio_bajo.jpg", alt: "Bajo eléctrico" },
  { src: "/images/elestudio/estudio_microblanco.jpg", alt: "Micrófono blanco" },
  { src: "/images/elestudio/estudio_midi.jpg", alt: "Controlador MIDI" },
  { src: "/images/elestudio/estudio_setupescritorio2.jpg", alt: "Setup de escritorio completo" },
  { src: "/images/elestudio/estudio_pantallas.jpg", alt: "Pantallas de monitoreo" },
  { src: "/images/elestudio/estudio_armonica.jpg", alt: "Armónica" },
  { src: "/images/elestudio/estudio_micronegro.jpg", alt: "Micrófono negro" },
  { src: "/images/elestudio/estudio_ampliylibros.jpg", alt: "Amplificador y libros" },
];

export default function EstudioPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleNext = useCallback(() => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex + 1) % galleryItems.length);
    }
  }, [activeIndex]);

  const handlePrev = useCallback(() => {
    if (activeIndex !== null) {
      setActiveIndex((activeIndex - 1 + galleryItems.length) % galleryItems.length);
    }
  }, [activeIndex]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (activeIndex !== null) {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setActiveIndex(null);
    }
  }, [activeIndex, handleNext, handlePrev]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <main className="relative overflow-hidden min-h-screen bg-primary">
      <Navegacion />
      <ElEstudio />

      <div className="pb-20 -mt-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] cursor-pointer bg-primary/50 backdrop-blur-sm border border-white/10"
                onClick={() => setActiveIndex(index)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button className="absolute top-6 right-6 text-white text-3xl z-50" onClick={() => setActiveIndex(null)}>
            <FaTimes />
          </button>
          <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-4xl z-50" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <div className="max-w-4xl w-full px-4">
            <Image
              src={galleryItems[activeIndex].src}
              alt={galleryItems[activeIndex].alt}
              width={1600}
              height={1600}
              className="w-full h-auto max-h-[80vh] object-contain mx-auto rounded-lg shadow-lg"
            />
          </div>
          <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-4xl z-50" onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      )}

      <Footer />
    </main>
  );
}

