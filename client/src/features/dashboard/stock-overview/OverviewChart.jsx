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

export const OverviewChart = ({data}) => {
  return (
    <div className="min-h-0  flex-1">
        <ResponsiveContainer width="100%" height="100%"  >
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
              vertical={true}
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
  )
}
