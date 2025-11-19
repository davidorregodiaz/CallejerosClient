export function AnimalDetails() {
    return (
        <div className="mt-8 px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="flex flex-col gap-4">
                    <div className="aspect-square w-full bg-cover bg-center rounded-xl"
                        style={{
                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFFNt7NPTn2AE5SiqbIUYBrglTMTQA1EoFrTqfG6KP-n5WsPJMsuWztQtsl0yaFQZKL_NAVBuzd8igLWQdJoeN9egRJhDaRxddwx62dQ4QbTLs5uX53wbvTjJsFvDXuOENPW6ZiCBPYE3Rz3z-THfhSNgV6O3RPx6mHDMaNu6Bur_FLpU5cS49jYt880fImhDfFd9nTbF2CvhVD7JnBX6ngk4v2PZ38uH4qeNBi2uCwEV0JQNpFKaeRaXeJ5kocYUuM82wVGzg50Q")'
                            }}>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="aspect-square w-full bg-cover bg-center rounded-lg"
                            style={{
                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFFNt7NPTn2AE5SiqbIUYBrglTMTQA1EoFrTqfG6KP-n5WsPJMsuWztQtsl0yaFQZKL_NAVBuzd8igLWQdJoeN9egRJhDaRxddwx62dQ4QbTLs5uX53wbvTjJsFvDXuOENPW6ZiCBPYE3Rz3z-THfhSNgV6O3RPx6mHDMaNu6Bur_FLpU5cS49jYt880fImhDfFd9nTbF2CvhVD7JnBX6ngk4v2PZ38uH4qeNBi2uCwEV0JQNpFKaeRaXeJ5kocYUuM82wVGzg50Q")'
                            }}>
                        </div>
                        <div className="aspect-square w-full bg-cover bg-center rounded-lg"
                            style={{
                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFFNt7NPTn2AE5SiqbIUYBrglTMTQA1EoFrTqfG6KP-n5WsPJMsuWztQtsl0yaFQZKL_NAVBuzd8igLWQdJoeN9egRJhDaRxddwx62dQ4QbTLs5uX53wbvTjJsFvDXuOENPW6ZiCBPYE3Rz3z-THfhSNgV6O3RPx6mHDMaNu6Bur_FLpU5cS49jYt880fImhDfFd9nTbF2CvhVD7JnBX6ngk4v2PZ38uH4qeNBi2uCwEV0JQNpFKaeRaXeJ5kocYUuM82wVGzg50Q")'
                            }}>
                        </div>
                        <div className="aspect-square w-full bg-cover bg-center rounded-lg"
                            style={{
                                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBFFNt7NPTn2AE5SiqbIUYBrglTMTQA1EoFrTqfG6KP-n5WsPJMsuWztQtsl0yaFQZKL_NAVBuzd8igLWQdJoeN9egRJhDaRxddwx62dQ4QbTLs5uX53wbvTjJsFvDXuOENPW6ZiCBPYE3Rz3z-THfhSNgV6O3RPx6mHDMaNu6Bur_FLpU5cS49jYt880fImhDfFd9nTbF2CvhVD7JnBX6ngk4v2PZ38uH4qeNBi2uCwEV0JQNpFKaeRaXeJ5kocYUuM82wVGzg50Q")'
                            }}>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h1 className="text-4xl font-bold leading-tight tracking-tight">Max</h1>
                    <p className="text-accent text-lg font-medium mt-1">Perro, Macho, 2 años</p>
                    <div className="mt-6 border-t border-primary/20 pt-6">
                        <h2 className="text-xl font-bold mb-3">Sobre Max</h2>
                        <p className="text-base leading-relaxed">Max es un perro increíblemente leal y cariñoso que fue encontrado
                            vagando por las calles. A pesar de su difícil comienzo, su espíritu es inquebrantable y su cola
                            siempre está en movimiento. Le encanta jugar a buscar, dar largos paseos por el parque y acurrucarse
                            a tu lado en el sofá. Es inteligente, aprende rápido y está deseando encontrar una familia que le dé
                            el amor y la estabilidad que tanto merece.</p>
                    </div>
                    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4">
                        <div>
                            <h3 className="font-bold text-sm text-text-light/70 dark:text-text-dark/70">Raza</h3>
                            <p>Mestizo (Labrador Retriever Mix)</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm text-text-light/70 dark:text-text-dark/70">Tamaño</h3>
                            <p>Mediano (25 kg)</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm text-text-light/70 dark:text-text-dark/70">Personalidad</h3>
                            <p>Juguetón, leal, cariñoso</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-sm text-text-light/70 dark:text-text-dark/70">Compatible con</h3>
                            <p>Niños, otros perros</p>
                        </div>
                    </div>
                    <button
                        className="w-full mt-8 flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em]">
                        <span className="material-symbols-outlined mr-2">favorite</span>
                        <span className="truncate">¡Adóptame!</span>
                    </button>
                </div>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div>
                    <h2 className="text-2xl font-bold border-b border-primary/20 pb-2 mb-4">Historial Médico</h2>
                    <ul className="space-y-2 list-disc list-inside text-base">
                        <li><span className="font-semibold">Vacunas:</span> Al día (Rabia, Parvovirus, Moquillo).</li>
                        <li><span className="font-semibold">Desparasitación:</span> Realizada interna y externamente.</li>
                        <li><span className="font-semibold">Esterilización:</span> Sí, castrado.</li>
                        <li><span className="font-semibold">Chip:</span> Sí, tiene microchip de identificación.</li>
                        <li><span className="font-semibold">Estado de salud:</span> Excelente. Sin condiciones preexistentes
                            conocidas.</li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-2xl font-bold border-b border-primary/20 pb-2 mb-4">Requisitos de Adopción</h2>
                    <ul className="space-y-2 list-disc list-inside text-base">
                        <li>Hogar con espacio suficiente, preferiblemente con patio cercado.</li>
                        <li>Familia activa dispuesta a darle ejercicio diario.</li>
                        <li>Completar formulario de solicitud y entrevista.</li>
                        <li>Permitir una visita de seguimiento al hogar.</li>
                        <li>Compromiso de amor y cuidados para toda su vida.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}