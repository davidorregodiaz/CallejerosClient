import { API_URL } from "../../../shared/commons/constants";
import { formatDateTime } from "../../../shared/helpers";
import { useApi } from "../../auth/hooks/useApi";
import { RescheduleAppoinmentForm } from "./RescheduleAppointmentForm";
import { useState } from "react";
import ErrorToast from "../../../shared/ui/ErrorToast";
import SuccessToast from "../../../shared/ui/SuccessToast";
import Spinner from "../../../shared/ui/Spinner";

export const RequesterAppointmentCard = ({
  appointment,
  adoptionRequestId,
  onUpdate
}) => {
  const [updateAppointmenModal, setUpdateAppointmentModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState({ title: "", message: "" });
  const [error, setError] = useState(null);

  const { date, time } = formatDateTime(appointment.date);
  const { date: dateProposed, time: timeProposed } = formatDateTime(
    appointment.dateProposed,
  );
  const api = useApi();

  const isReschedule = appointment.status === "RescheduleRequested";

  const acceptAppointment = async () => {
    try {
      setLoading(true);
      setError(null);

      const res = await api(
        `${API_URL}/adoptions/${adoptionRequestId}/appointments/${appointment.appointmentId}/schedule`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "Scheduled" }),
        },
      );

      if (!res.ok) throw new Error("No se pudo procesar la solicitud.");

      setSuccess({
        title: "Cita agendada",
        message: "La cita ha sido agendada satisfactoriamente",
      });

      // Si tienes un callback para actualizar la lista, llámalo después de un momento
      if (onUpdate) setTimeout(() => onUpdate(), 1500);

    } catch (err) {
      console.error(err);
      setError({
        message: err.message || "Ocurrió un error inesperado al aceptar la cita."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group">
      {/* Feedback Visual: Toasts */}
      {error && (
        <ErrorToast
          errorMessage={error.message}
          onClose={() => setError(null)}
        />
      )}
      {success.title && (
        <SuccessToast
          data={success}
          onClose={() => setSuccess({ title: "", message: "" })}
        />
      )}

      {/* Modal de Replanificación */}
      {updateAppointmenModal && (
        <RescheduleAppoinmentForm
          adoptionRequestId={adoptionRequestId}
          appointmentId={appointment.appointmentId}
          dateTime={appointment.date}
          onClose={() => setUpdateAppointmentModal(false)}
          onSuccess={() => {
            setUpdateAppointmentModal(false);
            if (onUpdate) onUpdate();
          }}
        />
      )}

      <div className={`bg-white p-5 rounded-xl border border-slate-200 shadow-sm transition-all hover:shadow-md ${loading ? "opacity-50 blur-[1px]" : ""}`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-slate-100 rounded-lg">
              <span className="material-symbols-outlined text-slate-600">
                calendar_month
              </span>
            </div>
            <div>
              <p className="font-bold text-slate-900 text-lg leading-tight">
                {appointment.location || "Visita al refugio"}
              </p>
              <p className="text-sm text-slate-500 mt-1">
                Fecha original:{" "}
                <span className="font-medium text-slate-700">
                  {date} - {time}
                </span>
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${isReschedule
                ? "bg-amber-100 text-amber-700"
                : "bg-blue-100 text-blue-700"
                }`}
            >
              <span
                className={`w-2 h-2 mr-2 rounded-full ${isReschedule ? "bg-amber-500" : "bg-blue-500"}`}
              ></span>
              {appointment.status}
            </span>
          </div>
        </div>

        {/* Sección de Replanificación */}
        {isReschedule && (
          <div className="mt-4 p-4 bg-amber-50/50 border border-amber-100 rounded-lg animate-fade-in">
            <div className="flex items-center gap-2 text-amber-800 font-bold text-sm mb-2">
              <span className="material-symbols-outlined text-sm">info</span>
              Nueva fecha propuesta
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
              <div className="flex items-center gap-2 text-slate-700 text-sm">
                <span className="material-symbols-outlined text-base text-slate-400">
                  event
                </span>
                {dateProposed}
              </div>
              <div className="flex items-center gap-2 text-slate-700 text-sm">
                <span className="material-symbols-outlined text-base text-slate-400">
                  schedule
                </span>
                {timeProposed}
              </div>
            </div>
            {appointment.rescheduleMessage && (
              <div className="text-sm text-slate-600 bg-white/50 p-2 rounded italic border-l-2 border-amber-300">
                "{appointment.rescheduleMessage}"
              </div>
            )}
          </div>
        )}

        {/* Botones de Acción */}
        {["Pending", "RescheduleRequested"].includes(appointment.status) && (
          <div className="mt-5 pt-4 border-t border-slate-100 flex flex-col sm:flex-row sm:justify-end gap-3">
            <button
              onClick={() => setUpdateAppointmentModal(true)}
              disabled={loading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-slate-100 text-slate-700 px-4 py-2 font-semibold hover:bg-slate-200 transition-colors text-sm border border-slate-200 disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-sm">
                edit_calendar
              </span>
              Proponer otro cambio
            </button>
            <button
              onClick={acceptAppointment}
              disabled={loading}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-slate-900 text-white px-6 py-2 hover:bg-slate-800 font-bold transition-all text-sm shadow-sm active:scale-95 disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-sm">
                check_circle
              </span>
              Aceptar {isReschedule ? "Nueva Fecha" : "Cita"}
            </button>
          </div>
        )}

        {/* Spinner Overlay */}
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/20 rounded-xl">
            <Spinner />
          </div>
        )}
      </div>
    </div>
  );
};
