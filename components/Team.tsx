'use client';

import { useState } from 'react';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Moncho',
      role: 'Productor / Ingeniero',
      bio: 'Especialista en grabación y mezcla con más de 10 años de experiencia en la industria musical.',
      image: '/images/team/moncho.png'
    },
    {
      name: 'Lolo',
      role: 'Ingeniero de Sonido',
      bio: 'Experto en masterización y diseño sonoro, con un oído excepcional para los detalles.',
      image: '/images/team/lolo.png'
    },
    {
      name: 'Maya Endo',
      role: 'Productora / Compositora',
      bio: 'Talentosa compositora y productora con un enfoque innovador para la creación musical.',
      image: '/images/team/maya.jpg'
    }
  ];

  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
        <h2 className="text-4xl md:text-5xl font-lora font-semibold mb-16 text-center">
          Nuestro <span className="text-yellow">Equipo</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className="relative group"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div className="relative h-[450px] w-full overflow-hidden rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src={member.image}
                  alt={`${member.name} - El Totoral`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                
                {/* Overlay that appears on hover */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent transition-opacity duration-300 ${
                    hoveredMember === index ? 'opacity-80' : 'opacity-0'
                  }`}
                ></div>
                
                {/* Bio information that appears on hover */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-500 ${
                    hoveredMember === index ? 'translate-y-0' : 'translate-y-20 opacity-0'
                  }`}
                >
                  <p className="text-lg font-mono text-yellow mb-2">{member.role}</p>
                  <p className="text-base font-lora leading-relaxed">{member.bio}</p>
                </div>
              </div>
              
              {/* Name always visible below image */}
              <div className="text-center mt-4">
                <h3 className="text-2xl font-lora font-semibold">{member.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 