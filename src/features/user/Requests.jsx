import { useAuth } from "../auth/hooks/useAuth";
import { RequestCard } from "./components/RequestCard";
import { useAdoptions } from "./hooks/useAdoptions";
import { RequesterRequestCard } from "./components/RequesterRequestCard";

export const Requests = () => {
  const { userIsInRole } = useAuth();
  const { adoptions, loading, error } = useAdoptions();

  if (loading) return <p>Cargando...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">
          Solicitudes de Adopción
        </h2>
        <div className="space-y-4">
          {adoptions?.map((d) =>
            userIsInRole("Owner") ? (
              <RequestCard key={d.id} adoption={d} />
            ) : (
              <RequesterRequestCard key={d.id} adoption={d} />
            )
          )}
        </div>
      </div>
    </div>
  );
};
