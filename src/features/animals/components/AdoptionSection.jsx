import { useFetchAnimals } from "../hooks/useFetchAnimals";
import { PetCard } from "./PetCard";

export function AdoptionsSection({ filters }) {
  const { animals, loading, error } = useFetchAnimals(filters);

  if (loading) return (
    <div className="flex justify-center p-10">
      <p className="animate-pulse font-medium">Buscando compañeros...</p>
    </div>
  );

  if (error) return <p className="text-red-500">Error: {error.message}</p>;

  if (animals.length === 0) return (
    <div className="text-center p-10 bg-slate-50 rounded-xl">
      <p className="text-slate-500">No se encontraron mascotas con esos filtros.</p>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {animals.map((pet) => (
        <PetCard key={pet.id} pet={pet} />
      ))}
    </div>
  );
}
