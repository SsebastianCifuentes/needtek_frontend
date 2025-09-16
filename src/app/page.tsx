"use client";
import Image from "next/image";
import CarruselPrincipios from "./components/CarruselPrincipios";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fadein-visible");
            }
          });
        },
        { threshold: 0.15 }
      );
      document.querySelectorAll(".animate-fadein").forEach((el) => {
        observer.observe(el);
      });
    }
  }, []);
  const handleScrollToContacto = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const contacto = document.getElementById("contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main>
      {/* HERO SECCIÓN */}
      <section
  className="w-full min-h-screen flex flex-col justify-center items-start text-left relative bg-cover bg-center animate-fadein pt-0 md:pt-0"
        style={{
          backgroundImage: "url('/banner/laptop_coding.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-start justify-center px-4 md:px-24 py-24 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight drop-shadow-lg uppercase">
            INNOVANDO Y CONSTRUYENDO EL <span className="text-[#00CFE8]">FUTURO DIGITAL</span>
          </h1>
          <a
            href="#contacto"
            className="inline-block border-2 border-white bg-transparent text-white font-extrabold px-10 py-4 rounded-full text-lg shadow-lg transition-colors hover:bg-white hover:text-[#0A2540]"
            onClick={handleScrollToContacto}
          >
            CONVERSEMOS
          </a>
        </div>
      </section>
      {/* PRINCIPIOS/VALORES - Carrusel */}
      <section className="w-full bg-[#F5F6F7] py-16 px-4 animate-fadein">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2A2C2E] mb-8 text-center uppercase tracking-wide">¿Cómo trabajamos?</h2>
          <CarruselPrincipios />
        </div>
      </section>
      {/* CASOS DE ÉXITO / PROYECTOS */}
  <section className="w-full bg-white py-20 px-4 animate-fadein">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] mb-8 uppercase tracking-wide drop-shadow-lg">Casos de Éxito</h2>
          <div className="bg-[#F5F6F7] rounded-xl shadow-lg p-10 text-gray-700 text-lg font-semibold">Próximamente</div>
        </div>
      </section>
      {/* CTA INTERMEDIO */}
  <section className="w-full bg-[#0A2540] px-4 pt-8 animate-fadein">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 drop-shadow-lg mt-8">¿Quieres llevar a tu organización al siguiente nivel?</h3>
          <a
            href="#contacto"
            className="inline-block bg-[#00CFE8] hover:bg-[#009688] text-[#0A2540] font-extrabold px-8 py-4 rounded-full text-lg shadow-lg transition-colors uppercase mb-12"
            onClick={handleScrollToContacto}
          >
            Agenda una consultoría gratuita
          </a>
        </div>
      </section>
      {/* SERVICIOS */}
      <section className="w-full bg-white py-20 px-4 animate-fadein">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#2A2C2E] mb-12 text-center uppercase tracking-wide">Consultoría y Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Estrategia y Cultura Organizacional */}
            <div className="bg-[#F5F6F7] rounded-xl shadow-lg p-8 flex flex-col items-center text-center animate-fadein">
              <Image src="/servicios/estrategia.png" alt="Estrategia y Cultura" width={80} height={80} className="mb-4" />
              <h3 className="text-lg font-bold text-[#00CFE8] mb-2 uppercase">Estrategia y Cultura Organizacional</h3>
              <p className="text-gray-700 text-sm">Potencia el liderazgo, la colaboración y la alineación de tu organización con su propósito.</p>
            </div>
            {/* Gestión Tecnológica */}
            <div className="bg-[#F5F6F7] rounded-xl shadow-lg p-8 flex flex-col items-center text-center animate-fadein">
              <Image src="/servicios/tecnologia.png" alt="Gestión Tecnológica" width={80} height={80} className="mb-4" />
              <h3 className="text-lg font-bold text-[#00CFE8] mb-2 uppercase">Gestión Tecnológica</h3>
              <p className="text-gray-700 text-sm">Acompañamos la adopción de tecnologías que habilitan el crecimiento y la eficiencia.</p>
            </div>
            {/* Modelos Operativos */}
            <div className="bg-[#F5F6F7] rounded-xl shadow-lg p-8 flex flex-col items-center text-center animate-fadein">
              <Image src="/servicios/modelos.png" alt="Modelos Operativos" width={80} height={80} className="mb-4" />
              <h3 className="text-lg font-bold text-[#00CFE8] mb-2 uppercase">Modelos Operativos</h3>
              <p className="text-gray-700 text-sm">Diseñamos estructuras más ágiles, digitales y orientadas al cliente.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACTO / FORMULARIO */}
  <section id="contacto" className="w-full bg-[#0A2540] py-20 px-4 animate-fadein">
  <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-10 animate-fadein">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] mb-4 text-center uppercase tracking-wide">Hablemos de tu próximo proyecto</h2>
          <p className="text-gray-700 text-center mb-8">Déjanos tu mensaje y te responderemos lo antes posible.</p>
          <form action="https://formspree.io/f/mzzaqjdo" method="POST" className="space-y-6">
            <div>
              <label htmlFor="nombre" className="block text-sm font-bold text-[#0A2540] mb-1">Nombre</label>
              <input type="text" id="nombre" name="nombre" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00CFE8]" />
            </div>
            <div>
              <label htmlFor="correo" className="block text-sm font-bold text-[#0A2540] mb-1">Correo</label>
              <input type="email" id="correo" name="correo" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00CFE8]" />
            </div>
            <div>
              <label htmlFor="tema" className="block text-sm font-bold text-[#0A2540] mb-1">Tema</label>
              <input type="text" id="tema" name="tema" required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00CFE8]" />
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-bold text-[#0A2540] mb-1">Mensaje</label>
              <textarea id="mensaje" name="mensaje" rows={4} required className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00CFE8]" />
            </div>
            <button type="submit" className="w-full bg-[#00CFE8] hover:bg-[#009688] text-[#0A2540] font-extrabold rounded-full px-6 py-3 transition-colors shadow-md uppercase duration-200 scale-100 hover:scale-105">Enviar</button>
          </form>
        </div>
      </section>
    </main>
  );
}
