import { useState } from "react";

const SuccessToast = ({ data }) => {
  const [closeAnimation, setCloseAnimation] = useState(false);

  return (
    <div
      className={`fixed z-1000 top-4 right-4 max-w-sm animate-fade-in-left ${closeAnimation ? "animate-fade-out-left" : ""
        }`}
    >
      <div className="flex items-start gap-4 rounded-lg bg-white p-4 shadow-lg ring-1 ring-black ring-opacity-5 font-display">
        <div className="shrink-0">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20">
            <span className="material-symbols-outlined text-primary ">
              check_circle
            </span>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-base font-bold text-slate-900 ">
            {data.title}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            {data.message}
          </p>
        </div>
        <div className="shrink-0">
          <button
            onClick={() => setCloseAnimation(true)}
            className="inline-flex rounded-md bg-white text-slate-400  hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 "
          >
            <span className="sr-only">Cerrar</span>
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessToast;
