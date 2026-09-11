"use client";

import { useState } from "react";
import Link from "next/link";

const categorias = [
  { id: "todas", label: "Todas", emoji: "🌟" },
  { id: "tareas", label: "Dirección de Tareas", emoji: "📚" },
  { id: "musica", label: "Música", emoji: "🎵" },
  { id: "arte", label: "Arte", emoji: "🎨" },
  { id: "danzas", label: "Danzas y Teatro", emoji: "💃" },
  { id: "vacaciones", label: "Vacaciones", emoji: "☀️" },
];

// Placeholders — reemplazar con fotos reales en /public/images/galeria/
const fotos = [
  { id: 1, categoria: "tareas", titulo: "Sesión de tareas", descripcion: "Niños en acompañamiento académico personalizado", emoji: "📚", color: "from-orange-200 to-orange-300" },
  { id: 2, categoria: "tareas", titulo: "Refuerzo de matemáticas", descripcion: "Aprendiendo con dedicación y paciencia", emoji: "✏️", color: "from-orange-100 to-orange-200" },
  { id: 3, categoria: "tareas", titulo: "Lectura guiada", descripcion: "Fomentando el amor por la lectura", emoji: "📖", color: "from-amber-200 to-orange-200" },
  { id: 4, categoria: "musica", titulo: "Clase de música", descripcion: "Aprendiendo teoría musical con alegría", emoji: "🎵", color: "from-red-200 to-red-300" },
  { id: 5, categoria: "musica", titulo: "Sábados musicales", descripcion: "El mejor plan para los sábados", emoji: "🎶", color: "from-rose-200 to-red-200" },
  { id: 6, categoria: "musica", titulo: "Ensamble musical", descripcion: "Tocando juntos con armonía", emoji: "🎼", color: "from-red-100 to-rose-200" },
  { id: 7, categoria: "arte", titulo: "Taller de pintura", descripcion: "Explorando colores y técnicas", emoji: "🎨", color: "from-yellow-200 to-yellow-300" },
  { id: 8, categoria: "arte", titulo: "Manualidades", descripcion: "Creatividad sin límites", emoji: "✂️", color: "from-amber-100 to-yellow-200" },
  { id: 9, categoria: "arte", titulo: "Exposición de obras", descripcion: "Mostrando el talento de nuestros artistas", emoji: "🖼️", color: "from-yellow-100 to-amber-200" },
  { id: 10, categoria: "danzas", titulo: "Clase de danzas", descripcion: "Ritmo, movimiento y expresión", emoji: "💃", color: "from-pink-200 to-pink-300" },
  { id: 11, categoria: "danzas", titulo: "Teatro escolar", descripcion: "Dramatización y trabajo en equipo", emoji: "🎭", color: "from-pink-100 to-rose-200" },
  { id: 12, categoria: "danzas", titulo: "Presentación especial", descripcion: "El resultado del esfuerzo de nuestros niños", emoji: "🌟", color: "from-rose-100 to-pink-200" },
  { id: 13, categoria: "vacaciones", titulo: "Curso vacacional", descripcion: "Diversión y aprendizaje en vacaciones", emoji: "☀️", color: "from-purple-200 to-purple-300" },
  { id: 14, categoria: "vacaciones", titulo: "Manualidades vacacionales", descripcion: "Proyectos especiales de temporada", emoji: "🎄", color: "from-violet-200 to-purple-200" },
  { id: 15, categoria: "vacaciones", titulo: "Muestra vacacional", descripcion: "Lo mejor de cada temporada", emoji: "🎉", color: "from-purple-100 to-violet-200" },
];

export default function GaleriaClient() {
  const [categoriaActiva, setCategoriaActiva] = useState("todas");
  const [fotoActiva, setFotoActiva] = useState<typeof fotos[0] | null>(null);

  const fotosFiltradas = categoriaActiva === "todas"
    ? fotos
    : fotos.filter((f) => f.categoria === categoriaActiva);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Filtros */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categorias.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setCategoriaActiva(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                categoriaActiva === cat.id
                  ? "bg-[#E53E1A] text-white shadow-md scale-105"
                  : "bg-[#FFF8F5] text-gray-600 border-2 border-orange-100 hover:border-orange-300"
              }`}
            >
              <span>{cat.emoji}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Contador */}
        <p className="text-center text-gray-400 text-sm mb-8">
          Mostrando <span className="font-bold text-[#E53E1A]">{fotosFiltradas.length}</span> {fotosFiltradas.length === 1 ? "foto" : "fotos"}
          {categoriaActiva !== "todas" && (
            <span> de <span className="font-semibold">{categorias.find(c => c.id === categoriaActiva)?.label}</span></span>
          )}
        </p>

        {/* Grid de fotos */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {fotosFiltradas.map((foto) => (
            <div
              key={foto.id}
              onClick={() => setFotoActiva(foto)}
              className="break-inside-avoid group cursor-pointer rounded-2xl overflow-hidden border-2 border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Placeholder imagen — reemplazar con next/image */}
              <div className={`bg-gradient-to-br ${foto.color} flex items-center justify-center relative overflow-hidden`}
                style={{ height: `${180 + (foto.id % 3) * 60}px` }}
              >
                <div className="text-center">
                  <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {foto.emoji}
                  </div>
                  <p className="text-white/70 text-xs font-medium px-4">
                    Agregar foto real aquí
                  </p>
                </div>
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white rounded-full p-3 shadow-lg">
                      <svg className="w-5 h-5 text-[#E53E1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* Caption */}
              <div className="bg-white px-4 py-3">
                <p className="font-bold text-gray-900 text-sm">{foto.titulo}</p>
                <p className="text-gray-500 text-xs mt-0.5">{foto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Aviso fotos reales */}
        <div className="mt-16 bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 text-center">
          <div className="text-3xl mb-3">📸</div>
          <h3 className="font-extrabold text-gray-900 mb-2" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
            ¿Tienes fotos de Batuta y Pincel?
          </h3>
          <p className="text-gray-600 text-sm mb-4 max-w-md mx-auto">
            Sube las fotos reales a las carpetas correspondientes en{" "}
            <code className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-mono">
              /public/images/galeria/
            </code>{" "}
            y reemplaza los placeholders automáticamente.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all"
          >
            ¿Quieres aparecer aquí? Contáctanos
          </Link>
        </div>

      </div>

      {/* Lightbox */}
      {fotoActiva && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setFotoActiva(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`bg-gradient-to-br ${fotoActiva.color} flex items-center justify-center`} style={{height: "300px"}}>
              <span className="text-8xl">{fotoActiva.emoji}</span>
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-extrabold text-gray-900 text-lg" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                  {fotoActiva.titulo}
                </h3>
                <button
                  onClick={() => setFotoActiva(null)}
                  className="text-gray-400 hover:text-gray-600 ml-4 flex-shrink-0"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <p className="text-gray-500 text-sm mb-4">{fotoActiva.descripcion}</p>
              <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full bg-orange-100 text-orange-700`}>
                {categorias.find(c => c.id === fotoActiva.categoria)?.emoji}{" "}
                {categorias.find(c => c.id === fotoActiva.categoria)?.label}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
