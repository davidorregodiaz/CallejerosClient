import { useState, useEffect } from "react";
import { useAuth } from "../../auth/hooks/useAuth";
import { API_URL } from "../../../shared/commons/constants";

export const EditProfile = () => {
  const { user, token, refreshToken } = useAuth();
  const [username, setUsername] = useState(user?.username ?? "");
  const [email, setEmail] = useState(user?.email ?? "");
  const [avatarFile, setAvatarFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    setUsername(user?.username ?? "");
    setEmail(user?.email ?? "");
  }, [user]);

  useEffect(() => {
    if (!avatarFile) {
      setPreview(null);
      return;
    }

    const url = URL.createObjectURL(avatarFile);
    setPreview(url);

    return () => URL.revokeObjectURL(url);
  }, [avatarFile]);

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const form = new FormData();
      form.append("username", username);
      form.append("email", email);
      if (avatarFile) form.append("avatar", avatarFile);

      const res = await fetch(`${API_URL}/users`, {
        method: "PUT",
        credentials: "include",
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
        },
        body: form,
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Error actualizando perfil");
      }

      // refresh user data from server
      if (typeof refreshToken === "function") await refreshToken();
      alert("Perfil actualizado correctamente");
    } catch (err) {
      console.error(err);
      alert(`No se pudo actualizar: ${err.message}`);
    }
  };

  return (
    <section id="update-profile">
      <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
        Actualizar Perfil
      </h2>
      <form onSubmit={handleSubmit} className="p-4 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-3 rounded-lg">
          <label
            className="text-sm font-medium text-text-light dark:text-text-dark"
            htmlFor="username"
          >
            Nombre de Usuario
          </label>
          <input
            className="p-1 md:col-span-2 w-full rounded-lg border border-border-light bg-white dark:border-border-light focus:ring-primary focus:border-primary focus:outline-0"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center p-3 rounded-lg">
          <label
            className="text-sm font-medium text-text-light dark:text-text-dark"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="p-1 md:col-span-2 w-full rounded-lg border border-border-light dark:border-border-light bg-white dark:bg-white focus:ring-primary focus:border-primary focus:outline-0"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start p-3 rounded-lg">
          <label
            className="text-sm font-medium text-text-light dark:text-text-dark mt-2"
            htmlFor="avatar"
          >
            Avatar
          </label>
          <div className="md:col-span-2 flex items-center gap-4">
            {preview ? (
              <img
                src={preview}
                alt="Avatar preview"
                className="rounded-full size-16 object-cover"
              />
            ) : (
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-16"
                data-alt="Avatar actual"
                style={{ backgroundImage: `url(${user?.imageUrl})` }}
              />
            )}
            <input
              onChange={handleFile}
              className="block w-full text-sm text-subtle-light dark:text-subtle-dark file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/20 file:text-text-light dark:file:text-text-dark hover:file:bg-primary/30 cursor-pointer"
              id="avatar"
              type="file"
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold border border-border-light dark:border-border-light hover:bg-gray-100 dark:hover:bg-gray-100 cursor-pointer"
            type="button"
          >
            Cancelar
          </button>
          <button
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-text-light hover:bg-opacity-80 cursor-pointer"
            type="submit"
          >
            Guardar Cambios
          </button>
        </div>
      </form>
    </section>
  );
};
