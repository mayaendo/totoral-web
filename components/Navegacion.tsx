'use client';

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navegacion() {
  const pathname = usePathname();

  return (
    <nav className="bg-primary/30 backdrop-blur-[2px] text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/Logo 2.jpg" 
            alt="El Totoral Logo" 
            width={100} 
            height={35} 
            className="rounded-md"
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <ul className="flex space-x-6 font-mono">
          <li>
            <Link 
              href="/" 
              className={`hover:text-yellow ${pathname === '/' ? 'font-bold text-yellow' : ''}`}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link 
              href="/estudio" 
              className={`hover:text-yellow ${pathname === '/estudio' ? 'font-bold text-yellow' : ''}`}
            >
              El Estudio
            </Link>
          </li>
          <li>
            <Link 
              href="/servicios" 
              className={`hover:text-yellow ${pathname === '/servicios' ? 'font-bold text-yellow' : ''}`}
            >
              Servicios
            </Link>
          </li>
          <li>
            <Link 
              href="/trabajo" 
              className={`hover:text-yellow ${pathname === '/trabajo' ? 'font-bold text-yellow' : ''}`}
            >
              Trabajo
            </Link>
          </li>
          <li>
            <Link 
              href="/contacto" 
              className={`hover:text-yellow ${pathname === '/contacto' ? 'font-bold text-yellow' : ''}`}
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

