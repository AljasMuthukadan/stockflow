import { Download, Upload } from 'lucide-react';

const FilterHeader = () => {
  return (
    <div
          className="
            mb-4
            flex
            flex-col
            gap-3
            sm:flex-row
            sm:items-center
            sm:justify-between
            
          "
        >

          {/* Title */}

          <div className="min-w-0">

            <h2
              className="
                text-base
                font-semibold
                text-slate-800
              "
            >
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

            {/* Import */}

            <button
              type="button"
              className="
                hidden
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
                md:inline-flex
              "
            >
              <Upload size={15} />
              Import
            </button>


            {/* Export */}

            <button
              type="button"
              className="
                hidden
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
                md:inline-flex
              "
            >
              <Download size={15} />
              Export
            </button>

          </div>

        </div>
  )
}

export default FilterHeader