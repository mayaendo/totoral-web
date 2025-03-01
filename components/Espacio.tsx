'use client';

import { useState } from 'react';
import EspacioGallery from './EspacioGallery';

interface EspacioImage {
  src: string;
  alt: string;
}

export default function Espacio() {
  const espacioImages: EspacioImage[] = [
    { src: '/images/estudio/espacio1.jpg', alt: 'Sala principal de grabación' },
    { src: '/images/estudio/espacio2.jpg', alt: 'Cabina de control' },
    { src: '/images/estudio/espacio3.jpg', alt: 'Sala de instrumentos' },
    { src: '/images/estudio/espacio4.jpg', alt: 'Área de descanso' },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % espacioImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + espacioImages.length) % espacioImages.length);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-lora font-semibold mb-12 text-center">
          El <span className="text-yellow">Espacio</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image Gallery */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <EspacioGallery 
              images={espacioImages} 
              currentIndex={currentImage}
            />
            
            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button 
                onClick={prevImage}
                className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Imagen anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextImage}
                className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                aria-label="Siguiente imagen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* Image Indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
              {espacioImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImage ? 'bg-yellow' : 'bg-white/50'
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-2xl font-lora text-yellow mb-6">Un lugar diseñado para la creatividad</h3>
            <p className="text-lg font-lora mb-6 leading-relaxed">
              El Totoral cuenta con instalaciones diseñadas específicamente para la grabación y producción musical, 
              combinando acústica profesional con un ambiente cálido y acogedor que inspira la creatividad.
            </p>
            <p className="text-lg font-lora mb-6 leading-relaxed">
              Nuestro estudio ofrece:
            </p>
            <ul className="space-y-4 font-mono">
              <li className="flex items-start">
                <span className="text-yellow mr-3">•</span>
                <span>Sala principal de grabación con tratamiento acústico profesional</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-3">•</span>
                <span>Cabina de control equipada con tecnología de última generación</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-3">•</span>
                <span>Sala de instrumentos con piano, guitarras y percusión disponibles</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-3">•</span>
                <span>Área de descanso para artistas y productores</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow mr-3">•</span>
                <span>Ambiente inspirador rodeado de naturaleza</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 