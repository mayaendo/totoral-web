'use client';

import Image from 'next/image';

interface EspacioImage {
  src: string;
  alt: string;
}

interface EspacioGalleryProps {
  images: EspacioImage[];
  currentIndex: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
}

export default function EspacioGallery({ 
  images, 
  currentIndex, 
  onPrev, 
  onNext, 
  onSelect 
}: EspacioGalleryProps) {
  return (
    <>
      {images.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority={index === 0}
          />
        </div>
      ))}
      
      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button 
          onClick={onPrev}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
          aria-label="Imagen anterior"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={onNext}
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
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-yellow' : 'bg-white/50'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
} 