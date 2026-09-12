import Link from "next/link";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

const serviciosLinks = [
  { label: "Dirección de Tareas", href: "/servicios#tareas" },
  { label: "Academia de Música", href: "/servicios#musica" },
  { label: "Artes Plásticas", href: "/servicios#artes" },
  { label: "Danzas y Teatro", href: "/servicios#danzas" },
  { label: "Cursos Vacacionales", href: "/servicios#vacaciones" },
];

export default function Footer() {
  return (
    <footer>
      {/* Banner CTA Newsletter */}
      <div className="bg-[#25AFE6] py-14 px-4 relative overflow-hidden">
        {/* Decorativos */}
        <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white opacity-5"/>
        <div className="absolute bottom-0 left-10 w-40 h-40 rounded-full bg-[#25AFE6] opacity-20"/>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-3" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
            ¿Quieres información sobre nuevos cupos?
          </h2>
          <p className="text-red-100 mb-8 text-base">
            Déjanos tu correo y te avisamos cuando abramos inscripciones para nuevas temporadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-5 py-3.5 rounded-full text-gray-800 text-sm outline-none border-2 border-transparent focus:border-orange-300"
            />
            <button className="bg-[#25AFE6] hover:bg-[#1A8FB8] text-white px-7 py-3.5 rounded-full font-bold text-sm transition-all whitespace-nowrap shadow-md">
              Suscribirme
            </button>
          </div>
        </div>
      </div>

      {/* Footer principal */}
      <div className="bg-gray-900 text-gray-300 py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Logo + descripción */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
                <circle cx="18" cy="20" r="14" fill="#25AFE6" opacity="0.9"/>
                <circle cx="30" cy="20" r="14" fill="#25AFE6" opacity="0.85"/>
                <circle cx="24" cy="32" r="14" fill="#FBBF24" opacity="0.85"/>
                <text x="14" y="38" fontFamily="Georgia, serif" fontSize="28" fill="white" fontWeight="400" opacity="0.95">𝄞</text>
                <g transform="translate(30, 10) rotate(35)">
                  <rect x="0" y="0" width="4" height="16" rx="2" fill="white" opacity="0.95"/>
                  <polygon points="0,16 4,16 2,22" fill="white" opacity="0.95"/>
                </g>
              </svg>
              <div>
                <div className="text-white font-extrabold text-lg leading-tight" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
                  Batuta y Pincel
                </div>
                <div className="text-gray-400 text-xs">Arte · Música · Tareas</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Centro de formación integral para niños y jóvenes en Chía, Cundinamarca. 
              Desde 1998 combinamos lo académico con el arte y la música.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-3">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-[#25AFE6] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-[#25AFE6] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Links rápidos */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">
              Links rápidos
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#25AFE6] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#25AFE6] rounded-full"/>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/donar"
                  className="text-gray-400 hover:text-[#25AFE6] text-sm transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-[#25AFE6] rounded-full"/>
                  Donar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3 — Servicios */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">
              Programas
            </h3>
            <ul className="space-y-3">
              {serviciosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#25AFE6] text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#25AFE6] rounded-full"/>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacto */}
          <div>
            <h3 className="text-white font-bold text-base mb-5">
              Contáctanos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#25AFE6] rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Dirección</p>
                  <p className="text-gray-300 text-sm">{SITE_CONFIG.location}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#25AFE6] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Teléfonos</p>
                  <a href={`tel:+57${SITE_CONFIG.phone1.replace(/\s/g,"")}`} className="text-gray-300 text-sm hover:text-[#25AFE6] block transition-colors">
                    {SITE_CONFIG.phone1}
                  </a>
                  <a href={`tel:+57${SITE_CONFIG.phone2.replace(/\s/g,"")}`} className="text-gray-300 text-sm hover:text-[#25AFE6] block transition-colors">
                    {SITE_CONFIG.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Email</p>
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-gray-300 text-sm hover:text-[#25AFE6] transition-colors break-all">
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-0.5">Horario</p>
                  <p className="text-gray-300 text-sm">{SITE_CONFIG.schedule}</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Footer bottom */}
      <div className="bg-gray-950 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Batuta y Pincel — Chía, Cundinamarca. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Desde 1998 formando niños íntegros en Chía 🎵🎨
          </p>
        </div>
      </div>
    </footer>
  );
}
