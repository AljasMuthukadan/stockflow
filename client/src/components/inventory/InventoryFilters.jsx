import {
  Search,
  Filter,
  Download,
  Upload,
  RotateCcw,
} from "lucide-react";

const InventoryFilters = () => {
  return (
    <div className="px-3 sm:px-4 md:px-6 lg:px-8">

      <div className="w-full rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

        {/* Header */}

        <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

          {/* Title */}

          <div>
            <h2 className="text-base font-semibold text-slate-800">
              Inventory List
            </h2>

            <p className="mt-0.5 text-xs text-slate-500">
              Showing{" "}
              <span className="font-semibold text-slate-700">
                1,250
              </span>{" "}
              inventory items
            </p>
          </div>

          {/* Actions */}

          <div className="flex items-center gap-2">

            <button
              type="button"
              className="
                inline-flex
                h-9
                items-center
                gap-2
                rounded-lg
                border
                border-slate-200
                bg-white
                px-3
                text-sm
                font-medium
                text-slate-600
                transition
                hover:bg-slate-50
                hover:text-slate-800
              "
            >
              <Upload size={15} />
              Import
            </button>

            <button
              type="button"
              className="
                inline-flex
                h-9
                items-center
                gap-2
                rounded-lg
                border
                border-slate-200
                bg-white
                px-3
                text-sm
                font-medium
                text-slate-600
                transition
                hover:bg-slate-50
                hover:text-slate-800
              "
            >
              <Download size={15} />
              Export
            </button>

          </div>

        </div>


        {/* Filters */}

        <div className="flex flex-col gap-2.5 xl:flex-row">

          {/* Search */}

          <div className="relative min-w-0 flex-1">

            <Search
              size={16}
              className="
                absolute
                left-3.5
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search by item name, SKU, category..."
              className="
                h-10
                w-full
                rounded-lg
                border
                border-slate-200
                bg-slate-50
                pl-10
                pr-3
                text-sm
                text-slate-700
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-emerald-500
                focus:bg-white
                focus:ring-4
                focus:ring-emerald-50
              "
            />

          </div>


          {/* Category */}

          <select
            className="
              h-10
              w-full
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              text-sm
              text-slate-600
              outline-none
              transition
              hover:bg-slate-50
              focus:border-emerald-500
              focus:ring-4
              focus:ring-emerald-50
              sm:w-48
              xl:w-48
            "
          >
            <option>All Categories</option>
            <option>Raw Materials</option>
            <option>Packaging</option>
            <option>Finished Goods</option>
          </select>


          {/* Status */}

          <select
            className="
              h-10
              w-full
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              text-sm
              text-slate-600
              outline-none
              transition
              hover:bg-slate-50
              focus:border-emerald-500
              focus:ring-4
              focus:ring-emerald-50
              sm:w-40
              xl:w-40
            "
          >
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Critical</option>
            <option>Out of Stock</option>
          </select>


          {/* Apply */}

          <button
            type="button"
            className="
              inline-flex
              h-10
              w-full
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-emerald-600
              px-5
              text-sm
              font-semibold
              text-white
              shadow-sm
              transition
              hover:bg-emerald-700
              active:scale-[0.98]
              sm:w-auto
            "
          >
            <Filter size={15} />
            Apply
          </button>


          {/* Reset */}

          <button
            type="button"
            className="
              inline-flex
              h-10
              w-full
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
              hover:bg-slate-50
              hover:text-slate-800
              active:scale-[0.98]
              sm:w-auto
            "
          >
            <RotateCcw size={15} />
            Reset
          </button>

        </div>

      </div>

    </div>
  );
};

export default InventoryFilters;