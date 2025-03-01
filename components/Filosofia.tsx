'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

export default function Filosofia() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // Animation for the section to reveal the content
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-primary py-10 text-white overflow-hidden opacity-90 transition-opacity duration-1000"
      style={{ 
        marginTop: '-1px', // Ensure no gap at the top
      }}
    >
      {/* Roots Image as Background - positioned to cover the top part of the section */}
      <div className="absolute inset-0 w-full" style={{ zIndex: 1, height: '60%' }}>
        <div className="relative w-full h-full max-w-2xl mx-auto">
          <Image
            src="/images/inicio/inicio_raices_marron.png"
            alt="Raíces de Totora"
            fill
            className="object-contain object-top"
            sizes="100vw"
            priority
            style={{ 
              transform: 'scale(0.7)',
              transformOrigin: 'top center'
            }}
          />
        </div>
      </div>
      
      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-primary opacity-5" style={{ zIndex: 2 }}></div>

      {/* Content positioned over the background */}
      <div className="w-full px-2 py-10 relative" style={{ zIndex: 3 }}>
        <div className="w-[95%] mx-auto">
          <div className="w-full text-center">
            <p className="text-lg md:text-xl font-lora leading-relaxed">
              En <span className="text-yellow">El Totoral</span>, creemos que la música es más que sonido; es una expresión del alma que merece ser capturada con autenticidad y pasión. Nuestro estudio combina <span className="text-yellow">calidad técnica</span>, <span className="text-yellow">ambiente creativo</span> y <span className="text-yellow">colaboración genuina</span> para crear experiencias sonoras que perduran en el tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 