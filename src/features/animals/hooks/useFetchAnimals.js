import { useState, useEffect } from 'react';
import { useApi } from "../../auth/hooks/useApi"; // Asumiendo que usas tu hook de API
import { API_URL } from "../../../shared/commons/constants";

export function useFetchAnimals(filters) {
  const [data, setData] = useState({ animals: [], totalCount: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const api = useApi();

  useEffect(() => {
    const fetchAnimals = async () => {
      setLoading(true);
      try {

        const params = new URLSearchParams();
        if (filters.species) params.append("Species", filters.species);
        if (filters.breed) params.append("Breed", filters.breed);
        if (filters.age) params.append("Age", filters.age);
        if (filters.page) params.append("Page", filters.page);
        if (filters.pageSize) params.append("PageSize", filters.pageSize);

        const response = await api(`${API_URL}/animals?${params.toString()}`);
        
        if (!response.ok) throw new Error("Error al obtener animales");
        
        const result = await response.json();

        setData({
          animals: result.data || [],
          totalCount: result.totalCount || 0
        });
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, [filters]); // Se dispara cada vez que filters cambie

  return { ...data, loading, error };
}
