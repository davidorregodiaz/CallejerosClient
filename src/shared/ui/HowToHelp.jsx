



export default function HowToHelp() {
  return (
    <section className="py-12 px-4 bg-primary/5 rounded-3xl mt-10">
      <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-center mb-10">¿Cómo ayudar?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center text-center p-8 bg-white  border border-primary/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-center size-20 bg-accent/20 rounded-full text-accent mb-6">
            <span className="material-symbols-outlined text-5xl">volunteer_activism</span>
          </div>
          <h3 className="text-xl font-extrabold mb-4">Da en adopción</h3>
          <p className="text-sm leading-relaxed mb-6 px-4">
            ¿Has rescatado a un animal o ya no puedes cuidar del tuyo? Regístrate como rescatista y encuéntrales un hogar responsable.
          </p>
          <button className="w-full max-w-[200px] cursor-pointer items-center justify-center rounded-xl h-12 bg-accent text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-accent/90 transition-colors">
            Registrarme
          </button>
        </div>
        <div className="flex flex-col items-center text-center p-8 bg-white  border border-primary/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center justify-center size-20 bg-primary/20 rounded-full text-primary mb-6">
            <span className="material-symbols-outlined text-5xl">favorite</span>
          </div>
          <h3 className="text-xl font-extrabold mb-4">Realiza una donación</h3>
          <p className="text-sm leading-relaxed mb-6 px-4">
            Tu apoyo económico nos permite rescatar más animales, cubrir gastos veterinarios y asegurar su bienestar mientras esperan.
          </p>
          <button className="w-full max-w-[200px] cursor-pointer items-center justify-center rounded-xl h-12 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
            Donar ahora
          </button>
        </div>
      </div>
    </section>
  )
}
