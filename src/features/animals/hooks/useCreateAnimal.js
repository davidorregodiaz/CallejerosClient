import { useState } from "react";
import { useApi } from "../../auth/hooks/useApi";
import { API_URL } from "../../../shared/commons/constants";


export const useCreateAnimal = () => {
  const api = useApi();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const createAnimal = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await api(`${API_URL}/animals`, {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Error al crear animal");
      const animal = await res.json();
      setSuccess(true);
      return animal;
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  };

  return { createAnimal, loading, error, success };
};

