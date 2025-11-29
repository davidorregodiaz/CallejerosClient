import { AppointmentCard } from "./AppointmentCard";

export const Appointments = ({ appointments }) => {
  return (
    <div className="bg-white  rounded-xl shadow-sm ring-1 ring-slate-900/5 mt-12">
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-900 ">
          Citas Agendadas para esta Solicitud
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {appointments?.map((a) => (
            <AppointmentCard key={a.appointmentId} appointment={a} />
          ))}
        </div>
      </div>
    </div>
  );
};
