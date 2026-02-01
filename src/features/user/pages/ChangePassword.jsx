import { useState } from "react";
import { useApi } from "../../auth/hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";
import ErrorToast from "../../../shared/ui/ErrorToast";
import SuccessToast from "../../../shared/ui/SuccessToast";
import Spinner from "../../../shared/ui/Spinner";
import useChangePassword from "../hooks/useChangePassword";

export const ChangePassword = () => {
  const [form, setForm] = useState({
    newPassword: "",
    currentPassword: "",
    confirmationPassword: ""
  });
  const { changePassword, loading, error, success } = useChangePassword();

  async function handleSubmit(evt) {
    evt.preventDefault();
    await changePassword(form);
  }

  function handleChange(evt) {
    setForm(prevForm => ({
      ...prevForm,
      [evt.target.name]: evt.target.value
    }));
  }

  return (
    <>
      {loading && (<Spinner />)}
      {success && (<SuccessToast data={{ title: success.title, message: success.message }} />)}
      {error && (<ErrorToast errorMessage={error.message} />)}
      <section id="change-password">
        <h2 className="text-text-light dark:text-text-dark text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Cambiar Contraseña
        </h2>
        <form onSubmit={handleSubmit} className="p-4 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center rounded-lg">
            <label
              className="text-sm font-medium text-text-light dark:text-text-dark"
              htmlFor="current-password"
            >
              Contraseña Actual
            </label>
            <input
              name="currentPassword"
              value={form.currentPassword}
              onChange={handleChange}
              className="md:col-span-2 w-full rounded-lg border border-border-dark dark:border-border-light bg-surface-light dark:bg-surface-dark focus:ring-primary focus:outline-0 focus:border-primary bg-white/5 dark:bg-white p-1"
              id="current-password"
              type="password"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center rounded-lg">
            <label
              className="text-sm font-medium text-text-light dark:text-text-dark"
              htmlFor="new-password"
            >
              Nueva Contraseña
            </label>
            <input
              name="newPassword"
              value={form.newPassword}
              onChange={handleChange}
              className="md:col-span-2 w-full rounded-lg border dark:border-border-light bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary focus:outline-0 bg-white/5 dark:bg-white p-1"
              id="new-password"
              type="password"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center rounded-lg">
            <label
              className="text-sm font-medium text-text-light dark:text-text-dark"
              htmlFor="confirm-password"
            >
              Confirmar Nueva Contraseña
            </label>
            <input
              name="confirmationPassword"
              value={form.confirmationPassword}
              onChange={handleChange}
              className="md:col-span-2 w-full rounded-lg border dark:border-border-light bg-surface-light dark:bg-surface-dark focus:ring-primary focus:border-primary focus:outline-0 bg-white/5 dark:bg-white p-1"
              id="confirm-password"
              type="password"
            />
          </div>
          <div className="flex justify-end gap-3 mt-6">
            <button
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-text-light hover:bg-opacity-80 cursor-pointer"
              type="submit"
            >
              Actualizar Contraseña
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
