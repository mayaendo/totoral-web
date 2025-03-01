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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-primary py-16 text-white overflow-hidden opacity-90 transition-opacity duration-1000"
      style={{ 
        marginTop: '-1px', // Ensure no gap at the top
      }}
    >
      {/* Roots Image as Background - positioned to cover the top part of the section */}
      <div className="absolute inset-0 w-full" style={{ zIndex: 1, height: '70%' }}>
        <div className="relative w-full h-full max-w-3xl mx-auto">
          <Image
            src="/images/inicio/raices de totora png.png"
            alt="Raíces de Totora"
            fill
            className="object-contain object-top"
            sizes="100vw"
            priority
            style={{ 
              transform: 'scale(0.8)',
              transformOrigin: 'top center'
            }}
          />
        </div>
      </div>
      
      {/* Semi-transparent overlay to improve text readability */}
      <div className="absolute inset-0 bg-primary opacity-80" style={{ zIndex: 2 }}></div>

      {/* Content positioned over the background */}
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-16 relative" style={{ zIndex: 3 }}>
        <div className="max-w-4xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl md:text-2xl font-lora leading-relaxed">
              En <span className="text-yellow">El Totoral</span>, creemos que la música es más que sonido; es una expresión del alma que merece ser capturada con autenticidad y pasión. Nuestro estudio combina <span className="text-yellow">calidad técnica</span>, <span className="text-yellow">ambiente creativo</span> y <span className="text-yellow">colaboración genuina</span> para crear experiencias sonoras que perduran en el tiempo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 