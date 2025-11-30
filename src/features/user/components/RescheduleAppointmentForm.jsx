// ...existing code...
import { useEffect, useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { formatDateTime } from "../../../shared/helpers";

export const RescheduleAppoinmentForm = ({ onClose = () => {}, dateTime }) => {
  const { date, time } = formatDateTime(dateTime);
  const [isClosing, setIsClosing] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // bloquear scroll del body mientras el modal esté abierto
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const startClose = useCallback(
    (delay = 240) => {
      if (isClosing) return;
      setIsClosing(true);
      // esperar la duración de la animación antes de cerrar
      timeoutRef.current = setTimeout(() => {
        onClose();
      }, delay);
    },
    [isClosing, onClose]
  );

  useEffect(() => {
    // capturar Escape en fase de captura para mayor fiabilidad
    const onKey = (e) => {
      if (e.key === "Escape" || e.key === "Esc") startClose();
    };
    document.addEventListener("keydown", onKey, true);
    return () => document.removeEventListener("keydown", onKey, true);
  }, [startClose]);

  const modal = (
    <div
      className="fixed inset-0 z-50 font-display"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop - recibe clicks para cerrar */}
      <div
        className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-auto"
        onClick={() => startClose()}
      />

      {/* Modal content (evita propagación de clicks internos) */}
      <div
        className={`relative z-20 flex h-full w-full items-center justify-center p-4 sm:p-6 lg:p-8 pointer-events-none ${
          isClosing ? "animate-fade-out-up" : "animate-fade-in-up"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full max-w-4xl rounded-xl overflow-hidden bg-background-light shadow-lg pointer-events-auto">
          <div className="relative p-6 sm:p-8">
            <button
              onClick={() => startClose()}
              className="absolute top-4 right-4 rounded-full p-2 text-[#0d1b12] hover:bg-gray-200 transition-colors"
              aria-label="Cerrar"
              type="button"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <h2 className="text-[#0d1b12] tracking-tight text-2xl font-bold leading-tight text-left">
              Replanificar Cita de Adopción
            </h2>
            <p className="text-[#0d1b12]/80 text-base font-normal leading-normal mt-2">
              Tu cita actual es el {date} a las {time}
            </p>
          </div>

          <div className="flex flex-col w-full gap-8 px-6 sm:px-8 pb-6 sm:pb-8 border-t border-gray-200 pt-6">
            <div className="flex flex-col flex-1">
              <h3 className="text-[#0d1b12] text-lg font-bold leading-tight tracking-[-0.015em] text-left mb-4">
                Elige la nueva fecha y hora
              </h3>
              <div className="relative">
                <input
                  name="date"
                  className="block w-full rounded-lg border-slate-300 bg-slate-50 p-3 pl-10 text-slate-800 focus:border-primary focus:ring focus:ring-primary/20"
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

            <div className="flex flex-col w-full lg:w-80">
              <label
                className="text-[#0d1b12] text-lg font-bold leading-tight tracking-[-0.015em] text-left mb-4"
                htmlFor="reschedule-note"
              >
                Motivo del cambio (Opcional)
              </label>
              <textarea
                className="w-full p-2 bg-gray-100 border-gray-300 rounded-lg text-[#0d1b12] placeholder:text-gray-400 focus:ring-primary focus:border-primary transition-colors"
                id="reschedule-note"
                placeholder="¿Quieres añadir una nota?"
                rows="8"
              ></textarea>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row-reverse items-center justify-start gap-3 p-6 sm:p-8 bg-gray-50 border-t border-gray-200">
            <button
              onClick={() => {
                /* lógica de confirmación */
              }}
              className="w-full sm:w-auto h-12 px-6 bg-primary text-[#0d1b12] text-base font-bold leading-normal rounded-lg hover:bg-primary/90 transition-colors"
            >
              Confirmar Replanificación
            </button>
            <button
              onClick={() => startClose()}
              className="w-full sm:w-auto h-12 px-6 bg-transparent text-[#0d1b12] text-base font-medium leading-normal rounded-lg hover:bg-gray-200 transition-colors"
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
// ...existing code...
