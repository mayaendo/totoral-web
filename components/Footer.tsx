import Link from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3a2a26] text-white text-sm">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo y descripción a la izquierda */}
        <div className="flex flex-col items-start">
          <Image
            src="/images/Logo2.jpg" // o .png o el formato que estés usando
            alt="El Totoral Logo"
            width={128}
            height={40}
            className="mb-4 w-32 h-auto"
          />

          <p className="text-gray-300 leading-tight">
            El Totoral <br />es el  estudio donde la musica echa raices.
          </p>
        </div>

        {/* Navegación en 2 columnas */}
        <div>
          <h3 className="font-bold mb-2">Navegación</h3>
          <div className="grid grid-cols-2 gap-x-1 gap-y-0.5">
            <Link href="/" className="hover:text-[#ffee8d]">
              Inicio
            </Link>
            <Link href="/trabajo" className="hover:text-[#ffee8d]">
              Trabajo
            </Link>
            <Link href="/contacto" className="hover:text-[#ffee8d]">
              Contacto
            </Link>
            <Link href="/estudio" className="hover:text-[#ffee8d]">
              El Estudio
            </Link>
            <Link href="/servicios" className="hover:text-[#ffee8d]">
              Servicios
            </Link>
          </div>
        </div>

        {/* Contacto a la derecha */}
        <div className="flex flex-col gap-1">
          <h3 className="font-bold mb-2">Contáctanos</h3>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-[#ffee8d]" />
            <a
              href="https://wa.me/51949432877?text=Hola,%20estoy%20interesado%20en%20uno%20de%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffee8d]"
            >
              +51 949 432 877
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaInstagram className="text-[#ffee8d]" />
            <a
              href="https://www.instagram.com/eltotoralstudio?igsh=czF6bms5enNzMHQ3"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#ffee8d]"
            >
              @eltotoralstudio
            </a>
          </div>
        </div>
      </div>

      {/* Derechos reservados dentro del bloque */}
      <div className="text-center text-gray-500 border-t border-gray-700 pt-0.5 pb-0.5">
        &copy; {new Date().getFullYear()} El Totoral. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
