import Link from "next/link"

export default function Navegacion() {
  return (
    <nav className="bg-primary text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          El Totoral
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#inicio" className="hover:text-secondary">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#estudio" className="hover:text-secondary">
              El Estudio
            </Link>
          </li>
          <li>
            <Link href="#servicios" className="hover:text-secondary">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="#trabajo" className="hover:text-secondary">
              Trabajo
            </Link>
          </li>
          <li>
            <Link href="#contacto" className="hover:text-secondary">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

