import { Plus } from "lucide-react";

export default function ReportsHeader() {
  return (
    <div className="flex flex-row gap-5 lg:flex-row items-center justify-between">
      {/* Left */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">
          Reports
        </h1>

        <p className="mt-1 hidden lg:block text-sm text-slate-500">
          Generate, analyze and export business reports.
        </p>
      </div>

      {/* Right */}
      <button
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-emerald-600
          px-5
          py-3
          text-sm
          lg:text-md
          text-white
          font-semibold
          shadow-sm
          transition
          hover:bg-emerald-700
          active:scale-95
        "
      >
        <Plus size={18} />

        New Custom Report
      </button>
    </div>
  );
}