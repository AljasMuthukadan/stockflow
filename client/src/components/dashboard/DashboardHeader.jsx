import { CalendarDays } from "lucide-react";

 function DashboardHeader() {
  return (
    <div className="mb-8 flex  flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Overview of your inventory, production and business performance.
        </p>
      </div>

      {/* Right */}
      <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm shadow-sm transition hover:bg-slate-50">
        <CalendarDays size={18} />
        <span>May 24 – May 30, 2024</span>
      </button>
    </div>
  );
}
export default DashboardHeader;