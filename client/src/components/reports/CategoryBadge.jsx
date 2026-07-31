export default function CategoryBadge({ category }) {
  const colors = {
    Inventory: "bg-blue-100 text-blue-700",
    Purchases: "bg-orange-100 text-orange-700",
    Production: "bg-purple-100 text-purple-700",
    Sales: "bg-emerald-100 text-emerald-700",
    Finance: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-semibold ${
        colors[category] || "bg-slate-100 text-slate-700"
      }`}
    >
      {category}
    </span>
  );
}