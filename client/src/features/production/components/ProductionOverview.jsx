import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const STATUS_CONFIG = [
  {
    name: "Completed",
    color: "#16a34a",
  },
  {
    name: "In Progress",
    color: "#3b82f6",
  },
  {
    name: "Pending",
    color: "#f59e0b",
  },
  {
    name: "Rejected",
    color: "#ef4444",
  },
];

const normalizeStatus = (status) => {
  return String(status ?? "")
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, "");
};

const getStatusCategory = (status) => {
  const normalizedStatus = normalizeStatus(status);

  if (normalizedStatus === "completed") {
    return "Completed";
  }

  if (
    normalizedStatus === "inprogress" ||
    normalizedStatus === "processing"
  ) {
    return "In Progress";
  }

  if (
    normalizedStatus === "pending" ||
    normalizedStatus === "planned" ||
    normalizedStatus === "queued"
  ) {
    return "Pending";
  }

  if (
    normalizedStatus === "rejected" ||
    normalizedStatus === "cancelled" ||
    normalizedStatus === "canceled" ||
    normalizedStatus === "failed"
  ) {
    return "Rejected";
  }

  return "Other";
};

const isToday = (dateValue) => {
  if (!dateValue) return false;

  const date = new Date(dateValue);

  if (Number.isNaN(date.getTime())) return false;

  const today = new Date();

  return (
    date.getFullYear() === today.getFullYear() &&
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  );
};

const formatNumber = (value) => {
  return new Intl.NumberFormat("en-IN").format(value);
};

const ProductionOverview = ({ data = [] }) => {
  const productionOrders = Array.isArray(data) ? data : [];

  // 1. Calculate the number of orders in each status.
  const statusCounts = STATUS_CONFIG.map((status) => {
    const count = productionOrders.filter(
      (order) => getStatusCategory(order.status) === status.name
    ).length;

    return {
      ...status,
      count,
      value:
        productionOrders.length > 0
          ? Number(((count / productionOrders.length) * 100).toFixed(1))
          : 0,
    };
  });

  // Include unexpected statuses so the chart accounts for every order.
  const otherCount = productionOrders.filter(
    (order) => getStatusCategory(order.status) === "Other"
  ).length;

  const chartData = [
    ...statusCounts,
    ...(otherCount > 0
      ? [
          {
            name: "Other",
            color: "#64748b",
            count: otherCount,
            value: Number(
              ((otherCount / productionOrders.length) * 100).toFixed(1)
            ),
          },
        ]
      : []),
  ];

  // 2. Calculate total orders.
  const totalOrders = productionOrders.length;

  // 3. Calculate completed orders.
  const completedOrders = productionOrders.filter(
    (order) => getStatusCategory(order.status) === "Completed"
  ).length;

  // 4. Calculate today's orders.
  const todaysOrders = productionOrders.filter((order) =>
    isToday(order.productionDate ?? order.createdAt)
  ).length;

  // 5. Calculate the completion rate.
  const completionRate =
    totalOrders > 0
      ? Math.round((completedOrders / totalOrders) * 100)
      : 0;

  const stats = [
    {
      title: "Today's Orders",
      value: formatNumber(todaysOrders),
      description: "Orders scheduled or created today",
    },
    {
      title: "Completed Orders",
      value: formatNumber(completedOrders),
      description: "Orders marked as completed",
    },
    {
      title: "Completion Rate",
      value: `${completionRate}%`,
      description: "Completed orders / total orders",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      {/* Header */}
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-slate-800">
          Production Overview
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          Production status and performance summary
        </p>
      </div>

      {/* Chart and Legend */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Pie Chart */}
        <div className="relative h-56 min-w-0">

          {totalOrders > 0 ? (
            <>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData.filter((item) => item.count > 0)}
                    dataKey="count"
                    nameKey="name"
                    innerRadius={52}
                    outerRadius={78}
                    paddingAngle={3}
                    stroke="none"
                  >
                    {chartData
                      .filter((item) => item.count > 0)
                      .map((item) => (
                        <Cell
                          key={item.name}
                          fill={item.color}
                        />
                      ))}
                  </Pie>

                  <Tooltip
                    formatter={(value, name) => [
                      `${value} orders`,
                      name,
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>

              {/* Center label */}
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-slate-800">
                  {formatNumber(totalOrders)}
                </span>

                <span className="text-xs text-slate-500">
                  Total Orders
                </span>
              </div>
            </>
          ) : (
            <div className="flex h-full flex-col items-center justify-center rounded-xl bg-slate-50 text-center">
              <p className="text-sm font-medium text-slate-600">
                No production data
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Create a production order to see analytics.
              </p>
            </div>
          )}

        </div>

        {/* Legend */}
        <div className="flex flex-col justify-center gap-3">

          {chartData.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-3 rounded-xl bg-slate-50 px-3 py-3"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span
                  className="h-3 w-3 shrink-0 rounded-full"
                  style={{ backgroundColor: item.color }}
                />

                <span className="truncate text-sm font-medium text-slate-700">
                  {item.name}
                </span>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-sm font-semibold text-slate-800">
                  {item.count}
                </p>

                <p className="text-xs text-slate-500">
                  {item.value}%
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* KPI Cards */}
      <div className="mt-6 grid grid-cols-1 gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">

        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-xl bg-slate-50 p-3"
          >
            <p className="text-xs font-medium text-slate-500">
              {item.title}
            </p>

            <h3 className="mt-2 text-xl font-bold text-slate-800">
              {item.value}
            </h3>

            <p className="mt-1 text-xs leading-5 text-slate-500">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </div>
  );
};

export default ProductionOverview;