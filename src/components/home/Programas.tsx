import Link from "next/link";

const programas = [
  {
    id: "tareas",
    emoji: "📚",
    title: "Dirección de Tareas",
    description: "Acompañamiento diario con profesores especializados en todas las áreas.",
    stats: [
      { label: "Lunes a viernes", value: "12–6pm" },
      { label: "Edad mínima", value: "5 años" },
      { label: "Grupos", value: "Pequeños" },
    ],
    color: "bg-orange-400",
    lightColor: "bg-orange-50",
    borderColor: "border-orange-200",
    tagColor: "bg-orange-100 text-orange-700",
    img: "👨‍🏫",
  },
  {
    id: "musica",
    emoji: "🎵",
    title: "Academia de Música",
    description: "Teoría musical, instrumentos y canto. Sábados especiales para los estudiantes.",
    stats: [
      { label: "Sábados", value: "Incluido" },
      { label: "Nivel", value: "Inicial" },
      { label: "Cupos", value: "Limitados" },
    ],
    color: "bg-red-400",
    lightColor: "bg-red-50",
    borderColor: "border-red-200",
    tagColor: "bg-red-100 text-red-700",
    img: "🎼",
  },
  {
    id: "artes",
    emoji: "🎨",
    title: "Artes y Danzas",
    description: "Pintura, manualidades, danzas folclóricas y teatro para la expresión integral.",
    stats: [
      { label: "Modalidad", value: "Presencial" },
      { label: "Materiales", value: "Incluidos" },
      { label: "Niveles", value: "Todos" },
    ],
    color: "bg-yellow-400",
    lightColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    tagColor: "bg-yellow-100 text-yellow-700",
    img: "🖌️",
  },
  {
    id: "vacaciones",
    emoji: "🌟",
    title: "Cursos Vacacionales",
    description: "Teatro, danzas y manualidades durante las vacaciones. Diversión garantizada.",
    stats: [
      { label: "Temporada", value: "Vacaciones" },
      { label: "Actividades", value: "Múltiples" },
      { label: "Desde", value: "1998" },
    ],
    color: "bg-purple-400",
    lightColor: "bg-purple-50",
    borderColor: "border-purple-200",
    tagColor: "bg-purple-100 text-purple-700",
    img: "🎭",
  },
];

export default function Programas() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-100 text-[#EA580C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Lo que ofrecemos
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
            Nuestros <span className="text-[#E53E1A]">programas</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Kindedo opera en Chía desde 1998 ofreciendo una formación integral 
            que combina lo académico con el arte y la música.
          </p>
        </div>

        {/* Grid de programas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programas.map((programa) => (
            <ProgramaCard key={programa.id} programa={programa} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href="/inscripciones"
            className="inline-flex items-center gap-2 bg-[#E53E1A] hover:bg-[#C53030] text-white px-8 py-4 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Reserva un cupo ahora
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
          <p className="text-gray-400 text-sm mt-3">
            Cupos limitados por temporada — ¡no te quedes sin el tuyo!
          </p>
        </div>

      </div>
    </section>
  );
}

function ProgramaCard({ programa }: { programa: typeof programas[0] }) {
  return (
    <div className={`group rounded-3xl ${programa.lightColor} border-2 ${programa.borderColor} overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>

      {/* Foto en círculo */}
      <div className="flex justify-center pt-8 pb-4">
        <div className={`relative w-32 h-32 rounded-full ${programa.color} flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
          <span className="text-6xl">{programa.img}</span>
          {/* Aro decorativo */}
          <div className="absolute inset-0 rounded-full border-4 border-white opacity-40"/>
        </div>
      </div>

      {/* Contenido */}
      <div className="px-5 pb-6 text-center">
        {/* Emoji tag */}
        <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${programa.tagColor}`}>
          {programa.emoji} {programa.title}
        </span>

        {/* Descripción */}
        <p className="text-gray-600 text-sm leading-relaxed mb-5">
          {programa.description}
        </p>

        {/* Stats del programa */}
        <div className="space-y-2 mb-5">
          {programa.stats.map((stat, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white rounded-xl px-3 py-2 border border-white/80"
            >
              <span className="text-xs text-gray-400">{stat.label}</span>
              <span className="text-xs font-bold text-gray-700">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Link ver más */}
        <Link
          href="/servicios"
          className={`inline-flex items-center gap-1 text-xs font-bold transition-colors text-gray-500 hover:text-[#E53E1A]`}
        >
          Ver detalles
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7"/>
          </svg>
        </Link>
      </div>
    </div>
  );
}
