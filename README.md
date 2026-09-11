# Batuta y Pincel — Sitio Web

Centro de formación integral en Chía, Colombia. Arte, música y tareas para niños.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Formularios:** React Hook Form + Zod
- **Email:** Resend
- **Pagos:** Mercado Pago (donaciones)
- **Deploy:** Vercel (plan gratuito)
- **Dominio:** bautaypincel.com

## Estructura

```
src/
├── app/                    # Rutas (App Router)
│   ├── page.tsx            # Home
│   ├── nosotros/           # Historia, misión, visión
│   ├── servicios/          # Tareas, refuerzos, música, vacaciones
│   ├── galeria/            # Fotos de actividades
│   ├── inscripciones/      # Formulario de inscripción
│   ├── donar/              # Donaciones para becas
│   └── contacto/           # Contacto y ubicación
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── home/               # Secciones de la home
│   └── ui/                 # Componentes reutilizables
├── lib/                    # Utilidades (fonts, resend, constants)
└── types/                  # TypeScript types
```

## Variables de entorno

Copia `.env.example` a `.env.local` y completa los valores:

```bash
cp .env.example .env.local
```

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy

Push a `main` → Vercel despliega automáticamente.

---

Desarrollado con ❤️ para Batuta y Pincel — Chía, Cundinamarca
