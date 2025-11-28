import { Link } from "react-router-dom";

export const SuccessRegistration = () => {
  return (
    <div className="fixed bg-white flex items-center justify-center p-4 z-50 animate-slide-in-right">
      <div className="relative flex flex-col items-center gap-4 bg-white rounded-xl shadow-lg w-full max-w-md p-6 sm:p-8 text-center">
        <button
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20 text-primary">
          <span className="material-symbols-outlined text-5xl">pets</span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="text-gray-700  tracking-tight text-2xl sm:text-3xl font-bold leading-tight">
            ¡Registro Exitoso!
          </h1>
          <p className="text-gray-600 dark:text-gray-600 text-base font-normal leading-normal">
            Tu cuenta ha sido creada. ¡Gracias por unirte a nuestra comunidad y
            ayudar a los animales a encontrar un hogar!
          </p>
        </div>
        <div className="w-full pt-4">
          <Link
            to={"/"}
            className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors"
          >
            <span className="truncate">Comenzar</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
