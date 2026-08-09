import { ChevronLeft, ChevronRight } from 'lucide-react';

const FooterSection = () => {
  return (
    <div
          className="
            flex
            flex-col
            gap-3
            border-t
            border-slate-100
            px-4
            py-4
            sm:px-5
            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* Results */}

          <p className="text-sm text-slate-500">

            Showing{" "}

            <span className="font-semibold text-slate-700">
              1–7
            </span>{" "}

            of{" "}

            <span className="font-semibold text-slate-700">
              1,250
            </span>{" "}

            items

          </p>


          {/* Pagination */}

          <div className="flex items-center gap-1.5">

            {/* Previous */}

            <button
              type="button"
              aria-label="Previous page"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                text-slate-500
                transition
                hover:border-slate-300
                hover:bg-slate-50
                hover:text-slate-700
                disabled:cursor-not-allowed
              "
            >
              <ChevronLeft size={16} />
            </button>


            {/* Page 1 */}

            <button
              type="button"
              className="
                flex
                h-9
                min-w-9
                items-center
                justify-center
                rounded-lg
                bg-emerald-600
                px-2.5
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition
                hover:bg-emerald-700
              "
            >
              1
            </button>


            {/* Page 2 */}

            <button
              type="button"
              className="
                flex
                h-9
                min-w-9
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                px-2.5
                text-sm
                font-medium
                text-slate-600
                transition
                hover:border-slate-300
                hover:bg-slate-50
              "
            >
              2
            </button>


            {/* Page 3 */}

            <button
              type="button"
              className="
                flex
                h-9
                min-w-9
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                px-2.5
                text-sm
                font-medium
                text-slate-600
                transition
                hover:border-slate-300
                hover:bg-slate-50
              "
            >
              3
            </button>


            {/* Dots */}

            <span className="flex h-9 w-9 items-center justify-center text-sm text-slate-400">
              ...
            </span>


            {/* Last Page */}

            <button
              type="button"
              className="
                flex
                h-9
                min-w-9
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                px-2.5
                text-sm
                font-medium
                text-slate-600
                transition
                hover:border-slate-300
                hover:bg-slate-50
              "
            >
              179
            </button>


            {/* Next */}

            <button
              type="button"
              aria-label="Next page"
              className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                border
                border-slate-200
                bg-white
                text-slate-500
                transition
                hover:border-slate-300
                hover:bg-slate-50
                hover:text-slate-700
              "
            >
              <ChevronRight size={16} />
            </button>

          </div>

        </div>
  )
}

export default FooterSection