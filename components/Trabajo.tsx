'use client';

import { Play } from "lucide-react"
import AlbumCarousel from "./AlbumCarousel"
import Image from "next/image"

export default function Trabajo() {
  return (
    <section className="relative pt-24 md:pt-28 pb-20 bg-primary text-white overflow-hidden" id="trabajo">
      {/* Enhanced background with decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary to-primary/95"></div>
        
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-noise opacity-5 mix-blend-soft-light"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          {/* Abstract shapes */}
          <div className="absolute top-[5%] right-[10%] w-72 h-72 rounded-full bg-yellow/5 blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[5%] w-96 h-96 rounded-full bg-accent/5 blur-3xl"></div>
          <div className="absolute top-[40%] left-[30%] w-64 h-64 rounded-full bg-secondary/5 blur-3xl"></div>
          
          {/* Subtle musical notes or symbols */}
          <div className="absolute top-[15%] left-[15%] opacity-10">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17V5L20 3V15" stroke="#F9C80E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6" cy="17" r="3" stroke="#F9C80E" strokeWidth="2"/>
              <circle cx="17" cy="15" r="3" stroke="#F9C80E" strokeWidth="2"/>
            </svg>
          </div>
          <div className="absolute bottom-[30%] right-[20%] opacity-10">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 17V5L20 3V15" stroke="#F9C80E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6" cy="17" r="3" stroke="#F9C80E" strokeWidth="2"/>
              <circle cx="17" cy="15" r="3" stroke="#F9C80E" strokeWidth="2"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-lora font-bold text-yellow relative inline-block">
            Nuestro Trabajo
            <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-yellow/70 to-transparent absolute -bottom-4 left-0"></div>
          </h2>
        </div>

        <AlbumCarousel />

        <div className="mb-16">
          <h3 className="text-2xl font-lora font-semibold text-yellow mb-8 relative inline-block">
            Música Producida en El Totoral
            <div className="w-full h-[2px] bg-gradient-to-r from-yellow/50 to-transparent absolute -bottom-2 left-0"></div>
          </h3>
          <div className="bg-primary/30 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10 relative overflow-hidden">
            {/* Subtle background decoration for the card */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-yellow/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-xl translate-y-1/2 -translate-x-1/2"></div>
            </div>
            
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6 relative z-10">
              <div className="flex-shrink-0">
                <Play className="w-12 h-12 text-yellow drop-shadow-md" />
              </div>
              <div>
                <h4 className="text-xl font-lora font-semibold mb-2">Totoral Music</h4>
                <p className="font-mono text-white/80">
                  Una selección de música grabada, mezclada y producida por Lorenzo Tapia & Moncho Berry en El Totoral Studio.
                  Incluye artistas como Jaze, Temple Sour, Moncho Berry, rulolo, Maya Endo y más.
                </p>
              </div>
            </div>
            
            <div className="aspect-auto w-full rounded-lg overflow-hidden shadow-lg relative z-10">
              <iframe 
                src="https://open.spotify.com/embed/playlist/4ZOQDb0bT1n4nmCaJRyPPN?utm_source=generator&theme=0" 
                width="100%" 
                height="500" 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Totoral Music Playlist"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-lora font-semibold text-yellow mb-8 relative inline-block">
            Testimonios
            <div className="w-full h-[2px] bg-gradient-to-r from-yellow/50 to-transparent absolute -bottom-2 left-0"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary/30 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10 relative overflow-hidden">
              {/* Subtle quote mark decoration */}
              <div className="absolute top-4 left-4 opacity-10 text-6xl font-serif text-yellow">"</div>
              <div className="absolute bottom-4 right-4 opacity-10 text-6xl font-serif text-yellow">"</div>
              
              <p className="italic mb-4 font-mono relative z-10">
                &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.&rdquo;
              </p>
              <p className="font-lora text-yellow relative z-10">- Nombre del Artista</p>
            </div>
            <div className="bg-primary/30 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10 relative overflow-hidden">
              {/* Subtle quote mark decoration */}
              <div className="absolute top-4 left-4 opacity-10 text-6xl font-serif text-yellow">"</div>
              <div className="absolute bottom-4 right-4 opacity-10 text-6xl font-serif text-yellow">"</div>
              
              <p className="italic mb-4 font-mono relative z-10">
                &ldquo;Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.&rdquo;
              </p>
              <p className="font-lora text-yellow relative z-10">- Otro Artista</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

