import { ChevronLeft, ChevronRight } from 'lucide-react';

const FooterSection = () => {
  return (
   <div
        className="
          flex
          flex-col
          gap-4
          border-t
          border-slate-200
          px-4
          py-4
          sm:px-5
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        {/* Information */}

        <div>
          <p className="text-sm font-medium text-slate-700">
            Showing <span className="font-semibold">1–5</span> of{" "}
            <span className="font-semibold">148</span> production orders
          </p>

          <p className="mt-0.5 text-xs text-slate-400">Updated 2 minutes ago</p>
        </div>

        {/* Pagination */}

        <div className="flex items-center gap-1.5">
          {/* Previous */}

          <button
            type="button"
            className="
              flex
              h-9
              items-center
              gap-1
              rounded-lg
              border
              border-slate-200
              px-2.5
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
              sm:px-3
            "
          >
            <ChevronLeft size={16} />

            <span className="hidden sm:inline">Previous</span>
          </button>

          {/* Page 1 */}

          <button
            type="button"
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              bg-green-600
              text-sm
              font-semibold
              text-white
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
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
            "
          >
            2
          </button>

          {/* Page 3 */}

          <button
            type="button"
            className="
              hidden
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
              sm:flex
            "
          >
            3
          </button>

          {/* Page 4 */}

          <button
            type="button"
            className="
              hidden
              h-9
              w-9
              items-center
              justify-center
              rounded-lg
              border
              border-slate-200
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
              sm:flex
            "
          >
            4
          </button>

          {/* Next */}

          <button
            type="button"
            className="
              flex
              h-9
              items-center
              gap-1
              rounded-lg
              border
              border-slate-200
              px-2.5
              text-sm
              font-medium
              text-slate-600
              transition
              hover:bg-slate-50
              sm:px-3
            "
          >
            <span className="hidden sm:inline">Next</span>

            <ChevronRight size={16} />
          </button>
        </div>
      </div>
  )
}

export default FooterSection