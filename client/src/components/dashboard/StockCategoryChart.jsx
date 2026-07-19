import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Raw Materials",
    value: 45,
  },
  {
    name: "Finished Goods",
    value: 25,
  },
  {
    name: "Packaging",
    value: 15,
  },
  {
    name: "Others",
    value: 15,
  },
];

const COLORS = [
  "#10B981",
  "#3B82F6",
  "#A855F7",
  "#FB923C",
];

 function StockCategoryChart() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      <h3 className=" text-lg font-semibold">
        Stock by Category
      </h3>

      <div className="h-45">

        <ResponsiveContainer>

          <PieChart>

            <Pie
              data={data}
              innerRadius={40}
              outerRadius={70}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index]}
                />
              ))}
            </Pie>

            <Tooltip />

          </PieChart>

        </ResponsiveContainer>

      </div>

      <div className="mt-4 space-y-3">

        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center justify-between text-sm"
          >
            <div className="flex items-center gap-3">

              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor: COLORS[index],
                }}
              />

              {item.name}

            </div>

            <span className="font-medium">
              {item.value}%
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default StockCategoryChart;