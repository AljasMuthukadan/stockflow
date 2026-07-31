import {
  Search,
  Filter,
  Calendar,
  Download,
  RotateCcw,
  Plus,
} from "lucide-react";

const ProductionFilters = () => {
  return (
    <div className="rounded-2xl mx-8 border border-slate-200 bg-white p-5 shadow-sm">

      {/* Top Section */}
      <div className="mb-5 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            Production Orders
          </h2>

          <p className="text-sm text-slate-500">
            Showing <span className="font-semibold">42</span> production orders
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
              transition
              hover:bg-slate-50
            "
          >
            <Download size={17} />
            Export
          </button>

          <button
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-green-600
              px-4
              py-2.5
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-green-700
            "
          >
            <Plus size={17} />
            New Order
          </button>

        </div>

      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-6">

        {/* Search */}
        <div className="relative xl:col-span-2">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search production order..."
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
          "
        >
          <option>All Status</option>
          <option>Pending</option>
          <option>In Progress</option>
          <option>Completed</option>
          <option>Cancelled</option>
        </select>

        {/* Product */}
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
          "
        >
          <option>All Products</option>
          <option>Chocolate Ice Cream</option>
          <option>Vanilla Ice Cream</option>
          <option>Strawberry Milkshake</option>
          <option>Chocolate Bar</option>
        </select>

        {/* Date */}
        <button
          className="
            flex
            h-12
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-white
            px-4
            text-sm
            transition
            hover:bg-slate-50
          "
        >
          <Calendar size={17} />
          This Month
        </button>

        {/* Apply */}
        <button
          className="
            flex
            h-12
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-green-600
            px-5
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

      </div>

      {/* Bottom Actions */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4">

        <p className="text-sm text-slate-500">
          Last updated: <span className="font-medium text-slate-700">2 minutes ago</span>
        </p>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            px-4
            py-2
            text-sm
            transition
            hover:bg-slate-50
          "
        >
          <RotateCcw size={16} />
          Refresh
        </button>

      </div>

    </div>
  );
};

export default ProductionFilters;