import { useEffect, useState } from "react";
import { API_URL } from "../../../shared/commons/constants";

export const useFetchAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchAnimals = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/animals`, { method: "GET" });
      if (!res.ok) {
        throw new Error("Error al obtener los animales");
      }
      const { data } = await res.json();
      setAnimals(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnimals();
  },[]);

  return { animals, loading, error };
};
