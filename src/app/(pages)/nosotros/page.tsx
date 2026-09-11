import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce la historia de Batuta y Pincel, el centro de formación integral en Chía que desde 1998 combina tareas, arte y música para el desarrollo de niños y jóvenes.",
};

const valores = [
  { icon: "🎯", title: "Atención personalizada", desc: "Cada niño es único. Adaptamos nuestro acompañamiento a las necesidades individuales de cada estudiante." },
  { icon: "🤝", title: "Trabajo en equipo", desc: "Educadores, padres y Batuta y Pincel trabajamos juntos por el desarrollo integral del niño." },
  { icon: "💡", title: "Amor por aprender", desc: "Fomentamos la curiosidad, la creatividad y el amor por el conocimiento en cada sesión." },
  { icon: "🌟", title: "Inclusión y equidad", desc: "Promovemos un espacio respetuoso donde todos los niños tienen las mismas oportunidades." },
  { icon: "🎨", title: "Arte y creatividad", desc: "Integramos el arte, la música y las danzas como herramientas esenciales de formación." },
  { icon: "❤️", title: "Solidaridad", desc: "Guiados por la empatía y la solidaridad, formamos seres íntegros y comprometidos con los demás." },
];

const hitos = [
  { year: "1998", title: "El inicio", desc: "Todo comenzó con 3 niños en Chía. La fundadora comenzó cuidando a una niña mientras su mamá regresaba de Bogotá." },
  { year: "2000", title: "Crecimiento", desc: "De 3 niños pasamos a 60. Nos convertimos en el primer lugar en Chía en ofrecer tareas + vacaciones integrales." },
  { year: "2010", title: "Batuta y Pincel", desc: "Bautizamos oficialmente el lugar: 'Batuta' por la música y 'Pincel' por el arte. Una identidad que nos define." },
  { year: "2015", title: "Nueva sede", desc: "Nos trasladamos a nuestra sede actual en la Carrera 4 # 5-51, con mejores espacios para nuestros niños." },
  { year: "2024", title: "Hoy", desc: "26 años después seguimos creciendo, con 5 programas activos y más de 60 niños que aprenden, crean y brillan." },
];

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title="Nuestra Historia"
        breadcrumb="Nosotros"
        description="26 años formando niños íntegros en Chía a través del arte, la música y el acompañamiento académico."
      />

      {/* Historia principal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Foto circular */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center border-8 border-white shadow-2xl overflow-hidden">
                  <div className="text-center text-gray-500">
                    <div className="text-7xl mb-2">👩‍🏫</div>
                    <p className="text-sm font-medium">Fundadora de<br/>Batuta y Pincel</p>
                  </div>
                </div>
                {/* Badge año */}
                <div className="absolute -bottom-4 -right-4 bg-[#E53E1A] text-white rounded-2xl px-5 py-3 shadow-lg">
                  <div className="text-2xl font-extrabold">1998</div>
                  <div className="text-xs opacity-90">Fundación</div>
                </div>
                {/* Punto decorativo */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-[#FBBF24] opacity-70"/>
              </div>
            </div>

            {/* Texto historia */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-orange-100 text-[#EA580C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  Nuestra historia
                </span>
                <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-tight" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                  De <span className="text-[#E53E1A]">3 niños</span> a un centro integral en Chía
                </h2>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Todo comenzó el <strong>16 de febrero de 1998 en Chía</strong>. En ese entonces, 
                  nuestra fundadora trabajaba en el colegio María Auxiliadora cuando una mamá le preguntó 
                  si conocía a alguien que pudiera cuidar a su niña por las tardes mientras regresaba de Bogotá.
                </p>
                <p>
                  Con mucho gusto aceptó el reto: traería a la niña a su casa, pendiente de sus tareas 
                  y evaluaciones todos los días. <strong>Fue todo un éxito</strong>: inició con 3 niños 
                  y terminó con 60, fomentando no solo el taller de tareas, sino también cursos vacacionales 
                  donde los niños aprendían teatro, danzas y manualidades.
                </p>
                <p>
                  Fuimos el <strong>primer lugar en Chía</strong> en brindar este servicio integral de tareas 
                  y vacaciones. Hace aproximadamente 10 años, bautizamos el lugar como <em>Batuta y Pincel</em>: 
                  "Batuta" por la música y "Pincel" por el arte.
                </p>
                <blockquote className="border-l-4 border-[#F97316] pl-4 italic text-gray-500">
                  "La música, el arte y las danzas nos brindan seguridad y amor por nosotros mismos y por los demás."
                </blockquote>
              </div>
              <Link
                href="/inscripciones"
                className="inline-flex items-center gap-2 bg-[#F97316] hover:bg-[#EA580C] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all shadow-md hover:shadow-lg"
              >
                Inscribe a tu hijo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-[#FFF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-100 text-[#EA580C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Quiénes somos
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
              Misión y <span className="text-[#E53E1A]">Visión</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Misión */}
            <div className="bg-white rounded-3xl p-8 border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🎯</div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-4" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                Nuestra Misión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Somos un espacio donde los niños reciben <strong>atención personalizada</strong>, 
                fomentando por medio de la creatividad, la responsabilidad, el autocontrol y el amor 
                por aprender, de acuerdo con las necesidades particulares de cada niño o adolescente. 
                Contamos con profesores especializados en todas las áreas del conocimiento, integrando 
                la música y el arte en cada actividad para <strong>formar seres íntegros</strong>.
              </p>
            </div>
            {/* Visión */}
            <div className="bg-white rounded-3xl p-8 border-2 border-red-100 hover:border-red-300 hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-3xl mb-6">🌟</div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-4" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                Nuestra Visión
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Constituimos un <strong>trabajo conjunto</strong> entre educadores, padres de familia 
                y Batuta y Pincel, enfocado en el mejoramiento educativo del niño. Potenciamos las 
                habilidades individuales de cada estudiante, fomentando el amor por el conocimiento 
                e involucrando el arte, la música y las danzas para garantizar su 
                <strong> desarrollo integral</strong>, la inclusión y la equidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-100 text-[#EA580C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              26 años de historia
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
              Nuestra <span className="text-[#E53E1A]">trayectoria</span>
            </h2>
          </div>
          <div className="relative">
            {/* Línea vertical */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 hidden sm:block"/>
            <div className="space-y-8">
              {hitos.map((hito, i) => (
                <div key={i} className="flex gap-6 items-start">
                  {/* Año círculo */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#E53E1A] flex items-center justify-center shadow-md z-10">
                    <span className="text-white text-xs font-extrabold text-center leading-tight">{hito.year}</span>
                  </div>
                  {/* Contenido */}
                  <div className="bg-[#FFF8F5] rounded-2xl p-5 border border-orange-100 flex-1 hover:shadow-md transition-shadow">
                    <h4 className="font-extrabold text-gray-900 mb-1" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                      {hito.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">{hito.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-[#FFF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block bg-orange-100 text-[#EA580C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Lo que nos guía
            </span>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
              Nuestros <span className="text-[#E53E1A]">valores</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h4 className="font-extrabold text-gray-900 mb-2" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                  {v.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16 bg-[#E53E1A]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
            ¿Quieres que tu hijo haga parte de nuestra historia?
          </h2>
          <p className="text-red-100 mb-8">
            Inscríbelo hoy y dale el espacio donde aprenderá, creará y brillará.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/inscripciones"
              className="bg-white text-[#E53E1A] hover:bg-orange-50 px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg"
            >
              Inscribe a tu hijo
            </Link>
            <Link
              href="/contacto"
              className="border-2 border-white text-white hover:bg-white hover:text-[#E53E1A] px-8 py-3.5 rounded-full font-bold text-base transition-all"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
