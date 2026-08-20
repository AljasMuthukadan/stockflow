import {
  Filter,
  RotateCcw,
} from "lucide-react";
import FilterHeader from "./FilterHeader";
import InventorySearch from "./InventorySearch";

const InventoryFilters = () => {
  return (
    <div className="w-full hidden md:block ">
      <div
        className="
          w-full
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-3
          shadow-sm
          sm:p-4
        "
      >

        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <FilterHeader />


        {/* ================================================= */}
        {/* FILTERS */}
        {/* ================================================= */}

        <div
          className="
            flex
            w-full
            flex-col
            gap-2.5
            xl:flex-row
          "
        >

          {/* ================================================= */}
          {/* SEARCH */}
          {/* ================================================= */}

          <InventorySearch />


          {/* ================================================= */}
          {/* CATEGORY */}
          {/* ================================================= */}

          <select
            className="
              h-10
              w-full
              min-w-0
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
              sm:w-full
              xl:w-48
            "
          >
            <option>All Categories</option>
            <option>Raw Materials</option>
            <option>Packaging</option>
            <option>Finished Goods</option>
          </select>


          {/* ================================================= */}
          {/* STATUS */}
          {/* ================================================= */}

          <select
            className="
              h-10
              w-full
              min-w-0
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
              sm:w-full
              xl:w-40
            "
          >
            <option>All Status</option>
            <option>In Stock</option>
            <option>Low Stock</option>
            <option>Critical</option>
            <option>Out of Stock</option>
          </select>


          {/* ================================================= */}
          {/* APPLY */}
          {/* ================================================= */}

          <button
            type="button"
            className="
              inline-flex
              h-10
              w-full
              shrink-0
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
              sm:w-full
              xl:w-auto
            "
          >
            <Filter size={15} />
            Apply
          </button>


          {/* ================================================= */}
          {/* RESET */}
          {/* ================================================= */}

          <button
            type="button"
            className="
              inline-flex
              h-10
              w-full
              shrink-0
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
              sm:w-full
              xl:w-auto
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