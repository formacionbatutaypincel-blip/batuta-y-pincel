import Topbar from "@/components/layout/Topbar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Servicios from "@/components/home/Servicios";
import LoMejor from "@/components/home/LoMejor";
import Programas from "@/components/home/Programas";

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Servicios />
        <LoMejor />
        <Programas />
      </main>
      <Footer />
    </>
  );
}
