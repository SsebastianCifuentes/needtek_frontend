"use client";

export default function BackButton() {
  return (
    <div className="absolute" style={{ left: 'calc(50% - 320px)', top: '2.5rem' }}>
      <button
        onClick={() => window.history.back()}
        aria-label="Volver"
  className="text-[#0A2540] font-bold text-3xl md:text-4xl hover:text-[#00CFE8] focus:outline-none cursor-pointer"
        style={{ lineHeight: 1, fontWeight: 900 }}
      >
        &#8592;
      </button>
    </div>
  );
}
