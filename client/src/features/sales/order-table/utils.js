export const statusBadge = (status) => {
  const styles = {
    Delivered: "bg-green-50 text-green-600",
    Shipped: "bg-blue-50 text-blue-600",
    Processing: "bg-orange-50 text-orange-600",
    Pending: "bg-slate-100 text-slate-600",
  };

  return styles[status];
};

export const paymentBadge = (status) => {
  return status === "Paid"
    ? "bg-green-50 text-green-600"
    : "bg-red-50 text-red-600";
};