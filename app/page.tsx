import Inicio from "../components/Inicio"
import Navegacion from "../components/Navegacion"
import CarouselHome from "@/components/CarouselHome"
import Team from "../components/Team"
import Contacto from "../components/Contacto"
import Footer from "../components/Footer"
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Estudio de Grabación en Lima, Perú | Grabación, Mezcla y Masterización | El Totoral",
  description:
    "Estudio de grabación profesional en Lima, Perú. Ofrecemos servicios de grabación, mezcla y masterización de alta calidad para artistas y bandas. ¡Da vida a tu música en El Totoral!",
};

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


