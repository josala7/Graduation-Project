export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
  });
};
