"use client";
import Image from "next/image";
export default function Footer() {
  return (
  <footer className="w-full bg-[#0A2540] py-12">
    <style jsx>{`
      .social-icon svg {
        transition: fill 0.2s;
      }
      .group:hover .social-icon svg {
        fill: #fff;
      }
    `}</style>
      <div className="flex flex-col items-center justify-center">
        {/* Logo centrado */}
        <div className="mb-6">
          <Image src="/logo/white/needtek_logo_it_white_removebg.png" alt="Needtek logo" width={320} height={106} style={{height: "auto"}} priority />
        </div>
        {/* Línea divisoria */}
  <hr className="w-11/12 border-t border-[#F5F7FA] mb-8" />
        {/* Redes sociales centradas */}
        <div className="flex gap-8 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="flex items-center justify-center rounded shadow w-12 h-12 group transition-colors hover:bg-[#FF6B35]">
            <Image src="/twitter.svg" alt="Twitter" width={36} height={36} className="transition-all" style={{filter: 'invert(1)'}} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="flex items-center justify-center rounded shadow w-12 h-12 group transition-colors hover:bg-[#FF6B35]">
            <Image src="/instagram.svg" alt="Instagram" width={36} height={36} className="transition-all" style={{filter: 'invert(1)'}} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="flex items-center justify-center rounded shadow w-12 h-12 group transition-colors hover:bg-[#FF6B35]">
            <Image src="/linkedin.svg" alt="LinkedIn" width={36} height={36} className="transition-all" style={{filter: 'invert(1)'}} />
          </a>
        </div>
  <div className="text-center text-[#F5F7FA] text-sm mt-2">&copy; {new Date().getFullYear()} Needtek. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
