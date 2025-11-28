import { useNavigate } from "react-router-dom";

export function PetCard({ pet }) {
  const navigate = useNavigate();

  console.log(pet);

  return (
    <div className="flex flex-col bg-white  rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div
        className="w-full bg-center bg-no-repeat aspect-square bg-cover"
        data-alt="A friendly brown dog named Max looking at the camera."
        style={{
          backgroundImage: `url("${pet.principalImageUrl}")`,
        }}
      ></div>
      <div className="p-4 flex flex-col grow">
        <h3 className="text-xl font-bold">{pet.name}</h3>
        <p className="text-sm text-text-light/70 dark:text-text-dark/70 mt-1 mb-3 grow">
          {pet.description}
        </p>
        <button
          className="w-full text-center mt-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90"
          onClick={() => navigate(`/animals/${pet.id}`)}
        >
          <span className="truncate">Ver Perfil</span>
        </button>
      </div>
    </div>
  );
}
