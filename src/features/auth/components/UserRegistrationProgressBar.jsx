import { useRegister } from "../hooks/useRegister";

export const UserRegistrationProgressBar = () => {
  // El valor de progressBar será 1, 2, 3, o 4 (Completado)
  const { progressBar } = useRegister();

  // Función para determinar si un paso está completado (o es el actual)
  const isStepActive = (step) => progressBar >= step;

  // Función para determinar si el paso es el actual
  const isStepCurrent = (step) => progressBar === step;

  // Función para determinar si la línea está completada
  const isLineCompleted = (step) => progressBar > step;

  const baseCircleClasses =
    "flex size-8 items-center justify-center rounded-full font-bold transition-all duration-300 ease-in-out";
  const baseLineClasses =
    "flex-auto border-t-2 transition-all duration-300 ease-in-out";

  return (
    <div className="w-full max-w-2xl pt-8 pb-4">
      <div className="flex items-center">
        {/* --- PASO 1: Datos --- */}
        <div className="flex flex-col items-center relative">
          <div
            className={`${baseCircleClasses} 
              ${
                isStepActive(1)
                  ? "bg-primary text-white"
                  : "bg-transparent border-2 border-stone-300 text-stone-400"
              }
              ${isStepCurrent(1) ? "ring-4 ring-primary/30" : ""}
            `}
          >
            1
          </div>
          <span
            className={`mt-2 text-xs font-semibold ${
              isStepActive(1) ? "text-primary" : "text-stone-400"
            }`}
          >
            Datos
          </span>
        </div>

        {/* --- LÍNEA 1-2 --- */}
        <div
          className={`${baseLineClasses} ${
            isLineCompleted(1)
              ? "border-primary"
              : "border-stone-200 dark:border-stone-700"
          }`}
        ></div>

        {/* --- PASO 2: Perfil --- */}
        <div className="flex flex-col items-center relative">
          <div
            className={`${baseCircleClasses} 
              ${
                isStepActive(2)
                  ? "bg-primary text-white"
                  : "bg-transparent border-2 border-stone-300 text-stone-400"
              }
              ${isStepCurrent(2) ? "ring-4 ring-primary/30" : ""}
            `}
          >
            2
          </div>
          <span
            className={`mt-2 text-xs font-semibold ${
              isStepActive(2) ? "text-primary" : "text-stone-400"
            }`}
          >
            Perfil
          </span>
        </div>

        {/* --- LÍNEA 2-3 --- */}
        <div
          className={`${baseLineClasses} ${
            isLineCompleted(2)
              ? "border-primary"
              : "border-stone-200 dark:border-stone-700"
          }`}
        ></div>

        {/* --- PASO 3: Rol --- */}
        <div className="flex flex-col items-center relative">
          <div
            className={`${baseCircleClasses} 
              ${
                isStepActive(3)
                  ? "bg-primary text-white"
                  : "bg-transparent border-2 border-stone-300 text-stone-400"
              }
              ${isStepCurrent(3) ? "ring-4 ring-primary/30" : ""}
            `}
          >
            3
          </div>
          <span
            className={`mt-2 text-xs font-semibold ${
              isStepActive(3) ? "text-primary" : "text-stone-400"
            }`}
          >
            Rol
          </span>
        </div>

        {/* --- LÍNEA 3-Completado (Usaremos 4 para el paso final) --- */}
        <div
          className={`${baseLineClasses} ${
            isLineCompleted(3)
              ? "border-primary"
              : "border-stone-200 dark:border-stone-700"
          }`}
        ></div>

        {/* --- PASO 4: Completado --- */}
        <div className="flex flex-col items-center relative">
          <div
            className={`${baseCircleClasses} 
              ${
                isStepActive(4)
                  ? "bg-accent text-white"
                  : "bg-transparent border-2 border-stone-300 text-stone-400"
              }
              ${isStepCurrent(4) ? "ring-4 ring-accent/30" : ""}
            `}
          >
            <span className="material-symbols-outlined text-xl">done</span>
          </div>
          <span
            className={`mt-2 text-xs ${
              isStepActive(4) ? "font-semibold text-accent" : "text-stone-400"
            }`}
          >
            Completado
          </span>
        </div>
      </div>
    </div>
  );
};
