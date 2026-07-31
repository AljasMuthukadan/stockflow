import {
  Search,
  Filter,
  Download,
  Upload,
  RotateCcw,
} from "lucide-react";

const InventoryFilters = () => {
  return (
    <div className="px-8  flex justify-center items-center " >
        <div className="rounded-2xl w-full border border-slate-200 bg-white p-5 shadow-sm">

      {/* Top Section */}
      <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            Inventory List
          </h2>

          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold">1,250</span> inventory items
          </p>
        </div>

        <div className="flex flex-wrap gap-3">

          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              px-4
              py-2.5
              text-sm
              font-medium
              hover:bg-slate-50
              transition
            "
          >
            <Upload size={17} />
            Import
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-slate-200
              px-4
              py-2.5
              text-sm
              font-medium
              hover:bg-slate-50
              transition
            "
          >
            <Download size={17} />
            Export
          </button>

        </div>

      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 xl:flex-row">

        {/* Search */}
        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search by item name, SKU, category..."
            className="
              h-12
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              pl-11
              pr-4
              text-sm
              outline-none
              transition
              focus:border-green-500
              focus:bg-white
              focus:ring-4
              focus:ring-green-100
            "
          />

        </div>

        {/* Category */}
        <select
          className="
            h-12
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            text-sm
            outline-none
            transition
            focus:border-green-500
            focus:ring-4
            focus:ring-green-100
            w-full
            sm:w-56
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
            h-12
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            text-sm
            outline-none
            transition
            focus:border-green-500
            focus:ring-4
            focus:ring-green-100
            w-full
            sm:w-48
          "
        >
          <option>All Status</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Critical</option>
          <option>Out of Stock</option>
        </select>

        {/* Apply Filter */}
        <button
          className="
            flex
            h-12
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-green-600
            px-6
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-green-700
          "
        >
          <Filter size={17} />
          Apply
        </button>

        {/* Reset */}
        <button
          className="
            flex
            h-12
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-slate-200
            px-5
            text-sm
            font-medium
            transition
            hover:bg-slate-50
          "
        >
          <RotateCcw size={17} />
          Reset
        </button>

      </div>

    </div>
    </div>
  );
};

export default InventoryFilters;