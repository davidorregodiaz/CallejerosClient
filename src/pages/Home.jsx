import { HeroSection } from "../shared/ui/HeroSection.jsx";
import { AdoptionsSection } from "../features/animals/components/AdoptionSection.jsx";
import { HowToAdoptSection } from "../shared/ui/HowToAdoptSection.jsx";

export function Home() {
  const filters = {
    species: "",
    breed: "",
    age: "",
    page: 1,
    pageSize: 10,
  };

  return (
    <div className="animate-fade-in flex flex-col space-y-20 pb-20">
      {/* 1. Sección Hero */}
      <HeroSection />

      {/* 2. Sección de Adopciones (Título + Grilla) */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl md:text-1xl font-bold leading-tight tracking-tight text-center mb-12">
          Conoce a tu futuro mejor amigo
        </h2>
        <AdoptionsSection filters={filters} />
      </section>

      {/* 3. Sección de Instrucciones */}
      <HowToAdoptSection />
    </div>
  );
}
