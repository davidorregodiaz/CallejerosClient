import { useNavigate } from "react-router-dom";
import { useApi } from "../../auth/hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";
import { useState } from "react";
import { Appointments } from "./Appointments";

export const OwnerRequestDetails = ({ adoption, id }) => {
  const navigate = useNavigate();
  const api = useApi();
  const [error, setError] = useState(null);

  const isCancelled = adoption?.status === "Rejected";

  const approveAdoption = async (status) => {
    try {
      const response = await api(`${API_URL}/adoptions/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error("Network response was not ok");
      await response.json();
    } catch (error) {
      setError(error);
    }
  };

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <div className="bg-white  rounded-xl shadow-sm ring-1 ring-slate-900/5">
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-900  mb-4">
              Información del Solicitante
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-500 ">
                  person
                </span>
                <div>
                  <p className="text-sm text-slate-500 ">Nombre Completo</p>
                  <p className="font-semibold text-slate-700 ">
                    {adoption?.requesterName}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-500 ">
                  email
                </span>
                <div>
                  <p className="text-sm text-slate-500 ">Correo Electrónico</p>
                  <p className="font-semibold text-slate-700 ">
                    elena.garcia@email.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-500 ">
                  phone
                </span>
                <div>
                  <p className="text-sm text-slate-500 ">Teléfono</p>
                  <p className="font-semibold text-slate-700 ">
                    +34 600 123 456
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-slate-500 ">
                  home
                </span>
                <div>
                  <p className="text-sm text-slate-500 ">Dirección</p>
                  <p className="font-semibold text-slate-700 ">
                    Calle Falsa 123, Madrid
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white  rounded-xl shadow-sm ring-1 ring-slate-900/5">
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-900  mb-6">
              Respuestas al Formulario
            </h2>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-slate-700 ">
                  1. ¿Por qué quieres adoptar una mascota?
                </p>
                <p className="mt-1 text-slate-600 ">{adoption?.comments}</p>
              </div>
            </div>
          </div>
        </div>
        <Appointments appointments={adoption?.appointments} />
      </div>
      <div className="lg:col-span-1 space-y-8">
        <div className="bg-white  rounded-xl shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
          <img
            alt="Foto de Bruno, el gato"
            className="w-full h-64 object-cover"
            src={adoption?.animalImage}
          />
          <div className="p-6">
            <p className="text-sm text-slate-500 ">Animal Solicitado</p>
            <h3 className="text-2xl font-bold text-slate-900  mt-1">
              {adoption?.animalName}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="inline-flex items-center rounded-full bg-slate-100  px-3 py-1 text-sm font-medium text-slate-700 ">
                Gato
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-100  px-3 py-1 text-sm font-medium text-slate-700 ">
                Macho
              </span>
              <span className="inline-flex items-center rounded-full bg-slate-100  px-3 py-1 text-sm font-medium text-slate-700 ">
                2 años
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white  rounded-xl shadow-sm ring-1 ring-slate-900/5 p-6">
          <h3 className="text-lg font-bold text-slate-900 ">Acciones</h3>
          <p className="text-sm text-slate-600  mt-1 mb-6">
            Gestiona el siguiente paso para esta solicitud.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => {
                navigate("/user/requests/appointment");
              }}
              className="w-full cursor-pointer flex items-center justify-center gap-2 rounded-lg bg-slate-800  text-white  px-4 py-3 font-bold hover:bg-slate-700  transition-colors"
            >
              <span className="material-symbols-outlined">calendar_month</span>
              Agendar Cita
            </button>
            {isCancelled ? (
              <button
                disabled
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-300 text-white px-4 py-3 font-bold cursor-not-allowed opacity-70"
              >
                <span className="material-symbols-outlined">cancel</span>
                Solicitud cancelada
              </button>
            ) : (
              <button
                onClick={() => {
                  const newStatus =
                    adoption?.status === "Pending" ? "Approved" : "Rejected";
                  approveAdoption(newStatus);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent/90 text-slate-900 px-4 py-3 font-bold hover:bg-accent cursor-pointer transition-all"
              >
                <span className="material-symbols-outlined">check_circle</span>
                Aprobar Adopción
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
