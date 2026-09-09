import {
  Boxes,
  Package,
  AlertTriangle,
  XCircle,
  TrendingUp,
} from "lucide-react";

const colors = {
  green: {
    iconBg: "bg-emerald-50",
    iconText: "text-emerald-600",
    accent: "bg-emerald-500",
    change: "text-emerald-600",
  },

  blue: {
    iconBg: "bg-blue-50",
    iconText: "text-blue-600",
    accent: "bg-blue-500",
    change: "text-blue-600",
  },

  orange: {
    iconBg: "bg-orange-50",
    iconText: "text-orange-600",
    accent: "bg-orange-500",
    change: "text-orange-600",
  },

  red: {
    iconBg: "bg-red-50",
    iconText: "text-red-600",
    accent: "bg-red-500",
    change: "text-red-600",
  },
};

const InventoryStats = ({ inventory = [] }) => {

  // =========================
  // Calculate Inventory Stats
  // =========================

  const totalItems = inventory.length;

  const totalStock = inventory.reduce(
    (total, item) => total + Number(item.quantity || 0),
    0
  );

  const lowStock = inventory.filter((item) => {
    const quantity = Number(item.quantity || 0);
    const reorderLevel = Number(item.reorderLevel || 0);

    return quantity > 0 && quantity <= reorderLevel;
  }).length;

  const outOfStock = inventory.filter((item) => {
    return Number(item.quantity || 0) === 0;
  }).length;


  // =========================
  // Stats Configuration
  // =========================

  const stats = [
    {
      title: "Total Items",
      value: totalItems,
      subtitle: "Items in inventory",
      icon: Boxes,
      color: "green",
    },

    {
      title: "Total Stock",
      value: totalStock,
      subtitle: "Units Available",
      icon: Package,
      color: "blue",
    },

    {
      title: "Low Stock",
      value: lowStock,
      subtitle: "Need attention",
      icon: AlertTriangle,
      color: "orange",
    },

    {
      title: "Out of Stock",
      value: outOfStock,
      subtitle: "Currently unavailable",
      icon: XCircle,
      color: "red",
    },
  ];


  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {

        const Icon = item.icon;
        const color = colors[item.color];

        return (
          <div
            key={item.title}
            className="
              relative
              overflow-hidden
              rounded-2xl
              border
              border-slate-200
              bg-white
              px-5
              py-4
              shadow-sm
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-md
            "
          >

            {/* Top Accent */}

            <div
              className={`
                absolute
                left-0
                top-0
                h-0.5
                w-full
                ${color.accent}
              `}
            />


            {/* Main Content */}

            <div className="flex items-center justify-between gap-4">

              {/* Text */}

              <div className="min-w-0">

                <p className="text-sm font-medium text-slate-500">
                  {item.title}
                </p>

                <div className="mt-1 flex items-baseline gap-2">

                  <h2 className="text-2xl font-bold tracking-tight text-slate-800">
                    {item.value}
                  </h2>

                </div>

                <p className="mt-0.5 text-xs text-slate-400">
                  {item.subtitle}
                </p>

              </div>


              {/* Icon */}

              <div
                className={`
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  ${color.iconBg}
                `}
              >

                <Icon
                  size={21}
                  className={color.iconText}
                />

              </div>

            </div>


            {/* Bottom Information */}

            <div className="mt-3 flex items-center justify-between">

              <div
                className={`
                  flex
                  items-center
                  gap-1.5
                  ${color.change}
                `}
              >

                <TrendingUp size={14} />

                <span className="text-xs font-semibold">
                  Live
                </span>

              </div>

              <span className="text-[11px] text-slate-400">
                Current data
              </span>

            </div>


            {/* Progress */}

            <div className="mt-3 h-1 overflow-hidden rounded-full bg-slate-100">

              <div
                className={`
                  h-full
                  rounded-full
                  ${color.accent}
                `}
                style={{
                  width: "70%",
                }}
              />

            </div>

          </div>
        );
      })}

    </div>
  );
};

export default InventoryStats;