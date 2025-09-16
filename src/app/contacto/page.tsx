
export default function ContactoPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A2540] flex items-center justify-center py-12 px-4">
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
    </main>
  );
}