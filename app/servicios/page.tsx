import NuestrosServicios from "../../components/NuestrosServicios";
import Navegacion from "../../components/Navegacion";
import Footer from "@/components/Footer";
export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-accent">
      <Navegacion />
      <NuestrosServicios />
      <Footer/>
    </main>
  );
} 