import Image from "next/image"

export default function Inicio() {
  return (
    <section id="inicio" className="py-20 bg-secondary">
      <div className="container mx-auto text-center">
        <Image
          src="/placeholder.svg?height=150&width=300"
          alt="El Totoral Logo"
          width={300}
          height={150}
          className="mx-auto mb-8"
        />
        <h1 className="text-4xl font-bold text-primary mb-4">El Totoral</h1>
        <p className="text-xl text-accent mb-8 max-w-2xl mx-auto">
          Un espacio donde la música echa raíces. Queremos que cada sesión y cada artista formen parte de un proceso
          único.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Estudio Photo 1"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Estudio Photo 2"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
          <Image
            src="/placeholder.svg?height=200&width=300"
            alt="Estudio Photo 3"
            width={300}
            height={200}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

