
function ActivityItem({
  icon: Icon,
  iconBg,
  iconColor,
  title,
  category,
  time,
}) {
  return (
    <div className="flex items-start justify-between py-4 border-b border-slate-100 last:border-none">

      <div className="flex gap-4">

        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center ${iconBg}`}
        >
          <Icon className={iconColor} size={18} />
        </div>

        <div>
          <h4 className="text-sm font-medium text-slate-800">
            {title}
          </h4>

          <p className="text-xs text-slate-500 mt-1">
            {category}
          </p>
        </div>

      </div>

      <span className="text-xs text-slate-400 whitespace-nowrap">
        {time}
      </span>

    </div>
  );
}

export default ActivityItem;