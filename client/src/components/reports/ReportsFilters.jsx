import { Search, Calendar, FilterX } from "lucide-react";

export default function ReportsFilters() {
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
      {/* Search */}
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        />

        <input
          type="text"
          placeholder="Search reports..."
          className="
            h-11
            w-full
            rounded-lg
            border
            border-slate-200
            bg-slate-50
            pl-10
            pr-4
            text-sm
            outline-none
            transition
            focus:border-emerald-500
            focus:bg-white
          "
        />
      </div>

      {/* Filters */}
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {/* Category */}
        <div>
          <label className="mb-2 block text-xs font-medium text-slate-500">
            Category
          </label>

          <select
            className="
              h-11
              w-full
              rounded-lg
              border
              border-slate-200
              bg-slate-50
              px-3
              text-sm
              outline-none
              transition
              focus:border-emerald-500
              focus:bg-white
            "
          >
            <option>All Categories</option>
            <option>Inventory</option>
            <option>Purchases</option>
            <option>Production</option>
            <option>Sales</option>
            <option>Finance</option>
          </select>
        </div>

        {/* Type */}
        <div>
          <label className="mb-2 block text-xs font-medium text-slate-500">
            Report Type
          </label>

          <select
            className="
              h-11
              w-full
              rounded-lg
              border
              border-slate-200
              bg-slate-50
              px-3
              text-sm
              outline-none
              transition
              focus:border-emerald-500
              focus:bg-white
            "
          >
            <option>All Types</option>
            <option>Summary</option>
            <option>Detailed</option>
            <option>Analytics</option>
          </select>
        </div>

        {/* Date Range */}
        <div>
          <label className="mb-2 block text-xs font-medium text-slate-500">
            Date Range
          </label>

          <button
            className="
              flex
              h-11
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-slate-200
              bg-slate-50
              px-4
              text-sm
              transition
              hover:bg-slate-100
            "
          >
            <Calendar size={17} />
            Last 30 Days
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-500">
          Showing{" "}
          <span className="font-semibold text-slate-800">24</span>{" "}
          reports
        </p>

        <button
          className="
            inline-flex
            h-10
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-slate-200
            bg-white
            px-4
            text-sm
            font-medium
            text-slate-600
            transition
            hover:bg-slate-100
          "
        >
          <FilterX size={16} />
          Clear Filters
        </button>
      </div>
    </div>
  );
}