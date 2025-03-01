import Inicio from "../components/Inicio"
import Navegacion from "../components/Navegacion"
import Filosofia from "../components/Filosofia"
import Team from "../components/Team"
import Contacto from "../components/Contacto"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navegacion />
      <Inicio />
      <Filosofia />
      <Team />
      <Contacto />
    </main>
  )
}

