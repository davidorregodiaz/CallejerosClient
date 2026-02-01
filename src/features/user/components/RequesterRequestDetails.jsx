import { RequesterAppointmentCard } from "./RequesterAppointmentCard";

const sexMapper = {
  "Female": "Hembra",
  "Male": "Macho"
}

function isAgeBiggerThanOne(age) {
  return age > 1;
}

export const RequesterRequestDetails = ({ adoption }) => {
  return (
    <>
      <div className="space-y-8 relative">
        <div className="bg-white  rounded-xl shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
          <div className="md:flex">

            <div className="md:shrink-0">
              <img
                alt={`Foto de ${adoption.animal.name}`}
                className="h-48 w-full md:h-auto md:max-h-64 md:w-64 object-cover rounded-lg"
                src={adoption.animal.principalImageUrl}
              />
            </div>

            <div className="p-6 md:p-8 grow">
              <p className="text-sm font-semibold text-primary">
                Animal Solicitado
              </p>
              <h3 className="text-3xl font-bold text-slate-900  mt-1">
                {adoption.animal.name}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-slate-100  px-3 py-1 text-sm font-medium text-slate-700 ">
                  {adoption.animal.breed}
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100  px-3 py-1 text-sm font-medium text-slate-700 ">
                  {sexMapper[adoption.animal.sex]}
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100  px-3 py-1 text-sm font-medium text-slate-700 ">
                  {isAgeBiggerThanOne(adoption.animal.age) ? `${adoption.animal.age} años` : `${adoption.animal.age} año`}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white  rounded-xl shadow-sm ring-1 ring-slate-900/5">
          <div className="p-6">
            <h2 className="text-xl font-bold text-slate-900  mb-6">
              Citas Agendadas para esta Solicitud
            </h2>
            {adoption.appointments.length === 0 && (<div class="flex items-center justify-center py-12 px-6 rounded-lg border border-dashed border-[#e7f3eb] dark:border-[#1e3a27] bg-background-light/50 dark:bg-background-dark/30">
              <p class="text-[#4c9a66] dark:text-[#a1c2ac] text-sm font-medium">Aún no hay citas agendadas</p>
            </div>)}
            {adoption?.appointments?.map((a) => (
              <RequesterAppointmentCard key={a.appointmentId} appointment={a} adoptionRequestId={adoption.adoptionRequestId} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
