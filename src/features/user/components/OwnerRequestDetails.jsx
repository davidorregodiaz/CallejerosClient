// import { useNavigate } from "react-router-dom";
import { useApi } from "../../auth/hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";
import { useState } from "react";
import { Appointments } from "./Appointments";
import { Link } from "react-router-dom";

export const OwnerRequestDetails = ({ adoption, id }) => {
  const api = useApi();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Estados de la adopción
  const isPending = adoption?.status === "Pending";
  const isRejected = adoption?.status === "Rejected";
  const isCompleted = adoption?.status === "Completed";

  const updateAdoptionStatus = async (status) => {
    try {
      setLoading(true);
      const response = await api(`${API_URL}/adoptions/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error("Error al actualizar la solicitud");

      // Aquí podrías llamar a una función para refrescar los datos si fuera necesario
      window.location.reload();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (error) return <p className="p-4 text-red-600 bg-red-50 rounded-lg">Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Información del Solicitante */}
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-900/5">
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Información del Solicitante</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-500">person</span>
                <div>
                  <p className="text-sm text-slate-500">Nombre Completo</p>
                  <p className="font-semibold text-slate-700">{adoption?.requesterName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-500">email</span>
                <div>
                  <p className="text-sm text-slate-500">Correo Electrónico</p>
                  <p className="font-semibold text-slate-700">{adoption?.requesterEmail || "usuario@email.com"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Respuestas Formulario */}
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-900/5">
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Respuestas al Formulario</h2>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-slate-700">1. ¿Por qué quieres adoptar una mascota?</p>
                <p className="mt-1 text-slate-600">{adoption?.comments || "No se proporcionaron comentarios."}</p>
              </div>
            </div>
          </div>
        </div>

        <Appointments
          appointments={adoption?.appointments}
          adoptionRequestId={adoption?.adoptionRequestId}
        />
      </div>

      <div className="lg:col-span-1 space-y-8">
        {/* Card del Animal */}
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
          <img
            alt={`Foto de ${adoption?.animalName}`}
            className="w-full h-64 object-cover"
            src={adoption?.animal.principalImageUrl}
          />
          <div className="p-6">
            <p className="text-sm text-slate-500">Animal Solicitado</p>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">{adoption?.animalName}</h3>
          </div>
        </div>

        {/* Panel de Acciones */}
        <div className="bg-white rounded-xl shadow-sm ring-1 ring-slate-900/5 p-6">
          <h3 className="text-lg font-bold text-slate-900">Acciones de Gestión</h3>
          <p className="text-sm text-slate-600 mt-1 mb-6">
            Estado actual: <span className="font-bold text-slate-800">{adoption?.status}</span>
          </p>

          <div className="space-y-3">
            {/* 1. ESTADO REJECTED (SOLO BOTÓN DESHABILITADO) */}
            {isRejected && (
              <div className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-100 text-red-700 px-4 py-3 font-bold border border-red-200 opacity-80">
                <span className="material-symbols-outlined">block</span>
                Solicitud Rechazada
              </div>
            )}

            {/* 2. ESTADO COMPLETED (MENSAJE DE ÉXITO) */}
            {isCompleted && (
              <div className="w-full flex flex-col items-center justify-center gap-2 rounded-lg bg-green-50 text-green-700 px-4 py-4 font-bold border border-green-200">
                <span className="material-symbols-outlined text-3xl">task_alt</span>
                <p className="text-center text-lg">¡Adopción Finalizada con Éxito!</p>
              </div>
            )}

            {/* 3. ESTADOS ACTIVOS (PENDING O APPROVED) */}
            {!isRejected && !isCompleted && (
              <>
                <Link
                  to={`/user/requests/${id}/appointment`}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-slate-800 text-white px-4 py-3 font-bold hover:bg-slate-700 transition-colors"
                >
                  <span className="material-symbols-outlined">calendar_month</span>
                  {adoption?.appointments?.length > 0 ? "Re-agendar Cita" : "Agendar Cita"}
                </Link>

                {isPending ? (
                  <button
                    onClick={() => updateAdoptionStatus("Approved")}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent/90 text-slate-900 px-4 py-3 font-bold hover:bg-accent cursor-pointer transition-all disabled:opacity-50"
                  >
                    <span className="material-symbols-outlined">check_circle</span>
                    Aprobar Adopción
                  </button>
                ) : (
                  <button
                    onClick={() => updateAdoptionStatus("Completed")}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-green-600 text-white px-4 py-3 font-bold hover:bg-green-700 cursor-pointer transition-all disabled:opacity-50 shadow-md"
                  >
                    <span className="material-symbols-outlined">verified</span>
                    Finalizar Adopción
                  </button>
                )}

                {/* Opción de rechazar siempre disponible si no está aprobada o completada */}
                {isPending && (
                  <button
                    onClick={() => updateAdoptionStatus("Rejected")}
                    disabled={loading}
                    className="w-full text-sm text-red-500 font-medium hover:underline py-2"
                  >
                    Rechazar Solicitud
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
