'use client';

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react";

export default function Navegacion() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="bg-primary/30 backdrop-blur-[2px] text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/images/Logo2.jpg" 
            alt="El Totoral Logo" 
            width={100} 
            height={35} 
            className="rounded-md"
            style={{ objectFit: 'contain' }}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-mono">
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
              href="/nosotros" 
              className={`hover:text-yellow ${pathname === '/nosotros' ? 'font-bold text-yellow' : ''}`}
            >
              Nosotros
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

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-primary/90 backdrop-blur-md mt-4 py-4 px-2 rounded-lg">
          <ul className="flex flex-col space-y-3 font-mono">
            <li>
              <Link 
                href="/" 
                className={`block px-3 py-2 rounded-md hover:bg-primary/50 ${pathname === '/' ? 'font-bold text-yellow' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link 
                href="/estudio" 
                className={`block px-3 py-2 rounded-md hover:bg-primary/50 ${pathname === '/estudio' ? 'font-bold text-yellow' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                El Estudio
              </Link>
            </li>
            <li>
              <Link 
                href="/servicios" 
                className={`block px-3 py-2 rounded-md hover:bg-primary/50 ${pathname === '/servicios' ? 'font-bold text-yellow' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link 
                href="/trabajo" 
                className={`block px-3 py-2 rounded-md hover:bg-primary/50 ${pathname === '/trabajo' ? 'font-bold text-yellow' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Trabajo
              </Link>
            </li>
            <li>
              <Link 
                href="/nosotros" 
                className={`block px-3 py-2 rounded-md hover:bg-primary/50 ${pathname === '/nosotros' ? 'font-bold text-yellow' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link 
                href="/contacto" 
                className={`block px-3 py-2 rounded-md hover:bg-primary/50 ${pathname === '/contacto' ? 'font-bold text-yellow' : ''}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

