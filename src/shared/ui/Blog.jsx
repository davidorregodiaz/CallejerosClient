



export default function() {
  return (
    <>    <div className="flex flex-col gap-2 mb-10 px-4">
      <h1 className="text-3xl font-black leading-tight tracking-[-0.033em] md:text-4xl">Blog de Mascotas</h1>
      <p className="text-base opacity-70">Consejos, historias y todo lo que necesitas saber para cuidar a tu mejor amigo.</p>
    </div>
      <div className="flex flex-col lg:flex-row gap-10 px-4">
        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="flex flex-col gap-4 group">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                <img alt="Perro feliz siendo cepillado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFFNt7NPTn2AE5SiqbIUYBrglTMTQA1EoFrTqfG6KP-n5WsPJMsuWztQtsl0yaFQZKL_NAVBuzd8igLWQdJoeN9egRJhDaRxddwx62dQ4QbTLs5uX53wbvTjJsFvDXuOENPW6ZiCBPYE3Rz3z-THfhSNgV6O3RPx6mHDMaNu6Bur_FLpU5cS49jYt880fImhDfFd9nTbF2CvhVD7JnBX6ngk4v2PZ38uH4qeNBi2uCwEV0JQNpFKaeRaXeJ5kocYUuM82wVGzg50Q" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">Cuidado</span>
                  <span className="text-xs opacity-50">15 Oct, 2023</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">Guía definitiva para el baño de tu perro en casa</h3>
                <p className="text-sm opacity-70 line-clamp-3">Bañar a tu perro no tiene por qué ser una batalla campal. Te damos los mejores consejos para que sea una experiencia relajante para ambos.</p>
                <a className="text-sm font-bold text-primary flex items-center gap-1 mt-2" href="#">Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </article>
            <article className="flex flex-col gap-4 group">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                <img alt="Gato jugando con un juguete" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9xi75h3X8blRIlBn7YwWrDjZem_9lfRsSw0upkfaPDIWOOxqG6qyffMQyS3dVQIr-xnYr_AG5dRc-U11mw4HKm5OsoihKkOG_7J-RsG46UAezl-qj7XHZc77ZM5Vx7jG2RXOgtFQupamqKDp1_2TeZeBlcpS9RnOdXUXdGKfZgAJ-tXFJCTG04JDhzSO-OAXQKBoL1QYa9b7K-EKTHSmXFlZR5fUp6JpYoFRw198XuxJuHDs3uJvbmxI6nGdxr36-CpOHk6tixbw" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">Entrenamiento</span>
                  <span className="text-xs opacity-50">12 Oct, 2023</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">Cómo enseñar a tu gato a usar el rascador</h3>
                <p className="text-sm opacity-70 line-clamp-3">¿Tus muebles están sufriendo? Descubre técnicas sencillas de refuerzo positivo para que tu gato ame su nuevo rascador.</p>
                <a className="text-sm font-bold text-primary flex items-center gap-1 mt-2" href="#">Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </article>
            <article className="flex flex-col gap-4 group">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                <img alt="Familia con perro adoptado" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyQmHAxHflGQH98KB_03SrMMRWmIh6hcQ1bFrR9IZUb8XYjP34ruifWflOrwsluMUuVUCVkAjj-kTclcZj7Bz2F278qcgkrhqhd5bvbvDu44gAUyXYqkhVEpkZcyyaUOcD-ZugJTJ_5eZAKRJumFrkkpI86PdwyxLO9ByQLgx3xNZQFnK52KEswvtZ_BxQp7Vi16_-tY2hZYoU02G720Drm-eXQWPeg00Tgjbzx75olj56_4a3QrNUEG0Dl7swUJtsrwnh0-7K_74" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-purple-500 bg-purple-500/10 px-2 py-0.5 rounded">Historias</span>
                  <span className="text-xs opacity-50">08 Oct, 2023</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">La historia de Bruno: de la calle al sofá</h3>
                <p className="text-sm opacity-70 line-clamp-3">Un relato conmovedor sobre la resiliencia animal y cómo una familia cambió el destino de un perro que nadie quería adoptar.</p>
                <a className="text-sm font-bold text-primary flex items-center gap-1 mt-2" href="#">Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </article>
            <article className="flex flex-col gap-4 group">
              <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-sm">
                <img alt="Alimentos saludables para mascotas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCat5qahQULuZ1HIL3qKaVkcUuLIVL6DXrXRDOmiKvo5XpgJxWmpGNmLIWF-eP9yLELHItu31Qk06LDdrw7jZjsmEyULuLMUWG-G0v5A_G_5MHTSv4GMofpz9FIgOUecVDITn1cDZbPpC7pZ2QwYRGymMrr_SqTgyRDky0v-ppdQPRgHR_vEUxYWveFzy0z18Nj2BtUDPwkXOj4cZGSrZqa9A2wiGI0UBrdAP0pOQxbwe7eFZWIZsahV5GWsyUN9aA68siO0TosJ84" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-0.5 rounded">Nutrición</span>
                  <span className="text-xs opacity-50">05 Oct, 2023</span>
                </div>
                <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">Alimentos humanos que son peligrosos para mascotas</h3>
                <p className="text-sm opacity-70 line-clamp-3">No todo lo que comemos nosotros es apto para ellos. Revisa esta lista esencial de alimentos prohibidos para evitar sustos.</p>
                <a className="text-sm font-bold text-primary flex items-center gap-1 mt-2" href="#">Leer más <span className="material-symbols-outlined text-sm">arrow_forward</span></a>
              </div>
            </article>
          </div>
          <div className="flex justify-center items-center gap-4 mt-16 mb-10">
            <button className="size-10 rounded-full flex items-center justify-center border border-primary/20 hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 rounded-full flex items-center justify-center bg-primary text-white font-bold">1</button>
            <button className="size-10 rounded-full flex items-center justify-center border border-primary/20 hover:bg-primary/10 transition-colors font-bold">2</button>
            <button className="size-10 rounded-full flex items-center justify-center border border-primary/20 hover:bg-primary/10 transition-colors">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </main>
        <aside className="w-full lg:w-80 flex flex-col gap-10">
          <div className="p-6 bg-white dark:bg-background-dark/30 rounded-2xl border border-primary/10">
            <h4 className="font-bold mb-4">Buscar artículos</h4>
            <div className="relative">
              <input className="w-full bg-background-light dark:bg-background-dark/50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-primary" placeholder="¿Qué estás buscando?" type="text" />
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 opacity-50">search</span>
            </div>
          </div>
          <div className="p-6 bg-white dark:bg-background-dark/30 rounded-2xl border border-primary/10">
            <h4 className="font-bold mb-4">Categorías</h4>
            <ul className="flex flex-col gap-3">
              <li><a className="flex justify-between items-center text-sm hover:text-primary transition-colors" href="#">Cuidado de mascotas <span className="text-xs bg-primary/10 px-2 py-0.5 rounded-full">12</span></a></li>
              <li><a className="flex justify-between items-center text-sm hover:text-primary transition-colors" href="#">Historias de rescate <span className="text-xs bg-primary/10 px-2 py-0.5 rounded-full">08</span></a></li>
              <li><a className="flex justify-between items-center text-sm hover:text-primary transition-colors" href="#">Consejos de entrenamiento <span className="text-xs bg-primary/10 px-2 py-0.5 rounded-full">15</span></a></li>
              <li><a className="flex justify-between items-center text-sm hover:text-primary transition-colors" href="#">Nutrición y Salud <span className="text-xs bg-primary/10 px-2 py-0.5 rounded-full">06</span></a></li>
            </ul>
          </div>
          <div className="p-6 bg-white dark:bg-background-dark/30 rounded-2xl border border-primary/10">
            <h4 className="font-bold mb-4">Artículos populares</h4>
            <div className="flex flex-col gap-5">
              <a className="flex gap-3 group" href="#">
                <div className="size-16 rounded-lg overflow-hidden shrink-0">
                  <img alt="Perro corriendo" className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBV_G_RP4-vEEr7b6UDL6L_3bvesSSF3BoSb3I8DAaY43vspwBCCiuvprqzDnTsszyfRGX5qn5hWwrKn4NMd8eyJWb8KGMFr7baDn3JhxARPHWRAvgNk1Rh0WVq2W-OkLKWiJIdcChZhyCz5Qe8nN08aTwhqwCVv2can3wMqYuDqTargAHWEI8aYu52r59i09QfsJa_YXcJ5IQ8agtMhQv1F_hHsfPNpdfMPFAkoFGPzCyfgFQqw7dqWhTP4fKTxWYQU-00RVH4gng" />
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-xs font-bold leading-tight group-hover:text-primary transition-colors">Los beneficios de adoptar un perro adulto</h5>
                  <span className="text-[10px] opacity-50">20 Sept, 2023</span>
                </div>
              </a>
              <a className="flex gap-3 group" href="#">
                <div className="size-16 rounded-lg overflow-hidden shrink-0">
                  <img alt="Perra tranquila" className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVO2EjjBy82UMCj_JlHY7ndlLKEzBIgaheq6oGYU8-PHCiScyAVEY3Xs_SPo_GcXe_6Npjgh8unsn8pyT_o_9d_LCANMZpZa-UJZPwWfYsplAcuwMwZMVM1ZxPBvP2lqlV2IzJdWmlICaGvruTomm_1mfDKCGHagP2awz3DjmF_YgPztJCHYTs388mixzeZ8Xj5INOHIagSjBSDHKjC7jy7PUkA56aL31V3kLcHI13lDJCHwQ3u_QyhyuHMxV_z11AIHy4v5EN5Ww" />
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-xs font-bold leading-tight group-hover:text-primary transition-colors">Ansiedad por separación: cómo ayudarlo</h5>
                  <span className="text-[10px] opacity-50">15 Sept, 2023</span>
                </div>
              </a>
              <a className="flex gap-3 group" href="#">
                <div className="size-16 rounded-lg overflow-hidden shrink-0">
                  <img alt="Gato azul" className="w-full h-full object-cover group-hover:scale-110 transition-transform" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9xi75h3X8blRIlBn7YwWrDjZem_9lfRsSw0upkfaPDIWOOxqG6qyffMQyS3dVQIr-xnYr_AG5dRc-U11mw4HKm5OsoihKkOG_7J-RsG46UAezl-qj7XHZc77ZM5Vx7jG2RXOgtFQupamqKDp1_2TeZeBlcpS9RnOdXUXdGKfZgAJ-tXFJCTG04JDhzSO-OAXQKBoL1QYa9b7K-EKTHSmXFlZR5fUp6JpYoFRw198XuxJuHDs3uJvbmxI6nGdxr36-CpOHk6tixbw" />
                </div>
                <div className="flex flex-col gap-1">
                  <h5 className="text-xs font-bold leading-tight group-hover:text-primary transition-colors">Primeros días de un gato en casa</h5>
                  <span className="text-[10px] opacity-50">02 Sept, 2023</span>
                </div>
              </a>
            </div>
          </div>
          <div className="p-8 bg-primary rounded-3xl text-white">
            <span className="material-symbols-outlined text-4xl mb-4">mail</span>
            <h4 className="text-xl font-bold mb-2">Suscríbete al boletín</h4>
            <p className="text-xs mb-6 opacity-90">Recibe los mejores consejos e historias directamente en tu email cada semana.</p>
            <div className="flex flex-col gap-3">
              <input className="w-full bg-white/20 border-none rounded-xl px-4 py-3 text-sm placeholder:text-white/60 focus:ring-2 focus:ring-white" placeholder="Tu email" type="email" />
              <button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-opacity-90 transition-colors text-sm">Unirme</button>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
