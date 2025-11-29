import { timeAgo } from "../../../shared/helpers";
import { useNavigate } from "react-router-dom";

export const RequestCard = ({ adoption }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg p-5 flex items-start gap-5 border border-slate-200 hover:bg-primary/30 cursor-pointer transition-colors"
      onClick={() => navigate(`/user/requests/${adoption?.adoptionRequestId}`)}
    >
      <img
        alt="Foto del gato llamado Tom"
        className="h-24 w-24 rounded-md object-cover"
        src={adoption?.animalImage}
      />
      <div className="flex-1">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-bold text-slate-900">
            Solicitud para adoptar a {adoption.animalName}
          </h3>
          <span className="text-xs font-medium text-slate-500 ">
            {timeAgo(adoption?.requestDate)}
          </span>
        </div>
        <p className="text-sm text-slate-600 mt-1">
          Solicitante:{" "}
          <span className="font-medium text-slate-700">
            {adoption.requesterName}
          </span>
        </p>
        <p className="text-sm text-slate-600  mt-1">
          Mensaje: "{adoption.comments}"
        </p>
        <div className="mt-4 flex gap-3">
          <button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-primary text-slate-900 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors cursor-pointer focus:ring-offset-2">
            Aceptar
          </button>
          <button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-slate-200 text-slate-800 hover:bg-slate-300 focus:outline-none focus:ring-2 cursor-pointer transition-colors focus:ring-slate-400 focus:ring-offset-2">
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};
