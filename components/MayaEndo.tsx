"use client";

import Image from "next/image";
import Link from "next/link";

export default function MayaEndo() {
  return (
    <div className="bg-primary text-white py-24 px-6 md:px-20 lg:px-40">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        {/* Foto */}
        <div className="flex-shrink-0 w-full md:w-1/2">
          <Image
            src="/images/team/maya.jpg"
            alt="Maya Endo - El Totoral"
            width={600}
            height={800}
            className="rounded-lg shadow-xl object-cover w-full h-auto"
          />
        </div>

        {/* Descripción */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl font-lora font-bold text-yellow">
            Maya Endo
          </h1>
          <p className="text-lg font-lora leading-relaxed">
            Conoce a Maya,{" "}
            <Link
              href="https://www.instagram.com/_mayaendo/"
              target="_blank"
              className="text-yellow underline hover:text-white"
            >
              (@_mayaendo)
            </Link>{" "}
            es el corazón creativo de El Totoral: cantante y compositora que no
            solo graba su música aquí; también le da forma al proyecto.
          </p>
          <p className="text-lg font-lora leading-relaxed">
            Con una intuición artística entrenada desde la infancia, Maya aporta
            una mirada integral que conecta la música con imágenes, emociones y
            experiencias. Además de ser la “mano derecha” del estudio, Maya está
            por lanzar su LP debut como solista, primer proyecto grabado y
            producido en El Totoral.
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
