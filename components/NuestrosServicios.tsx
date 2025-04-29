import { Mic, Music, Sliders, Disc } from "lucide-react";
import Image from "next/image";

export default function NuestrosServicios() {
  const servicios = [
    {
      icon: <Mic className="w-12 h-12 text-yellow" />,
      title: "Grabación",
      description:
        "Capturamos tu sonido con precisión y calidad excepcional. Nuestro estudio cuenta con equipos de alta gama y un ambiente acústicamente tratado para lograr grabaciones profesionales. Trabajamos con voces, instrumentos acústicos y eléctricos para darle vida a tu proyecto.",
      image: "/images/elestudio/grabacion.jpg",
      alt: "Micrófono profesional para grabación",
    },
    {
      icon: <Music className="w-12 h-12 text-yellow" />,
      title: "Producción",
      description: (
        <>
          <p>
            Damos forma a tu visión musical con creatividad y criterio. Desde la
            composición hasta los arreglos, te ayudamos a convertir ideas en
            piezas musicales completas, con instrumentos virtuales y físicos
            para enriquecer tu sonido.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Mic className="w-6 h-6 text-yellow" />
            <h4 className="text-2xl font-lora font-semibold text-yellow">
              Producción vocal
            </h4>
          </div>
          <p className="font-mono text-sm text-white/80 mt-2">
            Guiamos a los artistas en la interpretación vocal y armonización,
            asegurando tomas emocionales y técnicamente sólidas. Además,
            realizamos edición detallada para lograr un resultado profesional y
            expresivo.
          </p>
        </>
      ),
      image: "/images/elestudio/produccion.jpg",
      alt: "Controlador MIDI para producción musical",
    },
    {
      icon: <Sliders className="w-12 h-12 text-yellow" />,
      title: "Mezcla",
      description:
        "Balanceamos y mejoramos cada elemento de tu música. En la etapa de mezcla, trabajamos con precisión para lograr el equilibrio perfecto entre instrumentos y voces, aplicando procesamiento dinámico, ecualización y efectos para crear un sonido cohesivo y profesional.",
      image: "/images/elestudio/estudio_pad.jpg",
      alt: "Monitores para mezcla de audio",
    },
    {
      icon: <Disc className="w-12 h-12 text-yellow" />,
      title: "Máster",
      description:
        "Pulimos tu sonido para que brille en cualquier sistema. El mastering es el toque final que da coherencia, volumen y brillo a tu música, preparándola para su distribución en plataformas digitales, radio o formatos físicos con la mejor calidad posible.",
      image: "/images/elestudio/estudio_setupescritorio2.jpg",
      alt: "Estación de trabajo para masterización",
    },
  ];

  return (
    <section
      className="pt-24 md:pt-28 pb-20 bg-primary text-white"
      id="servicios"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-lora font-bold text-yellow relative inline-block">
            Nuestros Servicios
            <div className="w-full h-[3px] bg-gradient-to-r from-transparent via-yellow/70 to-transparent absolute -bottom-4 left-0"></div>
          </h2>
        </div>

        <div className="space-y-12">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-primary/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8 items-center`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative h-64 md:h-72 w-full overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={servicio.image}
                      alt={servicio.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="w-full md:w-1/2 space-y-4">
                  <div className="flex items-center gap-4">
                    {servicio.icon}
                    <h3 className="text-2xl font-lora font-semibold text-yellow">
                      {servicio.title}
                    </h3>
                  </div>
                  <p className="font-mono text-sm text-white/80">
                    {servicio.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
