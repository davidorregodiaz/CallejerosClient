import { API_URL } from "../../../shared/commons/constants";
import { formatDateTime } from "../../../shared/helpers";
import { useApi } from "../../auth/hooks/useApi";
import { RescheduleAppoinmentForm } from "./RescheduleAppointmentForm";
import { useState } from "react";

export const RequesterAppointmentCard = ({ appointment }) => {
  const [updateAppointmenModal, setUpdateAppointmentModal] = useState(false);
  const { date, time } = formatDateTime(appointment.date);
  const api = useApi();

  const acceptAppointment = async () => {
    try {
      const res = await api(
        `${API_URL}/adoptions/appointment/${appointment.appointmentId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status: "Scheduled" }),
        }
      );
      if (!res.ok) throw new Error("Something went wrong");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6">
      {updateAppointmenModal ? (
        <RescheduleAppoinmentForm
          dateTime={appointment.date}
          onClose={() => setUpdateAppointmentModal(false)}
        />
      ) : (
        ""
      )}
      <div className="bg-slate-50 /50 p-4 rounded-lg border border-slate-200 ">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-slate-500">
              calendar_month
            </span>
            <div>
              <p className="font-bold text-slate-800 ">Visita al refugio</p>
              <p className="text-sm text-slate-600 ">
                {date} - {time}
              </p>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row sm:items-center gap-4">
            <span className="inline-flex items-center rounded-full bg-yellow-100  px-3 py-1 text-sm font-medium text-yellow-800 ">
              <span className="w-2 h-2 mr-2 bg-yellow-500 rounded-full"></span>
              {appointment.status}
            </span>
          </div>
        </div>
        {appointment.status === "Pending" ? (
          <div className="mt-4 pt-4 border-t border-slate-200  flex flex-col sm:flex-row sm:justify-end gap-3">
            <button
              onClick={() => setUpdateAppointmentModal(true)}
              className="w-full sm:w-auto flex items-center cursor-pointer justify-center gap-2 rounded-lg bg-slate-200  text-slate-800  px-4 py-2 font-semibold hover:bg-slate-300  transition-colors text-sm"
            >
              <span className="material-symbols-outlined text-sm">
                edit_calendar
              </span>
              Replanificar
            </button>
            <button
              onClick={acceptAppointment}
              className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-accent/80 text-slate-900 px-4 py-2 hover:bg-accent font-bold transition-colors text-sm cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">
                check_circle
              </span>
              Aceptar
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
