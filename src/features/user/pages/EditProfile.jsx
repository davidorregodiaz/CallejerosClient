



export const EditProfile = () => {
  return (
    <section id="update-profile">
      <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Actualizar Perfil
      </h2>
      <form className="p-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <label
            className="text-sm font-medium text-text-light dark:text-text-dark"
            for="username"
          >
            Nombre de Usuario
          </label>
          <input
            className="md:col-span-2 w-full rounded-lg border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary"
            id="username"
            type="text"
            value="Ana García"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          <label
            className="text-sm font-medium text-text-light dark:text-text-dark"
            for="email"
          >
            Email
          </label>
          <input
            className="md:col-span-2 w-full rounded-lg border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary"
            id="email"
            type="email"
            value="ana.garcia@email.com"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
          <label
            className="text-sm font-medium text-text-light dark:text-text-dark mt-2"
            for="avatar"
          >
            Avatar
          </label>
          <div className="md:col-span-2 flex items-center gap-4">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-16"
              data-alt="Avatar actual de Ana García"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBfl5JLLdlnCkVyrJz7J5Up6ZRjLE3T0s4vhNmaiqgGGsQ8k2FGD0dGEpPWrqShYr8JrddGCqvsqkPqs5GEqNmqP9nlcP94haK9Wqfa1FgjEPshVgIeq9-N3V4H5uCzZeGc2t7AcSCb5ggseOHNWhnholCtxGwxfSl6ZMM5WlXdYEhdLBY8eEpQqyCvNhpfHOqR2adZVeYVwpSOgy2TKWxJOG0W86dSF9rWdLNmSqYcDhtceGrXWEudCLcimvjyTFLqCE8FQhSfTpE')",
              }}
            ></div>
            <input
              className="block w-full text-sm text-subtle-light dark:text-subtle-dark file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-text-light dark:file:text-text-dark hover:file:bg-primary/30"
              id="avatar"
              type="file"
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-700"
            type="button"
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-text-light hover:bg-opacity-80"
            type="submit"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </section>
  );
};
