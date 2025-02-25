import { Mail, Phone, MapPin } from "lucide-react"

export default function Contacto() {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-hand font-bold mb-12 text-center">Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-hand font-semibold mb-6">Ponte en contacto</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="nombre" className="block mb-2 font-mono">
                  Nombre
                </label>
                <input type="text" id="nombre" name="nombre" className="w-full p-2 rounded text-primary font-mono" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-mono">
                  Email
                </label>
                <input type="email" id="email" name="email" className="w-full p-2 rounded text-primary font-mono" required />
              </div>
              <div className="mb-4">
                <label htmlFor="mensaje" className="block mb-2 font-mono">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="w-full p-2 rounded text-primary font-mono"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow text-primary py-2 px-4 rounded hover:bg-ocre transition duration-300 font-mono"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-hand font-semibold mb-6">Información de contacto</h3>
            <div className="space-y-4 font-mono">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-yellow" />
                <span>info@eltotoral.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-yellow" />
                <span>+54 11 1234-5678</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-yellow" />
                <span>Calle del Totoral 123, Buenos Aires, Argentina</span>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="text-xl font-hand font-semibold mb-4">Horario de atención</h4>
              <p className="font-mono">Lunes a Viernes: 10:00 - 20:00</p>
              <p className="font-mono">Sábados: 12:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

