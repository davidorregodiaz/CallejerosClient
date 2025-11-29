export const Appoinment = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200">
      <div className="container mx-auto max-w-4xl p-4 sm:p-6 lg:p-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Formulario para Agendar Cita
          </h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Completa los detalles para programar la reunión con Elena García
            para la adopción de Bruno.
          </p>
        </header>
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm ring-1 ring-slate-900/5">
          <form className="p-6 sm:p-8">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    for="appointment-date"
                  >
                    Fecha de la Cita
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-3 pl-10 text-slate-800 dark:text-slate-200 focus:border-primary focus:ring focus:ring-primary/20"
                      id="appointment-date"
                      type="date"
                    />
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">
                        calendar_today
                      </span>
                    </span>
                  </div>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    for="appointment-time"
                  >
                    Hora de la Cita
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-3 pl-10 text-slate-800 dark:text-slate-200 focus:border-primary focus:ring focus:ring-primary/20"
                      id="appointment-time"
                      type="time"
                    />
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">
                        schedule
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  for="duration"
                >
                  Duración Estimada
                </label>
                <select
                  className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-3 text-slate-800 dark:text-slate-200 focus:border-primary focus:ring focus:ring-primary/20"
                  id="duration"
                >
                  <option>30 minutos</option>
                  <option>45 minutos</option>
                  <option selected="">60 minutos</option>
                  <option>90 minutos</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
                  Ubicación de la Cita
                </label>
                <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <label className="flex items-center gap-3 p-4 rounded-lg border border-slate-300 dark:border-slate-600 has-checked:border-primary has-checked:ring-2 has-checked:ring-primary/30 cursor-pointer">
                    <input
                      checked=""
                      className="form-radio text-primary focus:ring-primary/50"
                      name="location-type"
                      type="radio"
                      value="presencial"
                    />
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Presencial
                    </span>
                  </label>
                  <label className="flex items-center gap-3 p-4 rounded-lg border border-slate-300 dark:border-slate-600 has-checked:border-primary has-checked:ring-2 has-checked:ring-primary/30 cursor-pointer">
                    <input
                      className="form-radio text-primary focus:ring-primary/50"
                      name="location-type"
                      type="radio"
                      value="virtual"
                    />
                    <span className="font-medium text-slate-800 dark:text-slate-200">
                      Virtual
                    </span>
                  </label>
                </div>
                <div className="mt-4">
                  <label className="sr-only" for="location-details">
                    Detalles de la ubicación
                  </label>
                  <div className="relative">
                    <input
                      className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-3 pl-10 text-slate-800 dark:text-slate-200 focus:border-primary focus:ring focus:ring-primary/20"
                      id="location-details"
                      placeholder="Introduce la dirección o el enlace de la reunión"
                      type="text"
                    />
                    <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">
                        location_on
                      </span>
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                  for="notes"
                >
                  Notas o Instrucciones Especiales
                </label>
                <textarea
                  className="block w-full rounded-lg border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 p-3 text-slate-800 dark:text-slate-200 focus:border-primary focus:ring focus:ring-primary/20"
                  id="notes"
                  placeholder="Ej: Por favor, traer identificación. La reunión será para conocer al animal..."
                  rows="4"
                ></textarea>
              </div>
              <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                <button
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-slate-900 px-4 py-3 font-bold hover:bg-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-slate-800"
                  type="submit"
                >
                  <span className="material-symbols-outlined">check_circle</span>
                  Confirmar Cita
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
