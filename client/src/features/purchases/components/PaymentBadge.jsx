export default function PaymentBadge({ payment }) {
  const styles = {
    Paid: "bg-green-100 text-green-700",
    Partial: "bg-orange-100 text-orange-700",
    Unpaid: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        styles[payment] || "bg-gray-100 text-gray-700"
      }`}
    >
      {payment}
    </span>
  );
}