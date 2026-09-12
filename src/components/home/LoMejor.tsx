import Link from "next/link";
import Image from "next/image";

const beneficios = [
  {
    icon: "🎯",
    title: "Atención personalizada",
    description: "Cada niño recibe acompañamiento según sus necesidades individuales.",
  },
  {
    icon: "👩‍🏫",
    title: "Profesores especializados",
    description: "Docentes con experiencia en todas las áreas del conocimiento.",
  },
  {
    icon: "🎨",
    title: "Arte y música integrados",
    description: "Integramos la creatividad en cada actividad académica.",
  },
  {
    icon: "🏆",
    title: "26 años de experiencia",
    description: "Los primeros en Chía en ofrecer este servicio integral desde 1998.",
  },
];

const faqs = [
  {
    question: "¿Qué edades atienden?",
    answer: "Atendemos niños desde los 5 años hasta adolescentes en bachillerato.",
  },
  {
    question: "¿Cuáles son los horarios?",
    answer: "De lunes a viernes de 12:00 pm a 6:00 pm. Los sábados música y danzas.",
  },
  {
    question: "¿Tienen cupos para cursos vacacionales?",
    answer: "Sí, abrimos inscripciones antes de cada temporada vacacional. Contáctanos para reservar.",
  },
];

export default function LoMejor() {
  return (
    <section className="py-20 bg-[#FFF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Izquierda — Foto circular + stats */}
          <div className="relative flex justify-center">

            {/* Círculo decorativo de fondo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-orange-100 opacity-40"/>
            </div>

            {/* Imagen principal circular */}
            <div className="relative z-10">
              <div className="w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <Image
                  src="/images/gallery/profesora-batuta.webp"
                  alt="Niños estudiando en dirección de tareas Batuta y Pincel"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover object-center"
                  quality={100}
                  unoptimized
                />
              </div>

              {/* Badge stat 1 */}
              <div className="absolute -top-3 -right-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-orange-100">
                <div className="w-12 h-12 bg-[#25AFE6] rounded-xl flex items-center justify-center text-white font-extrabold text-xl">
                  26
                </div>
                <div className="leading-tight">
                  <div className="text-xs text-gray-400">Años de</div>
                  <div className="text-sm font-bold text-gray-800">experiencia</div>
                </div>
              </div>

              {/* Badge stat 2 */}
              <div className="absolute -bottom-3 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 border border-orange-100">
                <div className="w-12 h-12 bg-[#25AFE6] rounded-xl flex items-center justify-center text-2xl">
                  👧
                </div>
                <div className="leading-tight">
                  <div className="text-xs text-gray-400">Más de</div>
                  <div className="text-sm font-bold text-gray-800">60 niños</div>
                </div>
              </div>

              {/* Badge stat 3 */}
              <div className="absolute bottom-16 -right-8 bg-[#25AFE6] text-white rounded-2xl shadow-lg px-4 py-3 border border-orange-400">
                <div className="text-sm font-bold">🏆 5 programas</div>
                <div className="text-xs opacity-90">Arte · Música · Tareas</div>
              </div>

              {/* Puntos decorativos */}
              <div className="absolute top-4 -left-4 w-5 h-5 rounded-full bg-[#FBBF24] opacity-70"/>
              <div className="absolute -top-8 left-16 w-3 h-3 rounded-full bg-[#25AFE6] opacity-50"/>
              <div className="absolute -bottom-8 right-10 w-4 h-4 rounded-full bg-[#25AFE6] opacity-60"/>
            </div>
          </div>

          {/* Derecha — Texto + beneficios + FAQ */}
          <div className="space-y-8">

            {/* Header */}
            <div>
              <span className="inline-block bg-orange-100 text-[#1A8FB8] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                ¿Por qué elegirnos?
              </span>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4 leading-tight" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                Lo mejor para{" "}
                <span className="text-[#25AFE6]">tu hijo</span>
              </h2>
              <p className="text-gray-500 text-base leading-relaxed">
                Creemos que cada niño es único. Por eso ofrecemos un espacio donde 
                las tareas, el arte y la música se combinan para formar seres íntegros, 
                seguros y felices de aprender.
              </p>
            </div>

            {/* Grid de beneficios */}
            <div className="grid grid-cols-2 gap-4">
              {beneficios.map((b, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all"
                >
                  <div className="text-2xl mb-2">{b.icon}</div>
                  <div className="text-sm font-bold text-gray-800 mb-1">{b.title}</div>
                  <div className="text-xs text-gray-500 leading-relaxed">{b.description}</div>
                </div>
              ))}
            </div>

            {/* FAQ acordeón simple */}
            <div className="space-y-3">
              <h3 className="text-base font-bold text-gray-700 mb-2">Preguntas frecuentes</h3>
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="bg-white rounded-xl border border-orange-100 overflow-hidden group"
                >
                  <summary className="flex items-center justify-between px-5 py-4 cursor-pointer text-sm font-semibold text-gray-800 hover:text-[#25AFE6] transition-colors list-none">
                    <span>{faq.question}</span>
                    <svg
                      className="w-4 h-4 text-[#25AFE6] flex-shrink-0 group-open:rotate-180 transition-transform duration-200"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/>
                    </svg>
                  </summary>
                  <div className="px-5 pb-4 text-sm text-gray-500 leading-relaxed border-t border-orange-50">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/inscripciones"
                className="bg-[#25AFE6] hover:bg-[#1A8FB8] text-white px-7 py-3 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Inscribe a tu hijo
              </Link>
              <Link
                href="/nosotros"
                className="flex items-center gap-1.5 bg-white hover:bg-orange-50 text-[#25AFE6] border-2 border-[#25AFE6] px-7 py-3 rounded-full font-bold text-sm transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
                Nuestra historia
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
