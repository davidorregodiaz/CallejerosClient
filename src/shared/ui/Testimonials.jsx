


export default function Testimonials() {
  return (
    <section className="py-16 px-4">
      <div className="flex flex-col items-center mb-10">
        <h2 className="text-[22px] font-bold leading-tight tracking-[-0.015em] text-center mb-2">Finales felices</h2>
        <p className="text-sm text-center opacity-70">Historias reales de familias que encontraron su media naranja.</p>
      </div>
      <div className="relative group">
        <div className="flex items-center gap-6 overflow-hidden">
          <div className="w-full shrink-0 flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-background-dark/30 p-6 md:p-10 rounded-3xl border border-primary/10">
            <div className="w-full md:w-1/2 aspect-square rounded-2xl overflow-hidden shadow-lg">
              <img alt="Familia feliz con su perro adoptado" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyQmHAxHflGQH98KB_03SrMMRWmIh6hcQ1bFrR9IZUb8XYjP34ruifWflOrwsluMUuVUCVkAjj-kTclcZj7Bz2F278qcgkrhqhd5bvbvDu44gAUyXYqkhVEpkZcyyaUOcD-ZugJTJ_5eZAKRJumFrkkpI86PdwyxLO9ByQLgx3xNZQFnK52KEswvtZ_BxQp7Vi16_-tY2hZYoU02G720Drm-eXQWPeg00Tgjbzx75olj56_4a3QrNUEG0Dl7swUJtsrwnh0-7K_74" />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-4 opacity-50">format_quote</span>
              <p className="text-lg italic leading-relaxed mb-6">
                "Adoptar a Toby fue la mejor decisión de nuestras vidas. Al principio estábamos nerviosos, pero el equipo de AdoptaAmor nos guió en todo momento. Ahora Toby es el corazón de nuestro hogar y no podemos imaginar un día sin sus lengüetazos de buenos días."
              </p>
              <div>
                <p className="font-bold text-primary">Familia García &amp; Toby</p>
                <p className="text-sm opacity-60">Adoptado hace 6 meses</p>
              </div>
            </div>
          </div>
        </div>
        <button className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white dark:bg-background-dark border border-primary/20 text-primary p-3 rounded-full shadow-lg hover:scale-110 transition-transform hidden lg:flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_back_ios_new</span>
        </button>
        <button className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white dark:bg-background-dark border border-primary/20 text-primary p-3 rounded-full shadow-lg hover:scale-110 transition-transform hidden lg:flex items-center justify-center">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-3 h-3 rounded-full bg-primary"></div>
          <div className="w-3 h-3 rounded-full bg-primary/20 hover:bg-primary/40 cursor-pointer"></div>
          <div className="w-3 h-3 rounded-full bg-primary/20 hover:bg-primary/40 cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
}
