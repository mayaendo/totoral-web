import Trabajo from "../../components/Trabajo";
import Navegacion from "../../components/Navegacion";
import Footer from "@/components/Footer";

export default function TrabajoPage() {
  return (
    <main className="min-h-screen bg-yellow">
      <Navegacion />
      <Trabajo />
      <Footer/>
    </main>
  );
} 