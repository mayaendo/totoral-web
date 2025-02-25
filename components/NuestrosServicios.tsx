import { Mic, Music, Sliders, Disc } from "lucide-react"

export default function NuestrosServicios() {
  return (
    <section className="py-20 bg-accent text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-hand font-bold mb-12 text-center">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <Mic className="w-16 h-16 mx-auto mb-4 text-yellow" />
            <h3 className="text-2xl font-hand font-semibold mb-3">Grabación</h3>
            <p className="font-mono">Capturamos tu sonido con precisión y calidad excepcional.</p>
          </div>
          <div className="text-center">
            <Music className="w-16 h-16 mx-auto mb-4 text-yellow" />
            <h3 className="text-2xl font-hand font-semibold mb-3">Producción</h3>
            <p className="font-mono">Damos forma a tu visión musical con experiencia y creatividad.</p>
          </div>
          <div className="text-center">
            <Sliders className="w-16 h-16 mx-auto mb-4 text-yellow" />
            <h3 className="text-2xl font-hand font-semibold mb-3">Mezcla</h3>
            <p className="font-mono">Balanceamos y mejoramos cada elemento de tu música.</p>
          </div>
          <div className="text-center">
            <Disc className="w-16 h-16 mx-auto mb-4 text-yellow" />
            <h3 className="text-2xl font-hand font-semibold mb-3">Máster</h3>
            <p className="font-mono">Pulimos tu sonido para que brille en cualquier sistema.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

