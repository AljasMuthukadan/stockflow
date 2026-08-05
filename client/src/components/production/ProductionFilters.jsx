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
    <div className="mx-8 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">

      {/* ================= TOP SECTION ================= */}

      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">

        {/* Title */}

        <div>
          <h2 className="text-base font-semibold text-slate-800">
            Production Orders
          </h2>

          <p className="mt-0.5 text-xs text-slate-500">
            Showing{" "}
            <span className="font-semibold text-slate-700">
              42
            </span>{" "}
            production orders
          </p>
        </div>

        {/* Top Actions */}

        <div className="flex flex-wrap gap-2">

          <button
            className="
              flex
              h-9
              items-center
              gap-1.5
              rounded-lg
              border
              border-slate-200
              px-3
              text-xs
              font-medium
              text-slate-700
              transition
              hover:bg-slate-50
            "
          >
            <Download size={15} />
            Export
          </button>

          <button
            className="
              flex
              h-9
              items-center
              gap-1.5
              rounded-lg
              bg-green-600
              px-3.5
              text-xs
              font-semibold
              text-white
              transition
              hover:bg-green-700
            "
          >
            <Plus size={15} />
            New Order
          </button>

        </div>
      </div>

      {/* ================= FILTERS ================= */}

      <div className="grid grid-cols-1 gap-2.5 xl:grid-cols-6">

        {/* Search */}

        <div className="relative xl:col-span-2">

          <Search
            size={16}
            className="
              absolute
              left-3
              top-1/2
              -translate-y-1/2
              text-slate-400
            "
          />

          <input
            type="text"
            placeholder="Search production order..."
            className="
              h-10
              w-full
              rounded-lg
              border
              border-slate-200
              bg-slate-50
              pl-9
              pr-3
              text-xs
              text-slate-700
              outline-none
              transition
              placeholder:text-slate-400
              focus:border-green-500
              focus:bg-white
              focus:ring-2
              focus:ring-green-100
            "
          />

        </div>

        {/* Status */}

        <select
          className="
            h-10
            rounded-lg
            border
            border-slate-200
            bg-white
            px-3
            text-xs
            text-slate-700
            outline-none
            transition
            focus:border-green-500
            focus:ring-2
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
            h-10
            rounded-lg
            border
            border-slate-200
            bg-white
            px-3
            text-xs
            text-slate-700
            outline-none
            transition
            focus:border-green-500
            focus:ring-2
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
            h-10
            items-center
            gap-1.5
            rounded-lg
            border
            border-slate-200
            bg-white
            px-3
            text-xs
            text-slate-700
            transition
            hover:bg-slate-50
          "
        >
          <Calendar size={15} />
          This Month
        </button>

        {/* Apply */}

        <button
          className="
            flex
            h-10
            items-center
            justify-center
            gap-1.5
            rounded-lg
            bg-green-600
            px-4
            text-xs
            font-semibold
            text-white
            transition
            hover:bg-green-700
          "
        >
          <Filter size={15} />
          Apply
        </button>

      </div>

      {/* ================= BOTTOM SECTION ================= */}

      <div
        className="
          mt-3
          flex
          flex-wrap
          items-center
          justify-between
          gap-2
          border-t
          border-slate-200
          pt-3
        "
      >

        {/* Last Updated */}

        <p className="text-xs text-slate-500">
          Last updated:{" "}
          <span className="font-medium text-slate-700">
            2 minutes ago
          </span>
        </p>

        {/* Refresh */}

        <button
          className="
            flex
            h-8
            items-center
            gap-1.5
            rounded-lg
            border
            border-slate-200
            px-3
            text-xs
            font-medium
            text-slate-600
            transition
            hover:bg-slate-50
          "
        >
          <RotateCcw size={14} />
          Refresh
        </button>

      </div>
    </div>
  );
};

export default ProductionFilters;