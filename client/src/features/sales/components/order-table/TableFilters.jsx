import { Calendar, ChevronDown, Search } from 'lucide-react';

const TableFilters = ({search , setSearch}) => {
  return (
    <div
        className="
          border-b
          border-slate-100
          bg-slate-50
          p-3
          sm:p-4
        "
      >
        <div
          className="
            grid
            min-w-0
            grid-cols-1
            gap-2.5
            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          {/* Search */}

          <div
            className="
              relative
              min-w-0
              sm:col-span-2
              lg:col-span-2
            "
          >
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search order..."
              className="
                h-10
                w-full
                min-w-0
                rounded-lg
                border
                border-slate-200
                bg-white
                py-2
                pl-9
                pr-3
                text-xs
                text-slate-700
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-green-400
                focus:ring-2
                focus:ring-green-50
              "
            />
          </div>

          {/* Date */}

          <button
            type="button"
            className="
              flex
              h-10
              min-w-0
              w-full
              items-center
              justify-between
              gap-2
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              text-xs
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            <span className="flex min-w-0 items-center gap-2">
              <Calendar
                size={14}
                className="shrink-0"
              />

              <span className="truncate">
                Date
              </span>
            </span>

            <ChevronDown
              size={14}
              className="shrink-0"
            />
          </button>

          {/* Status */}

          <button
            type="button"
            className="
              flex
              h-10
              min-w-0
              w-full
              items-center
              justify-between
              gap-2
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              text-xs
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            <span className="truncate">
              Status
            </span>

            <ChevronDown
              size={14}
              className="shrink-0"
            />
          </button>

          {/* Payment */}

          <button
            type="button"
            className="
              flex
              h-10
              min-w-0
              w-full
              items-center
              justify-between
              gap-2
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              text-xs
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            <span className="truncate">
              Payment
            </span>

            <ChevronDown
              size={14}
              className="shrink-0"
            />
          </button>
        </div>
      </div>
  )
}

export default TableFilters