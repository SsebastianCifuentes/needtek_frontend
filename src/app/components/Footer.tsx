import Image from "next/image";
export default function Footer() {
  return (
  <footer className="w-full bg-[#0A2540] py-12 mt-16">
      <div className="flex flex-col items-center justify-center">
        {/* Logo centrado */}
        <div className="mb-6">
          <Image src="/logo/white/needtek_logo_it_white_removebg.png" alt="Needtek logo" width={320} height={106} style={{height: "auto"}} priority />
        </div>
        {/* Línea divisoria */}
  <hr className="w-11/12 border-t border-[#F5F6F7] mb-8" />
        {/* Redes sociales centradas */}
        <div className="flex gap-8 mb-4">
          <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter" className="text-[#6B7280] hover:text-[#00CFE8] transition-colors">
            <Image src="/twitter.png" alt="Twitter" width={36} height={36} style={{filter: 'grayscale(1)', opacity: 0.7}} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" className="text-[#6B7280] hover:text-[#00CFE8] transition-colors">
            <Image src="/instagram.png" alt="Instagram" width={36} height={36} style={{filter: 'grayscale(1)', opacity: 0.7}} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn" className="text-[#6B7280] hover:text-[#00CFE8] transition-colors">
            <Image src="/linkedin.png" alt="LinkedIn" width={36} height={36} style={{filter: 'grayscale(1)', opacity: 0.7}} />
          </a>
        </div>
  <div className="text-center text-white text-sm mt-2">&copy; {new Date().getFullYear()} Needtek. Todos los derechos reservados.</div>
      </div>
    </footer>
  );
}
