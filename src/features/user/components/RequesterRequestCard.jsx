import { Link } from "react-router-dom";
import { formatDateTime } from "../../../shared/helpers";

export const RequesterRequestCard = ({ adoption }) => {
  const { date } = formatDateTime(adoption.requestDate);
  return (
    <li className="flex items-center justify-between p-4 rounded-lg bg-slate-50  ring-1 ring-slate-900/5">
      <div className="flex items-center gap-4">
        <img
          alt="Foto de Bruno"
          className="w-16 h-16 rounded-lg object-cover"
          src={adoption.animal.principalImageUrl}
        />
        <div>
          <p className="font-bold text-lg text-slate-800">
            {adoption.animal.name}
          </p>
          <p className="text-sm text-slate-500 ">Enviada el {date}</p>
        </div>
      </div>
      <div className="text-right">
        <span className="inline-flex items-center rounded-full bg-blue-100  px-3 py-1 text-sm font-semibold text-blue-800 ">
          {adoption.status}
        </span>
        <Link
          className="text-sm text-primary  hover:underline mt-1 block"
          to={`/user/requests/${adoption.adoptionRequestId}`}
        >
          Ver detalles
        </Link>
      </div>
    </li>
  );
};
