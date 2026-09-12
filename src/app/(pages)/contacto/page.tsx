import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contáctanos en Batuta y Pincel. Estamos en la Carrera 4 # 5-51 Interior 5 Casa 1, Chía, Cundinamarca. Tel: 317 657 1001 - 314 302 7066.",
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
      </svg>
    ),
    title: "Dirección",
    value: "Carrera 4 # 5-51 Interior 5 Casa 1",
    sub: "Chía, Cundinamarca",
    bg: "bg-[#25AFE6]",
    href: "https://maps.google.com/?q=Carrera+4+5-51+Chia+Cundinamarca",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
      </svg>
    ),
    title: "Teléfonos",
    value: "317 657 1001",
    sub: "314 302 7066",
    bg: "bg-[#25AFE6]",
    href: "tel:+573176571001",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
      </svg>
    ),
    title: "Email",
    value: "formacionbatutaypincel@gmail.com",
    sub: "Respondemos en menos de 24h",
    bg: "bg-yellow-500",
    href: "mailto:formacionbatutaypincel@gmail.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
      </svg>
    ),
    title: "Horario",
    value: "Lunes a viernes: 12:00 pm – 6:00 pm",
    sub: "Sábados: música y danzas",
    bg: "bg-purple-500",
    href: null,
  },
];

export default function ContactoPage() {
  return (
    <>
      <PageHero
        title="Contáctanos"
        breadcrumb="Contacto"
        description="Estamos en Chía, Cundinamarca. Escríbenos, llámanos o visítanos."
      />

      {/* Cards de contacto */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, i) => (
              <div key={i} className="bg-[#FFF8F5] rounded-2xl p-6 border border-orange-100 hover:shadow-md transition-all text-center">
                <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center text-white mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-gray-900 mb-2" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                  {item.title}
                </h3>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-[#25AFE6] transition-colors block">
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm text-gray-600">{item.value}</p>
                )}
                <p className="text-xs text-gray-400 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario + Mapa */}
      <section className="py-10 pb-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Formulario */}
            <div>
              <span className="inline-block bg-orange-100 text-[#1A8FB8] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                Escríbenos
              </span>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                Contáctanos <span className="text-[#25AFE6]">aquí</span>
              </h2>
              <p className="text-gray-500 mb-8 text-sm leading-relaxed">
                Completa el formulario y te responderemos a la brevedad. También puedes escribirnos por WhatsApp para una respuesta más rápida.
              </p>

              <ContactForm />
            </div>

            {/* Mapa + WhatsApp */}
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-orange-100 text-[#1A8FB8] text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
                  Encuéntranos
                </span>
                <h2 className="text-3xl font-extrabold text-gray-900 mb-6" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                  Nuestra <span className="text-[#25AFE6]">ubicación</span>
                </h2>
              </div>

              {/* Mapa Google embebido */}
              <div className="rounded-2xl overflow-hidden border-2 border-orange-100 shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0!2d-74.0575!3d4.8630!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwNTEnNDYuOCJOIDc0wrAwMyc0Ny4wIlc!5e0!3m2!1ses!2sco!4v1"
                  width="100%"
                  height="300"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Batuta y Pincel - Chía"
                />
              </div>

              {/* Dirección debajo del mapa */}
              <div className="bg-[#FFF8F5] rounded-2xl p-5 border border-orange-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#25AFE6] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Batuta y Pincel</p>
                    <p className="text-gray-600 text-sm">Carrera 4 # 5-51 Interior 5 Casa 1</p>
                    <p className="text-gray-500 text-sm">Chía, Cundinamarca, Colombia</p>
                    <a
                      href="https://maps.google.com/?q=Carrera+4+5-51+Chia+Cundinamarca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25AFE6] text-xs font-semibold mt-1 inline-block hover:underline"
                    >
                      Abrir en Google Maps →
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://wa.me/573176571001?text=Hola! Quiero información sobre Batuta y Pincel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-2xl p-4 transition-all text-center"
                >
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <p className="text-xs font-bold text-green-700">317 657 1001</p>
                    <p className="text-xs text-green-600">WhatsApp</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/573143027066?text=Hola! Quiero información sobre Batuta y Pincel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 bg-green-50 hover:bg-green-100 border-2 border-green-200 rounded-2xl p-4 transition-all text-center"
                >
                  <svg className="w-8 h-8 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <div>
                    <p className="text-xs font-bold text-green-700">314 302 7066</p>
                    <p className="text-xs text-green-600">WhatsApp</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#25AFE6] focus:outline-none text-sm transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            placeholder="tu@email.com"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#25AFE6] focus:outline-none text-sm transition-colors"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Teléfono
          </label>
          <input
            type="tel"
            placeholder="300 000 0000"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#25AFE6] focus:outline-none text-sm transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5">
            Asunto <span className="text-red-500">*</span>
          </label>
          <select className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#25AFE6] focus:outline-none text-sm transition-colors text-gray-600">
            <option value="">Selecciona un tema</option>
            <option value="tareas">Dirección de tareas</option>
            <option value="musica">Academia de música</option>
            <option value="artes">Artes plásticas</option>
            <option value="danzas">Danzas y teatro</option>
            <option value="vacaciones">Cursos vacacionales</option>
            <option value="otro">Otro</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5">
          Mensaje <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={5}
          placeholder="Cuéntanos cómo podemos ayudarte..."
          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#25AFE6] focus:outline-none text-sm transition-colors resize-none"
        />
      </div>
      <button
        type="button"
        className="w-full bg-[#25AFE6] hover:bg-[#1A8FB8] text-white py-3.5 rounded-xl font-bold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
        </svg>
        Enviar mensaje
      </button>
      <p className="text-xs text-gray-400 text-center">
        También puedes escribirnos directamente a{" "}
        <a href="mailto:formacionbatutaypincel@gmail.com" className="text-[#25AFE6] hover:underline">
          formacionbatutaypincel@gmail.com
        </a>
      </p>
    </div>
  );
}
