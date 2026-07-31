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
        <div className="flex h-[300px] flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            {/* Header */}
            <h3 className="mb-4 text-lg font-semibold">
                Stock by Category
            </h3>

            {/* Chart */}
            <div className="flex-1 min-h-[150px]">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            innerRadius={45}
                            outerRadius={75}
                            paddingAngle={2}
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
            <div className="mt-4 grid grid-cols-2 gap-x-5 gap-y-3">
                {data.map((item, index) => (
                    <div
                        key={item.name}
                        className="flex items-center justify-between"
                    >
                        <div className="flex items-center gap-2 min-w-0">
              <span
                  className="h-3 w-3 rounded-full flex-shrink-0"
                  style={{
                      backgroundColor: COLORS[index],
                  }}
              />

                            <span className="truncate text-xs text-slate-600">
                {item.name}
              </span>
                        </div>

                        <span className="ml-2 text-xs font-semibold text-slate-800">
              {item.value}%
            </span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default StockCategoryChart;