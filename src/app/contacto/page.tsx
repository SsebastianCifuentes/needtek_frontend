
export default function ContactoPage() {
  return (
    <main className="w-full min-h-screen bg-[#0A2540] flex items-center justify-center py-12 px-4">
      <form
        className="max-w-2xl w-full mx-auto bg-white rounded-2xl shadow-lg p-10"
        method="POST"
        action="https://formspree.io/f/mzzaqjdo"
        aria-label="Formulario de contacto"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0A2540] mb-4 text-center uppercase tracking-wide">Hablemos de tu próximo proyecto</h2>
        <p className="text-gray-700 text-center mb-8">Déjanos tu mensaje y te responderemos lo antes posible.</p>
        <div className="space-y-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-bold text-[#0A2540] mb-1">Nombre</label>
            <input
              id="nombre"
              type="text"
              name="nombre"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00CFE8]"
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-[#0A2540] mb-1">Correo</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00CFE8]"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="tema" className="block text-sm font-bold text-[#0A2540] mb-1">Tema</label>
            <input
              id="tema"
              type="text"
              name="tema"
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00CFE8]"
            />
          </div>
          <div>
            <label htmlFor="mensaje" className="block text-sm font-bold text-[#0A2540] mb-1">Mensaje</label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows={4}
              required
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#00CFE8]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#00CFE8] hover:bg-[#009688] text-[#0A2540] font-extrabold rounded-full px-6 py-3 transition-colors shadow-md uppercase duration-200 scale-100 hover:scale-105"
          >
            Enviar
          </button>
        </div>
      </form>
    </main>
  );
}