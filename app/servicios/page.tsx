import NuestrosServicios from "../../components/NuestrosServicios";
import Navegacion from "../../components/Navegacion";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servicios de Grabación, Mezcla y Masterización en Lima | El Totoral",
  description:
    "Ofrecemos servicios profesionales de grabación, mezcla y masterización en Lima, Perú. Equipos de alta calidad y un equipo experimentado para tu proyecto musical.",
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#65524D] to-[#3a2a26]">
      <Navegacion />
      <NuestrosServicios />
      <Footer/>
    </main>
  );
} 