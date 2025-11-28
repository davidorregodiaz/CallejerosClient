import { AdoptionsSection } from "../components/AdoptionSection"

export function Adoptions() {



    return (
        <section className="py-10 px-4">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] mb-2">Encuentra a tu amigo fiel</h1>
                <p className="text-base text-text-light/80 dark:text-text-dark/80 max-w-2xl mx-auto">Explora nuestros perfiles
                    y encuentra al compañero perfecto que está esperando por ti. Usa los filtros para afinar tu búsqueda.
                </p>
            </div>
            <div
                className="bg-background-light dark:bg-background-dark/50 p-4 rounded-xl border border-primary/20 mb-8 sticky top-5 z-10 backdrop-blur-sm">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-medium text-text-light/70 dark:text-text-dark/70" htmlFor="tipo">Tipo</label>
                        <select
                            className="w-full p-2 rounded-md border-primary/30 bg-primary/10 text-sm focus:border-primary focus:ring-primary"
                            id="tipo">
                            <option>Todos</option>
                            <option>Perro</option>
                            <option>Gato</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-medium text-text-light/70 dark:text-text-dark/70" htmlFor="edad">Edad</label>
                        <select
                            className="w-full p-2 rounded-md border-primary/30 bg-primary/10 text-sm focus:border-primary focus:ring-primary"
                            id="edad">
                            <option>Cualquiera</option>
                            <option>Cachorro</option>
                            <option>Joven</option>
                            <option>Adulto</option>
                            <option>Senior</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-medium text-text-light/70 dark:text-text-dark/70"
                            htmlFor="tamaño">Tamaño</label>
                        <select
                            className="w-full p-2 rounded-md border-primary/30 bg-primary/10 text-sm focus:border-primary focus:ring-primary"
                            id="tamaño">
                            <option>Cualquiera</option>
                            <option>Pequeño</option>
                            <option>Mediano</option>
                            <option>Grande</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-xs font-medium text-text-light/70 dark:text-text-dark/70" htmlFor="raza">Raza</label>
                        <input
                            className="w-full p-2 rounded-md border-primary/30 bg-primary/10 text-sm focus:border-primary focus:ring-primary placeholder:text-text-light/50 dark:placeholder:text-text-dark/50"
                            id="raza" placeholder="Ej: Mestizo" type="text" />
                    </div>
                    <div className="flex flex-col gap-1 col-span-2 md:col-span-1 lg:col-span-1">
                        <label className="text-xs font-medium text-text-light/70 dark:text-text-dark/70"
                            htmlFor="ubicacion">Ubicación</label>
                        <input
                            className="w-full p-2 rounded-md border-primary/30 bg-primary/10 text-sm focus:border-primary focus:ring-primary placeholder:text-text-light/50 dark:placeholder:text-text-dark/50"
                            id="ubicacion" placeholder="Ej: Ciudad" type="text" />
                    </div>
                </div>
            </div>
            <AdoptionsSection />
        </section>
    )

}