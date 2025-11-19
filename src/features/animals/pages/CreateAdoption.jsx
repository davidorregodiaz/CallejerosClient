import { useState } from "react";
import { Link } from "react-router-dom";
import { useCreateAnimal } from "../hooks/useCreateAnimal";

export function CreateAdoption() {
  const { createAnimal, loading, error } = useCreateAnimal();

  const [form, setForm] = useState({
    name: "",
    ownerId: "5006F377-C8D8-40FA-93A2-4611903F45FF",
    age: "",
    description: "",
    species: "",
    breed: "",
  });

  const [principalImage, setPrincipalImage] = useState(null);
  const [additionalImages, setAdditionalImages] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const data = new FormData();
    data.append("OwnerId", form.ownerId);
    data.append("Name", form.name);
    data.append("Age", Number(form.age));
    data.append("Breed", form.breed);
    data.append("Species", form.species);
    data.append("Description", form.description);

    if (principalImage) {
      data.append("PrincipalImage", principalImage);
    }

    for (const img of additionalImages) {
      data.append("AdditionalImages", img);
    }

    const animal = createAnimal(data);

    console.log(animal);
    if(loading) console.log("Is loading the createAnimal Post");
    if(error) console.error("Algo ocurrio mal: ",error)
  };

  return (
    <div className="flex flex-1 justify-center p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl space-y-8">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <p className="text-4xl font-black tracking-[-0.033em] text-text-light dark:text-text-dark">
            Crear un nuevo perfil para adopción
          </p>
        </div>
        <div className="rounded-xl border  dark:border-border-dark bg-white dark:bg-background-dark/50 p-6 shadow-sm">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-text-light dark:text-text-dark pb-6">
            InhtmlFormación Básica
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">Nombre del animal</p>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="htmlForm-input flex w-full resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border bg-background-light dark:bg-background-dark h-12 p-3 text-base font-normal placeholder:text-gray-400"
                placeholder="Ej: Fido"
              />
            </label>
            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">Edad</p>
              <input
                name="age"
                value={form.age}
                onChange={handleChange}
                className="htmlForm-input flex w-full resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border bg-background-light dark:bg-background-dark h-12 p-3 text-base font-normal placeholder:text-gray-400"
                placeholder="Ej: 2 años"
              />
            </label>
            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">Especie</p>
              <select
                name="species"
                value={form.species}
                onChange={handleChange}
                className="htmlForm-select flex w-full resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border bg-background-light dark:bg-background-dark h-12 p-3 text-base font-normal"
              >
                <option>Seleccionar especie</option>
                <option>Perro</option>
                <option>Gato</option>
                <option>Otro</option>
              </select>
            </label>
            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">Raza</p>
              <select
                name="breed"
                onChange={handleChange}
                value={form.breed}
                className="htmlForm-select flex w-full resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border bg-background-light dark:bg-background-dark h-12 p-3 text-base font-normal"
              >
                <option>Seleccionar raza</option>
                <option>Mestizo</option>
                <option>Labrador</option>
                <option>Pastor Alemán</option>
                <option>Golden Retriever</option>
              </select>
            </label>
          </div>
        </div>
        <div className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 p-6 shadow-sm">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-text-light dark:text-text-dark pb-6">
            Características y Comportamiento
          </h2>
          <div className="space-y-6">
            <div>
              <p className="text-base font-medium pb-3">Tamaño</p>
              <div className="grid grid-cols-3 gap-4">
                <div className="relative">
                  <input
                    className="radio-input absolute opacity-0"
                    id="size-small"
                    name="size"
                    type="radio"
                  />
                  <label
                    className="radio-label flex cursor-pointer items-center justify-center rounded-lg border border-border-light dark:border-border-dark p-3 text-center text-sm"
                    htmlFor="size-small"
                  >
                    Pequeño
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="radio-input absolute opacity-0"
                    id="size-medium"
                    name="size"
                    type="radio"
                  />
                  <label
                    className="radio-label flex cursor-pointer items-center justify-center rounded-lg border border-border-light dark:border-border-dark p-3 text-center text-sm"
                    htmlFor="size-medium"
                  >
                    Mediano
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="radio-input absolute opacity-0"
                    id="size-large"
                    name="size"
                    type="radio"
                  />
                  <label
                    className="radio-label flex cursor-pointer items-center justify-center rounded-lg border border-border-light dark:border-border-dark p-3 text-center text-sm"
                    htmlFor="size-large"
                  >
                    Grande
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p className="text-base font-medium pb-3">
                Personalidad (selecciona varias)
              </p>
              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <input
                    className="tag-input absolute opacity-0"
                    id="tag-playful"
                    type="checkbox"
                  />
                  <label
                    className="tag-label cursor-pointer rounded-full border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-1.5 text-sm"
                    htmlFor="tag-playful"
                  >
                    Juguetón
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="tag-input absolute opacity-0"
                    id="tag-calm"
                    type="checkbox"
                  />
                  <label
                    className="tag-label cursor-pointer rounded-full border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-1.5 text-sm"
                    htmlFor="tag-calm"
                  >
                    Tranquilo
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="tag-input absolute opacity-0"
                    id="tag-shy"
                    type="checkbox"
                  />
                  <label
                    className="tag-label cursor-pointer rounded-full border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-1.5 text-sm"
                    htmlFor="tag-shy"
                  >
                    Tímido
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="tag-input absolute opacity-0"
                    id="tag-energetic"
                    type="checkbox"
                  />
                  <label
                    className="tag-label cursor-pointer rounded-full border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-1.5 text-sm"
                    htmlFor="tag-energetic"
                  >
                    Energético
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="tag-input absolute opacity-0"
                    id="tag-affectionate"
                    type="checkbox"
                  />
                  <label
                    className="tag-label cursor-pointer rounded-full border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-1.5 text-sm"
                    htmlFor="tag-affectionate"
                  >
                    Cariñoso
                  </label>
                </div>
              </div>
            </div>
            <div>
              <p className="text-base font-medium pb-3">Compatibilidad</p>
              <div className="flex flex-wrap gap-2">
                <div className="relative">
                  <input
                    className="tag-input absolute opacity-0"
                    id="comp-kids"
                    type="checkbox"
                  />
                  <label
                    className="tag-label cursor-pointer rounded-full border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-1.5 text-sm"
                    htmlFor="comp-kids"
                  >
                    Bueno con niños
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="tag-input absolute opacity-0"
                    id="comp-dogs"
                    type="checkbox"
                  />
                  <label
                    className="tag-label cursor-pointer rounded-full border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-1.5 text-sm"
                    htmlFor="comp-dogs"
                  >
                    Bueno con otros perros
                  </label>
                </div>
                <div className="relative">
                  <input
                    className="tag-input absolute opacity-0"
                    id="comp-cats"
                    type="checkbox"
                  />
                  <label
                    className="tag-label cursor-pointer rounded-full border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark px-3 py-1.5 text-sm"
                    htmlFor="comp-cats"
                  >
                    Bueno con gatos
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 p-6 shadow-sm">
          <h2 className="text-[22px] font-bold tracking-[-0.015em] text-text-light dark:text-text-dark pb-6">
            Requisitos e Historial
          </h2>
          <div className="space-y-6">
            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">
                Requisitos de adopción
              </p>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="htmlForm-textarea w-full resize-y rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 text-base font-normal placeholder:text-gray-400"
                placeholder="Describe el hogar ideal, nivel de experiencia del adoptante, etc."
                rows="4"
              ></textarea>
            </label>
            <label className="flex flex-col">
              <p className="text-base font-medium pb-2">Historial médico</p>
              <textarea
                className="htmlForm-textarea w-full resize-y rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 text-base font-normal placeholder:text-gray-400"
                placeholder="InhtmlFormación sobre vacunas, esterilización, condiciones médicas conocidas..."
                rows="4"
              ></textarea>
            </label>
          </div>
        </div>
        <div className="rounded-xl border border-border-light dark:border-border-dark bg-white dark:bg-background-dark/50 p-6 shadow-sm">
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
                  onChange={(e) => setPrincipalImage(e.target.files[0])}
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
                    onChange={(e) =>
                      setAdditionalImages([
                        ...additionalImages,
                        ...e.target.files,
                      ])
                    }
                  />
                </div>
                <div
                  className="aspect-square w-full rounded-lg bg-center bg-no-repeat bg-cover"
                  data-alt="additional photo of a pet"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFFNt7NPTn2AE5SiqbIUYBrglTMTQA1EoFrTqfG6KP-n5WsPJMsuWztQtsl0yaFQZKL_NAVBuzd8igLWQdJoeN9egRJhDaRxddwx62dQ4QbTLs5uX53wbvTjJsFvDXuOENPW6ZiCBPYE3Rz3z-THfhSNgV6O3RPx6mHDMaNu6Bur_FLpU5cS49jYt880fImhDfFd9nTbF2CvhVD7JnBX6ngk4v2PZ38uH4qeNBi2uCwEV0JQNpFKaeRaXeJ5kocYUuM82wVGzg50Q")',
                  }}
                ></div>
                <div
                  className="aspect-square w-full rounded-lg bg-center bg-no-repeat bg-cover"
                  data-alt="additional photo of a pet"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFFNt7NPTn2AE5SiqbIUYBrglTMTQA1EoFrTqfG6KP-n5WsPJMsuWztQtsl0yaFQZKL_NAVBuzd8igLWQdJoeN9egRJhDaRxddwx62dQ4QbTLs5uX53wbvTjJsFvDXuOENPW6ZiCBPYE3Rz3z-THfhSNgV6O3RPx6mHDMaNu6Bur_FLpU5cS49jYt880fImhDfFd9nTbF2CvhVD7JnBX6ngk4v2PZ38uH4qeNBi2uCwEV0JQNpFKaeRaXeJ5kocYUuM82wVGzg50Q")',
                  }}
                ></div>
                <div
                  className="aspect-square w-full rounded-lg bg-center bg-no-repeat bg-cover"
                  data-alt="additional photo of a pet"
                  style={{
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFFNt7NPTn2AE5SiqbIUYBrglTMTQA1EoFrTqfG6KP-n5WsPJMsuWztQtsl0yaFQZKL_NAVBuzd8igLWQdJoeN9egRJhDaRxddwx62dQ4QbTLs5uX53wbvTjJsFvDXuOENPW6ZiCBPYE3Rz3z-THfhSNgV6O3RPx6mHDMaNu6Bur_FLpU5cS49jYt880fImhDfFd9nTbF2CvhVD7JnBX6ngk4v2PZ38uH4qeNBi2uCwEV0JQNpFKaeRaXeJ5kocYUuM82wVGzg50Q")',
                  }}
                ></div>
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
          <button className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-accent text-white text-base font-bold shadow-sm transition-opacity hover:opacity-90 sm:w-auto">
            <span className="truncate">Guardar como Borrador</span>
          </button>
          <button
            onClick={handleSubmit}
            className="flex w-full min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold shadow-sm transition-opacity hover:opacity-90 sm:w-auto"
          >
            <span className="truncate">Publicar para Adopción</span>
          </button>
        </div>
      </div>
    </div>
  );
}
