import Inicio from "../components/Inicio"
import Navegacion from "../components/Navegacion"
import Filosofia from "../components/Filosofia"

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navegacion />
      <Inicio />
      <Filosofia />
    </main>
  )
}

