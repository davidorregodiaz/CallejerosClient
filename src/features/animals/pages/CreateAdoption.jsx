import { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateAnimal } from "../hooks/useCreateAnimal";

export function CreateAdoption() {
  const { createAnimal, loading, error } = useCreateAnimal();

  const [form, setForm] = useState({
    name: "",
    age: "",
    description: "",
    species: "",
    breed: "",
    size: "",
    gender: "",
    compatibility: [], // array of strings
    personality: [], // array of strings
    vaccine: "", // string (e.g. "Al día", "Parcial", "Sin")
    isDewormed: false, // boolean
    isSterilized: false, // boolean
    requirements: [], // array of strings
    healthState: "",
  });

  const [principalImage, setPrincipalImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "radio") {
      setForm((prev) => ({ ...prev, [name]: value }));
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toggleArray = (field, value) => {
    setForm((prev) => {
      const arr = prev[field] || [];
      const exists = arr.includes(value);
      return {
        ...prev,
        [field]: exists ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  const handleBoolean = (name, checked) => {
    setForm((prev) => ({ ...prev, [name]: checked }));
  };

  const addRequirement = () => {
    setForm((prev) => ({ ...prev, requirements: [...prev.requirements, ""] }));
  };

  const updateRequirement = (index, value) => {
    setForm((prev) => {
      const arr = [...prev.requirements];
      arr[index] = value;
      return { ...prev, requirements: arr };
    });
  };

  const removeRequirement = (index) => {
    setForm((prev) => {
      const arr = prev.requirements.filter((_, i) => i !== index);
      return { ...prev, requirements: arr };
    });
  };

  const handlePrincipalFile = (e) => {
    const file = e.target.files?.[0];
    if (file) setPrincipalImage(file);
  };

  const handleAdditionalFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length) setAdditionalImages((prev) => [...prev, ...files]);
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("Name", form.name);
    data.append("Age", Number(form.age || 0));
    data.append("Breed", form.breed);
    data.append("Species", form.species);
    data.append("Description", form.description);
    data.append("Sex", form.gender);
    data.append("Size", form.size);
    // append arrays as JSON so backend can parse easily
    data.append("Vaccine", form.vaccine);
    data.append("IsDewormed", String(form.isDewormed));
    data.append("IsSterilized", String(form.isSterilized));
    data.append("HealthState", form.healthState);

    form.compatibility.forEach((item) => {
      data.append("Compatibility", item);
    });

    form.personality.forEach((item) => {
      data.append("Personality", item);
    });

    form.requirements.forEach((item) => {
      data.append("Requirements", item);
    });

    if (principalImage) {
      data.append("PrincipalImage", principalImage);
    }

    for (const img of additionalImages) {
      data.append("AdditionalImages", img);
    }

    await createAnimal(data);

    if (loading) console.log("Is loading the createAnimal Post");
    if (error) console.error("Algo ocurrio mal: ", error);
  };

  const tagClass = (selected) =>
    `cursor-pointer rounded-full px-3 py-1.5 text-sm border ${
      selected
        ? "bg-primary/30 border-primary"
        : "border-border-light bg-background-light dark:bg-background-dark text-text-light"
    } transition-colors`;

  return (
    <div className="flex flex-1 justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="text-4xl font-black tracking-[-0.033em] text-text-light dark:text-text-dark">
            Crear un nuevo perfil para adopción
          </p>
        </div>

        {/* Formación Básica */}
        <div className="rounded-xl border  dark:border-border-light bg-white dark:bg-background-dark/50 p-6 shadow-sm">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-text-light dark:text-text-dark pb-6">
            Formación Básica
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">Nombre del animal</p>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="flex w-full rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light dark:bg-background-light h-12 p-3 text-base font-normal placeholder:text-gray-400"
                placeholder="Ej: Fido"
              />
            </label>

            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">Edad</p>
              <input
                name="age"
                value={form.age}
                onChange={handleChange}
                className="flex w-full rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light dark:bg-background-dark h-12 p-3 text-base font-normal placeholder:text-gray-400"
                placeholder="Ej: 2 años"
              />
            </label>

            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">Especie</p>
              <select
                name="species"
                value={form.species}
                onChange={handleChange}
                className="flex w-full rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light dark:bg-background-dark h-12 p-3 text-base font-normal"
              >
                <option value="">Seleccionar especie</option>
                <option value="Perro">Perro</option>
                <option value="Gato">Gato</option>
                <option value="Otro">Otro</option>
              </select>
            </label>

            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">Raza</p>
              <select
                name="breed"
                onChange={handleChange}
                value={form.breed}
                className="flex w-full rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light dark:bg-background-dark h-12 p-3 text-base font-normal"
              >
                <option value="">Seleccionar raza</option>
                <option value="Mestizo">Mestizo</option>
                <option value="Labrador">Labrador</option>
                <option value="Pastor Alemán">Pastor Alemán</option>
                <option value="Golden Retriever">Golden Retriever</option>
              </select>
            </label>
          </div>
        </div>

        {/* Características y Comportamiento */}
        <div className="rounded-xl border border-border-light dark:border-border-light bg-white dark:bg-background-dark/50 p-6 shadow-sm">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-text-light dark:text-text-dark pb-6">
            Características y Comportamiento
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-base font-medium pb-3">Tamaño</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative hover:bg-primary/30 transition-colors">
                  <input
                    className="absolute opacity-0"
                    id="size-small"
                    name="size"
                    type="radio"
                    value={"Small"}
                    checked={form.size === "Small"}
                    onChange={handleChange}
                  />
                  <label
                    className={`flex cursor-pointer items-center justify-center rounded-lg p-3 text-center text-sm border  ${
                      form.size === "Small"
                        ? "bg-primary/30 border-primary"
                        : "border-border-light"
                    }`}
                    htmlFor="size-small"
                  >
                    Pequeño
                  </label>
                </div>
                <div className="relative hover:bg-primary/30 transition-colors">
                  <input
                    className="absolute opacity-0"
                    id="size-medium"
                    name="size"
                    value={"Medium"}
                    type="radio"
                    checked={form.size === "Medium"}
                    onChange={handleChange}
                  />
                  <label
                    className={`flex cursor-pointer items-center justify-center rounded-lg p-3 text-center text-sm border  ${
                      form.size === "Medium"
                        ? "bg-primary/30 border-primary"
                        : "border-border-light"
                    }`}
                    htmlFor="size-medium"
                  >
                    Mediano
                  </label>
                </div>
                <div className="relative hover:bg-primary/30 transition-colors">
                  <input
                    className="absolute opacity-0"
                    id="size-large"
                    name="size"
                    value={"Big"}
                    type="radio"
                    checked={form.size === "Big"}
                    onChange={handleChange}
                  />
                  <label
                    className={`flex cursor-pointer items-center justify-center rounded-lg p-3 text-center text-sm border  ${
                      form.size === "Big"
                        ? "bg-primary/30 border-primary"
                        : "border-border-light"
                    }`}
                    htmlFor="size-large"
                  >
                    Grande
                  </label>
                </div>
              </div>

              <div className="mt-3">
                <p className="text-base font-medium pb-3">Género</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative hover:bg-primary/30 transition-colors">
                    <input
                      className="absolute opacity-0"
                      id="gender-male"
                      name="gender"
                      type="radio"
                      value="Male"
                      checked={form.gender === "Male"}
                      onChange={handleChange}
                    />
                    <label
                      className={`flex cursor-pointer items-center justify-center rounded-lg p-3 text-center text-sm border ${
                        form.gender === "Male"
                          ? "bg-primary/30 border-primary"
                          : "border-border-light"
                      }`}
                      htmlFor="gender-male"
                    >
                      Masculino
                    </label>
                  </div>
                  <div className="relative hover:bg-primary/30 transition-colors">
                    <input
                      className="absolute opacity-0"
                      id="gender-female"
                      name="gender"
                      type="radio"
                      value="Female"
                      checked={form.gender === "Female"}
                      onChange={handleChange}
                    />
                    <label
                      className={`flex cursor-pointer items-center justify-center rounded-lg p-3 text-center text-sm border ${
                        form.gender === "Female"
                          ? "bg-primary/30 border-primary"
                          : "border-border-light"
                      }`}
                      htmlFor="gender-female"
                    >
                      Femenino
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-base font-medium pb-3">
                Personalidad (selecciona varias)
              </p>
              <div className="flex flex-wrap gap-2">
                {["Playful", "Calm", "Shy", "Energetic", "Warm"].map((tag) => {
                  const selected = form.personality.includes(tag);
                  return (
                    <div key={tag} className="relative">
                      <input
                        className="absolute opacity-0"
                        id={`personality-${tag}`}
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleArray("personality", tag)}
                      />
                      <label
                        className={`${tagClass(selected)} hover:bg-primary/30`}
                        htmlFor={`personality-${tag}`}
                      >
                        {tag}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-base font-medium pb-3">Compatibilidad</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "Childs", label: "Bueno con niños" },
                  { id: "Dogs", label: "Bueno con otros perros" },
                  { id: "Cats", label: "Bueno con gatos" },
                ].map(({ id, label }) => {
                  const selected = form.compatibility.includes(id);
                  return (
                    <div key={id} className="relative ">
                      <input
                        className="absolute opacity-0 "
                        id={`comp-${id}`}
                        type="checkbox"
                        checked={selected}
                        onChange={() => toggleArray("compatibility", id)}
                      />
                      <label
                        className={`${tagClass(selected)} hover:bg-primary/30`}
                        htmlFor={`comp-${id}`}
                      >
                        {label}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <label class="flex flex-col">
                <p class="text-base font-medium pb-2">Descripcion</p>
                <textarea
                  name="description"
                  onChange={handleChange}
                  class="form-textarea w-full resize-y rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 text-base font-normal placeholder:text-gray-400"
                  placeholder="Describe el hogar ideal, nivel de experiencia del adoptante, etc."
                  rows="4"
                ></textarea>
              </label>
            </div>
          </div>
        </div>

        {/* Requisitos e Historial */}
        <div className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 p-6 shadow-sm">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-text-light dark:text-text-dark pb-6">
            Requisitos e Historial
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-base font-medium pb-2">
                Requisitos de adopción
              </p>
              <div className="space-y-3">
                {form.requirements.map((req, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      className="flex w-full rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light dark:bg-background-dark h-12 p-3 text-base font-normal placeholder:text-gray-400"
                      placeholder="Ej: Casa con patio cercado"
                      value={req}
                      onChange={(e) => updateRequirement(idx, e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => removeRequirement(idx)}
                      className="p-2 text-gray-500 cursor-pointer hover:text-red-500 transition-colors"
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={addRequirement}
                  className="flex items-center cursor-pointer gap-2 mt-4 text-sm font-medium text-primary hover:opacity-80"
                >
                  <span className="material-symbols-outlined text-base">
                    add_circle
                  </span>
                  <span>Añadir requisito</span>
                </button>
              </div>
            </div>

            <div>
              <p className="text-base font-medium pb-3">Estado de salud</p>
              <div className="flex flex-col gap-4 mt-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      className="absolute opacity-0"
                      id="dewormed"
                      type="checkbox"
                      checked={form.isDewormed}
                      onChange={(e) =>
                        handleBoolean("isDewormed", e.target.checked)
                      }
                    />
                    <label
                      className={`cursor-pointer rounded-full px-3 py-1.5 text-sm border hover:bg-primary/30 ${
                        form.isDewormed
                          ? "bg-primary/30 border-primary"
                          : "border-border-light bg-background-light"
                      }`}
                      htmlFor="dewormed"
                    >
                      Desparasitado
                    </label>
                  </div>

                  <div className="relative">
                    <input
                      className="absolute opacity-0"
                      id="sterilized"
                      type="checkbox"
                      checked={form.isSterilized}
                      onChange={(e) =>
                        handleBoolean("isSterilized", e.target.checked)
                      }
                    />
                    <label
                      className={`cursor-pointer rounded-full px-3 py-1.5 text-sm border hover:bg-primary/30 ${
                        form.isSterilized
                          ? "bg-primary/30 border-primary"
                          : "border-border-light bg-background-light"
                      }`}
                      htmlFor="sterilized"
                    >
                      Esterilizado
                    </label>
                  </div>
                </div>

                <label className="flex flex-col">
                  <p className="text-base font-medium pb-2">
                    Descripción de las vacunas
                  </p>
                  <select
                    name="vaccine"
                    value={form.vaccine}
                    onChange={handleChange}
                    className="flex w-full rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light dark:bg-background-dark h-12 p-3 text-base font-normal"
                  >
                    <option value="">Seleccionar estado de vacunación</option>
                    <option value="Al día">Al día</option>
                    <option value="Parcial">Parcial</option>
                    <option value="Sin">Sin</option>
                  </select>
                </label>

                <textarea
                  name="healthState"
                  value={form.healthState}
                  onChange={handleChange}
                  className="w-full resize-y rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light bg-background-light dark:bg-background-dark p-3 text-base font-normal placeholder:text-gray-400"
                  placeholder="Información sobre condiciones médicas conocidas, tratamientos, etc."
                  rows="3"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Galería de Fotos */}
        <div className="rounded-xl border border-border-light dark:border-border-light bg-white dark:bg-background-dark/50 p-6 shadow-sm">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-text-light dark:text-text-dark pb-6">
            Galería de Fotos
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div>
              <p className="text-base font-medium pb-3">Foto principal</p>
              <div className="flex relative h-64 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark transition-colors hover:border-primary/50 hover:bg-primary-light/50 dark:hover:bg-primary/10">
                <div className="text-center">
                  <span
                    className="material-symbols-outlined text-4xl text-gray-400"
                    data-icon="upload_file"
                  >
                    upload_file
                  </span>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    Arrastra una foto o haz clic para subir
                  </p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    PNG, JPG, WEBP
                  </p>
                </div>
                <input
                  id="principal-file"
                  type="file"
                  className="opacity-0 absolute inset-0 cursor-pointer"
                  onChange={handlePrincipalFile}
                />
              </div>
            </div>

            <div>
              <p className="text-base font-medium pb-3">Imágenes adicionales</p>
              <div className="grid grid-cols-3 gap-3">
                <div className="flex relative aspect-square w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark transition-colors hover:border-primary/50 hover:bg-primary-light/50 dark:hover:bg-primary/10">
                  <span
                    className="material-symbols-outlined text-3xl text-gray-400"
                    data-icon="add_photo_alternate"
                  >
                    add_photo_alternate
                  </span>
                  <input
                    type="file"
                    multiple
                    className="opacity-0 absolute inset-0 cursor-pointer"
                    onChange={handleAdditionalFiles}
                  />
                </div>
                {additionalImages.map((file, i) => {
                  const url = URL.createObjectURL(file);
                  return (
                    <div key={i} className="relative">
                      <img
                        src={url}
                        alt={`add-${i}`}
                        className="w-24 h-24 object-cover rounded-md"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-end gap-4 pt-4 sm:flex-row">
          <Link
            to="/adoptions"
            className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-gray-200 text-text-light dark:text-text-dark text-base font-bold shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
          >
            <span className="truncate">Cancelar</span>
          </Link>

          <button
            className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-white text-base font-bold shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
            type="button"
          >
            <span className="truncate">Guardar como Borrador</span>
          </button>

          <button
            onClick={handleSubmit}
            className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
            type="button"
          >
            <span className="truncate">Publicar para Adopción</span>
          </button>
        </div>
      </div>
    </div>
  );
}
