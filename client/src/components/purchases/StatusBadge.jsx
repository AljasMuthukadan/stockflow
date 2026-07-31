export default function StatusBadge({ status }) {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-700",
    Ordered: "bg-blue-100 text-blue-700",
    Received: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}