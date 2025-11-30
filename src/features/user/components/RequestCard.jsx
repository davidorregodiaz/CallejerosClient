import { timeAgo } from "../../../shared/helpers";
import { useNavigate } from "react-router-dom";

export const RequestCard = ({ adoption }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-lg p-5 flex items-start gap-5 border border-slate-200 hover:bg-primary/20 cursor-pointer transition-colors"
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
      </div>
    </div>
  );
};
