import Image from 'next/image';

export default function ElEstudio() {
  return (
    <section className="py-20 bg-ocre">
      <div className="container mx-auto">
        <h2 className="text-4xl font-hand font-bold text-primary mb-10 text-center">El Estudio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg font-hand text-primary mb-6">
              El Totoral es más que un estudio de grabación; es un espacio donde la creatividad florece y la música
              cobra vida. Nuestro estudio está diseñado para proporcionar un ambiente inspirador y acogedor, donde los
              artistas pueden sentirse como en casa mientras dan vida a sus creaciones musicales.
            </p>
            <p className="text-lg font-hand text-primary">
              Con equipos de última generación y un equipo de profesionales apasionados, estamos comprometidos a ayudar
              a cada artista a alcanzar su máximo potencial sonoro. Ya sea que estés grabando tu primer single o
              trabajando en tu álbum más ambicioso, El Totoral es el lugar donde tu música echará raíces y crecerá.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative rounded-lg shadow-lg" style={{ height: '200px', width: '100%' }}>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Estudio Interior 1"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative rounded-lg shadow-lg" style={{ height: '200px', width: '100%' }}>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Estudio Interior 2"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative rounded-lg shadow-lg" style={{ height: '200px', width: '100%' }}>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Estudio Interior 3"
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div className="relative rounded-lg shadow-lg" style={{ height: '200px', width: '100%' }}>
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Estudio Interior 4"
                fill
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

