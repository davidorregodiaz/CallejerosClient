import { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { formatDateTime } from "../../../shared/helpers";
import { useApi } from "../../auth/hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";
import ErrorToast from "../../../shared/ui/ErrorToast";
import SuccessToast from "../../../shared/ui/SuccessToast";
import Spinner from "../../../shared/ui/Spinner";

export const RescheduleAppoinmentForm = ({ onClose = () => { }, dateTime, adoptionRequestId, appointmentId }) => {
  const api = useApi();
  const { date, time } = formatDateTime(dateTime);

  const [isClosing, setIsClosing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState({ title: "", message: "" });

  const [form, setForm] = useState({
    dateProposed: "",
    rescheduleMessage: "",
  });

  const timeoutRef = useRef(null);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const startClose = useCallback(
    (delay = 240) => {
      if (isClosing) return;
      setIsClosing(true);
      timeoutRef.current = setTimeout(() => {
        onClose();
      }, delay);
    },
    [isClosing, onClose],
  );

  const rescheduleAppointment = async () => {
    // Validar que se haya seleccionado una fecha
    if (!form.dateProposed) {
      setError({ message: "Por favor, selecciona una nueva fecha." });
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const payload = {
        dateProposed: new Date(form.dateProposed).toISOString(),
        rescheduleMessage: form.rescheduleMessage,
      };

      const res = await api(`${API_URL}/adoptions/${adoptionRequestId}/appointments/${appointmentId}/reschedule`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("No se pudo procesar la replanificación.");

      setSuccess({
        title: "Solicitud enviada",
        message: "Se ha notificado a la contraparte sobre el cambio de fecha.",
      });

      // Esperar un momento para que el usuario vea el éxito antes de cerrar
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  // Manejo de scroll y eventos de teclado
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prevOverflow;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") startClose();
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [startClose]);

  const modal = (
    <div className="fixed inset-0 z-[60] font-display" role="dialog" aria-modal="true">
      {/* Feedback Visual: Toasts (con z-index superior) */}
      <div className="fixed top-4 right-4 z-[70]">
        {error && <ErrorToast errorMessage={error.message} onClose={() => setError(null)} />}
        {success.title && <SuccessToast data={success} onClose={() => setSuccess({ title: "", message: "" })} />}
      </div>

      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => startClose()} />

      {/* Modal content */}
      <div className={`relative z-20 flex h-full w-full items-center justify-center p-4 pointer-events-none ${isClosing ? "animate-fade-out-up" : "animate-fade-in-up"}`}>
        <div className="w-full max-w-2xl rounded-xl overflow-hidden bg-white shadow-2xl pointer-events-auto relative">

          {/* Spinner Overlay local al modal */}
          {loading && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/60 backdrop-blur-[1px]">
              <Spinner />
            </div>
          )}

          <div className="p-6 sm:p-8">
            <button onClick={() => startClose()} className="absolute top-4 right-4 rounded-full p-2 text-slate-500 hover:bg-slate-100 transition-colors">
              <span className="material-symbols-outlined">close</span>
            </button>

            <h2 className="text-slate-900 text-2xl font-bold">Replanificar Cita</h2>
            <p className="text-slate-600 mt-2">Cita actual: <span className="font-semibold">{date} - {time}</span></p>
          </div>

          <div className="px-6 sm:p-8 border-t border-slate-100 space-y-6">
            <div>
              <label className="block text-slate-700 font-bold mb-2">Nueva fecha y hora propuesta</label>
              <div className="relative">
                <input
                  name="dateProposed"
                  value={form.dateProposed}
                  onChange={handleChange}
                  className="block w-full rounded-lg border-slate-200 bg-slate-50 p-3 pl-10 text-slate-800 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  type="datetime-local" // Cambiado a datetime-local para capturar ambos
                />
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="material-symbols-outlined text-slate-400">calendar_today</span>
                </span>
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-2">Motivo del cambio (Opcional)</label>
              <textarea
                name="rescheduleMessage"
                value={form.rescheduleMessage}
                onChange={handleChange}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                placeholder="Escribe un mensaje para explicar el cambio..."
                rows="4"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row-reverse gap-3 p-6 bg-slate-50 border-t border-slate-100">
            <button
              onClick={rescheduleAppointment}
              disabled={loading || !!success.title}
              className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors disabled:opacity-50"
            >
              Confirmar Replanificación
            </button>
            <button
              onClick={() => startClose()}
              className="w-full sm:w-auto px-6 py-3 bg-transparent text-slate-600 font-medium rounded-lg hover:bg-slate-200 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};
