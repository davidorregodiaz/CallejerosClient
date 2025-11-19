

export function Adoptions() {



    return (
        <main className="py-10 px-4">
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                <div
                    className="flex flex-col bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="w-full bg-center bg-no-repeat aspect-square bg-cover"
                        data-alt="A beautiful white and grey cat named Luna with striking blue eyes."
                        style={{
                            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFFNt7NPTn2AE5SiqbIUYBrglTMTQA1EoFrTqfG6KP-n5WsPJMsuWztQtsl0yaFQZKL_NAVBuzd8igLWQdJoeN9egRJhDaRxddwx62dQ4QbTLs5uX53wbvTjJsFvDXuOENPW6ZiCBPYE3Rz3z-THfhSNgV6O3RPx6mHDMaNu6Bur_FLpU5cS49jYt880fImhDfFd9nTbF2CvhVD7JnBX6ngk4v2PZ38uH4qeNBi2uCwEV0JQNpFKaeRaXeJ5kocYUuM82wVGzg50Q")'
                        }}>
                    </div>
                    <div className="p-4 flex flex-col grow">
                        <h3 className="text-xl font-bold">Luna</h3>
                        <p className="text-sm text-text-light/70 dark:text-text-dark/70 mt-1 mb-3 grow">Una gata tranquila y
                            cariñosa, perfecta para una tarde de mimos.</p>
                        <a className="w-full text-center mt-auto flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90"
                            href="#">
                            <span className="truncate">Ver Perfil</span>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )

}