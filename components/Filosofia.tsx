'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

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
      className="relative bg-primary py-16 text-white overflow-hidden opacity-90 transition-opacity duration-1000"
      style={{ 
        marginTop: '-1px', // Ensure no gap at the top
      }}
    >
      {/* Enhanced background with decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-radial from-primary via-primary/95 to-primary/90"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-noise opacity-5 mix-blend-soft-light"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Abstract shapes */}
          <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-yellow/5 blur-3xl"></div>
          <div className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-accent/5 blur-3xl"></div>
          
          {/* Subtle lines */}
          <div className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-yellow/10 to-transparent"></div>
          <div className="absolute top-0 right-[30%] w-[1px] h-full bg-gradient-to-b from-transparent via-accent/10 to-transparent"></div>
        </div>
      </div>

      {/* Content positioned over the background */}
      <div className="w-full px-4 py-10 relative z-10">
        <div className="w-[95%] max-w-4xl mx-auto">
          <div className="w-full text-center relative">
            {/* Small decorative element above text */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow to-transparent mx-auto mb-8"></div>
            
            <p className="text-lg md:text-xl font-lora leading-relaxed relative">
              En <span className="text-yellow drop-shadow-sm">El Totoral</span>, creemos que la música es más que sonido; es una expresión del alma que merece ser capturada con autenticidad y pasión. Nuestro estudio combina <span className="text-yellow drop-shadow-sm">calidad técnica</span>, <span className="text-yellow drop-shadow-sm">ambiente creativo</span> y <span className="text-yellow drop-shadow-sm">colaboración genuina</span> para crear experiencias sonoras que perduran en el tiempo.
            </p>
            
            {/* Small decorative element below text */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-yellow to-transparent mx-auto mt-8"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 