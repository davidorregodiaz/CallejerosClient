import { useState } from "react";
import { useApi } from "../../auth/hooks/useApi";

export const useCreateAnimal = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api = useApi();

  const createAnimal = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const res = await api("/animals", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) throw new Error("Error al crear el animal");
      const animal = await res.json();
      return animal;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };


  return { createAnimal, loading, error };
};
