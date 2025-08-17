import Contacto from "../../components/Contacto";
import Navegacion from "../../components/Navegacion";
import Footer from "../../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Reserva tu Sesión en Nuestro Estudio de Grabación en Lima",
  description:
    "Contacta con El Totoral para reservar tu sesión de grabación, mezcla o masterización en Lima, Perú. ¡Estamos listos para ayudarte a materializar tu proyecto musical!",
};

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-primary overflow-hidden">
      <Navegacion />
      <Contacto />
      <Footer />
    </main>
  );
}
