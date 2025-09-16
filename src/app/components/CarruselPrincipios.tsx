"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const PRINCIPIOS = [
	{
		img: "/principios/proposito.jpg",
		alt: "Propósito",
		titulo: "Propósito",
		texto: "Contribuimos al bienestar de las personas y al desarrollo económico creando un ecosistema de servicios que facilita la innovación en tu organización.",
	},
	{
		img: "/principios/cambios.jpg",
		alt: "Cambios Sistémicos",
		titulo: "Cambios Sistémicos",
		texto: "Analizamos el impacto de cada actor en tu entorno para diseñar soluciones que generen transformaciones sostenibles.",
	},
	{
		img: "/principios/tecnologias.jpg",
		alt: "Necesidades y Tecnologías",
		titulo: "Necesidades y Tecnologías",
		texto: "La tecnología es el medio, no el fin: la integramos para impulsar el crecimiento y atender necesidades reales.",
	},
	{
		img: "/principios/diversidad.jpg",
		alt: "Diversidad y Multidisciplina",
		titulo: "Diversidad y Multidisciplina",
		texto: "Creemos en la diversidad y la colaboración entre disciplinas para comprender la complejidad del mercado actual.",
	},
];

export default function CarruselPrincipios() {
	const [startIndex, setStartIndex] = useState(0);
	const [fade, setFade] = useState(true);
	const total = PRINCIPIOS.length;

	const scroll = (dir: "left" | "right") => {
		setFade(false);
		setTimeout(() => {
			let newIndex;
			if (dir === "left") {
				newIndex = (startIndex - 1 + total) % total;
			} else {
				newIndex = (startIndex + 1) % total;
			}
			setStartIndex(newIndex);
			setFade(true);
		}, 200); // duration matches CSS transition
	};

	// Cambio automático
	useEffect(() => {
		const timer = setInterval(() => {
			scroll("right");
		}, 5000);
		return () => clearInterval(timer);
		// eslint-disable-next-line
	}, [startIndex]);

	const current = PRINCIPIOS[startIndex];

	return (
		<div className="relative w-full flex flex-col items-center py-2 bg-[#F8FAFB]">
			<div
				className="relative flex items-center justify-center w-full"
				style={{
					maxWidth: "100vw",
					minHeight: 320,
					height: "auto",
				}}
			>
				{/* Flecha Izquierda */}
				<button
					aria-label="Anterior"
					onClick={() => scroll("left")}
					className="bg-[#222] hover:bg-[#444] text-white rounded-md w-10 h-10 flex items-center justify-center shadow transition-colors duration-200 absolute left-[-24px] md:left-[-48px] z-10"
					style={{ top: "50%", transform: "translateY(-50%)" }}
				>
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
						<rect width="24" height="24" rx="4" fill="none" />
						<path
							d="M15 6l-6 6 6 6"
							stroke="#fff"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
				{/* Tarjeta */}
				<div
					data-card
					className={`w-full max-w-[98vw] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[700px] xl:max-w-[800px] flex-shrink-0 bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center animate-fadein snap-center transition-transform duration-300`}
					style={{
						minWidth: 260,
						width: "100%",
						opacity: fade ? 1 : 0,
						transition: "opacity 0.2s ease",
					}}
				>
					<Image
						src={current.img}
						alt={current.alt}
						width={800}
						height={260}
						className="w-full h-[160px] sm:h-[200px] md:h-[240px] lg:h-[300px] object-cover rounded mb-4"
					/>
								<h3 className="text-xl md:text-2xl font-bold text-[#2A2C2E] mb-2 uppercase">
									{current.titulo}
					</h3>
					<p className="text-gray-700 text-base md:text-lg">{current.texto}</p>
				</div>
				{/* Flecha Derecha */}
				<button
					aria-label="Siguiente"
					onClick={() => scroll("right")}
					className="bg-[#222] hover:bg-[#444] text-white rounded-md w-10 h-10 flex items-center justify-center shadow transition-colors duration-200 absolute right-[-24px] md:right-[-48px] z-10"
					style={{ top: "50%", transform: "translateY(-50%)" }}
				>
					<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
						<rect width="24" height="24" rx="4" fill="none" />
						<path
							d="M9 6l6 6-6 6"
							stroke="#fff"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</button>
			</div>
			{/* Indicadores opcionales */}
			<div className="flex justify-center mt-2 gap-2">
				{PRINCIPIOS.map((_, idx) => (
					<span
						key={idx}
						className={`inline-block w-2 h-2 rounded-full ${
							idx === startIndex ? "bg-[#00CFE8]" : "bg-gray-300"
						}`}
					/>
				))}
			</div>
			<style jsx global>{`
				.hide-scrollbar::-webkit-scrollbar {
					display: none;
				}
				.hide-scrollbar {
					-ms-overflow-style: none;
					scrollbar-width: none;
				}
			`}</style>
		</div>
	);
}
