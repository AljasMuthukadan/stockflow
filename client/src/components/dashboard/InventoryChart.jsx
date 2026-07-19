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

 function InventoryChart() {
  return (
    <div className="flex h-[300px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">
            Inventory Overview
          </h3>

          <p className="text-sm text-slate-500">
            Stock movement this week
          </p>
        </div>

        <select className="rounded-lg border border-slate-200 px-3 py-2 text-sm">
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      <div className=" min-h-[180px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              dataKey="stockIn"
              stroke="#10B981"
              strokeWidth={3}
              dot={{ r: 4 }}
            />

            <Line
              dataKey="stockOut"
              stroke="#3B82F6"
              strokeWidth={3}
              dot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default InventoryChart;