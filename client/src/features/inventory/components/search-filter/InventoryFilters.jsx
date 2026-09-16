import { RotateCcw } from "lucide-react";

import FilterHeader from "./FilterHeader";
import InventorySearch from "./InventorySearch";

const InventoryFilters = ({
  category,
  setCategory,
  stockWise,
  setStockWise,
  searchQuery,
  setSearchQuery,
}) => {
  const handleReset = () => {
    setSearchQuery("");
    setCategory("All Categories");
    setStockWise("All Status");
  };

  return (
    <div className="hidden w-full md:block">
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
        {/* HEADER */}

        <FilterHeader />

        {/* FILTERS */}

        <div
          className="
            flex
            w-full
            flex-col
            gap-2.5
            xl:flex-row
          "
        >
          {/* SEARCH */}

          <InventorySearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />

          {/* CATEGORY */}

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
              xl:w-48
            "
          >
            <option value="All Categories">All Categories</option>
            <option value="raw-material">Raw Material</option>
            <option value="packaging">Packaging</option>
            <option value="finished-good">Finished Good</option>
          </select>

          {/* STATUS */}

          <select
            value={stockWise}
            onChange={(e) => setStockWise(e.target.value)}
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
              xl:w-40
            "
          >
            <option value="All Status">All Status</option>
            <option value="In Stock">In Stock</option>
            <option value="Low Stock">Low Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>

          {/* RESET */}

          <button
            type="button"
            onClick={handleReset}
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