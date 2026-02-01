import { useState } from "react";
import { useApi } from "../../auth/hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";

export default function useChangePassword() {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const api = useApi();


  async function changePassword(form) {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await api(`${API_URL}/auth/password`, {
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        method: "PUT",
        body: JSON.stringify({
          newPassword: form.newPassword,
          currentPassword: form.currentPassword
        })
      });
      if (!response.ok) throw new Error("Something went wrong trying to update the password");
      setSuccess({
        title: "Contrasena actualizada",
        message: "Su contrasena ha sido actualizada satisfactoriamente"
      });
    } catch (error) {
      console.error(error);
      setError({
        message: "Ocurrio un error al intentar actualizar su contrasena"
      })
    } finally {
      setLoading(false);
    }
  }

  return { changePassword, success, error, loading };
}
