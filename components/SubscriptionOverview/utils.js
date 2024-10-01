
export function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "2-digit" };
  return new Date(dateString)
    .toLocaleDateString("en-US", options)
    .toUpperCase();
}

export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}
