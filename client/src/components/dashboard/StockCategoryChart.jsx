import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Raw Materials", value: 45 },
  { name: "Finished Goods", value: 25 },
  { name: "Packaging", value: 15 },
  { name: "Others", value: 15 },
];

const COLORS = [
  "#10B981",
  "#3B82F6",
  "#A855F7",
  "#FB923C",
];

 function StockCategoryChart() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h3 className="mb-5 text-lg font-semibold">
        Stock by Category
      </h3>

      <div className="flex-1 min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              innerRadius={55}
              outerRadius={85}
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

      <div className="mt-6 space-y-3">
        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: COLORS[index] }}
              />

              <span>{item.name}</span>
            </div>

            <span className="font-semibold">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
export default StockCategoryChart;