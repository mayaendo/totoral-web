export default function ElEstudio() {
  return (
    <section id="estudio" className="py-20 bg-[#F5DEB3]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">El Estudio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-accent mb-4">
              El Totoral es más que un estudio de grabación; es un espacio donde la creatividad florece y la música
              cobra vida. Nuestro estudio está diseñado para proporcionar un ambiente inspirador y acogedor, donde los
              artistas pueden sentirse como en casa mientras dan vida a sus creaciones musicales.
            </p>
            <p className="text-accent">
              Con equipos de última generación y un equipo de profesionales apasionados, estamos comprometidos a ayudar
              a cada artista a alcanzar su máximo potencial sonoro. Ya sea que estés grabando tu primer single o
              trabajando en tu álbum más ambicioso, El Totoral es el lugar donde tu música echará raíces y crecerá.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Estudio Interior 1"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Estudio Interior 2"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Estudio Interior 3"
              className="rounded-lg shadow-lg"
            />
            <img
              src="/placeholder.svg?height=200&width=200"
              alt="Estudio Interior 4"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

