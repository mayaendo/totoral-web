'use client';

import AlbumCarousel from "./AlbumCarousel";

export default function CarouselHome() {
  return (
    <section className="relative py-20 bg-primary text-white overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary/95"></div>
        <div className="absolute inset-0 bg-noise opacity-5 mix-blend-soft-light"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[5%] right-[10%] w-72 h-72 rounded-full bg-yellow/5 blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[5%] w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
          <div className="absolute top-[40%] left-[30%] w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-lora font-bold text-yellow relative inline-block">
            Nuestras Producciones
            <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-yellow/70 to-transparent absolute -bottom-4 left-0"></div>
          </h2>
        </div>
        <AlbumCarousel />
      </div>
    </section>
  );
}
