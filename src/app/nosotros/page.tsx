
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

function AnimatedSubtitle({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const appearDuration = 1500; // ms
    const holdDuration = 2000; // ms
    const eraseDuration = 1000; // ms
    const appearSpeed = Math.max(appearDuration / text.length, 10); // ms por letra
    const eraseSpeed = Math.max(eraseDuration / text.length, 10); // ms por letra

    if (!deleting && index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, appearSpeed);
    } else if (!deleting && index === text.length) {
      timeout = setTimeout(() => setDeleting(true), holdDuration);
    } else if (deleting && index > 0) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index - 1));
        setIndex(index - 1);
      }, eraseSpeed);
    } else if (deleting && index === 0) {
      timeout = setTimeout(() => setDeleting(false), 300);
    }
    return () => clearTimeout(timeout);
  }, [index, deleting, text]);

  return (
    <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-8 text-center min-h-[2.5rem]">
      <span className="border-r-2 border-[#00CFE8]">{displayed}</span>
    </h2>
  );
}

export default function NosotrosPage() {
  // Scroll animado al hacer clic en la flecha
  const handleArrowClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const target = document.getElementById("contenido-nosotros");
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - 40; // Ajuste para dejar Misión justo arriba
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <main className="w-full bg-[#F5F6F7] min-h-screen">
      {/* HERO SECTION */}
      <section className="w-full flex flex-col items-center justify-center min-h-[90vh] py-32 px-4">
        <h1 className="text-6xl md:text-7xl font-extrabold mb-10 text-center text-[#00CFE8] uppercase">¡SOMOS NEEDTEK!</h1>
        <AnimatedSubtitle text="Avancemos juntos hacia un futuro digital" />
        <a href="#contenido-nosotros" onClick={handleArrowClick} className="mt-20 flex flex-col items-center text-gray-400 hover:text-gray-600 transition-colors active:scale-90 duration-200">
          <span className="animate-bounce text-5xl">▼</span>
        </a>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <div id="contenido-nosotros">
        {/* Misión */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 mb-20">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/nosotros/mision.jpg" alt="Misión" width={400} height={400} className="object-contain rounded-2xl" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-[#00CFE8] mb-4 uppercase">MISIÓN</h2>
            <p className="text-gray-600 text-lg">Comprender las necesidades de nuestros clientes y su modelo de negocio, desarrollando soluciones tecnológicas escalables en el tiempo que permitan optimizar sus procesos; transformando digitalmente las operaciones de la empresa.</p>
          </div>
        </section>
        {/* Propósito */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-center gap-8 mb-20">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/nosotros/proposito.jpg" alt="Propósito" width={400} height={400} className="object-contain rounded-2xl" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-[#00CFE8] mb-4 uppercase">PROPÓSITO</h2>
            <p className="text-gray-600 text-lg">En NEEDTEK creemos que la innovación no es solo tecnológica: es humana, estratégica y colaborativa. Somos un equipo multidisciplinario comprometido con ayudar a las organizaciones a adaptarse a los desafíos del mundo digital.</p>
          </div>
        </section>
        {/* Visión */}
  <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/nosotros/vision.jpg" alt="Visión" width={400} height={400} className="object-contain rounded-2xl" />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-5xl font-extrabold text-[#00CFE8] mb-4 uppercase">VISIÓN</h2>
            <p className="text-gray-600 text-lg">Ser referentes en innovación tecnológica y organizacional en Latinoamérica, impulsando un futuro digital inclusivo y sostenible.</p>
          </div>
        </section>
      </div>
      {/* Separador visual antes del Footer */}
      <div className="w-full h-12 bg-[#F5F6F7]"></div>
    </main>
  );
}
