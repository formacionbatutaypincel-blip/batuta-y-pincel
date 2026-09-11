import PageHero from "@/components/ui/PageHero";

export default function Page() {
  return (
    <>
      <PageHero title="En construcción" breadcrumb="Página" />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500">Próximamente...</p>
        </div>
      </section>
    </>
  );
}
