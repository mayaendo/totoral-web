"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface TeamMember {
  name: string;
  image: string;
  link: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: "Moncho",
      image: "/images/team/moncho.png",
      link: "/moncho",
    },
    {
      name: "Lolo",
      image: "/images/team/lolo.png",
      link: "/lolo",
    },
    {
      name: "Maya Endo",
      image: "/images/team/maya.jpg",
      link: "/mayaendo",
    },
  ];

  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <section id="equipo" className="py-12 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-16 lg:px-24">
      <div className="text-center mb-16">
          <h2 className="text-4xl font-lora font-bold text-yellow relative inline-block">
            Nuestro Equipo
            <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-yellow/70 to-transparent absolute -bottom-4 left-0"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="relative group"
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <Link href={member.link}>
                <div className="relative h-[450px] w-full overflow-hidden rounded-lg shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
                  <Image
                    src={member.image}
                    alt={`${member.name} - El Totoral`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />

                  {/* Overlay al pasar el mouse */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-transparent transition-opacity duration-300 ${
                      hoveredMember === index ? "opacity-30" : "opacity-0"
                    }`}
                  ></div>
                </div>
              </Link>

              <div className="text-center mt-4">
                <h3 className="text-2xl font-lora font-semibold">
                  {member.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
