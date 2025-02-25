import { Play } from "lucide-react"

export default function Trabajo() {
  return (
    <section id="trabajo" className="py-20 bg-[#F5DEB3]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center">Nuestro Trabajo</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-accent mb-6">Proyectos Destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Proyecto 1"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h4 className="text-lg font-semibold mb-2">Álbum "Raíces"</h4>
              <p className="text-sm text-gray-600">Producción completa del álbum debut de La Banda del Totoral</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Proyecto 2"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h4 className="text-lg font-semibold mb-2">EP "Tierra Adentro"</h4>
              <p className="text-sm text-gray-600">Grabación y mezcla para el artista solista Juan Tierra</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img
                src="/placeholder.svg?height=200&width=300"
                alt="Proyecto 3"
                className="w-full h-40 object-cover mb-4 rounded"
              />
              <h4 className="text-lg font-semibold mb-2">Single "Vuelo de Totora"</h4>
              <p className="text-sm text-gray-600">Producción y masterización para el grupo Vientos del Sur</p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-accent mb-6">Canciones / Playlist</h3>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <Play className="w-8 h-8 text-primary mr-4" />
              <span className="text-lg font-semibold">Escucha nuestra selección de trabajos</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">Explora una muestra de las canciones producidas en El Totoral</p>
            {/* Aquí iría un componente de reproductor o un enlace a una playlist externa */}
            <button className="bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition duration-300">
              Ver Playlist Completa
            </button>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-accent mb-6">Videos</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img src="/placeholder.svg?height=200&width=350" alt="Video 1" className="object-cover rounded" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Detrás de escenas: Grabación de "Raíces"</h4>
              <p className="text-sm text-gray-600">Un vistazo al proceso creativo en El Totoral</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img src="/placeholder.svg?height=200&width=350" alt="Video 2" className="object-cover rounded" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Tour por el estudio</h4>
              <p className="text-sm text-gray-600">Conoce nuestras instalaciones y equipos</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-accent mb-6">Testimonios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">
                "El Totoral no solo grabó nuestra música, sino que también capturó nuestra esencia. Un lugar mágico para
                crear."
              </p>
              <p className="font-semibold">- La Banda del Totoral</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="italic mb-4">
                "La experiencia y profesionalismo del equipo hicieron que mi álbum sonara mejor de lo que imaginé."
              </p>
              <p className="font-semibold">- Juan Tierra, artista solista</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

