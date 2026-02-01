// import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div
        className="size-10 border-4 border-border-primary border-t-transparent rounded-full animate-spin"
        role="status"
        aria-label="Cargando"
      >
        <span className="sr-only">Cargando...</span>
      </div>
    </div>
  );
};

export default Spinner;
