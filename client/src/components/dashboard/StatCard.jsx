 function StatCard({
  title,
  value,
  change,
  subtitle,
  icon: Icon,
  color,
  positive,
}) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      border
      border-slate-200
      p-4
      shadow-sm
      hover:shadow-md
      transition
      "
    >
      <div className="flex justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="text-3xl font-bold mt-2">
            {value}
          </h2>

          <p className="text-sm mt-3">
            <span
              className={
                positive
                  ? "text-green-600 font-semibold"
                  : "text-red-500 font-semibold"
              }
            >
              {change}
            </span>

            <span className="text-slate-500 ml-1">
              {subtitle}
            </span>
          </p>

        </div>

        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}
        >
          <Icon size={24} />
        </div>

      </div>
    </div>
  );
}

export default StatCard;