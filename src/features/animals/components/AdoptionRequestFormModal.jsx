import { useEffect, useState } from "react";
import { useApi } from "../../auth/hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";

export const AdoptionRequestFormModal = ({ onClose, animalName, animalId }) => {
  const api = useApi();
  const [comments, setComments] = useState("");

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api(`${API_URL}/adoptions`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comments, animalId }),
      });

      // si tu hook api devuelve Response o ya parsea, ajusta según sea necesario
      if (res && res.ok === false) {
        const text = await res.text();
        throw new Error(text || "Error al enviar la solicitud");
      }

      alert(
        "Interés enviado correctamente espere a que el dueno se contacte con usted"
      );
      onClose?.();
    } catch (err) {
      console.error(err);
      alert(`No se pudo enviar: ${err.message || err}`);
    }
  };

  return (
    <div className="font-display fixed inset-0 z-999 pointer-events-none">
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/40 dark:bg-black/60 p-4 pointer-events-auto"
        onClick={onClose}
      >
        <div
          className="relative flex flex-col w-full max-w-lg bg-background-light dark:bg-background-dark rounded-xl shadow-2xl pointer-events-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-200/50 text-gray-600 hover:bg-gray-200  transition-colors"
            aria-label="Cerrar"
            type="button"
          >
            <span
              className="material-symbols-outlined text-xl"
              data-icon="close"
            >
              close
            </span>
          </button>
          <div className="flex flex-col items-center p-8 sm:p-10">
            <div className="w-full max-w-sm text-center">
              <div className="pb-6">
                <h2 className="text-[#0d1b12] tracking-light text-2xl sm:text-3xl font-bold leading-tight">
                  {`Muestra tu interés por ${animalName}`}
                </h2>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 w-full"
              >
                <label className="flex flex-col text-left">
                  <p className="text-[#0d1b12]  text-base font-medium leading-normal pb-2">
                    {`¿Por qué eres el hogar perfecto para ${animalName}?`}
                  </p>
                  <textarea
                    name="comments"
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d1b12]  focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#cfe7d7]  bg-background-light   min-h-36 placeholder:text-[#4c9a66]  p-[15px] text-base font-normal leading-normal transition-shadow"
                    placeholder="Cuéntanos un poco sobre ti, tu hogar y por qué quieres adoptarlo."
                  />
                </label>

                <div className="pt-2">
                  <button
                    className="flex min-w-[84px] w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-[#0d1b12] text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/80 transition-colors"
                    type="submit"
                  >
                    <span className="truncate">Enviar Interés</span>
                  </button>
                </div>
              </form>
              <div className="pt-4">
                <p className="text-[#4c9a66]  text-sm font-normal leading-normal text-center">
                  Gracias por tu interés. El equipo del refugio revisará tu
                  mensaje y se pondrá en contacto contigo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
