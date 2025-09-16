"use client";
import Image from "next/image";

export default function SolucionesPage() {
  return (
    <main className="w-full min-h-screen bg-[#F5F6F7]">
      {/* 1. HERO */}
      <section className="w-full flex flex-col items-center justify-center min-h-[80vh] py-24 px-4 bg-[#F5F6F7]">
  <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-center text-[#0A2540] mb-4 md:mb-6 uppercase leading-tight md:leading-tight max-w-3xl mx-auto">Soluciones integrales para la transformación digital</h1>
  <p className="text-base sm:text-lg md:text-2xl text-center text-[#2A2C2E] mb-6 md:mb-10 max-w-xl mx-auto">Diseñamos estrategias a la medida de tu organización, integrando tecnología, cultura y modelos operativos para impulsar la innovación.</p>
        <div className="flex flex-col md:flex-row gap-4 mt-4 justify-center items-center w-full">
          <a href="/contacto" className="bg-[#FF6B35] hover:bg-[#FF8C5A] text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-colors uppercase w-full md:w-auto mb-2 md:mb-0 text-center">Agenda una consultoría gratuita</a>
          <a href="/brochure.pdf" className="border-2 border-[#FF6B35] text-[#FF6B35] font-bold px-8 py-4 rounded-full text-lg shadow-lg transition-colors uppercase w-full md:w-auto text-center" download>Descargar brochure</a>
        </div>
      </section>

      {/* 2. RESUMEN RÁPIDO */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="text-xl text-center text-[#2A2C2E] mb-10">Nuestras soluciones combinan diagnóstico estratégico, gestión tecnológica y rediseño operativo para generar resultados sostenibles.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Tarjeta 1 */}
            <div className="bg-[#F5F6F7] rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow group">
              <div className="flex items-center justify-center mb-4 bg-white rounded-full w-16 h-16">
                <Image src="/servicios/estrategia.png" alt="Estrategia" width={40} height={40} style={{filter: 'invert(62%) sepia(98%) saturate(747%) hue-rotate(153deg) brightness(98%) contrast(101%)'}} />
              </div>
              <h3 className="text-lg font-bold text-[#00CFE8] mb-2 uppercase group-hover:text-[#FF6B35] transition-colors">Estrategia y Cultura Organizacional</h3>
              <p className="text-gray-700 text-sm">Alineamos propósito, liderazgo y procesos para que la tecnología funcione.</p>
            </div>
            {/* Tarjeta 2 */}
            <div className="bg-[#F5F6F7] rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow group">
              <div className="flex items-center justify-center mb-4 bg-white rounded-full w-16 h-16">
                <Image src="/servicios/tecnologia.png" alt="Tecnología" width={40} height={40} style={{filter: 'invert(62%) sepia(98%) saturate(747%) hue-rotate(153deg) brightness(98%) contrast(101%)'}} />
              </div>
              <h3 className="text-lg font-bold text-[#00CFE8] mb-2 uppercase group-hover:text-[#FF6B35] transition-colors">Gestión Tecnológica</h3>
              <p className="text-gray-700 text-sm">Implementamos gobernanza y capacidades para una adopción segura y efectiva.</p>
            </div>
            {/* Tarjeta 3 */}
            <div className="bg-[#F5F6F7] rounded-2xl p-8 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-shadow group">
              <div className="flex items-center justify-center mb-4 bg-white rounded-full w-16 h-16">
                <Image src="/servicios/modelos.png" alt="Modelos" width={40} height={40} style={{filter: 'invert(62%) sepia(98%) saturate(747%) hue-rotate(153deg) brightness(98%) contrast(101%)'}} />
              </div>
              <h3 className="text-lg font-bold text-[#00CFE8] mb-2 uppercase group-hover:text-[#FF6B35] transition-colors">Modelos Operativos</h3>
              <p className="text-gray-700 text-sm">Rediseñamos procesos para ser más ágiles, digitales y centrados en el cliente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Estrategia y Cultura Organizacional */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0A2540] mb-4 uppercase">Estrategia y Cultura Organizacional</h2>
          <p className="text-lg text-[#2A2C2E] mb-6">Partimos por entender tu propósito y contexto para diseñar una hoja de ruta que sincronice estrategia, liderazgo y equipo.</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Diagnóstico estratégico de tu organización.</li>
            <li>Diseño e implementación de estrategias efectivas.</li>
            <li>Fortalecimiento del liderazgo y la colaboración.</li>
            <li>Alineamiento entre estrategia y cultura organizacional.</li>
          </ul>
          <div className="bg-[#E6EEF2] rounded-xl p-4 text-[#2A2C2E] font-semibold mb-4">Organización cohesionada, con liderazgo habilitado y capacidad de ejecución.</div>
          <a href="/contacto" className="inline-block border-2 border-[#00CFE8] text-[#00CFE8] font-bold px-6 py-2 rounded-full text-sm transition-colors hover:bg-[#00CFE8] hover:text-white">Solicitar diagnóstico</a>
        </div>
      </section>

      {/* 4. Gestión Tecnológica */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0A2540] mb-4 uppercase">Gestión Tecnológica</h2>
          <p className="text-lg text-[#2A2C2E] mb-6">Acompañamos las decisiones tecnológicas clave, priorizamos iniciativas y construimos capacidades operativas para su adopción.</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Procesos de gestión tecnológica alineados a tus objetivos.</li>
            <li>Acompañamiento en la toma de decisiones críticas (evaluación de proveedores, PoC, pilotos).</li>
            <li>Desarrollo de capacidades y formación para adopción tecnológica.</li>
            <li>Definición de roadmap tecnológico y gobernanza.</li>
          </ul>
          <div className="bg-[#E6EEF2] rounded-xl p-4 text-[#2A2C2E] font-semibold mb-4">Decisiones tecnológicas con menor riesgo y mayor impacto.</div>
          {/* Timeline visual */}
          <div className="flex gap-4 justify-center items-center mb-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#00CFE8] rounded-full flex items-center justify-center text-white font-bold">1</div>
              <span className="text-xs mt-2">Evaluar</span>
            </div>
            <span className="text-2xl text-[#2A2C2E]">→</span>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#00CFE8] rounded-full flex items-center justify-center text-white font-bold">2</div>
              <span className="text-xs mt-2">Pilotear</span>
            </div>
            <span className="text-2xl text-[#2A2C2E]">→</span>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-[#00CFE8] rounded-full flex items-center justify-center text-white font-bold">3</div>
              <span className="text-xs mt-2">Escalar</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Modelos Operativos */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0A2540] mb-4 uppercase">Modelos Operativos</h2>
          <p className="text-lg text-[#2A2C2E] mb-6">Rediseñamos la forma en que trabajan tus equipos para que los procesos, roles y herramientas sustenten la estrategia digital.</p>
          <ul className="list-disc pl-6 text-gray-700 mb-6">
            <li>Rediseño de procesos y estructuras organizacionales.</li>
            <li>Identificación de brechas en capacidades.</li>
            <li>Migración de modelos tradicionales a configuraciones ágiles y digitales.</li>
            <li>Integración de métricas y KPIs orientados al cliente.</li>
          </ul>
          <div className="bg-[#E6EEF2] rounded-xl p-4 text-[#2A2C2E] font-semibold mb-4">Procesos más eficientes, tiempos de entrega reducidos y mejor experiencia para clientes internos/externos.</div>
          {/* Mini-case o referencia */}

        </div>
      </section>

      {/* 6. Cómo trabajamos — proceso */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0A2540] mb-8 uppercase text-center">Cómo trabajamos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F5F6F7] rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
              <div className="w-14 h-14 bg-[#00CFE8] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">1</div>
              <h3 className="text-lg font-bold text-[#2A2C2E] mb-2 uppercase">Diagnóstico</h3>
              <p className="text-gray-700 text-sm">Mapeo de actores, procesos y tecnología.</p>
              <span className="text-xs text-[#00CFE8] mt-2">~4 semanas</span>
            </div>
            <div className="bg-[#F5F6F7] rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
              <div className="w-14 h-14 bg-[#00CFE8] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">2</div>
              <h3 className="text-lg font-bold text-[#2A2C2E] mb-2 uppercase">Diseño</h3>
              <p className="text-gray-700 text-sm">Solución integrada (estrategia, tech, people).</p>
              <span className="text-xs text-[#00CFE8] mt-2">~2 semanas</span>
            </div>
            <div className="bg-[#F5F6F7] rounded-2xl p-8 flex flex-col items-center text-center shadow-md">
              <div className="w-14 h-14 bg-[#00CFE8] rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">3</div>
              <h3 className="text-lg font-bold text-[#2A2C2E] mb-2 uppercase">Implementación & Acompañamiento</h3>
              <p className="text-gray-700 text-sm">Ejecución con indicadores y capacitación.</p>
              <span className="text-xs text-[#00CFE8] mt-2">~2-4 semanas</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Beneficios */}
      <section className="w-full py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-extrabold text-[#0A2540] mb-8 uppercase text-center">Beneficios para tu organización</h2>
          <ul className="list-none pl-0 text-gray-700 text-lg grid gap-3">
            <li className="flex items-center"><span className="text-[#00C46A] text-2xl font-bold mr-2">✓</span>Mayor alineamiento entre estrategia y tecnología.</li>
            <li className="flex items-center"><span className="text-[#00C46A] text-2xl font-bold mr-2">✓</span>Reducción del riesgo en adopción tecnológica.</li>
            <li className="flex items-center"><span className="text-[#00C46A] text-2xl font-bold mr-2">✓</span>Equipos habilitados para operar nuevas soluciones.</li>
            <li className="flex items-center"><span className="text-[#00C46A] text-2xl font-bold mr-2">✓</span>Modelos operativos más ágiles y centrados en el cliente.</li>
            <li className="flex items-center"><span className="text-[#00C46A] text-2xl font-bold mr-2">✓</span>Visibilidad y métricas de impacto.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
