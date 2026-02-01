import { useFetchAnimals } from "../hooks/useFetchAnimals";
import { PetCard } from "./PetCard";
import { useState } from "react";
import Spinner from "../../../shared/ui/Spinner"
import ErrorToast from "../../../shared/ui/ErrorToast"

export function AdoptionsSection({ filters }) {
  const [page, setPage] = useState(1);
  const pageSize = 12;

  const { animals, totalCount, loading, error } = useFetchAnimals({
    ...filters,
    page,
    pageSize
  });


  const totalPages = Math.ceil(totalCount / pageSize);


  if (loading) return (
    <div className="flex justify-center p-10">
      <Spinner />
    </div>
  );

  if (error) return <ErrorToast />;

  if (animals.length === 0) return (
    <div className="text-center p-10 bg-slate-50 rounded-xl">
      <p className="text-slate-500">No se encontraron mascotas con esos filtros.</p>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {animals.map((pet) => (
          <PetCard key={pet.id} pet={pet} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 mt-10">
        <button
          disabled={page === 1}
          onClick={() => setPage(p => p - 1)}
          className="px-4 py-2 rounded-lg border disabled:opacity-50"
        >
          Anterior
        </button>

        <span className="text-sm font-medium">
          Página {page} de {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(p => p + 1)}
          className="px-4 py-2 rounded-lg border disabled:opacity-50"
        >
          Siguiente
        </button>
      </div>
    </>

  );
}
