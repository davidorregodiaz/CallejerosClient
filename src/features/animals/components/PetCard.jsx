import { useNavigate } from "react-router-dom"


export function PetCard({pet}) {
    const navigate = useNavigate();

    console.log(pet);

    return (
        <div
            className="flex flex-col bg-white  rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="w-full bg-center bg-no-repeat aspect-square bg-cover"
                data-alt="A friendly brown dog named Max looking at the camera."
                style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFFNt7NPTn2AE5SiqbIUYBrglTMTQA1EoFrTqfG6KP-n5WsPJMsuWztQtsl0yaFQZKL_NAVBuzd8igLWQdJoeN9egRJhDaRxddwx62dQ4QbTLs5uX53wbvTjJsFvDXuOENPW6ZiCBPYE3Rz3z-THfhSNgV6O3RPx6mHDMaNu6Bur_FLpU5cS49jYt880fImhDfFd9nTbF2CvhVD7JnBX6ngk4v2PZ38uH4qeNBi2uCwEV0JQNpFKaeRaXeJ5kocYUuM82wVGzg50Q")'
                }}>
            </div>
            <div className="p-4 flex flex-col grow">
                <h3 className="text-xl font-bold">Max</h3>
                <p className="text-sm text-text-light/70 dark:text-text-dark/70 mt-1 mb-3 grow">Un perro leal y
                    jugueton que adora los paseos por el parque.</p>
                <button className="w-full text-center mt-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90"
                    onClick={() => navigate(`/animals/${pet.id}`)}>
                    <span className="truncate">Ver Perfil</span>
                </button>
            </div>
        </div>
    )
}
