import Inicio from "../components/Inicio"
import Navegacion from "../components/Navegacion"
import Filosofia from "../components/Filosofia"
import CarouselHome from "@/components/CarouselHome"
import Team from "../components/Team"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer" 

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navegacion />
      <Inicio />
      <Filosofia />
      <CarouselHome/>
      <Team />
      <Contacto />
      <Footer /> 
    </main>
  )
}


