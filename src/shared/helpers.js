export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  const diffMs = date - now; // negativo = en el pasado
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);

  const rtf = new Intl.RelativeTimeFormat("es", { numeric: "auto" });

  if (Math.abs(diffDay) >= 1) return rtf.format(diffDay, "day");

  if (Math.abs(diffHour) >= 1) return rtf.format(diffHour, "hour");

  if (Math.abs(diffMin) >= 1) return rtf.format(diffMin, "minute");

  return rtf.format(diffSec, "second");
}

export function formatDateTime(isoString) {
  const dateObj = new Date(isoString);

  const fecha = dateObj
    .toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
    .replace(/^\w/, (c) => c.toUpperCase());

  const hora = dateObj
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    })
    .replace("AM", "AM")
    .replace("PM", "PM");

  return {
    date: fecha,
    time: hora,
  };
}
