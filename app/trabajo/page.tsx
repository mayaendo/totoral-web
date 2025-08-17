import Trabajo from "../../components/Trabajo";
import Navegacion from "../../components/Navegacion";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nuestro Portafolio | Proyectos de Grabación y Producción | El Totoral",
  description:
    "Descubre los proyectos de grabación, mezcla y masterización realizados en El Totoral. Escucha el trabajo de los artistas que han confiado en nuestro estudio en Lima.",
};

export default function TrabajoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#65524D] to-[#3a2a26]">
      <Navegacion />
      <Testimonials />
      <Trabajo />
      <Footer/>
    </main>
  );
} 