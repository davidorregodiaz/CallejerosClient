import { useParams } from "react-router-dom";
import { useState } from "react";
import { useApi } from "../../auth/hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";
import { ErrorToast } from "../../../shared/ui/ErrorToast";
import { Spinner } from "../../../shared/ui/Spinner";
import { SuccessToast } from "../../../shared/ui/SuccessToast";

export const AppointmentForm = () => {
  const api = useApi();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [success, setSuccess] = useState({
    title: "",
    message: "",
  });
  const { id } = useParams();

  const [form, setForm] = useState({
    adoptionRequestId: id,
    date: "",
    time: "",
    notes: "",
    location: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const combinedDateTime = new Date(`${form.date}T${form.time}:00`);

      const payload = {
        date: combinedDateTime.toISOString(), // ← ENVÍAS EL DATETIME COMPLETO
        notes: form.notes,
        location: form.location,
      };
      const res = await api(`${API_URL}/adoptions/${id}/appointments`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Something went wrong");
      setSuccess({
        title: "Su cita ha sido agendada",
        message: "Espere la respuesta del solicitante",
      });
    } catch (error) {
      console.error(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Spinner />;

  return (
    <>
      {error && <ErrorToast errorMessage={error.message} />}
      {success.title && <SuccessToast data={success} />}
      <div className="font-display   text-slate-800 ">
        <div className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
          <header className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-slate-900 ">
              Formulario para Agendar Cita
            </h1>
            <p className="text-slate-600  mt-2">
              Completa los detalles para programar la reunión con Elena García
              para la adopción de Bruno.
            </p>
          </header>
          <div className="bg-white  rounded-xl shadow-sm ring-1 ring-slate-900/5">
            <form className="p-6 sm:p-8" onSubmit={handleSubmit}>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-medium text-slate-700  mb-1.5"
                      htmlFor="appointment-date"
                    >
                      Fecha de la Cita
                    </label>
                    <div className="relative">
                      <input
                        name="date"
                        value={form.date}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-slate-300  bg-slate-50  p-3 pl-10 text-slate-800  focus:border-primary focus:ring focus:ring-primary/20"
                        id="appointment-date"
                        type="date"
                      />
                      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="material-symbols-outlined text-slate-500 ">
                          calendar_today
                        </span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium text-slate-700  mb-1.5"
                      htmlFor="appointment-time"
                    >
                      Hora de la Cita
                    </label>
                    <div className="relative">
                      <input
                        name="time"
                        value={form.time}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-slate-300  bg-slate-50  p-3 pl-10 text-slate-800  focus:border-primary focus:ring focus:ring-primary/20"
                        id="appointment-time"
                        type="time"
                      />
                      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="material-symbols-outlined text-slate-500 ">
                          schedule
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-4">
                    <label className="sr-only" htmlFor="location-details">
                      Detalles de la ubicación
                    </label>
                    <div className="relative">
                      <input
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        className="block w-full rounded-lg border-slate-300  bg-slate-50  p-3 pl-10 text-slate-800  focus:border-primary focus:ring focus:ring-primary/20"
                        id="location-details"
                        placeholder="Introduce la dirección o el enlace de la reunión"
                        type="text"
                      />
                      <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <span className="material-symbols-outlined text-slate-500 ">
                          location_on
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700  mb-1.5"
                    htmlFor="notes"
                  >
                    Notas o Instrucciones Especiales
                  </label>
                  <textarea
                    name="notes"
                    value={form.notes}
                    onChange={handleChange}
                    className="block w-full rounded-lg border-slate-300  bg-slate-50  p-3 text-slate-800  focus:border-primary focus:ring focus:ring-primary/20"
                    id="notes"
                    placeholder="Ej: Por favor, traer identificación. La reunión será para conocer al animal..."
                    rows="4"
                  ></textarea>
                </div>
                <div className="pt-4 border-t border-slate-200 ">
                  <button
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent/80 text-slate-900 px-4 py-3 font-bold hover:bg-accent transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light cursor-pointer"
                    type="submit"
                  >
                    <span className="material-symbols-outlined">
                      check_circle
                    </span>
                    Confirmar Cita
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
