'use client';

import Navegacion from "../../components/Navegacion";
import { useState } from "react";
import Image from "next/image";

// Define the gallery items with descriptions based on image names
const galleryItems = [
  {
    src: "/images/elestudio/estudio_setupescritorio.jpg",
    alt: "Setup de escritorio del estudio",
    description: "Estación de trabajo principal con equipos de producción y mezcla"
  },
  {
    src: "/images/elestudio/estudio_setupescritorio1.jpg",
    alt: "Setup de escritorio alternativo",
    description: "Vista alternativa de la estación de trabajo con monitores y controladores"
  },
  {
    src: "/images/elestudio/estudio_espacio.jpg",
    alt: "Espacio del estudio",
    description: "Ambiente acústicamente tratado para grabaciones profesionales"
  },
  {
    src: "/images/elestudio/estudio_pad.jpg",
    alt: "Pad controlador",
    description: "Controlador MIDI para producción y programación de ritmos"
  },
  {
    src: "/images/elestudio/estudio_bajo.jpg",
    alt: "Bajo eléctrico",
    description: "Bajo eléctrico disponible para sesiones de grabación"
  },
  {
    src: "/images/elestudio/estudio_microblanco.jpg",
    alt: "Micrófono blanco",
    description: "Micrófono de condensador para captación vocal de alta fidelidad"
  },
  {
    src: "/images/elestudio/estudio_midi.jpg",
    alt: "Controlador MIDI",
    description: "Teclado MIDI para composición y arreglos musicales"
  },
  {
    src: "/images/elestudio/estudio_setupescritorio2.jpg",
    alt: "Setup de escritorio completo",
    description: "Vista completa del área de producción y mezcla"
  },
  {
    src: "/images/elestudio/estudio_pantallas.jpg",
    alt: "Pantallas de monitoreo",
    description: "Monitores para edición visual y mezcla de audio"
  },
  {
    src: "/images/elestudio/estudio_armonica.jpg",
    alt: "Armónica",
    description: "Armónica para sesiones de grabación y detalles melódicos"
  },
  {
    src: "/images/elestudio/estudio_micronegro.jpg",
    alt: "Micrófono negro",
    description: "Micrófono dinámico profesional para voces e instrumentos"
  },
  {
    src: "/images/elestudio/estudio_ampliylibros.jpg",
    alt: "Amplificador y libros",
    description: "Amplificador de guitarra y biblioteca de referencia musical"
  }
];

export default function EstudioPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <main className="relative overflow-hidden min-h-screen bg-primary">
      <Navegacion />
      
      <div className="pt-24 md:pt-28 pb-8">
        <h1 className="text-4xl md:text-5xl font-lora text-center text-yellow mb-8">El Estudio</h1>
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02] cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                />
                
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-primary/80 flex items-end p-4 transition-opacity duration-300">
                    <div>
                      <h3 className="text-yellow font-mono text-lg font-bold mb-1">{item.alt}</h3>
                      <p className="text-white font-mono text-sm">{item.description}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 max-w-3xl mx-auto text-center text-white">
            <p className="font-mono text-lg">
              Nuestro estudio está equipado con tecnología de punta para ofrecer la mejor calidad en grabación, 
              producción, mezcla y masterización. Un espacio diseñado para potenciar tu creatividad y llevar 
              tu música al siguiente nivel.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 