import Inicio from "../components/Inicio"
import ElEstudio from "../components/ElEstudio"
import NuestrosServicios from "../components/NuestrosServicios"
import Trabajo from "../components/Trabajo"
import Contacto from "../components/Contacto"
import Navegacion from "../components/Navegacion"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5DEB3]">
      <Navegacion />
      <Inicio />
      <ElEstudio />
      <NuestrosServicios />
      <Trabajo />
      <Contacto />
    </main>
  )
}

