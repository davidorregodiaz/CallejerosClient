


export default function HowToHelpPage() {
  return (
    <div className="py-10">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] mb-4">Cada pequeña acción cuenta</h1>
        <p className="text-lg max-w-2xl mx-auto opacity-80">
          Existen muchas formas de ser parte del cambio. Ya sea con tu tiempo, tu espacio o tu apoyo material, estás ayudando a que un animal rescatado tenga una segunda oportunidad.
        </p>
      </section>
      <div className="grid grid-cols-1 gap-12">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-white dark:bg-background-dark/30 p-8 rounded-3xl border border-primary/10 shadow-sm">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="flex items-center justify-center size-32 bg-primary/20 rounded-full text-primary">
              <span className="material-symbols-outlined text-6xl">volunteer_activism</span>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Ser Voluntario</h2>
            <p className="mb-4 leading-relaxed">Únete a nuestro equipo y ayúdanos directamente en el refugio. Tu energía es fundamental para el bienestar de nuestros peludos.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-accent text-sm">check_circle</span> Paseos y socialización</li>
              <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-accent text-sm">check_circle</span> Limpieza de caniles</li>
              <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-accent text-sm">check_circle</span> Ayuda en eventos</li>
              <li className="flex items-center gap-2 text-sm"><span className="material-symbols-outlined text-accent text-sm">check_circle</span> Fotografía y redes</li>
            </ul>
            <button className="px-8 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors">Quiero ser voluntario</button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-8 items-center bg-white dark:bg-background-dark/30 p-8 rounded-3xl border border-primary/10 shadow-sm">
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="flex items-center justify-center size-32 bg-accent/20 rounded-full text-accent">
              <span className="material-symbols-outlined text-6xl">home</span>
            </div>
          </div>
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Ser Hogar Temporal</h2>
            <p className="mb-4 leading-relaxed">Muchos animales necesitan un ambiente tranquilo para recuperarse de cirugías o para socializar antes de ser adoptados permanentemente. El refugio provee el alimento y gastos médicos.</p>
            <div className="bg-accent/5 p-4 rounded-xl border border-accent/10 mb-6">
              <p className="text-sm italic">"Ser tránsito es salvar una vida mientras esperas a que llegue su familia definitiva. Es una experiencia única y gratificante."</p>
            </div>
            <button className="px-8 py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-colors">Ofrecer mi hogar</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-background-dark/30 p-8 rounded-3xl border border-primary/10 shadow-sm flex flex-col">
            <div className="flex items-center justify-center size-20 bg-primary/20 rounded-full text-primary mb-6 mx-auto">
              <span className="material-symbols-outlined text-4xl">inventory_2</span>
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Donaciones Materiales</h2>
            <p className="text-sm mb-6 text-center leading-relaxed">Recibimos suministros que ayudan a mantener el refugio funcionando y a los animales cómodos.</p>
            <div className="space-y-3 mb-8 flex-grow">
              <div className="flex items-center gap-3 p-3 bg-background-light dark:bg-white/5 rounded-lg">
                <span className="material-symbols-outlined text-primary">restaurant</span>
                <span className="text-sm">Alimento (perros/gatos)</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background-light dark:bg-white/5 rounded-lg">
                <span className="material-symbols-outlined text-primary">bed</span>
                <span className="text-sm">Mantas, toallas y camas</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-background-light dark:bg-white/5 rounded-lg">
                <span className="material-symbols-outlined text-primary">medication</span>
                <span className="text-sm">Insumos médicos básicos</span>
              </div>
            </div>
            <button className="w-full py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-colors text-sm">Ver puntos de entrega</button>
          </div>
          <div className="bg-white dark:bg-background-dark/30 p-8 rounded-3xl border border-primary/10 shadow-sm flex flex-col">
            <div className="flex items-center justify-center size-20 bg-accent/20 rounded-full text-accent mb-6 mx-auto">
              <span className="material-symbols-outlined text-4xl">payments</span>
            </div>
            <h2 className="text-xl font-bold mb-4 text-center">Donaciones Económicas</h2>
            <p className="text-sm mb-6 text-center leading-relaxed">Tu aporte monetario se destina 100% a rescates de emergencia y tratamientos veterinarios complejos.</p>
            <div className="grid grid-cols-2 gap-3 mb-8 flex-grow">
              <button className="py-2 bg-background-light dark:bg-white/5 rounded-lg font-bold text-sm hover:border-primary border border-transparent">$1.000</button>
              <button className="py-2 bg-background-light dark:bg-white/5 rounded-lg font-bold text-sm hover:border-primary border border-transparent">$2.000</button>
              <button className="py-2 bg-background-light dark:bg-white/5 rounded-lg font-bold text-sm hover:border-primary border border-transparent">$5.000</button>
              <button className="py-2 bg-background-light dark:bg-white/5 rounded-lg font-bold text-sm hover:border-primary border border-transparent">Otro</button>
            </div>
            <button className="w-full py-3 bg-accent text-white font-bold rounded-xl hover:bg-accent/90 transition-colors text-sm">Donar vía Webpay</button>
          </div>
        </div>
      </div>
    </div>
  );
}
