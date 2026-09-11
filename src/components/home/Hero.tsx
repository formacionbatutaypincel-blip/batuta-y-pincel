import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[580px] flex items-center overflow-hidden bg-gradient-to-br from-[#FFF3ED] via-[#FFF8F5] to-[#FEF9EC]">

      {/* Decorativos de fondo */}
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-[#F97316] opacity-[0.07] blur-2xl"/>
      <div className="absolute bottom-10 left-10 w-48 h-48 rounded-full bg-[#E53E1A] opacity-[0.06] blur-2xl"/>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-[#FBBF24] opacity-[0.08] blur-xl"/>

      {/* Formas decorativas tipo Kindedo */}
      <div className="absolute top-8 left-[45%] w-6 h-6 rounded-full bg-[#F97316] opacity-40"/>
      <div className="absolute top-24 right-[30%] w-4 h-4 rounded-full bg-[#FBBF24] opacity-50"/>
      <div className="absolute bottom-20 right-[20%] w-8 h-8 rounded-full bg-[#E53E1A] opacity-30"/>
      <div className="absolute bottom-32 left-[25%] w-5 h-5 rounded-full bg-[#F97316] opacity-35"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Texto izquierda */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-[#EA580C] px-4 py-1.5 rounded-full text-sm font-semibold">
              <span>🎵</span>
              <span>Desde 1998 en Chía, Cundinamarca</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
              Dirección de tareas,{" "}
              <span className="text-[#E53E1A]">música</span>{" "}
              y{" "}
              <span className="text-[#F97316]">arte</span>{" "}
              para tu hijo
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
              {SITE_CONFIG.tagline}. Un espacio donde cada niño recibe atención personalizada, fomentando la creatividad, la responsabilidad y el amor por aprender.
            </p>

            {/* Chips de servicios */}
            <div className="flex flex-wrap gap-2">
              {["📚 Tareas", "🎵 Música", "🎨 Artes", "💃 Danzas", "🌟 Vacaciones"].map((item) => (
                <span
                  key={item}
                  className="bg-white border border-orange-200 text-gray-700 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/inscripciones"
                className="bg-[#F97316] hover:bg-[#EA580C] text-white px-8 py-3.5 rounded-full font-bold text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Inscribe a tu hijo
              </Link>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp1}?text=Hola! Quiero información sobre los servicios de Batuta y Pincel`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white hover:bg-green-50 text-green-600 border-2 border-green-500 px-6 py-3.5 rounded-full font-bold text-base transition-all shadow-sm hover:shadow-md"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Imagen + stats derecha */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Placeholder imagen — reemplazar con foto real */}
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-orange-200 to-red-200 flex items-center justify-center overflow-hidden border-8 border-white shadow-2xl">
                {/* Aquí va next/image con foto real de los niños */}
                <div className="text-center text-gray-500">
                  <div className="text-6xl mb-3">👨‍👩‍👧‍👦</div>
                  <p className="text-sm font-medium">Foto de niños<br/>en actividades</p>
                </div>
              </div>

              {/* Badge flotante 1 — años */}
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-[#E53E1A] rounded-xl flex items-center justify-center text-white font-extrabold text-lg">
                  26
                </div>
                <div className="leading-tight">
                  <div className="text-xs text-gray-500">Años de</div>
                  <div className="text-xs font-bold text-gray-800">experiencia</div>
                </div>
              </div>

              {/* Badge flotante 2 — niños */}
              <div className="absolute -bottom-2 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-[#F97316] rounded-xl flex items-center justify-center text-2xl">
                  👧
                </div>
                <div className="leading-tight">
                  <div className="text-xs text-gray-500">Más de</div>
                  <div className="text-xs font-bold text-gray-800">60 niños</div>
                </div>
              </div>

              {/* Badge flotante 3 — Chía */}
              <div className="absolute top-8 -right-4 bg-[#F97316] text-white rounded-2xl shadow-lg px-4 py-3">
                <div className="text-xs font-bold">📍 Chía</div>
                <div className="text-xs opacity-90">Cundinamarca</div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Wave inferior estilo Kindedo */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-12">
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
