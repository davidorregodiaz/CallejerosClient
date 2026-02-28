import { useState } from "react";
import { formatDateTime } from "../../../shared/helpers";
import { useApi } from "../../auth/hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";
import Spinner from "../../../shared/ui/Spinner";
import ErrorToast from "../../../shared/ui/ErrorToast";
import SuccessToast from "../../../shared/ui/SuccessToast";
import { CompletedTag, PendingTag, RescheduleRequestedTag, ScheduleTag, CancelledTag } from "../utils/appointmentStatusTags";
import { RescheduleAppoinmentForm } from "./RescheduleAppointmentForm";

export const AppointmentCard = ({ appointment, adoptionRequestId, onUpdate }) => {
  const api = useApi();
  const isReschedule = appointment?.status === "RescheduleRequested";
  const isScheduled = appointment?.status === "Scheduled";
  const isCancelled = appointment?.status === "Cancelled";
  const isCompleted = appointment?.status === "Completed";
  const isPending = appointment?.status === "Pending";
  const isActionDisabled = isCancelled || isCompleted;
  const fadeIn = "opacity-100 translate-y-0 pointer-events-auto";
  const fadeOut = "opacity-0 translate-y-2 pointer-events-none";
  const { date, time } = formatDateTime(isReschedule ? appointment?.dateProposed : appointment?.date);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState({ title: "", message: "" });
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);

  const handleAction = async (action) => {
    setIsOpen(false);
    setLoading(true);
    setError(null);
    setSuccess({ title: "", message: "" });

    const actionConfig = {
      schedule: {
        title: "Cita agendada",
        message: "Su cita ha sido agendada satisfactoriamente.",
      },
      cancel: {
        title: "Cita cancelada",
        message: "La cita ha sido cancelada satisfactoriamente.",
      },
    };

    try {
      const response = await api(
        `${API_URL}/adoptions/${adoptionRequestId}/appointments/${appointment.appointmentId}/${action}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) throw new Error("No se pudo procesar la solicitud.");

      setSuccess(actionConfig[action]);
      if (onUpdate) setTimeout(() => onUpdate(), 1500);
    } catch (err) {
      setError({ message: err.message || "Ocurrió un error inesperado." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative group">
      {showRescheduleModal && (
        <RescheduleAppoinmentForm
          adoptionRequestId={adoptionRequestId}
          appointmentId={appointment.appointmentId}
          dateTime={appointment.date}
          onClose={() => setShowRescheduleModal(false)}
          onSuccess={() => {
            setShowRescheduleModal(false);
            if (onUpdate) onUpdate();
          }}
        />
      )}

      {error && <ErrorToast errorMessage={error.message} onClose={() => setError(null)} />}
      {success.title && <SuccessToast data={success} onClose={() => setSuccess({ title: "", message: "" })} />}

      <div className={`flex mt-5 flex-col justify-between p-4 rounded-lg ring-1 transition-all duration-300 ${isReschedule
        ? "bg-yellow-50 ring-yellow-200 border-l-4 border-l-yellow-400"
        : "bg-slate-50 ring-slate-200"
        } ${loading ? "opacity-40 blur-[1px]" : "opacity-100"}`}>

        <div>
          <div className="flex items-center gap-2 text-slate-900 font-bold">
            <span className={`material-symbols-outlined text-base ${isReschedule ? "text-yellow-700" : ""}`}>calendar_today</span>
            <p>{date}</p>
          </div>
          <div className="flex items-center gap-2 text-slate-600 mt-1">
            <span className={`material-symbols-outlined text-base ${isReschedule ? "text-yellow-600" : ""}`}>schedule</span>
            <p>{time}</p>
          </div>

          <div className="flex items-start gap-2 text-slate-600 mt-1">
            {isReschedule ? (
              <>
                <span className="material-symbols-outlined text-base text-yellow-600 mt-0.5">chat_bubble</span>
                <p className="italic text-sm text-slate-700">
                  <span className="font-bold not-italic text-yellow-800">Nota: </span>
                  {appointment?.rescheduleMessage || "Sin mensaje adjunto."}
                </p>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined text-base">location_on</span>
                <p>{appointment?.location}</p>
              </>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          {/* Tags de estado de la cita (appointment)*/}
          {isScheduled && (<ScheduleTag />)}
          {isReschedule && (<RescheduleRequestedTag />)}
          {isPending && (<PendingTag />)}
          {isCompleted && (<CompletedTag />)}
          {isCancelled && (<CancelledTag />)}

          {/* Renderizado condicional del menú de acciones: No se muestra si está cancelada/completada */}
          {!isActionDisabled && (
            <div className="relative inline-block">
              <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={loading}
                className={`flex items-center justify-center w-8 h-8 rounded-full transition-colors focus:outline-none disabled:cursor-not-allowed ${isReschedule ? "hover:bg-yellow-200 text-yellow-700" : "hover:bg-slate-200 text-slate-500"
                  }`}
              >
                <span className="material-symbols-outlined">more_vert</span>
              </button>

              <div
                className={`absolute bottom-full right-0 mb-2 w-48 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 z-20 transition-all duration-200 
                ${isOpen ? fadeIn : fadeOut}`}
              >
                <div className="py-1" role="menu">
                  {isScheduled ? (
                    <>
                      <button
                        onClick={() => handleAction("complete")}
                        className="flex w-full items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      >
                        <span className="material-symbols-outlined text-sm mr-2">check</span>
                        Completar Cita
                      </button>

                      <div className="border-t border-slate-100 my-1"></div>
                      <button
                        onClick={() => handleAction("cancel")}
                        className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <span className="material-symbols-outlined text-sm mr-2">cancel</span>
                        Cancelar Cita
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setIsOpen(false);
                          setShowRescheduleModal(true);
                        }}
                        className="flex w-full items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      >
                        <span className="material-symbols-outlined text-sm mr-2">edit_calendar</span>
                        Replanificar Cita
                      </button>
                      <button
                        onClick={() => handleAction("schedule")}
                        className="flex w-full items-center px-4 py-2 text-sm text-slate-700 hover:bg-slate-100"
                      >
                        <span className="material-symbols-outlined text-sm mr-2">event_available</span>
                        Confirmar Fecha
                      </button>
                      <div className="border-t border-slate-100 my-1"></div>
                      <button
                        onClick={() => handleAction("cancel")}
                        className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        <span className="material-symbols-outlined text-sm mr-2">cancel</span>
                        Cancelar Cita
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {loading && (
        <div className="absolute inset-0 z-30 flex items-center justify-center bg-white/10">
          <Spinner />
        </div>
      )}
    </div>
  );
};
