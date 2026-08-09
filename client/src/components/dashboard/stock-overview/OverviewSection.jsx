
import { OverviewHeader } from "./OverviewHeader";
import { OverviewChart } from "./OverviewChart";

const data = [
  { day: "24 May", stockIn: 700, stockOut: 300 },
  { day: "25 May", stockIn: 1000, stockOut: 600 },
  { day: "26 May", stockIn: 600, stockOut: 250 },
  { day: "27 May", stockIn: 1400, stockOut: 850 },
  { day: "28 May", stockIn: 950, stockOut: 480 },
  { day: "29 May", stockIn: 1500, stockOut: 820 },
  { day: "30 May", stockIn: 1800, stockOut: 1100 },
];

export default function OverviewSection() {
  return (
    <div className="flex h-[300px] min-h-0 w-full flex-col rounded-2xl border border-slate-200  p-4 shadow-sm sm:p-5">

      {/* Header */}
       <OverviewHeader />

      {/* Chart */}
      <OverviewChart data={data} />
    </div>
  );
}