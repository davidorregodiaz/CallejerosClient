import { RequesterAppointmentCard } from "./RequesterAppointmentCard";

export const RequesterRequestDetails = ({ adoption }) => {
  return (
    <>
      <div className="space-y-8 relative">
        <div className="bg-white  rounded-xl shadow-sm ring-1 ring-slate-900/5 overflow-hidden">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img
                alt="Foto de Bruno, el gato"
                className="h-48 w-full object-cover md:h-full md:w-64"
                src={adoption.animalImage}
              />
            </div>
            <div className="p-6 md:p-8 grow">
              <p className="text-sm font-semibold text-primary">
                Animal Solicitado
              </p>
              <h3 className="text-3xl font-bold text-slate-900  mt-1">
                {adoption.animalName}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-full bg-slate-100  px-3 py-1 text-sm font-medium text-slate-700 ">
                  Gato
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100  px-3 py-1 text-sm font-medium text-slate-700 ">
                  Macho
                </span>
                <span className="inline-flex items-center rounded-full bg-slate-100  px-3 py-1 text-sm font-medium text-slate-700 ">
                  2 años
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
            {adoption?.appointments?.map((a) => (
              <RequesterAppointmentCard key={a.appointmentId} appointment={a} adoptionRequestId={adoption.adoptionRequestId} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
