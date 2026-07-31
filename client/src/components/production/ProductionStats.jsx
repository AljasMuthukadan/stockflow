import {
  Factory,
  LoaderCircle,
  CircleCheckBig,
  Clock3,
  OctagonX,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const stats = [
  {
    title: "Total Production",
    value: "1,450",
    unit: "Units",
    change: "+15.3%",
    positive: true,
    icon: Factory,
    color: "green",
  },
  {
    title: "In Progress",
    value: "8",
    unit: "Orders",
    change: "+2",
    positive: true,
    icon: LoaderCircle,
    color: "blue",
  },
  {
    title: "Completed",
    value: "28",
    unit: "Orders",
    change: "+5",
    positive: true,
    icon: CircleCheckBig,
    color: "emerald",
  },
  {
    title: "Pending",
    value: "5",
    unit: "Orders",
    change: "-1",
    positive: false,
    icon: Clock3,
    color: "orange",
  },
  {
    title: "Scrap / Rejected",
    value: "2",
    unit: "Orders",
    change: "-1",
    positive: false,
    icon: OctagonX,
    color: "red",
  },
];

const colors = {
  green: {
    bg: "bg-green-100",
    icon: "text-green-600",
    ring: "ring-green-200",
  },

  blue: {
    bg: "bg-blue-100",
    icon: "text-blue-600",
    ring: "ring-blue-200",
  },

  emerald: {
    bg: "bg-emerald-100",
    icon: "text-emerald-600",
    ring: "ring-emerald-200",
  },

  orange: {
    bg: "bg-orange-100",
    icon: "text-orange-600",
    ring: "ring-orange-200",
  },

  red: {
    bg: "bg-red-100",
    icon: "text-red-600",
    ring: "ring-red-200",
  },
};

const ProductionStats = () => {
  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-3
      2xl:grid-cols-5
      gap-5
      px-8
      "
    >
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
            group
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
            "
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-2 flex items-end gap-2">
                  <span className="text-3xl font-bold text-slate-800">
                    {item.value}
                  </span>

                  <span className="pb-1 text-sm text-slate-400">
                    {item.unit}
                  </span>
                </h2>

                <div
                  className={`mt-4 flex items-center gap-2 text-sm ${
                    item.positive
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {item.positive ? (
                    <TrendingUp size={16} />
                  ) : (
                    <TrendingDown size={16} />
                  )}

                  <span className="font-semibold">
                    {item.change}
                  </span>

                  <span className="text-slate-500">
                    vs last month
                  </span>
                </div>
              </div>

              <div
                className={`
                h-14
                w-14
                rounded-2xl
                flex
                items-center
                justify-center
                ring-4
                transition
                group-hover:scale-110
                ${colors[item.color].bg}
                ${colors[item.color].ring}
                `}
              >
                <Icon
                  size={28}
                  className={colors[item.color].icon}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductionStats;