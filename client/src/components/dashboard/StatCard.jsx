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
        rounded-xl
        border
        border-slate-200
        bg-white
        p-3
        shadow-sm
        transition
        hover:shadow-md

        sm:rounded-2xl
        sm:p-4
      "
    >
      <div className="flex items-start justify-between gap-2">

        {/* Content */}

        <div className="min-w-0">

          <p
            className="
              truncate
              text-[11px]
              font-medium
              text-slate-500

              sm:text-sm
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-1
              text-xl
              font-bold
              leading-tight
              text-slate-800

              sm:mt-2
              sm:text-2xl

              xl:text-3xl
            "
          >
            {value}
          </h2>

          <p
            className="
              mt-2
              truncate
              text-[10px]
              leading-tight

              sm:mt-3
              sm:text-sm
            "
          >
            <span
              className={
                positive
                  ? "font-semibold text-green-600"
                  : "font-semibold text-red-500"
              }
            >
              {change}
            </span>

            <span className="ml-1 text-slate-500">
              {subtitle}
            </span>
          </p>

        </div>

        {/* Icon */}

        <div
          className={`
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-lg
            ${color}

            sm:h-11
            sm:w-11
            sm:rounded-xl

            xl:h-12
            xl:w-12
            xl:rounded-2xl
          `}
        >
          <Icon
            size={18}
            className="sm:h-5 sm:w-5 xl:h-6 xl:w-6"
          />
        </div>

      </div>
    </div>
  );
}

export default StatCard;