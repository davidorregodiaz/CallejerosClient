


export default function About() {
  return (
    <div className="flex flex-col gap-16 py-10">
      <section className="flex flex-col gap-8 md:flex-row md:items-center">
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-primary">Nuestra Historia</h1>
          <p className="text-lg leading-relaxed opacity-90">
            AdoptaAmor nació en 2018 cuando un grupo de voluntarios decidió que ningún animal callejero debería pasar frío o hambre. Lo que comenzó como un pequeño refugio temporal en un garaje, se ha convertido en una red nacional de rescatistas y hogares de acogida.
          </p>
          <p className="text-base leading-relaxed opacity-80">
            Creemos que cada mascota tiene una historia que merece un final feliz. Nuestra labor va más allá del rescate; educamos a la comunidad y promovemos la tenencia responsable para erradicar el abandono desde su raíz.
          </p>
        </div>
        <div className="flex-1">

          <div
            style={{
              backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAyQmHAxHflGQH98KB_03SrMMRWmIh6hcQ1bFrR9IZUb8XYjP34ruifWflOrwsluMUuVUCVkAjj-kTclcZj7Bz2F278qcgkrhqhd5bvbvDu44gAUyXYqkhVEpkZcyyaUOcD-ZugJTJ_5eZAKRJumFrkkpI86PdwyxLO9ByQLgx3xNZQFnK52KEswvtZ_BxQp7Vi16_-tY2hZYoU02G720Drm-eXQWPeg00Tgjbzx75olj56_4a3QrNUEG0Dl7swUJtsrwnh0-7K_74")',
            }}
          />

        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-8 bg-white dark:bg-background-dark/50 rounded-3xl border border-primary/10 flex flex-col items-center text-center gap-4">
          <div className="size-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">rocket_launch</span>
          </div>
          <h3 className="text-xl font-bold">Misión</h3>
          <p className="text-sm opacity-80">Transformar la vida de animales en situación de calle mediante el rescate, rehabilitación y la búsqueda de hogares permanentes y amorosos.</p>
        </div>
        <div className="p-8 bg-white dark:bg-background-dark/50 rounded-3xl border border-accent/10 flex flex-col items-center text-center gap-4">
          <div className="size-14 bg-accent/20 rounded-2xl flex items-center justify-center text-accent">
            <span className="material-symbols-outlined text-3xl">visibility</span>
          </div>
          <h3 className="text-xl font-bold">Visión</h3>
          <p className="text-sm opacity-80">Ser la organización referente en bienestar animal, logrando un país donde el abandono sea inexistente y la adopción sea la primera opción.</p>
        </div>
        <div className="p-8 bg-white dark:bg-background-dark/50 rounded-3xl border border-primary/10 flex flex-col items-center text-center gap-4">
          <div className="size-14 bg-primary/20 rounded-2xl flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-3xl">favorite</span>
          </div>
          <h3 className="text-xl font-bold">Valores</h3>
          <p className="text-sm opacity-80">Compasión, transparencia, integridad y compromiso inquebrantable con la vida y la dignidad de cada ser sintiente.</p>
        </div>
      </section>
      <section className="bg-primary/5 rounded-3xl p-10 md:p-16">
        <h2 className="text-3xl font-bold text-center mb-12">Nuestro Impacto</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl font-black text-primary">+500</span>
            <span className="text-sm font-medium uppercase tracking-wider opacity-60">Adoptados</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl font-black text-accent">+120</span>
            <span className="text-sm font-medium uppercase tracking-wider opacity-60">Voluntarios</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl font-black text-primary">850</span>
            <span className="text-sm font-medium uppercase tracking-wider opacity-60">Rescates</span>
          </div>
          <div className="flex flex-col items-center text-center gap-2">
            <span className="text-4xl font-black text-accent">15</span>
            <span className="text-sm font-medium uppercase tracking-wider opacity-60">Ciudades</span>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Nuestro Equipo</h2>
          <p className="text-center max-w-xl opacity-70">Personas apasionadas que dedican su vida a darles una voz a los que no la tienen.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center group">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20 group-hover:border-primary transition-colors">
              <img alt="Directora" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8IRUrGFtAZ-S4mjWtaNNj3K-H1GgKi15x62qLM-TyDCv4H3KhVxz9Kk4t8b33wHdOcqlc4OFlmkaj4P3IE1iKHsGQwU38wFpGOyQHGaJRaCb7xB4T898tWcQ6vHoOaBP-Yd9LLjLmB_udUaFYVL5m07MZaHV3KA69fJ7eN6ox_XAejBN430VuidTBy_H7SJg7ff12QySFG_JLGA6J8mzo1vrIRF5NNLuU3hTD8xlFd7aDkvqG5PCBONA2X27D2mPT9QjE_amWH8E" />
            </div>
            <h4 className="font-bold text-lg">Elena Martínez</h4>
            <p className="text-sm text-accent font-medium">Fundadora &amp; Directora</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20 group-hover:border-primary transition-colors">
              <img alt="Veterinario" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB81gr7Dz6LPwSfoBMvyMZbFKuUvtGEkKAoYQIxiHDcjpKQmAUsXmhHhP2iZSAZb3xyXX7IEJ_PdsPwEkMPN2NYdDqVP4nDTp_4aIN7kZiuzoLLpk6YCTTdCvTZprBD9xCytrGgVVlKslx_NA5ZMAJ79EYabdyi7OQip29P_O6GlJOWSy6B_FtByPpxdGqFjeeidPJ1bzgkqWNOzCYZwLi8CsDN4EyS91AMlaC87NOlZHH8s6jLTOu5vhKpNUtW7Om6Jv0PnFv4L6w" />
            </div>
            <h4 className="font-bold text-lg">Dr. Carlos Ruiz</h4>
            <p className="text-sm text-accent font-medium">Jefe de Veterinaria</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20 group-hover:border-primary transition-colors">
              <img alt="Voluntaria" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgvC0vIoHWm15golQ10svZuECB3UzNp1J-N-REbllqcGFM5ZLN51ef8mKRXWDw7ZuJ_Pa2EpsLXAiIGbhte_N4C53roDeVtS1cqBmKgvfNU1PLXE78Go4YiE5Kk0uzkuBljfYrAjHpFkGb5mG_9hWucDGAq0kTwan59o6DsDy8vwoQrYxP-wWNY2Agq0X3QbdNXNT2paKogrPs95BDbe7UJBmH3z-7Y4JEyIs-6kcXyORG7yhV4u5nsVUVK8AD20atkRfWYeCjxs8" />
            </div>
            <h4 className="font-bold text-lg">Sofía Vega</h4>
            <p className="text-sm text-accent font-medium">Coord. de Adopciones</p>
          </div>
          <div className="flex flex-col items-center group">
            <div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-primary/20 group-hover:border-primary transition-colors">
              <img alt="Logistica" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTboqvlLwsLU6w9eH4q0QHSy3IGPTkF6t46FfbdQ7VsSOhx0Qq0QOI9R5ms3LnZdF0uMIIBrAtUI19iHGSgBPlyYMC7MvoFfOe7S9pZZgmsviCCwO9ID8R4n_yVy51DQawBNE3hux9u6EKjxereu6g9efZOPbDOyGOIjyEuY7xLQ7Ax8c9QD5rOsJbFJzD8EJKi42c3gd3vyKbJquy7s2ZauGxYjtNNAcQwIUS6xBgLb3TJ7u5MctykqV40whvtS56Bix82pWtOT0" />
            </div>
            <h4 className="font-bold text-lg">Ricardo Paz</h4>
            <p className="text-sm text-accent font-medium">Logística &amp; Rescate</p>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center text-center bg-accent/10 p-12 rounded-[2rem] gap-6">
        <h2 className="text-3xl font-bold">¿Quieres ser parte de nuestra historia?</h2>
        <p className="max-w-2xl text-lg">Tu ayuda puede ser la diferencia entre la soledad y un hogar para uno de nuestros rescatados.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-8 h-12 bg-primary text-white font-bold rounded-xl hover:scale-105 transition-transform">Quiero ser Voluntario</button>
          <button className="px-8 h-12 bg-white dark:bg-background-dark border border-primary/20 text-primary font-bold rounded-xl hover:bg-primary/5">Ver Mascotas</button>
        </div>
      </section>
    </div>
  );
}
