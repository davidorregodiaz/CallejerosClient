import { Link } from "react-router-dom";
import { AdoptedTag, InAdoptionTag, InProcessTag } from "../../user/utils/animalStatusTags";

export const AdoptionRequestCard = ({ pet }) => {
  const isAdopted = pet.status === "Adopted";
  const isInAdoption = pet.status === "Adoption";
  const isInProcess = pet.status === "InProcess";
  console.log(pet);

  return (
    <div className="flex flex-col gap-4 border border-border-light dark:border-border-light rounded-lg p-4 bg-background-light dark:bg-background-dark">
      <div className="flex items-center gap-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-16"
          style={{
            backgroundImage: `url('${pet?.principalImageUrl}')`,
          }}
        ></div>
        <div>
          <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
            {pet.name}
          </h4>
          {isAdopted && (<AdoptedTag />)}
          {isInAdoption && (<InAdoptionTag />)}
          {isInProcess && (<InProcessTag />)}
        </div>
      </div>
      <p className="text-sm text-subtle-light dark:text-subtle-dark">
        {pet.description}
      </p>
      <div className="flex justify-end gap-2 mt-2">
        {pet.status === "Completed" ? (
          <>
            <button className="px-3 py-1.5 rounded-md text-sm font-semibold border border-border-light dark:border-border-light hover:bg-gray-100 dark:hover:bg-gray-700">
              Editar
            </button>
            <button className="px-3 py-1.5 rounded-md text-sm font-semibold bg-primary text-text-light hover:bg-opacity-80">
              Ver Interesados
            </button>
          </>
        ) : (
          <Link
            to={`/animals/${pet.id}`}
            className="px-3 py-1.5 rounded-md text-sm font-semibold border border-border-light dark:border-border-light hover:bg-gray-100 dark:hover:bg-gray-100"
          >
            Ver Perfil
          </Link>
        )}
      </div>
    </div>
  );
};
