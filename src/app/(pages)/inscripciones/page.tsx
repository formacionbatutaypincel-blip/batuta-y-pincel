import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inscripciones",
  description: "Inscribe a tu hijo en Batuta y Pincel, Chía. Dirección de tareas, música, artes, danzas y cursos vacacionales. Cupos limitados.",
};

const programas = [
  { value: "tareas", label: "📚 Dirección de Tareas (Lunes a viernes)" },
  { value: "musica", label: "🎵 Academia de Música (incluye sábados)" },
  { value: "artes", label: "🎨 Artes Plásticas" },
  { value: "danzas", label: "💃 Danzas y Teatro" },
  { value: "vacaciones", label: "🌟 Cursos Vacacionales" },
  { value: "combo", label: "🎯 Combo completo (tareas + música + artes)" },
];

const grados = [
  "Preescolar (Prejardín / Jardín / Transición)",
  "Primero de primaria",
  "Segundo de primaria",
  "Tercero de primaria",
  "Cuarto de primaria",
  "Quinto de primaria",
  "Sexto de bachillerato",
  "Séptimo de bachillerato",
  "Octavo de bachillerato",
  "Noveno de bachillerato",
  "Décimo de bachillerato",
  "Once de bachillerato",
];

const pasos = [
  { icon: "📋", title: "Completa el formulario", desc: "Llena los datos de tu hijo y elige el programa de interés." },
  { icon: "📞", title: "Te contactamos", desc: "En menos de 24 horas te llamamos para confirmar disponibilidad y resolver dudas." },
  { icon: "🏫", title: "Visita la sede", desc: "Ven a conocer nuestras instalaciones en Chía y firma el acuerdo de vinculación." },
  { icon: "✅", title: "¡Empieza!", desc: "Tu hijo comienza su proceso de formación integral con nosotros." },
];

export default function InscripcionesPage() {
  return (
    <>
      <PageHero
        title="Inscripciones"
        breadcrumb="Inscripciones"
        description="Asegura el cupo de tu hijo. Cupos limitados por temporada."
      />

      {/* Pasos del proceso */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-orange-100 text-[#EA580C] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Proceso de inscripción
            </span>
            <h2 className="text-3xl font-extrabold text-gray-900" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
              ¿Cómo <span className="text-[#E53E1A]">funciona</span>?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map((paso, i) => (
              <div key={i} className="relative text-center">
                {/* Línea conectora */}
                {i < pasos.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-full h-0.5 bg-orange-200 z-0"/>
                )}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#FFF8F5] border-2 border-orange-200 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                    {paso.icon}
                  </div>
                  <div className="w-6 h-6 bg-[#E53E1A] rounded-full flex items-center justify-center text-white text-xs font-extrabold mx-auto mb-3">
                    {i + 1}
                  </div>
                  <h3 className="font-extrabold text-gray-900 mb-2 text-sm" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                    {paso.title}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{paso.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario principal */}
      <section className="py-10 pb-20 bg-[#FFF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Formulario — ocupa 2/3 */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl p-8 border-2 border-orange-100 shadow-sm">
                <div className="mb-8">
                  <span className="inline-block bg-orange-100 text-[#EA580C] text-sm font-semibold px-4 py-1.5 rounded-full mb-3">
                    Formulario de inscripción
                  </span>
                  <h2 className="text-2xl font-extrabold text-gray-900" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                    Datos del <span className="text-[#E53E1A]">estudiante</span>
                  </h2>
                </div>

                <div className="space-y-5">
                  {/* Datos del niño */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Nombre del niño/a <span className="text-red-500">*</span>
                      </label>
                      <input type="text" placeholder="Nombre completo" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F97316] focus:outline-none text-sm transition-colors"/>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                        Edad <span className="text-red-500">*</span>
                      </label>
                      <input type="number" placeholder="Ej: 8" min="4" max="18" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F97316] focus:outline-none text-sm transition-colors"/>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Grado escolar <span className="text-red-500">*</span>
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F97316] focus:outline-none text-sm transition-colors text-gray-600">
                      <option value="">Selecciona el grado</option>
                      {grados.map((g, i) => <option key={i} value={g}>{g}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Colegio donde estudia
                    </label>
                    <input type="text" placeholder="Nombre del colegio" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F97316] focus:outline-none text-sm transition-colors"/>
                  </div>

                  {/* Separador */}
                  <div className="border-t border-orange-100 pt-5">
                    <h3 className="font-extrabold text-gray-900 mb-4 text-sm" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                      Datos del padre/madre o acudiente
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Nombre completo <span className="text-red-500">*</span>
                        </label>
                        <input type="text" placeholder="Tu nombre completo" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F97316] focus:outline-none text-sm transition-colors"/>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                          Teléfono / WhatsApp <span className="text-red-500">*</span>
                        </label>
                        <input type="tel" placeholder="300 000 0000" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F97316] focus:outline-none text-sm transition-colors"/>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      Correo electrónico <span className="text-red-500">*</span>
                    </label>
                    <input type="email" placeholder="tu@email.com" className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F97316] focus:outline-none text-sm transition-colors"/>
                  </div>

                  {/* Programa */}
                  <div className="border-t border-orange-100 pt-5">
                    <h3 className="font-extrabold text-gray-900 mb-4 text-sm" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                      Programa de interés
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {programas.map((p) => (
                        <label key={p.value} className="flex items-center gap-3 bg-[#FFF8F5] hover:bg-orange-100 border-2 border-orange-100 hover:border-orange-300 rounded-xl px-4 py-3 cursor-pointer transition-all">
                          <input type="checkbox" value={p.value} className="w-4 h-4 accent-orange-500 flex-shrink-0"/>
                          <span className="text-sm text-gray-700">{p.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                      ¿Alguna nota adicional?
                    </label>
                    <textarea rows={3} placeholder="Alergias, necesidades especiales, horario preferido..." className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#F97316] focus:outline-none text-sm transition-colors resize-none"/>
                  </div>

                  <button
                    type="button"
                    className="w-full bg-[#F97316] hover:bg-[#EA580C] text-white py-4 rounded-xl font-extrabold text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    Enviar solicitud de inscripción
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Al enviar confirmas que los datos son correctos. Te contactaremos en menos de 24 horas.
                  </p>
                </div>
              </div>
            </div>

            {/* Sidebar — 1/3 */}
            <div className="space-y-6">

              {/* Cupos disponibles */}
              <div className="bg-white rounded-2xl p-6 border-2 border-orange-100">
                <h3 className="font-extrabold text-gray-900 mb-4" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                  📊 Disponibilidad
                </h3>
                <div className="space-y-3">
                  {[
                    { prog: "Dirección de Tareas", cupos: "Disponible", color: "text-green-600 bg-green-50" },
                    { prog: "Academia de Música", cupos: "Disponible", color: "text-green-600 bg-green-50" },
                    { prog: "Artes Plásticas", cupos: "Disponible", color: "text-green-600 bg-green-50" },
                    { prog: "Danzas y Teatro", cupos: "Disponible", color: "text-green-600 bg-green-50" },
                    { prog: "Cursos Vacacionales", cupos: "Próxima temp.", color: "text-orange-600 bg-orange-50" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-xs text-gray-600">{item.prog}</span>
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.color}`}>
                        {item.cupos}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Horarios */}
              <div className="bg-white rounded-2xl p-6 border-2 border-orange-100">
                <h3 className="font-extrabold text-gray-900 mb-4" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                  🕐 Horarios
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="text-[#F97316] font-bold min-w-fit">Lun–Vie:</span>
                    <span>12:00 pm – 6:00 pm</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#F97316] font-bold min-w-fit">Sábados:</span>
                    <span>Música y danzas (estudiantes activos)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-[#F97316] font-bold min-w-fit">Vacac.:</span>
                    <span>Horario especial según temporada</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp rápido */}
              <a
                href="https://wa.me/573176571001?text=Hola! Quiero inscribir a mi hijo en Batuta y Pincel"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-2xl p-5 transition-all"
              >
                <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-green-800 text-sm">¿Prefieres WhatsApp?</p>
                  <p className="text-green-600 text-xs">Escríbenos directamente al 317 657 1001</p>
                </div>
              </a>

              {/* Ubicación */}
              <div className="bg-white rounded-2xl p-6 border-2 border-orange-100">
                <h3 className="font-extrabold text-gray-900 mb-3" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                  📍 Dónde estamos
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">
                  Carrera 4 # 5-51 Interior 5 Casa 1<br/>
                  Chía, Cundinamarca
                </p>
                <Link
                  href="/contacto"
                  className="text-[#E53E1A] text-xs font-semibold hover:underline"
                >
                  Ver mapa →
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}
