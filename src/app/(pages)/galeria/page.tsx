import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import GaleriaClient from "@/components/galeria/GaleriaClient";

export const metadata: Metadata = {
  title: "Galería",
  description: "Conoce las actividades, programas y momentos especiales de Batuta y Pincel en Chía. Música, arte, danzas, tareas y cursos vacacionales.",
};

export default function GaleriaPage() {
  return (
    <>
      <PageHero
        title="Galería"
        breadcrumb="Galería"
        description="Momentos especiales de nuestros niños aprendiendo, creando y brillando."
      />
      <GaleriaClient />
    </>
  );
}
