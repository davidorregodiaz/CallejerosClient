import { formatDateTime } from "../../../shared/helpers";

export const AppointmentCard = ({ appointment }) => {
  const { date, time } = formatDateTime(appointment?.date);

  return (
    <div className="flex mt-5 flex-col justify-between p-4 rounded-lg bg-slate-50  ring-1 ring-slate-200">
      <div>
        <div className="flex items-center gap-2 text-slate-900 font-bold">
          <span className="material-symbols-outlined text-base">
            calendar_today
          </span>
          <p>{date}</p>
        </div>
        <div className="flex items-center gap-2 text-slate-600  mt-1">
          <span className="material-symbols-outlined text-base">schedule</span>
          <p>{time}</p>
        </div>
        <div className="flex items-center gap-2 text-slate-600  mt-1">
          <span className="material-symbols-outlined text-base">
            location_on
          </span>
          <p>{appointment?.location}</p>
        </div>
      </div>
      <div className="mt-4">
        <span className="inline-flex items-center rounded-full bg-blue-100  px-3 py-1 text-sm font-medium text-blue-800">
          {appointment?.status}
        </span>
      </div>
    </div>
  );
};
