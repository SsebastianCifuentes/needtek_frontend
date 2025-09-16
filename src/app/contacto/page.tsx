import Image from "next/image";

export default function ContactoPage() {
  return (
    <main className="container mx-auto py-12 px-4">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-8 text-center">Contacto</h1>
      {/* Formspree integrado: https://formspree.io/f/mzzaqjdo */}
      <form
        className="max-w-lg mx-auto space-y-6 bg-white rounded-xl shadow-lg border border-gray-100 p-8"
        method="POST"
        action="https://formspree.io/f/mzzaqjdo"
        aria-label="Formulario de contacto"
      >
        <div>
          <label htmlFor="nombre" className="block mb-1 font-medium">Nombre</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            required
            className="w-full border rounded px-3 py-2"
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className="w-full border rounded px-3 py-2"
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="tema" className="block mb-1 font-medium">Tema</label>
                    <input
                      id="tema"
                      type="text"
                      name="tema"
                      required
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensaje" className="block mb-1 font-medium">Mensaje</label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      rows={4}
                      required
                      className="w-full border rounded px-3 py-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Enviar
                  </button>
                </form>
              </main>
            );
          }