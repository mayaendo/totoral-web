'use client';

import Image from "next/image";

export default function Filosofia() {
  return (
    <section className="bg-primary py-20 text-white">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-lora font-semibold mb-12 text-center text-yellow">
            Nuestra Filosofía
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl md:text-2xl font-lora mb-6 leading-relaxed">
                En <span className="text-yellow">El Totoral</span>, creemos que la música es más que sonido; es una expresión del alma que merece ser capturada con autenticidad y pasión.
              </p>
              
              <p className="text-lg md:text-xl font-lora mb-6 leading-relaxed">
                Nuestro enfoque se basa en tres pilares fundamentales:
              </p>
              
              <ul className="space-y-4 font-mono text-lg">
                <li className="flex items-start">
                  <span className="text-yellow mr-2">•</span>
                  <span><span className="text-yellow font-semibold">Calidad sin compromisos:</span> Utilizamos equipos de primera línea y técnicas probadas para garantizar resultados excepcionales.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow mr-2">•</span>
                  <span><span className="text-yellow font-semibold">Ambiente creativo:</span> Creamos un espacio donde los artistas se sienten cómodos para explorar y expresar su visión musical.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow mr-2">•</span>
                  <span><span className="text-yellow font-semibold">Colaboración genuina:</span> Trabajamos junto a los artistas, respetando su visión mientras aportamos nuestra experiencia técnica.</span>
                </li>
              </ul>
            </div>
            
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image 
                src="/images/inicio/3.jpg" 
                alt="Estudio El Totoral" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xl font-lora text-yellow">
                  &ldquo;La música es el lenguaje universal que nos conecta con lo más profundo de nuestro ser.&rdquo;
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl font-lora italic">
              En El Totoral, no solo grabamos música; <span className="text-yellow">creamos experiencias sonoras que perduran</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 