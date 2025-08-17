import Trabajo from "../../components/Trabajo";
import Navegacion from "../../components/Navegacion";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

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