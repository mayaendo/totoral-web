'use client';

import Image from 'next/image';

export default function Indumentaria() {
  const equipos = [
    {
      titulo: 'Equipos de Grabación',
      imagen: '/images/estudio/equipos1.jpg'
    },
    {
      titulo: 'Equipos de Mezcla',
      imagen: '/images/estudio/equipos2.jpg'
    },
    {
      titulo: 'Instrumentos Disponibles',
      imagen: '/images/estudio/equipos3.jpg'
    }
  ];

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-lora font-semibold mb-12 text-center">
          <span className="text-yellow">Indumentaria</span>
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <p className="text-xl font-lora text-center mb-12 leading-relaxed">
            Contamos con los mejores equipos para que tu música suene como la imaginas.
            <br />
            <span className="text-yellow">La tecnología al servicio de tu creatividad.</span>
          </p>
          
          {/* Grid de imágenes con marcos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipos.map((equipo) => (
              <div key={equipo.titulo} className="relative group">
                <div className="relative h-[350px] rounded-lg overflow-hidden shadow-xl border-4 border-yellow/30">
                  <Image
                    src={equipo.imagen}
                    alt={equipo.titulo}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
                  
                  {/* Título del equipo */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                    <h3 className="text-xl font-lora text-yellow text-center">
                      {equipo.titulo}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-lg font-lora italic">
              En <span className="text-yellow">El Totoral</span> combinamos lo mejor de la tecnología analógica y digital
              <br />
              para ofrecerte un sonido cálido, detallado y profesional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 