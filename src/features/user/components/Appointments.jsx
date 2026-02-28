import { AppointmentCard } from "./AppointmentCard";

export const Appointments = ({ appointments, adoptionRequestId }) => {
  return (
    <div className="bg-white  rounded-xl shadow-sm ring-1 ring-slate-900/5">
      <div className="p-6">
        <h2 className="text-xl font-bold text-slate-900 ">
          Citas Agendadas para esta Solicitud
        </h2>
        {appointments.length === 0 && (<div className="flex items-center w-full mt-[10px] justify-center py-12 px-6 rounded-lg border border-dashed border-[#e7f3eb] bg-background-light/50">
          <p className="text-[#4c9a66] dark:text-[#a1c2ac] text-sm font-medium">Aún no hay citas agendadas</p>
        </div>)}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {appointments?.map((a) => (
            <AppointmentCard key={a.appointmentId} appointment={a} adoptionRequestId={adoptionRequestId} />
          ))}
        </div>
      </div>
    </div>
  );
};
