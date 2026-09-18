import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  Download,
} from "lucide-react";

const SupplierFilters = ({
  search,
  setSearch,
  partyType,
  setPartyType,
  category,
  setCategory,
}) => {
  return (
    <div className=" border border-slate-200 bg-white p-4">
      <div className="flex flex-col  gap-4 xl:flex-row xl:items-center">
        {/* Left Section */}
        {/** Search , Party Type, Category , more filters  */}
        <div className="flex flex-1 flex-col  gap-3 lg:flex-row">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search by supplier name, contact, phone, email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                h-11
                w-full
                rounded-lg
                border
                border-slate-200
                bg-white
                pl-11
                pr-4
                text-sm
                text-slate-700
                placeholder:text-slate-400
                outline-none
                transition
                focus:border-emerald-500
                focus:ring-2
                focus:ring-emerald-100
              "
            />
          </div>

          {/* Party Type */}
          <div className="relative lg:w-44">
            <select
              value={partyType}
              onChange={(e) => setPartyType(e.target.value)}
              className="
                h-11
                w-full
                appearance-none
                rounded-lg
                border
                border-slate-200
                bg-white
                px-4
                pr-10
                text-sm
                text-slate-700
                outline-none
                transition
                focus:border-emerald-500
                focus:ring-2
                focus:ring-emerald-100
              "
            >
              <option value="All">Party Type</option>
              <option value="Sundry Creditor">Sundry Creditor</option>
              <option value="Sundry Debtor">Sundry Debtor</option>
              <option value="Other Party">Other Party</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
          </div>

          {/* Category */}
          <div className="relative lg:w-48">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="
                h-11
                w-full
                appearance-none
                rounded-lg
                border
                border-slate-200
                bg-white
                px-4
                pr-10
                text-sm
                text-slate-700
                outline-none
                transition
                focus:border-emerald-500
                focus:ring-2
                focus:ring-emerald-100
              "
            >
              <option value="All">Supply Category</option>

              <option>Sugar</option>
              <option>Milk Powder</option>
              <option>Packaging Materials</option>
              <option>Carton Boxes</option>
              <option>Butter</option>
              <option>Cheese</option>
              <option>Flavors</option>
              <option>Essence</option>
              <option>HDPE Buckets</option>
              <option>Containers</option>
              <option>Ice Cream</option>
              <option>Transportation</option>
            </select>

            <ChevronDown
              size={16}
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-500"
            />
          </div>

          {/* More Filters */}
          <button
            className="
              flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-lg
              border
              border-slate-200
              bg-white
              px-5
              text-sm
              font-medium
              text-slate-700
              transition
              hover:bg-slate-50
            "
          >
            <SlidersHorizontal size={16} />
            More Filters
          </button>
        </div>

        {/* Right */}
        {/** Export Button */}
        <button
          className="
            flex
            h-11
            items-center
            justify-center
            gap-2
            rounded-lg
            border
            border-slate-200
            bg-white
            px-5
            text-sm
            font-medium
            text-slate-700
            transition
            hover:bg-slate-50
            xl:ml-auto
          "
        >
          <Download size={16} />
          Export
        </button>
      </div>
    </div>
  );
};

export default SupplierFilters;