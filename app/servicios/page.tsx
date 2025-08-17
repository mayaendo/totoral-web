import NuestrosServicios from "../../components/NuestrosServicios";
import Navegacion from "../../components/Navegacion";
import Footer from "@/components/Footer";
export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#65524D] to-[#3a2a26]">
      <Navegacion />
      <NuestrosServicios />
      <Footer/>
    </main>
  );
} 