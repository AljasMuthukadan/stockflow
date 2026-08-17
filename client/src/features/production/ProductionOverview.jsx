import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Completed", value: 58 },
  { name: "In Progress", value: 25 },
  { name: "Pending", value: 12 },
  { name: "Rejected", value: 5 },
];

const COLORS = [
  "#16a34a",
  "#3b82f6",
  "#f59e0b",
  "#ef4444",
];

const stats = [
  {
    title: "Today's Orders",
    value: 72,
  },
  {
    title: "Efficiency",
    value: "91%",
  },
  {
    title: "Waste",
    value: "3%",
  },
];

const ProductionOverview = () => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

      {/* Header */}

      <div className="mb-5">

        <h2 className="text-lg font-semibold text-slate-800">
          Production Overview
        </h2>

        <p className="text-sm text-slate-500">
          Current production performance
        </p>

      </div>

      {/* Chart + Legend */}

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Chart */}

        <div className="h-52">

          <ResponsiveContainer width="100%" height="100%">

            <PieChart>

              <Pie
                data={data}
                innerRadius={52}
                outerRadius={78}
                paddingAngle={4}
                dataKey="value"
              >

                {data.map((item, index) => (
                  <Cell
                    key={item.name}
                    fill={COLORS[index]}
                  />
                ))}

              </Pie>

              <Tooltip />

            </PieChart>

          </ResponsiveContainer>

        </div>

        {/* Legend */}

        <div className="flex flex-col justify-center space-y-4">

          {data.map((item, index) => (

            <div
              key={item.name}
              className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
            >

              <div className="flex items-center gap-3">

                <span
                  className="h-3 w-3 rounded-full"
                  style={{
                    backgroundColor: COLORS[index],
                  }}
                />

                <span className="text-sm font-medium text-slate-700">
                  {item.name}
                </span>

              </div>

              <span className="font-semibold text-slate-800">
                {item.value}%
              </span>

            </div>

          ))}

        </div>

      </div>

      {/* Bottom KPI Cards */}

      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">

        {stats.map((item) => (

          <div
            key={item.title}
            className="rounded-xl bg-slate-50 p-3 text-center"
          >

            <p className="text-xs text-slate-500">
              {item.title}
            </p>

            <h3 className="mt-1 text-xl font-bold text-slate-800">
              {item.value}
            </h3>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ProductionOverview;