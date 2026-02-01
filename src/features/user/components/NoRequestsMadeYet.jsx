import { Link } from "react-router-dom";



export default function NoRequestsMadeYet() {
  return (
    <div className="flex-grow flex items-center justify-center px-6 py-12">
      <div className="max-w-[600px] w-full text-center flex flex-col items-center">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full"></div>
          <div className="relative bg-white  p-8 rounded-full shadow-xl border border-gray-50">
            <span className="material-symbols-outlined text-7xl text-primary/40">assignment_late</span>
          </div>
          <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-full shadow-lg border-4 border-background-light">
            <span className="material-symbols-outlined text-xl">search_check</span>
          </div>
        </div>
        <h1 className="text-[#0d1b12] text-2xl lg:text-3xl font-extrabold mb-4 tracking-tight">
          Aún no tienes solicitudes de adopción
        </h1>
        <p className="text-gray-600 text-base lg:text-lg mb-10 max-w-[480px] leading-relaxed">
          ¡No te preocupes! Tu futuro mejor amigo te está esperando. Explora nuestra lista de animales rescatados y comienza el proceso de adopción hoy mismo.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            to={"/adoptions"}
            className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 bg-primary text-[#0d1b12] font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95">
            <span className="material-symbols-outlined">explore</span>
            Explorar animales
          </Link>
          <Link
            to={"/home"}
            className="w-full sm:w-auto min-w-[200px] flex items-center justify-center gap-2 bg-white text-[#0d1b12] border border-gray-200 font-bold py-4 px-8 rounded-xl hover:bg-gray-50  transition-all active:scale-95">
            <span className="material-symbols-outlined">home</span>
            Volver al inicio
          </Link>
        </div>
        <div className="mt-12 p-4 bg-primary/5 rounded-xl border border-primary/20 max-w-[400px]">
          <p className="text-sm text-gray-700 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-lg">lightbulb</span>
            ¿Sabías que adoptar salva dos vidas? La del animal que adoptas y la del que podrá ocupar su lugar en el refugio.
          </p>
        </div>
      </div >
    </div >
  );
}
