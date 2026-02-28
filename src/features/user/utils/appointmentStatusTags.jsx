
export const PendingTag = () => {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800"
    >
      Pendiente
    </span>
  )
}

export const ScheduleTag = () => {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800"
    >
      Planificada
    </span>
  )
}

export const CancelledTag = () => {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-red-100 text-red-800"
    >
      Cancelada
    </span>
  )
}

export const RescheduleRequestedTag = () => {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-yellow-100 text-yellow-800"
    >
      Replanificacion
    </span>
  )
}

export const CompletedTag = () => {
  return (
    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-green-100 text-green-800"
    >
      Completado
    </span>
  )
}
