import { useState } from "react";
import { AdoptionsSection } from "../components/AdoptionSection";

export function Adoptions() {
  const [filters, setFilters] = useState({
    species: "",
    breed: "",
    age: "",
    page: 1,
    pageSize: 10 
  });

  /**
   * Manejador optimizado usando la propiedad 'name'
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFilters(prev => ({
      ...prev,
      // Usamos el name del input directamente como llave del estado
      [name]: value === "Todos" || value === "Cualquiera" ? "" : value,
      page: 1 
    }));
  };

  return (
    <section className="py-10 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black mb-2 tracking-tight">Encuentra a tu amigo fiel</h1>
        <p className="text-base text-slate-600 max-w-2xl mx-auto">
          Explora nuestros perfiles y encuentra al compañero perfecto.
        </p>
      </div>

      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-8 sticky top-5 z-10 backdrop-blur-md bg-white/80">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Filtro Especie - El 'name' debe coincidir con el estado y el backend */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-700" htmlFor="tipo">Tipo</label>
            <select 
              className="w-full p-2 rounded-md border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-blue-500 outline-none" 
              name="species" 
              value={filters.species}
              id="tipo" 
              onChange={handleChange}
            >
              <option value="">Todos</option>
              <option value="Perro">Perro</option>
              <option value="Gato">Gato</option>
            </select>
          </div>

          {/* Filtro Raza */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-700" htmlFor="raza">Raza</label>
            <input
              className="w-full p-2 rounded-md border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              id="raza"
              name="breed"
              value={filters.breed}
              placeholder="Ej: Mestizo"
              type="text"
              onChange={handleChange}
            />
          </div>

          {/* Filtro Edad */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-700" htmlFor="age">Edad (años)</label>
            <input
              className="w-full p-2 rounded-md border border-slate-200 bg-slate-50 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              id="age"
              name="age"
              value={filters.age}
              placeholder="Ej: 2"
              type="number"
              min="0"
              onChange={handleChange}
            />
          </div>

          {/* Botón opcional para limpiar */}
          <div className="flex items-end">
            <button 
              onClick={() => setFilters({ species: "", breed: "", age: "", page: 1, pageSize: 10 })}
              className="text-xs text-blue-600 hover:text-blue-800 font-medium pb-2"
            >
              Limpiar filtros
            </button>
          </div>

        </div>
      </div>

      <AdoptionsSection filters={filters} />
    </section>
  );
}