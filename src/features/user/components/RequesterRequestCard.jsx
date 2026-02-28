import { Link } from "react-router-dom";
import { formatDateTime } from "../../../shared/helpers";
import { PendingTag, ApprovedTag, RejectedTag, CompletedTag } from "../utils/adoptionStatusTags";

export const RequesterRequestCard = ({ adoption }) => {
  const { date } = formatDateTime(adoption.requestDate);
  const isPending = adoption.status === "Pending";
  const isApproved = adoption.status === "Approved";
  const isRejected = adoption.status === "Rejected";
  const isCompleted = adoption.status === "Completed";

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
        {isPending && (<PendingTag />)}
        {isApproved && (<ApprovedTag />)}
        {isRejected && (<RejectedTag />)}
        {isCompleted && (<CompletedTag />)}
        <Link
          className="text-sm text-slate-700 hover:underline mt-1 block"
          to={`/user/requests/${adoption.adoptionRequestId}`}
        >
          Ver detalles
        </Link>
      </div>
    </li>
  );
};
