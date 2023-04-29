export function formatDateToString(date) {
  const publishedAtDate = new Date(date);

  return [
    publishedAtDate.getUTCDate().toString().padStart(2, "0"),
    (publishedAtDate.getUTCMonth() + 1).toString().padStart(2, "0"),
    publishedAtDate.getUTCFullYear(),
  ].join("/");
}
