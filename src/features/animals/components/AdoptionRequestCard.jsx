


export const AdoptionRequestCard = (adoption) => {
  return (
    <div className="flex flex-col gap-4 border border-border-light dark:border-border-dark rounded-lg p-4 bg-background-light dark:bg-background-dark">
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-16"
          style={{
            backgroundImage: `url('${adoption?.imageUrl}')`,
          }}
        ></div>
        <div>
          <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
            {adoption.Name}
          </h4>
          <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary/20 text-subtle-light dark:text-subtle-dark">
            {adoption?.status}
          </span>
        </div>
      </div>
      <p className="text-sm text-subtle-light dark:text-subtle-dark">
        {adoption.description}
      </p>
      <div className="flex justify-end gap-2 mt-2">
        {adoption.status === "adopted" ? (
          <>
            <button className="px-3 py-1.5 rounded-md text-sm font-semibold border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-700">
              Editar
            </button>
            <button className="px-3 py-1.5 rounded-md text-sm font-semibold bg-primary text-text-light hover:bg-opacity-80">
              Ver Interesados
            </button>
          </>
        ) : (
          <button className="px-3 py-1.5 rounded-md text-sm font-semibold border border-border-light dark:border-border-dark hover:bg-gray-100 dark:hover:bg-gray-700">
            Ver Perfil
          </button>
        )}
      </div>
    </div>
  );
};
