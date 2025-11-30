import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../../../shared/commons/constants";
import { useApi } from "../../auth/hooks/useApi";
import { useAuth } from "../../auth/hooks/useAuth";
import { OwnerRequestDetails } from "../components/OwnerRequestDetails";
import { RequesterRequestDetails } from "../components/RequesterRequestDetails";

export const RequestDetails = () => {
  const { userIsInRole } = useAuth();
  const { id } = useParams();
  const [adoption, setAdoption] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = useApi();

  useEffect(() => {
    async function fetchAdoption() {
      try {
        const response = await api(`${API_URL}/adoptions/${id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAdoption(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAdoption();
  }, [id]);

  if (loading) return <p>Cargando detalles del animal...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!adoption) return <p>No se encontró el animal.</p>;

  return (
    <div className="font-display text-slate-800">
      <div className="container mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">
            Detalles de Solicitud de Adopción
          </h1>
          <p className="text-slate-600 mt-1">
            Revisa la información del solicitante y del animal para tomar una
            decisión.
          </p>
        </header>
        {userIsInRole("Owner") ? (
          <OwnerRequestDetails adoption={adoption} id={id} />
        ) : (
          <RequesterRequestDetails adoption={adoption} id={id} />
        )}
      </div>
    </div>
  );
};
