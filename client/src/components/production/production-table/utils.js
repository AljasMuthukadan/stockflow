export const progressColor = (progress) => {
  if (progress === 100) {
    return "bg-green-500";
  }

  if (progress > 60) {
    return "bg-blue-500";
  }

  if (progress > 30) {
    return "bg-orange-500";
  }

  return "bg-red-500";
};

export const badgeStyle = (status) => {
  switch (status) {
    case "Completed":
      return "border border-green-200 bg-green-50 text-green-700";

    case "In Progress":
      return "border border-blue-200 bg-blue-50 text-blue-700";

    case "Pending":
      return "border border-yellow-200 bg-yellow-50 text-yellow-700";

    default:
      return "border border-slate-200 bg-slate-50 text-slate-600";
  }
};