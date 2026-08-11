
import { stats} from "./data"



const colors = {
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    text: "text-green-600",
  },
  purple: {
    bg: "bg-purple-100",
    icon: "text-purple-600",
    text: "text-red-500",
  },
  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    text: "text-green-600",
  },
  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    text: "text-slate-500",
  },
};

const SupplierStats = () => {
  return (

    <div className="grid w-full grid-cols-2 gap-3 lg:grid-cols-4">
    
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              relative
              overflow-hidden
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              py-3
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
              sm:px-4
              sm:py-4
              lg:px-5
              lg:py-3
            "
          >

            {/* Decorative Circle */}

            <div
              className="
                absolute
                -right-8
                -top-8
                h-24
                w-24
                rounded-full
                bg-slate-100/40
                transition
                group-hover:scale-110
                sm:-right-10
                sm:-top-10
                sm:h-28
                sm:w-28
                lg:h-32
                lg:w-32
              "
            />

            {/* Content */}

            <div className="relative flex items-start justify-between gap-2">

              {/* Text */}

              <div className="min-w-0">

                <p className="truncate text-xs font-medium text-slate-500 sm:text-sm">
                  {item.title}
                </p>

                <h2 className="mt-2 text-2xl font-bold text-slate-800 sm:mt-3 sm:text-3xl lg:text-4xl">
                  {item.value}
                </h2>

                <p
                  className={`
                    mt-2
                    truncate
                    text-[11px]
                    sm:mt-3
                    sm:text-xs
                    lg:mt-4
                    lg:text-sm
                    ${colors[item.color].text}
                  `}
                >
                  {item.sub}
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
                  rounded-xl
                  sm:h-11
                  sm:w-11
                  lg:h-14
                  lg:w-14
                  lg:rounded-2xl
                  ${colors[item.color].bg}
                `}
              >
                <Icon
                  size={18}
                  className={`
                    ${colors[item.color].icon}
                    sm:size-[20px]
                    lg:size-[26px]
                  `}
                />
              </div>

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default SupplierStats;