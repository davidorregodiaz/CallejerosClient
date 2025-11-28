import { HeroSection } from "../shared/ui/HeroSection.jsx";
import { AdoptionsSection } from "../features/animals/components/AdoptionSection.jsx";
import { HowToAdoptSection } from "../shared/ui/HowToAdoptSection.jsx";

export function Home() {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
        Conoce a tu futuro mejor amigo
      </h2>
      <AdoptionsSection />
      <HowToAdoptSection />
    </div>
  );
}
