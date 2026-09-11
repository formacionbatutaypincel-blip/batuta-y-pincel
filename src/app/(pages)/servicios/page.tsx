import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios",
  description: "Conoce todos los programas de Batuta y Pincel en Chía: dirección de tareas, academia de música, artes plásticas, danzas y cursos vacacionales.",
};

const servicios = [
  {
    id: "tareas",
    emoji: "📚",
    title: "Dirección de Tareas",
    subtitle: "Acompañamiento académico personalizado",
    description: "Nuestro programa estrella desde 1998. Cada niño recibe acompañamiento personalizado en sus tareas y evaluaciones con profesores especializados en todas las áreas del conocimiento.",
    detalles: [
      "Atención individualizada según las necesidades de cada niño",
      "Profesores especializados en todas las áreas del conocimiento",
      "Seguimiento diario del rendimiento académico",
      "Comunicación constante con los padres de familia",
      "Material de apoyo y recursos didácticos incluidos",
    ],
    horario: "Lunes a viernes: 12:00 pm – 6:00 pm",
    edades: "Desde 5 años hasta bachillerato",
    modalidad: "Presencial — Chía",
    color: "bg-orange-50",
    iconBg: "bg-orange-100",
    border: "border-orange-200",
    accent: "#F97316",
    tag: "Programa principal",
    tagColor: "bg-orange-100 text-orange-700",
  },
  {
    id: "musica",
    emoji: "🎵",
    title: "Academia de Música",
    subtitle: "Teoría, instrumentos y canto",
    description: "Clases de música para niños y jóvenes. Los sábados son especiales: dedicamos la mañana a la música y las danzas como complemento perfecto a la formación semanal.",
    detalles: [
      "Teoría musical básica e intermedia",
      "Clases de instrumentos según disponibilidad",
      "Canto y expresión vocal",
      "Sábados especiales de música y danzas",
      "Presentaciones y muestras artísticas",
    ],
    horario: "Sábados incluidos para estudiantes de lunes a viernes",
    edades: "Todas las edades",
    modalidad: "Presencial — Chía",
    color: "bg-red-50",
    iconBg: "bg-red-100",
    border: "border-red-200",
    accent: "#E53E1A",
    tag: "Incluye sábados",
    tagColor: "bg-red-100 text-red-700",
  },
  {
    id: "artes",
    emoji: "🎨",
    title: "Artes Plásticas",
    subtitle: "Pintura, dibujo y manualidades",
    description: "Desarrollamos la creatividad y el amor por el arte a través de técnicas de pintura, dibujo, escultura y manualidades. Cada niño expresa libremente su talento artístico.",
    detalles: [
      "Pintura en diferentes técnicas (acuarela, acrílico, óleo)",
      "Dibujo artístico y técnico",
      "Manualidades y trabajo en distintos materiales",
      "Proyectos creativos individuales y grupales",
      "Exposición de obras al finalizar cada ciclo",
    ],
    horario: "Integrado en el horario de lunes a viernes",
    edades: "Desde 5 años",
    modalidad: "Presencial — Chía",
    color: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    border: "border-yellow-200",
    accent: "#F59E0B",
    tag: "Creatividad",
    tagColor: "bg-yellow-100 text-yellow-700",
  },
  {
    id: "danzas",
    emoji: "💃",
    title: "Danzas y Teatro",
    subtitle: "Expresión corporal y artes escénicas",
    description: "A través de la danza folclórica y el teatro, los niños desarrollan confianza, expresión corporal y trabajo en equipo, fortaleciendo su autoestima y sentido cultural.",
    detalles: [
      "Danzas folclóricas colombianas",
      "Expresión corporal y ritmo",
      "Teatro y dramatización",
      "Trabajo en equipo y valores",
      "Presentaciones en fechas especiales",
    ],
    horario: "Sábados y fechas especiales",
    edades: "Desde 5 años",
    modalidad: "Presencial — Chía",
    color: "bg-pink-50",
    iconBg: "bg-pink-100",
    border: "border-pink-200",
    accent: "#EC4899",
    tag: "Expresión corporal",
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    id: "vacaciones",
    emoji: "🌟",
    title: "Cursos Vacacionales",
    subtitle: "Diversión y aprendizaje en vacaciones",
    description: "Fuimos los primeros en Chía en ofrecer este servicio integral. Durante las vacaciones, los niños disfrutan de teatro, danzas y manualidades combinando diversión con aprendizaje.",
    detalles: [
      "Teatro y dramatización",
      "Danzas y expresión corporal",
      "Manualidades y artes plásticas",
      "Actividades lúdicas y recreativas",
      "Talleres temáticos por temporada",
    ],
    horario: "Temporadas de vacaciones (junio/julio y diciembre/enero)",
    edades: "Desde 4 años",
    modalidad: "Presencial — Chía",
    color: "bg-purple-50",
    iconBg: "bg-purple-100",
    border: "border-purple-200",
    accent: "#8B5CF6",
    tag: "Temporadas vac.",
    tagColor: "bg-purple-100 text-purple-700",
  },
];

const preguntas = [
  { q: "¿Cuánto cuestan los servicios?", a: "Los precios varían según el programa y la intensidad. Contáctanos directamente para recibir información actualizada sobre tarifas y planes familiares." },
  { q: "¿Se pueden combinar servicios?", a: "Sí. La mayoría de nuestros estudiantes asisten a la dirección de tareas de lunes a viernes e incluyen automáticamente música y danzas los sábados." },
  { q: "¿Qué necesito para inscribir a mi hijo?", a: "Solo necesitas contactarnos, visitar nuestra sede en Chía y completar el formulario de inscripción. No se requieren conocimientos previos." },
  { q: "¿Tienen transporte escolar?", a: "No ofrecemos transporte directamente, pero estamos en una zona de fácil acceso en Chía con rutas de transporte público cercanas." },
];

export default function ServiciosPage() {
  return (
    <>
      <PageHero title="Nuestros Servicios" breadcrumb="Servicios" description="Formación integral que combina lo académico con el arte y la música." />

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { num: "5", label: "Programas activos", emoji: "🎯" },
              { num: "26+", label: "Años de experiencia", emoji: "⭐" },
              { num: "60+", label: "Niños atendidos", emoji: "👧" },
              { num: "1998", label: "Desde", emoji: "🏆" },
            ].map((s, i) => (
              <div key={i} className="bg-[#FFF8F5] rounded-2xl p-5 border border-orange-100">
                <div className="text-3xl mb-2">{s.emoji}</div>
                <div className="text-3xl font-extrabold text-[#E53E1A] mb-1">{s.num}</div>
                <div className="text-gray-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {servicios.map((s) => (
            <div key={s.id} id={s.id} className={`rounded-3xl border-2 ${s.border} ${s.color} overflow-hidden`}>
              <div className="grid lg:grid-cols-2">
                <div className="p-8 lg:p-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-16 h-16 ${s.iconBg} rounded-2xl flex items-center justify-center text-4xl flex-shrink-0`}>
                      {s.emoji}
                    </div>
                    <div>
                      <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${s.tagColor}`}>{s.tag}</span>
                      <h2 className="text-2xl font-extrabold text-gray-900">{s.title}</h2>
                      <p className="text-gray-500 text-sm">{s.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                  <ul className="space-y-2 mb-6">
                    {s.detalles.map((d, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{color: s.accent}} fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                        </svg>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link href="/inscripciones" className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" style={{backgroundColor: s.accent}}>
                    Inscribirse en este programa
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/></svg>
                  </Link>
                </div>
                <div className="bg-white/60 p-8 lg:p-10 flex flex-col justify-center gap-5 border-t-2 lg:border-t-0 lg:border-l-2 border-orange-100">
                  <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Detalles del programa</h3>
                  {[
                    { icon: "🕐", label: "Horario", value: s.horario },
                    { icon: "👶", label: "Edades", value: s.edades },
                    { icon: "📍", label: "Modalidad", value: s.modalidad },
                  ].map((d, j) => (
                    <div key={j} className="flex items-start gap-4">
                      <div className={`w-10 h-10 ${s.iconBg} rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>{d.icon}</div>
                      <div>
                        <div className="text-xs text-gray-400 font-medium mb-0.5">{d.label}</div>
                        <div className="text-sm font-semibold text-gray-800">{d.value}</div>
                      </div>
                    </div>
                  ))}
                  <a href={`https://wa.me/573176571001?text=Hola! Quiero información sobre ${s.title}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:text-green-700 text-sm font-semibold transition-colors mt-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    Preguntar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-[#FFF8F5]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-[#EA580C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">Preguntas frecuentes</span>
            <h2 className="text-3xl font-extrabold text-gray-900">¿Tienes <span className="text-[#E53E1A]">dudas</span>?</h2>
          </div>
          <div className="space-y-3">
            {preguntas.map((faq, i) => (
              <details key={i} className="bg-white rounded-2xl border border-orange-100 overflow-hidden group">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer text-sm font-semibold text-gray-800 hover:text-[#E53E1A] transition-colors list-none">
                  <span>{faq.q}</span>
                  <svg className="w-4 h-4 text-[#F97316] flex-shrink-0 group-open:rotate-180 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-orange-50"><p className="pt-4">{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#E53E1A]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">¿Listo para inscribir a tu hijo?</h2>
          <p className="text-red-100 mb-8">Cupos limitados. Contáctanos hoy y asegura el lugar de tu hijo en Batuta y Pincel.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/inscripciones" className="bg-white text-[#E53E1A] hover:bg-orange-50 px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md">
              Formulario de inscripción
            </Link>
            <a href="https://wa.me/573176571001?text=Hola! Quiero inscribir a mi hijo en Batuta y Pincel" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#E53E1A] px-8 py-3.5 rounded-full font-bold text-base transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp directo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
