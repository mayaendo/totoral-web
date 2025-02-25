import { Mic, Music, Sliders, Disc } from "lucide-react"

export default function NuestrosServicios() {
  return (
    <section id="servicios" className="py-20 bg-primary text-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Mic className="w-16 h-16 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2">Grabación</h3>
            <p>Capturamos tu sonido con precisión y calidad excepcional.</p>
          </div>
          <div className="text-center">
            <Music className="w-16 h-16 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2">Producción</h3>
            <p>Damos forma a tu visión musical con experiencia y creatividad.</p>
          </div>
          <div className="text-center">
            <Sliders className="w-16 h-16 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2">Mezcla</h3>
            <p>Balanceamos y mejoramos cada elemento de tu música.</p>
          </div>
          <div className="text-center">
            <Disc className="w-16 h-16 mx-auto mb-4 text-secondary" />
            <h3 className="text-xl font-semibold mb-2">Máster</h3>
            <p>Pulimos tu sonido para que brille en cualquier sistema.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

