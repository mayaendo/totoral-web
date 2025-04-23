import Contacto from "../../components/Contacto";
import Navegacion from "../../components/Navegacion";
import Footer from "../../components/Footer"; 

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-primary overflow-hidden">
      <Navegacion />
      <Contacto />
      <Footer /> 
    </main>
  );
}
