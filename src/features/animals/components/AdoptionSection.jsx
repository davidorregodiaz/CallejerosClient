import { useFetchAnimals } from "../hooks/useFetchAnimals";
import { PetCard } from "./PetCard";

export function AdoptionsSection() {
  const { animals, loading, error } = useFetchAnimals();
  console.log(animals);
  if (loading) return <p>Cargando...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-10">
        Conoce a tu futuro mejor amigo
      </h2>
      <div className="grid grid-cols-4 gap-4">
        {animals?.map((d) => (
          <PetCard key={d.id} pet={d} />
        ))}
      </div>
    </>
  );
}
