export const OverviewHeader = () => {
  return (
   <div className="mb-3 flex shrink-0 items-start justify-between gap-4">

        <div>
          <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
            Inventory Overview
          </h3>

          <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
            Stock movement this week
          </p>
        </div>

        <select
          className="
            h-9
            shrink-0
            rounded-lg
            border
            border-slate-200
            bg-white
            px-2.5
            text-xs
            text-slate-600
            outline-none
            transition
            hover:bg-slate-50
            focus:border-emerald-500
            sm:px-3
            sm:text-sm
          "
        >
          <option>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>

      </div>
  )
}
