import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { day: "24 May", stockIn: 700, stockOut: 300 },
  { day: "25 May", stockIn: 1000, stockOut: 600 },
  { day: "26 May", stockIn: 600, stockOut: 250 },
  { day: "27 May", stockIn: 1400, stockOut: 850 },
  { day: "28 May", stockIn: 950, stockOut: 480 },
  { day: "29 May", stockIn: 1500, stockOut: 820 },
  { day: "30 May", stockIn: 1800, stockOut: 1100 },
];

export default function InventoryChart() {
  return (
    <div className="flex h-[300px] min-h-0 w-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">

      {/* Header */}
      <div className="mb-3 flex shrink-0 items-start justify-between gap-4">

        <div>
          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
            Inventory Overview
          </h3>

          <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
            Stock movement this week
          </p>
        </div>

        <select
          className="
            h-9
            shrink-0
            rounded-lg
            border
            border-slate-200
            bg-white
            px-2.5
            text-xs
            text-slate-600
            outline-none
            transition
            hover:bg-slate-50
            focus:border-emerald-500
            sm:px-3
            sm:text-sm
          "
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>

      </div>

      {/* Chart */}
      <div className="min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 8,
              right: 8,
              left: -12,
              bottom: 0,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
            />

            <XAxis
              dataKey="day"
              tick={{
                fontSize: 11,
              }}
              tickLine={false}
              axisLine={false}
              dy={8}
            />

            <YAxis
              tick={{
                fontSize: 11,
              }}
              tickLine={false}
              axisLine={false}
              width={40}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "10px",
                border: "1px solid #e2e8f0",
                boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                fontSize: "12px",
              }}
            />

            <Legend
              verticalAlign="top"
              align="right"
              height={28}
              iconType="circle"
              wrapperStyle={{
                fontSize: "12px",
              }}
            />

            <Line
              type="monotone"
              dataKey="stockIn"
              name="Stock In"
              stroke="#10B981"
              strokeWidth={2.5}
              dot={{
                r: 3,
              }}
              activeDot={{
                r: 5,
              }}
            />

            <Line
              type="monotone"
              dataKey="stockOut"
              name="Stock Out"
              stroke="#3B82F6"
              strokeWidth={2.5}
              dot={{
                r: 3,
              }}
              activeDot={{
                r: 5,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}