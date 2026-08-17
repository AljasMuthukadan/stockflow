import { Download } from "lucide-react";

const TableHeader = () => {
  return (
    <div
        className="
          flex
          min-w-0
          flex-col
          gap-3
          border-b
          border-slate-100
          px-4
          py-4
          sm:px-5
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div className="min-w-0">
          <h2 className="text-base font-semibold text-slate-800">
            Sales Orders
          </h2>

          <p className="mt-1 text-xs text-slate-500">
            Manage and track customer orders
          </p>
        </div>

        {/* Export */}

        <button
          type="button"
          className="
            flex
            h-9
            w-full
            shrink-0
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-slate-200
            px-3
            text-xs
            font-medium
            text-slate-600
            transition
            hover:bg-slate-50
            sm:w-auto
          "
        >
          <Download size={15} />
          Export
        </button>
      </div>
  )
}

export default TableHeader