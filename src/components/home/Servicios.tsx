import Link from "next/link";

const servicios = [
  {
    id: "tareas",
    emoji: "📚",
    title: "Dirección de Tareas",
    description:
      "Acompañamiento personalizado en tareas y evaluaciones de lunes a viernes. Profesores especializados en todas las áreas del conocimiento.",
    color: "bg-orange-50",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-500",
    border: "border-orange-100",
    hover: "hover:border-orange-300",
    tag: "Lunes a viernes",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    id: "musica",
    emoji: "🎵",
    title: "Academia de Música",
    description:
      "Clases de instrumentos, teoría musical y canto. Los sábados especiales de música para niños que asisten entre semana.",
    color: "bg-red-50",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    border: "border-red-100",
    hover: "hover:border-red-300",
    tag: "Incluye sábados",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    id: "artes",
    emoji: "🎨",
    title: "Artes Plásticas",
    description:
      "Pintura, dibujo y manualidades. Desarrollamos la creatividad y el amor por el arte en cada sesión.",
    color: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
    border: "border-yellow-100",
    hover: "hover:border-yellow-300",
    tag: "Todas las edades",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "danzas",
    emoji: "💃",
    title: "Danzas y Teatro",
    description:
      "Expresión corporal, danzas folclóricas y teatro. Fortalecemos la confianza y el trabajo en equipo.",
    color: "bg-pink-50",
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    border: "border-pink-100",
    hover: "hover:border-pink-300",
    tag: "Expresión corporal",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    id: "vacaciones",
    emoji: "🌟",
    title: "Cursos Vacacionales",
    description:
      "Durante las vacaciones: teatro, danzas, manualidades y más. Los primeros en Chía en ofrecer este servicio integral desde 1998.",
    color: "bg-purple-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-500",
    border: "border-purple-100",
    hover: "hover:border-purple-300",
    tag: "Temporadas vac.",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

export default function Servicios() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header sección */}
        <div className="text-center mb-14">
          <span className="inline-block bg-orange-100 text-[#1A8FB8] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            ¿Qué ofrecemos?
          </span>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
            Nuestros <span className="text-[#25AFE6]">servicios</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Un espacio integral donde tu hijo aprende, se expresa y crece. 
            Combinamos la asesoría académica con el arte y la música para una 
            formación completa.
          </p>
        </div>

        {/* Grid de servicios — 3 arriba, 2 abajo centrados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {servicios.slice(0, 3).map((s) => (
            <ServiceCard key={s.id} servicio={s} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {servicios.slice(3).map((s) => (
            <ServiceCard key={s.id} servicio={s} />
          ))}
        </div>

        {/* CTA inferior */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            ¿Quieres saber más sobre nuestros programas?
          </p>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 bg-[#25AFE6] hover:bg-[#1A8FB8] text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Ver todos los servicios
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>

      </div>
    </section>
  );
}

function ServiceCard({ servicio }: { servicio: typeof servicios[0] }) {
  return (
    <div
      className={`
        relative group rounded-2xl border-2 ${servicio.border} ${servicio.hover}
        ${servicio.color} p-7 transition-all duration-300
        hover:shadow-lg hover:-translate-y-1
      `}
    >
      {/* Ícono */}
      <div className={`w-14 h-14 ${servicio.iconBg} rounded-2xl flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform duration-300`}>
        {servicio.emoji}
      </div>

      {/* Tag */}
      <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 ${servicio.tagColor}`}>
        {servicio.tag}
      </span>

      {/* Título */}
      <h3 className="text-lg font-extrabold text-gray-900 mb-3" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
        {servicio.title}
      </h3>

      {/* Descripción */}
      <p className="text-gray-600 text-sm leading-relaxed">
        {servicio.description}
      </p>

      {/* Flecha hover */}
      <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-[#25AFE6] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span>Ver más</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </div>
  );
}
