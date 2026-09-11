import Link from "next/link";

interface PageHeroProps {
  title: string;
  breadcrumb: string;
  description?: string;
}

export default function PageHero({ title, breadcrumb, description }: PageHeroProps) {
  return (
    <section className="relative bg-gradient-to-br from-[#E53E1A] via-[#F97316] to-[#FBBF24] py-16 overflow-hidden">
      {/* Decorativos */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-white opacity-5"/>
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white opacity-5"/>
      <div className="absolute top-8 left-1/3 w-6 h-6 rounded-full bg-white opacity-20"/>
      <div className="absolute bottom-8 right-1/4 w-4 h-4 rounded-full bg-white opacity-15"/>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-2 text-sm text-red-100 mb-4">
          <Link href="/" className="hover:text-white transition-colors">Inicio</Link>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
          </svg>
          <span className="text-white font-medium">{breadcrumb}</span>
        </div>

        {/* Título */}
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4" style={{fontFamily: "'Arial Rounded MT Bold', Arial, sans-serif"}}>
          {title}
        </h1>

        {/* Descripción opcional */}
        {description && (
          <p className="text-red-100 text-lg max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Wave inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 50" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-10">
          <path d="M0,25 C360,50 1080,0 1440,25 L1440,50 L0,50 Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
