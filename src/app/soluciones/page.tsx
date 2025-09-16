export default function SolucionesPage() {
  return (
    <main className="w-full bg-[#F5F6F7] py-20 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-center text-[#0A2540]">Soluciones</h1>
        <p className="text-lg md:text-xl text-center text-gray-700 mb-12">Diseñamos estrategias a la medida de tu organización, integrando tecnología, cultura y modelos operativos para impulsar la innovación.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Estrategia y Cultura Organizacional */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <h2 className="text-lg font-bold text-[#00CFE8] mb-2 uppercase">Estrategia y Cultura Organizacional</h2>
            <ul className="text-gray-700 text-sm list-disc list-inside text-left space-y-1">
              <li>Diagnóstico estratégico de tu organización.</li>
              <li>Diseño e implementación de estrategias efectivas.</li>
              <li>Fortalecimiento del liderazgo y la colaboración.</li>
              <li>Alineamiento entre estrategia y cultura organizacional.</li>
            </ul>
          </div>
          {/* Gestión Tecnológica */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <h2 className="text-lg font-bold text-[#00CFE8] mb-2 uppercase">Gestión Tecnológica</h2>
            <ul className="text-gray-700 text-sm list-disc list-inside text-left space-y-1">
              <li>Procesos de gestión tecnológica alineados a tus objetivos.</li>
              <li>Acompañamiento en la toma de decisiones críticas.</li>
              <li>Desarrollo de capacidades para la adopción de nuevas tecnologías.</li>
            </ul>
          </div>
          {/* Modelos Operativos */}
          <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
            <h2 className="text-lg font-bold text-[#00CFE8] mb-2 uppercase">Modelos Operativos</h2>
            <ul className="text-gray-700 text-sm list-disc list-inside text-left space-y-1">
              <li>Rediseño de procesos y estructuras organizacionales.</li>
              <li>Identificación de brechas en capacidades.</li>
              <li>Migración de modelos tradicionales a configuraciones ágiles y digitales.</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/contacto" className="inline-block bg-[#00CFE8] hover:bg-[#009688] text-[#0A2540] font-extrabold px-8 py-4 rounded-full text-lg shadow-lg transition-colors uppercase">Descubre cómo podemos apoyar tu transformación</a>
        </div>
      </div>
    </main>
  );
}
