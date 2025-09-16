"use client";
import Image from "next/image";
import CarruselPrincipios from "./components/CarruselPrincipios";
import { useEffect } from "react";
export default function Home() {
  const handleScrollToContacto = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const contacto = document.getElementById("contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };
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

  return (
    <main>
      {/* HERO SECCIÓN */}
      <section
        className="w-full min-h-screen flex flex-col justify-center items-start text-left relative bg-cover bg-center animate-fadein pt-0 md:pt-0"
        style={{ backgroundImage: "url('/banner/laptop_coding.jpg')" }}
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
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] mb-8 text-center uppercase tracking-wide">¿Cómo trabajamos?</h2>
          <CarruselPrincipios />
  </div>
      </section>
      {/* CTA INTERMEDIO */}
      <section className="w-full bg-[#0A2540] px-4 pt-8 animate-fadein">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6 drop-shadow-lg mt-8">¿Quieres llevar a tu organización al siguiente nivel?</h3>
          <a
            href="#contacto"
            className="inline-block bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-extrabold px-8 py-4 rounded-full text-lg shadow-lg transition-colors uppercase mb-12"
            onClick={handleScrollToContacto}
          >
            Agenda una consultoría gratuita
          </a>
        </div>
      </section>
      {/* SERVICIOS */}
      <section className="w-full bg-white py-20 px-4 animate-fadein">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0A2540] mb-12 text-center uppercase tracking-wide">Consultoría y Servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Estrategia y Cultura Organizacional */}
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center animate-fadein">
                <div className="flex items-center justify-center mb-4 bg-[#F5F6F7] rounded-full w-20 h-20">
                <Image src="/servicios/estrategia.png" alt="Estrategia y Cultura" width={48} height={48} style={{filter: 'invert(62%) sepia(98%) saturate(747%) hue-rotate(153deg) brightness(98%) contrast(101%)'}} />
              </div>
              <h3 className="text-lg font-bold text-[#2A2C2E] mb-2 uppercase">Estrategia y Cultura Organizacional</h3>
              <p className="text-gray-700 text-sm">Potencia el liderazgo, la colaboración y la alineación de tu organización con su propósito.</p>
            </div>
            {/* Gestión Tecnológica */}
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center animate-fadein">
              <div className="flex items-center justify-center mb-4 bg-[#F5F6F7] rounded-full w-20 h-20">
                <Image src="/servicios/tecnologia.png" alt="Gestión Tecnológica" width={48} height={48} style={{filter: 'invert(62%) sepia(98%) saturate(747%) hue-rotate(153deg) brightness(98%) contrast(101%)'}} />
              </div>
              <h3 className="text-lg font-bold text-[#2A2C2E] mb-2 uppercase">Gestión Tecnológica</h3>
              <p className="text-gray-700 text-sm">Acompañamos la adopción de tecnologías que habilitan el crecimiento y la eficiencia.</p>
            </div>
            {/* Modelos Operativos */}
            <div className="bg-white rounded-xl shadow-md p-8 flex flex-col items-center text-center animate-fadein">
                <div className="flex items-center justify-center mb-4 bg-[#F5F6F7] rounded-full w-20 h-20">
                <Image src="/servicios/modelos.png" alt="Modelos Operativos" width={48} height={48} style={{filter: 'invert(62%) sepia(98%) saturate(747%) hue-rotate(153deg) brightness(98%) contrast(101%)'}} />
              </div>
              <h3 className="text-lg font-bold text-[#2A2C2E] mb-2 uppercase">Modelos Operativos</h3>
              <p className="text-gray-700 text-sm">Diseñamos estructuras más ágiles, digitales y orientadas al cliente.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACTO / FORMULARIO */}
      <section id="contacto" className="w-full bg-[#0A2540] py-20 px-4 animate-fadein">
        <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Título y subtítulo a la izquierda */}
          <div className="flex-1 mb-10 md:mb-0 flex flex-col justify-center items-start">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 text-left uppercase tracking-wide">Conversemos sobre tus desafíos tecnológicos</h2>
            <p className="text-gray-200 mb-8 text-left text-lg">Déjanos tu mensaje y te responderemos lo antes posible.</p>
          </div>
          {/* Formulario a la derecha */}
          <form
            className="flex-1 bg-[#F5F6F7] rounded-2xl shadow-lg p-10 w-full max-w-xl"
            method="POST"
            action="https://formspree.io/f/mzzaqjdo"
            aria-label="Formulario de contacto"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-bold text-[#2A2C2E] mb-1">Nombre</label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  required
                  className="w-full bg-white border border-[#E6EEF2] text-[#2A2C2E] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#2A2C2E] mb-1">Correo</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white border border-[#E6EEF2] text-[#2A2C2E] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                  autoComplete="email"
                />
              </div>
              <div>
                <label htmlFor="tema" className="block text-sm font-bold text-[#2A2C2E] mb-1">Tema</label>
                <input
                  id="tema"
                  type="text"
                  name="tema"
                  required
                  className="w-full bg-white border border-[#E6EEF2] text-[#2A2C2E] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-bold text-[#2A2C2E] mb-1">Mensaje</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  className="w-full bg-white border border-[#E6EEF2] text-[#2A2C2E] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-extrabold rounded-full px-6 py-3 transition-colors shadow-md uppercase duration-200 scale-100 hover:scale-105"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
