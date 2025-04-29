"use client";

import Image from "next/image";
import Link from "next/link";

export default function Lolo() {
  return (
    <div className="min-h-[calc(100vh-160px)] bg-primary text-white py-24 px-6 md:px-20 lg:px-40 flex items-center">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Foto */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src="/images/team/lolo.jpg"
            alt="Lorenzo Tapia - El Totoral"
            width={600}
            height={800}
            className="rounded-lg shadow-xl object-cover w-full h-auto"
          />
        </div>

        {/* Descripción */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-lora font-bold text-yellow">
            Lorenzo Tapia
          </h1>
          <p className="text-lg font-lora leading-relaxed">
            Conoce a{" "}
            <Link
              href="https://www.instagram.com/rulolotb/"
              target="_blank"
              className="text-yellow underline hover:text-white"
            >
              @rulolotb
            </Link>
            , cofundador de El Totoral, productor, bajista, arreglista, mente
            técnica y creativa detrás de cientos de sesiones. Lolo trabaja como
            si el DAW fuera una extensión de sus manos, hace que lo complejo
            parezca simple —y suena brutal.
          </p>
          <p className="text-lg font-lora leading-relaxed">
            Como productor es muy versátil: ha trabajado con Jaze, Temple Sour,
            Maya Endo, Carlos Cruzalegui y más, explorando desde el UK Bass
            hasta ritmos afroperuanos y jazz. En El Totoral, Lolo garantiza que
            cada proyecto tenga el peso musical y técnico que merece.
          </p>
          <Link
            href="/#equipo"
            className="inline-block mt-10 bg-yellow text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
          >
            ← Volver al equipo
          </Link>
        </div>
      </div>
    </div>
  );
}
