import Inicio from "../components/Inicio"
import Navegacion from "../components/Navegacion"
import CarouselHome from "@/components/CarouselHome"
import Team from "../components/Team"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer" 

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navegacion />
      <Inicio />
      <div className="bg-gradient-to-b from-[#65524D] to-[#3a2a26]">
        <CarouselHome />
        <Team />
        <Contacto />
      </div>
      <Footer />
    </main>
  )
}


