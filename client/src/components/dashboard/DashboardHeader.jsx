import { CalendarDays } from "lucide-react";

function DashboardHeader() {
  return (
    <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      {/* Left */}
      <div className="min-w-0">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Dashboard
        </h1>

        <p className="mt-1 max-w-xl text-sm leading-5 text-slate-500">
          Overview of your inventory, production and business performance.
        </p>
      </div>

      {/* Right */}
      <button
        className="
          flex
          w-full
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          py-2.5
          text-sm
          font-medium
          text-slate-700
          shadow-sm
          transition
          hover:bg-slate-50
          sm:w-fit
          md:shrink-0
        "
      >
        <CalendarDays size={18} className="shrink-0" />
        <span className="whitespace-nowrap">May 24 – May 30, 2024</span>
      </button>
    </div>
  );
}

export default DashboardHeader;