import { useAuth } from "../../auth/hooks/useAuth";

export const General = () => {
  const { user } = useAuth();

  return (
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
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full shrink-0 h-32 w-32"
              data-alt="Avatar grande de Ana García"
              style={{
                backgroundImage: `url(${user?.imageUrl})`,
              }}
            ></div>
            <div className="flex flex-col justify-center">
              <p className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em]">
                {user?.username}
              </p>
              <p className="text-subtle-light dark:text-subtle-dark text-base font-normal leading-normal">
                {user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 p-4">
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-light bg-surface-light dark:bg-surface-dark">
          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
            Animales apadrinados
          </p>
          <p className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight">
            {user?.sponsoredAnimalsCount ?? 0}
          </p>
        </div>
        <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 border border-border-light dark:border-border-light bg-surface-light dark:bg-surface-dark">
          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
            {user?.joinedAt ? "Miembro desde" : "Fecha de registro"}
          </p>
          <p className="text-text-light dark:text-text-dark tracking-light text-2xl font-bold leading-tight">
            {user?.joinedAt
              ? new Date(user.joinedAt).toLocaleDateString()
              : "N/A"}
          </p>
        </div>
      </div>
    </section>
  );
};
