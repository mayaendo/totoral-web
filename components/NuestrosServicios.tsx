import { Mic, Music, Sliders, Disc } from "lucide-react"
import Image from "next/image"

export default function NuestrosServicios() {
  const servicios = [
    {
      icon: <Mic className="w-12 h-12 text-yellow" />,
      title: "Grabación",
      description: "Capturamos tu sonido con precisión y calidad excepcional. Nuestro estudio cuenta con equipos de alta gama y un ambiente acústicamente tratado para lograr grabaciones profesionales. Trabajamos con voces, instrumentos acústicos y eléctricos para darle vida a tu proyecto.",
      image: "/images/elestudio/estudio_micronegro.jpg",
      alt: "Micrófono profesional para grabación"
    },
    {
      icon: <Music className="w-12 h-12 text-yellow" />,
      title: "Producción",
      description: "Damos forma a tu visión musical con experiencia y creatividad. Desde la composición hasta los arreglos, nuestro equipo te ayudará a desarrollar tus ideas y convertirlas en piezas musicales completas. Contamos con instrumentos virtuales y físicos para enriquecer tu sonido.",
      image: "/images/elestudio/estudio_pad.jpg",
      alt: "Controlador MIDI para producción musical"
    },
    {
      icon: <Sliders className="w-12 h-12 text-yellow" />,
      title: "Mezcla",
      description: "Balanceamos y mejoramos cada elemento de tu música. En la etapa de mezcla, trabajamos con precisión para lograr el equilibrio perfecto entre instrumentos y voces, aplicando procesamiento dinámico, ecualización y efectos para crear un sonido cohesivo y profesional.",
      image: "/images/elestudio/estudio_pantallas.jpg",
      alt: "Monitores para mezcla de audio"
    },
    {
      icon: <Disc className="w-12 h-12 text-yellow" />,
      title: "Máster",
      description: "Pulimos tu sonido para que brille en cualquier sistema. El mastering es el toque final que da coherencia, volumen y brillo a tu música, preparándola para su distribución en plataformas digitales, radio o formatos físicos con la mejor calidad posible.",
      image: "/images/elestudio/estudio_setupescritorio2.jpg",
      alt: "Estación de trabajo para masterización"
    }
  ];

  return (
    <section className="pt-24 md:pt-28 pb-20 bg-primary text-white" id="servicios">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-lora font-bold mb-16 text-center text-yellow">Nuestros Servicios</h2>
        
        <div className="space-y-12">
          {servicios.map((servicio, index) => (
            <div 
              key={index} 
              className="bg-primary/50 backdrop-blur-sm p-6 rounded-lg shadow-xl border border-white/10"
            >
              <div 
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
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
                    <h3 className="text-2xl font-lora font-semibold text-yellow">{servicio.title}</h3>
                  </div>
                  <p className="font-mono text-sm text-white/80">{servicio.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

