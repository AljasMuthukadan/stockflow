import {
  Boxes,
  Package,
  AlertTriangle,
  XCircle,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Items",
    value: "1,250",
    change: "+12.5%",
    icon: Boxes,
    color: "green",
  },
  {
    title: "Total Stock",
    value: "25,430",
    subtitle: "Units Available",
    change: "+8.2%",
    icon: Package,
    color: "blue",
  },
  {
    title: "Low Stock",
    value: "32",
    change: "+5",
    icon: AlertTriangle,
    color: "orange",
  },
  {
    title: "Out of Stock",
    value: "12",
    change: "+2",
    icon: XCircle,
    color: "red",
  },
];

const colors = {
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    border: "border-green-500",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    border: "border-blue-500",
  },
  orange: {
    bg: "bg-orange-100",
    text: "text-orange-600",
    border: "border-orange-500",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-600",
    border: "border-red-500",
  },
};

const InventoryStats = () => {
  return (
    <div className="grid grid-cols-1  px-8 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-xl
            `}
          >
            {/* Top Accent */}
            <div
              className={`absolute left-0 top-0 h-1 w-full ${colors[item.color].border}`}
            />

            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <h2 className="mt-3 text-3xl font-bold text-slate-800">
                  {item.value}
                </h2>

                {item.subtitle && (
                  <p className="mt-1 text-sm text-slate-400">
                    {item.subtitle}
                  </p>
                )}
              </div>

              <div
                className={`
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  ${colors[item.color].bg}
                `}
              >
                <Icon
                  size={28}
                  className={colors[item.color].text}
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 text-green-600">
                <TrendingUp size={16} />

                <span className="text-sm font-semibold">
                  {item.change}
                </span>
              </div>

              <span className="text-xs text-slate-400">
                vs last month
              </span>
            </div>

            {/* Progress Accent */}
            <div className="mt-4 h-2 rounded-full bg-slate-100">
              <div
                className={`h-2 rounded-full ${colors[item.color].border.replace(
                  "border",
                  "bg"
                )}`}
                style={{ width: "70%" }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InventoryStats;