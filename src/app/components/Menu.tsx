
"use client";
"use client";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const handleContactoClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      e.preventDefault();
      const contacto = document.getElementById("contacto");
      if (contacto) {
        contacto.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      e.preventDefault();
      router.push("/contacto");
    }
  };
  return (
  <nav className="w-full bg-[#0A2540] fixed top-0 left-0 z-50">
  <div className="w-full flex items-center py-3 px-6 gap-4">
        {/* Logo a la izquierda (restaurado) */}
        <Link href="/" className="flex items-center gap-2 min-w-[120px] md:min-w-[320px]">
          <Image 
            src="/logo/white/needtek_logo_it_white_removebg.png" 
            alt="Needtek logo" 
            width={320} 
            height={106} 
            style={{height: "auto"}} 
            priority
            className="w-[120px] md:w-[320px] h-auto"
          />
        </Link>
        {/* Opciones del menú alineadas a la derecha en desktop, contacto solo como botón en desktop */}
        <div className="flex-1 flex justify-end items-center">
          <ul className="hidden md:flex flex-row gap-8 text-white font-extrabold text-base md:text-lg tracking-wide items-center">
            <li><Link href="/soluciones" className="hover:text-[#00CFE8] transition-colors uppercase">SOLUCIONES</Link></li>
            <li><Link href="/nosotros" className="hover:text-[#00CFE8] transition-colors uppercase">NOSOTROS</Link></li>
            <li><Link href="/blog" className="hover:text-[#00CFE8] transition-colors uppercase">BLOG</Link></li>
          </ul>
          <div className="hidden md:flex ml-8">
            <a
              href="#contacto"
              className="bg-[#00CFE8] hover:bg-[#009688] text-white font-extrabold rounded-full px-6 py-2 transition-colors shadow-md"
              onClick={handleContactoClick}
            >
              CONTACTO
            </a>
          </div>
        </div>
        {/* Menú hamburguesa SIEMPRE a la derecha */}
        <button
          className="md:hidden text-white ml-auto"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
        {/* Menú hamburguesa en móvil */}
        {open && (
          <div className="flex md:hidden flex-col absolute top-full left-0 w-full bg-white shadow z-50 items-center py-4">
            <Link href="/soluciones" className="py-2 text-[#0A2540] font-extrabold text-lg w-full text-center hover:text-[#00CFE8] transition-colors uppercase">SOLUCIONES</Link>
            <Link href="/nosotros" className="py-2 text-[#0A2540] font-extrabold text-lg w-full text-center hover:text-[#00CFE8] transition-colors uppercase">NOSOTROS</Link>
            <Link href="/blog" className="py-2 text-[#0A2540] font-extrabold text-lg w-full text-center hover:text-[#00CFE8] transition-colors uppercase">BLOG</Link>
            <a
              href="#contacto"
              className="py-2 text-[#0A2540] font-extrabold text-lg w-full text-center hover:text-[#00CFE8] transition-colors uppercase"
              onClick={handleContactoClick}
            >
              CONTACTO
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
