import { useEffect, useState } from "react";
import { API_URL } from "../../../shared/commons/constants";
import { useApi } from "../../auth/hooks/useApi";

export const useAdoptions = () => {
  const [adoptions, setAdoptions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const api = useApi();

  const fetchAdoptions = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await api(`${API_URL}/adoptions`, { method: "GET" });
      if (!res.ok) {
        throw new Error("Error al obtener los animales");
      }
      const { data } = await res.json();
      setAdoptions(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdoptions();
  }, []);

  return { adoptions, loading, error };
};
