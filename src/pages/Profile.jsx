import { Outlet } from "react-router-dom";
import { useAuth } from "../features/auth/hooks/useAuth";
import { useNavigate, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="font-display bg-white dark:bg-background-dark text-text-light dark:text-text-dark">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <div className="flex h-full min-h-screen">
          <aside className="w-64 shrink-0 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark">
            <div className="flex h-full flex-col justify-between p-4">
              <div className="flex flex-col gap-4">
                <div className="flex gap-3 items-center p-2">
                  <div
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10"
                    data-alt={`${user?.username}`}
                    style={{
                      backgroundImage: `url(${user?.imageUrl})`,
                    }}
                  ></div>
                  <div className="flex flex-col">
                    <h1 className="text-base font-medium leading-normal text-text-light dark:text-text-dark">
                      {user?.username}
                    </h1>
                    <p className="text-sm font-normal leading-normal text-subtle-light dark:text-subtle-dark">
                      {user?.email}
                    </p>
                  </div>
                </div>
                <nav className="flex flex-col gap-2 mt-4">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20"
                        : "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                    }
                    to="/user/general"
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
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20"
                        : "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                    }
                    to="/user/adoptions"
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
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20"
                        : "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                    }
                    to="/user/requests"
                  >
                    <span
                      className="material-symbols-outlined text-text-light dark:text-text-dark"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      assignment
                    </span>
                    <p className="text-sm font-medium leading-normal text-text-light dark:text-text-dark">
                      Solicitudes
                    </p>
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20"
                        : "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                    }
                    to="/user/password"
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
                  </NavLink>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/20"
                        : "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                    }
                    to="/user/edit"
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
                  </NavLink>
                </nav>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  to="/"
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <span
                    className="material-symbols-outlined text-text-light dark:text-text-dark"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    arrow_back
                  </span>

                  <p
                    className="text-sm font-medium leading-normal text-text-light dark:text-text-dark"
                    style={{ cursor: "pointer" }}
                  >
                    Volver a inicio
                  </p>
                </Link>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <span
                    className="material-symbols-outlined text-text-light dark:text-text-dark"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    logout
                  </span>
                  <p
                    className="text-sm font-medium leading-normal text-text-light dark:text-text-dark"
                    style={{ cursor: "pointer" }}
                  >
                    Cerrar Sesión
                  </p>
                </button>
              </div>
            </div>
          </aside>
          <div className="flex-1 p-6 md:p-10 overflow-y-auto">
            <div className="max-w-4xl mx-auto">
              <main className="grow">
                <Outlet />
              </main>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
