
import { HeroSection } from "../shared/ui/HeroSection.jsx";
import { AdoptionsSection } from "../features/animals/components/AdoptionSection.jsx";
import { HowToAdoptSection } from "../shared/ui/HowToAdoptSection.jsx";

export function Home (){
    return (
        <>
            <HeroSection/>
            <AdoptionsSection/>
            <HowToAdoptSection/>
        </>
    )
}