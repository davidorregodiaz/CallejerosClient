import { useEffect, useState } from "react";
import { useApi } from "../../auth/hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";
import { useAuth } from "../../auth/hooks/useAuth";
import { Link } from "react-router-dom";
import { AdoptionRequestCard } from "../../animals/components/AdoptionRequestCard.jsx";

export const UserAdoptions = () => {
  const [adoptions, setAdoptions] = useState(null);
  const { userIsInRole } = useAuth();

  const api = useApi();

  useEffect(() => {
    const fetchAdoptions = async () => {
      await api(`${API_URL}/user/animals`)
        .then((res) => {
          if (!res.ok) throw new Error("Algo salio mal");
          return res.json();
        })
        .then((response) => setAdoptions(response.data))
        .catch((ex) => console.log("Excepcion del lado del cliente: ", ex));
    };
    fetchAdoptions();
  }, []);

  console.log(adoptions);
  return (
    <div className="font-display bg-white dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="flex h-full min-h-screen">
          <div className="flex-1 p-6 md:p-10 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <section id="adopciones">
                <div className="flex flex-wrap justify-between items-center gap-4 p-4">
                  <h2 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
                    Mis Adopciones
                  </h2>
                  {userIsInRole("Owner") ? (
                    <Link
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base font-semibold bg-primary text-text-light hover:bg-opacity-80 transition-colors"
                      to="/user/adoptions/create"
                    >
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontVariationSettings: "'FILL' 1, 'wght' 500",
                        }}
                      >
                        add_circle
                      </span>
                      Crear Adopción
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mt-8">
                  <div className="border border-border-light dark:border-border-light rounded-xl bg-surface-light dark:bg-surface-dark overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-text-light dark:text-text-dark">
                        Tus Animales en Adopción
                      </h3>
                      <p className="text-subtle-light dark:text-subtle-dark mt-1">
                        Aquí puedes ver y gestionar los perfiles de los animales
                        que has puesto en adopción.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
                      {adoptions?.map((d) => (
                        <AdoptionRequestCard key={d.id} pet={d} />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
