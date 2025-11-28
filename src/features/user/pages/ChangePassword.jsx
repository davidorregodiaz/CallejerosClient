export const ChangePassword = () => {
  return (
    <section id="change-password">
      <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Cambiar Contraseña
      </h2>
      <form className="p-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center rounded-lg">
          <label
            className="text-sm font-medium text-text-light dark:text-text-dark"
            for="current-password"
          >
            Contraseña Actual
          </label>
          <input
            className="md:col-span-2 w-full rounded-lg border border-border-dark dark:border-border-light bg-surface-light dark:bg-surface-dark focus:ring-primary focus:outline-0 focus:border-primary bg-white/5 dark:bg-white p-1"
            id="current-password"
            type="password"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center rounded-lg">
          <label
            className="text-sm font-medium text-text-light dark:text-text-dark"
            for="new-password"
          >
            Nueva Contraseña
          </label>
          <input
            className="md:col-span-2 w-full rounded-lg border dark:border-border-light bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary focus:outline-0 bg-white/5 dark:bg-white p-1"
            id="new-password"
            type="password"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center rounded-lg">
          <label
            className="text-sm font-medium text-text-light dark:text-text-dark"
            for="confirm-password"
          >
            Confirmar Nueva Contraseña
          </label>
          <input
            className="md:col-span-2 w-full rounded-lg border dark:border-border-light bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary focus:outline-0 bg-white/5 dark:bg-white p-1"
            id="confirm-password"
            type="password"
          />
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold border border-border-light dark:border-border-light hover:bg-gray-100 dark:hover:bg-gray-100 cursor-pointer"
            type="button"
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-text-light hover:bg-opacity-80 cursor-pointer"
            type="submit"
          >
            Actualizar Contraseña
          </button>
        </div>
      </form>
    </section>
  );
};
