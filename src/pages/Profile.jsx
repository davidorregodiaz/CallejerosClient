export const Profile = () => {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="flex h-full min-h-screen">
          <aside className="w-64 flex-shrink-0 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark">
            <div className="flex h-full flex-col justify-between p-4">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center p-2">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    data-alt="Avatar de Ana García"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA0QVf7vXjXOGK6RWOMnGqToNzabEc23wUFWPtNy689piHx_SMNNXamKE5suH_ahKGnhIX0RyuD9pYJfr-ljMx5my7DQ2hf3ZcBJ-7xCV-HVgwQ_0qIUZcDTY8mBnEuK-ugDS75-5rmQJrjpB_wfvEkIyJUb3TWeL57OJCr-vNLw2oAEMc2v1YkCqW1qJC2lgWK3OpyesLwd7SkoEERMZ72Jbay_hdZGCGhIKxsvMat4VodbN74dUMUeIPQsmJLT8POH3j8mKtOnIA')",
                    }}
                  ></div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-medium leading-normal text-text-light dark:text-text-dark">
                      Ana García
                    </h1>
                    <p className="text-sm font-normal leading-normal text-subtle-light dark:text-subtle-dark">
                      ana.garcia@email.com
                    </p>
                  </div>
                </div>
                <nav className="flex flex-col gap-2 mt-4">
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20"
                    href="#"
                  >
                    <span
                      className="material-symbols-outlined text-text-light dark:text-text-dark"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      grid_view
                    </span>
                    <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                      General
                    </p>
                  </a>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                    href="#"
                  >
                    <span
                      className="material-symbols-outlined text-text-light dark:text-text-dark"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      favorite
                    </span>
                    <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                      Mis Adopciones
                    </p>
                  </a>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                    href="#"
                  >
                    <span
                      className="material-symbols-outlined text-text-light dark:text-text-dark"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      lock
                    </span>
                    <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                      Cambiar Contraseña
                    </p>
                  </a>
                  <a
                    className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                    href="#"
                  >
                    <span
                      className="material-symbols-outlined text-text-light dark:text-text-dark"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      person
                    </span>
                    <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                      Actualizar Perfil
                    </p>
                  </a>
                </nav>
              </div>
              <div className="flex flex-col gap-1">
                <a
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                  href="#"
                >
                  <span
                    className="material-symbols-outlined text-text-light dark:text-text-dark"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    logout
                  </span>
                  <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                    Cerrar Sesión
                  </p>
                </a>
              </div>
            </div>
          </aside>
          <main className="flex-1 p-6 md:p-10 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <section id="general">
                <div className="flex flex-wrap justify-between gap-3 p-4">
                  <p className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em] min-w-72">
                    General
                  </p>
                </div>
                <div className="flex p-4 @container">
                  <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                    <div className="flex gap-4 items-center">
                      <div
                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full flex-shrink-0 h-32 w-32"
                        data-alt="Avatar grande de Ana García"
                        style={{
                          backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBCNQCllfp1BKhMLIMCQEuQQBhRp0HaGnQfWVNGaat7MkkVUrooJ_ovebheHAnVV4qFPJSTk-IWlfA_yzC-538Yjsr8bKav0xG_AMAtoAUUv1LR50g4TkT-SrecdvN8gwg8zbg9iR6qTIUapDJ6N1NtZB4shsbocy6uc_PYU33mggaofDgfJe1XoXsjhNNgvyTNzjjzjv7ui0VpIdoGmeMrstmke8vQhKs233kh-vQYDP5BCkMlrj9gnotcpTI5fbWhUKAHGDPI7GE')",
                        }}
                      ></div>
                      <div className="flex flex-col justify-center">
                        <p className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em]">
                          Ana García
                        </p>
                        <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">
                          ana.garcia@email.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 p-4">
                  <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
                    <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                      Animales apadrinados
                    </p>
                    <p className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight">
                      3
                    </p>
                  </div>
                  <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark">
                    <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                      Fecha de registro
                    </p>
                    <p className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight">
                      15 de Enero, 2023
                    </p>
                  </div>
                </div>
              </section>
              <div className="border-t border-border-light dark:border-border-dark my-8"></div>
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
              <div className="border-t border-border-light dark:border-border-dark my-8"></div>
              <section id="change-password">
                <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
                  Cambiar Contraseña
                </h2>
                <form className="p-4 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <label
                      className="text-sm font-medium text-text-light dark:text-text-dark"
                      for="current-password"
                    >
                      Contraseña Actual
                    </label>
                    <input
                      className="md:col-span-2 w-full rounded-lg border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary"
                      id="current-password"
                      type="password"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <label
                      className="text-sm font-medium text-text-light dark:text-text-dark"
                      for="new-password"
                    >
                      Nueva Contraseña
                    </label>
                    <input
                      className="md:col-span-2 w-full rounded-lg border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary"
                      id="new-password"
                      type="password"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
                    <label
                      className="text-sm font-medium text-text-light dark:text-text-dark"
                      for="confirm-password"
                    >
                      Confirmar Nueva Contraseña
                    </label>
                    <input
                      className="md:col-span-2 w-full rounded-lg border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary"
                      id="confirm-password"
                      type="password"
                    />
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
                      Actualizar Contraseña
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
