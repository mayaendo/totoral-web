// components/Footer.tsx
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3a2a26] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo y descripción */}
        <div>
          <img
            src="/images/logo 2.jpg"
            alt="El Totoral Logo"
            className="mb-4 w-32"
          />
          <p className="text-sm text-gray-300">
            El Totoral <br />— El estudio donde la musica echa raices
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h3 className="text-lg font-bold mb-4">Navegación</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/"
                className="text-white hover:text-[#ffee8d] transition-colors"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/estudio"
                className="text-white hover:text-[#ffee8d] transition-colors"
              >
                El Estudio
              </Link>
            </li>
            <li>
              <Link
                href="/servicios"
                className="text-white hover:text-[#ffee8d] transition-colors"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                href="/trabajo"
                className="text-white hover:text-[#ffee8d] transition-colors"
              >
                Trabajo
              </Link>
            </li>
            <li>
              <Link
                href="/contacto"
                className="text-white hover:text-[#ffee8d] transition-colors"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contáctanos</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-center gap-2">
              <FaWhatsapp className="text-[#ffee8d]" />
              <a
                href="https://wa.me/51949432877?text=Hola,%20estoy%20interesado%20en%20uno%20de%20sus%20servicios."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffee8d] transition-colors"
              >
                +51 949 432 877
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-[#ffee8d]" />
              <a
                href="https://www.instagram.com/eltotoralstudio?igsh=czF6bms5enNzMHQ3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#ffee8d] transition-colors"
              >
                @eltotoralstudio
              </a>
            </li>
            <li>
              <a
                href="mailto:hola@eltotoral.pe"
                className="hover:text-[#ffee8d] transition-colors"
              >
                hola@eltotoral.pe
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 border-t border-gray-700 pt-6 mt-6">
        &copy; {new Date().getFullYear()} El Totoral. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
