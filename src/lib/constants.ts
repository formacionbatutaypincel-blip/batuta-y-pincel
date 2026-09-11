export const SITE_CONFIG = {
  name: "Batuta y Pincel",
  tagline: "Donde los niños aprenden, crean y brillan",
  description:
    "Dirección de tareas, academia de música y artes en Chía, Cundinamarca. Formación integral para niños y jóvenes desde 1998.",
  url: "https://bautaypincel.com",
  location: "Carrera 4 # 5-51 Interior 5 Casa 1, Chía, Cundinamarca",
  phone1: "317 657 1001",
  phone2: "314 302 7066",
  whatsapp1: "573176571001",
  whatsapp2: "573143027066",
  email: "formacionbatutaypincel@gmail.com",
  schedule: "Lunes a viernes: 12:00 pm – 6:00 pm",
  founded: "1998",
  social: {
    instagram: "https://instagram.com/batutaypincel",
    facebook: "https://facebook.com/batutaypincel",
  },
};

export const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Galería", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
];

export const SERVICES = [
  {
    id: "tareas",
    icon: "📚",
    title: "Dirección de Tareas",
    description:
      "Acompañamiento personalizado en tareas y evaluaciones de lunes a viernes. Profesores especializados en todas las áreas.",
    color: "bg-orange-50",
    iconColor: "text-orange-500",
  },
  {
    id: "musica",
    icon: "🎵",
    title: "Academia de Música",
    description:
      "Clases de instrumentos, teoría musical y canto. Los sábados especiales de música para niños que asisten entre semana.",
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    id: "artes",
    icon: "🎨",
    title: "Artes Plásticas",
    description:
      "Pintura, dibujo, manualidades y expresión artística. Desarrollamos la creatividad y el amor por el arte.",
    color: "bg-yellow-50",
    iconColor: "text-yellow-500",
  },
  {
    id: "danzas",
    icon: "💃",
    title: "Danzas y Teatro",
    description:
      "Expresión corporal, danzas folclóricas y teatro. Fortalecemos la confianza y el trabajo en equipo.",
    color: "bg-pink-50",
    iconColor: "text-pink-500",
  },
  {
    id: "vacaciones",
    icon: "🌟",
    title: "Cursos Vacacionales",
    description:
      "Durante las vacaciones: teatro, danzas, manualidades y más. Los primeros en Chía en ofrecer este servicio integral.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
  },
];

export const STATS = [
  { number: "26+", label: "Años de experiencia", icon: "⭐" },
  { number: "60+", label: "Niños atendidos", icon: "👧" },
  { number: "5", label: "Programas activos", icon: "🏆" },
];

export const DONATION_TIERS = [
  {
    id: "semilla",
    name: "Semilla",
    amount: 20000,
    description: "Cubre 1 semana de dirección de tareas para un niño",
    icon: "🌱",
  },
  {
    id: "raiz",
    name: "Raíz",
    amount: 80000,
    description: "Cubre 1 mes completo de atención personalizada",
    icon: "🌿",
    popular: true,
  },
  {
    id: "arbol",
    name: "Árbol",
    amount: 240000,
    description: "Cubre 1 trimestre completo incluyendo música y danzas",
    icon: "🌳",
  },
];
