'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Inicio() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [nextImageIndex, setNextImageIndex] = useState(1);
  const [initialZoom, setInitialZoom] = useState(false);
  const zoomStatesRef = useRef(Array(7).fill(false));
  
  const backgroundImages = [
    '/images/inicio/1.jpg',
    '/images/inicio/2.jpg',
    '/images/inicio/3.jpg',
    '/images/inicio/4.jpg',
    '/images/inicio/5.jpg',
    '/images/inicio/6.jpg',
    '/images/inicio/7.jpg',
  ];

  // Initial zoom effect for the first image only
  useEffect(() => {
    // Start with no zoom
    const timer = setTimeout(() => {
      setInitialZoom(true);
      zoomStatesRef.current[0] = true;
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Handle image rotation
  useEffect(() => {
    // Don't start the rotation until the initial zoom has started
    if (!initialZoom) return;
    
    const interval = setInterval(() => {
      // Set up the next image index
      const next = (currentImageIndex + 1) % backgroundImages.length;
      setNextImageIndex(next);
      
      // Start zooming the next image before it becomes visible
      zoomStatesRef.current[next] = true;
      
      // After a short delay, update the current image
      setTimeout(() => {
        setCurrentImageIndex(next);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex, backgroundImages.length, initialZoom]);

  return (
    <section className="relative h-screen w-full overflow-hidden -mt-[4rem]" style={{ margin: 0, padding: 0 }}>
      {/* Decorative Elements - Background Patterns */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-primary/40"></div>
        
        {/* Animated floating particles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="particle-1 absolute w-4 h-4 rounded-full bg-yellow/10 blur-sm"></div>
          <div className="particle-2 absolute w-6 h-6 rounded-full bg-accent/10 blur-sm"></div>
          <div className="particle-3 absolute w-3 h-3 rounded-full bg-secondary/10 blur-sm"></div>
          <div className="particle-4 absolute w-5 h-5 rounded-full bg-yellow/10 blur-sm"></div>
          <div className="particle-5 absolute w-8 h-8 rounded-full bg-white/5 blur-md"></div>
        </div>
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
      </div>

      {/* Background Images with Zoom Effect */}
      {backgroundImages.map((image, index) => {
        // Determine if this image is active, next, or inactive
        const isActive = index === currentImageIndex;
        const isNext = index === nextImageIndex;
        const isZoomed = index === 0 ? initialZoom : zoomStatesRef.current[index];
        
        return (
          <div
            key={image}
            className={`absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-2000 ease-in-out ${
              isActive ? 'opacity-100' : isNext ? 'opacity-0 z-5' : 'opacity-0'
            }`}
            style={{ 
              transitionProperty: 'opacity',
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {/* Enhanced overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10"></div>
            
            {/* Texture overlay */}
            <div className="absolute inset-0 bg-noise opacity-10 mix-blend-overlay z-10"></div>
            
            <div 
              className="absolute inset-0"
              style={{ 
                transform: isZoomed ? 'scale(1.2)' : 'scale(1.1)',
                transition: 'transform 5s ease-out',
                transformOrigin: 'center center'
              }}
            >
              <Image
                src={image}
                alt={`Background ${index + 1}`}
                fill
                priority={index === 0 || index === 1}
                className="object-cover"
                sizes="100vw"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          </div>
        );
      })}

      {/* Left-aligned Content */}
      <div className="relative z-20 flex h-full text-white px-4 md:px-16 lg:px-24 pt-28">
        <div className="flex flex-col justify-center items-start max-w-md">
          <div className="font-lora text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide">
            <div className="mb-2">
              <div>
                <Image 
                  src="/images/logo blanco sin marco.png" 
                  alt="El Totoral Logo" 
                  width={310} 
                  height={100} 
                  className="mb-3 drop-shadow-lg"
                />
              </div>
              <p className="mt-2">es el <span className="text-yellow drop-shadow-md">estudio</span></p>
            </div>
            <p className="mb-2">donde la <span className="text-yellow drop-shadow-md">música</span></p>
            <p>echa <span className="text-yellow drop-shadow-md">raíces</span></p>
          </div>
        </div>
      </div>

      {/* Contact Button - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-30 flex flex-col items-center">
        <Link href="/contacto">
          <button className="bg-yellow text-primary px-6 py-3 rounded-full font-mono text-lg font-bold hover:bg-white transition-colors duration-300 shadow-lg">
            Contacto
          </button>
        </Link>
      </div>
    </section>
  );
}

