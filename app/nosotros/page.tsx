"use client";

import Navegacion from "../../components/Navegacion";
import Footer from "../../components/Footer";
import Image from "next/image";

export default function NosotrosPage() {
  return (
    <main className="bg-primary text-white overflow-hidden">
      <Navegacion />

      <section className="pt-36 md:pt-40 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-lora font-bold text-yellow relative inline-block">
              Nosotros
              <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-yellow/70 to-transparent absolute -bottom-4 left-0" />
            </h1>
          </div>

          {/* Filosofía */}
          <div className="max-w-4xl mx-auto text-center mb-20">
            <p className="text-lg md:text-xl font-lora leading-relaxed">
              En <span className="text-yellow drop-shadow-sm">El Totoral</span>,
              creemos que la música es más que sonido; es una expresión del alma
              que merece ser capturada con autenticidad y pasión. Nuestro
              estudio combina{" "}
              <span className="text-yellow drop-shadow-sm">
                calidad técnica
              </span>
              ,{" "}
              <span className="text-yellow drop-shadow-sm">
                ambiente creativo
              </span>{" "}
              y{" "}
              <span className="text-yellow drop-shadow-sm">
                colaboración genuina
              </span>{" "}
              para crear experiencias sonoras que perduran en el tiempo.
            </p>
          </div>

          {/* Imagen grupal */}
          <div className="mb-20">
            <div className="rounded-lg overflow-hidden shadow-lg max-w-5xl mx-auto">
              <Image
                src="/images/team/foto-grupal-totoral.jpg"
                alt="Foto grupal del equipo El Totoral"
                width={1600}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Equipo */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-lora font-bold text-yellow relative inline-block">
              Conoce al equipo
              <div className="w-full h-[2px] bg-gradient-to-r from-yellow/50 to-transparent absolute -bottom-2 left-0" />
            </h2>
          </div>

          <div className="space-y-24">
            {/* Lolo */}
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
              <Image
                src="/images/team/lolo.jpg"
                alt="Lolo - El Totoral"
                width={500}
                height={600}
                className="rounded-lg shadow-xl w-full md:w-1/2 object-cover"
              />
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-lora font-bold text-yellow">
                  Lorenzo Tapia
                </h3>
                <p className="text-base font-lora leading-relaxed">
                  Cofundador de El Totoral, productor, bajista, arreglista,
                  mente técnica y creativa detrás de cientos de sesiones. Lolo
                  trabaja como si el DAW fuera una extensión de sus manos, hace
                  que lo complejo parezca simple —y suena brutal.
                </p>
                <p className="text-base font-lora leading-relaxed">
                  Ha trabajado con Jaze, Temple Sour, Maya Endo, Carlos
                  Cruzalegui y más. En El Totoral, garantiza que cada proyecto
                  tenga el peso musical y técnico que merece.
                </p>
              </div>
            </div>

            {/* Moncho */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-10 max-w-6xl mx-auto">
              <Image
                src="/images/team/moncho.jpg"
                alt="Moncho - El Totoral"
                width={500}
                height={600}
                className="rounded-lg shadow-xl w-full md:w-1/2 object-cover"
              />
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-lora font-bold text-yellow">
                  Simón Yriberry
                </h3>
                <p className="text-base font-lora leading-relaxed">
                  Productor, cantautor e ingeniero de sonido. Formado en Berklee
                  y con experiencia internacional, co-fundó El Totoral para
                  desarrollar música con criterio, detalle y dirección
                  artística.
                </p>
                <p className="text-base font-lora leading-relaxed">
                  Ha trabajado con Daymé Arocena, Oscar De León, Mattias, Carlos
                  Cruzalegui y más. Billboard lo destacó como uno de los
                  artistas peruanos a seguir.
                </p>
              </div>
            </div>

            {/* Maya */}
            <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
              <Image
                src="/images/team/maya.jpg"
                alt="Maya Endo - El Totoral"
                width={500}
                height={600}
                className="rounded-lg shadow-xl w-full md:w-1/2 object-cover"
              />
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-2xl font-lora font-bold text-yellow">
                  Maya Endo
                </h3>
                <p className="text-base font-lora leading-relaxed">
                  Cantante y compositora, Maya es el corazón creativo de El
                  Totoral. No solo graba su música aquí, sino que también le da
                  forma al proyecto como espacio integral de arte.
                </p>
                <p className="text-base font-lora leading-relaxed">
                  Maya está por lanzar su LP debut como solista: el primer álbum
                  producido completamente en El Totoral.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
