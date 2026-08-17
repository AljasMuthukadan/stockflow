import { Search } from 'lucide-react';

const InventorySearch = () => {
  return (
    <div
            className="
              relative
              min-w-0
              flex-1
            "
          >

            <Search
              size={16}
              className="
                absolute
                left-3.5
                top-1/2
                -translate-y-1/2
                text-slate-400
              "
            />

            <input
              type="text"
              placeholder="Search by item name, SKU, category..."
              className="
                h-10
                w-full
                min-w-0
                rounded-lg
                border
                border-slate-200
                bg-slate-50
                pl-10
                pr-3
                text-sm
                text-slate-700
                outline-none
                transition
                placeholder:text-slate-400
                focus:border-emerald-500
                focus:bg-white
                focus:ring-4
                focus:ring-emerald-50
              "
            />

          </div>
  )
    
}

export default InventorySearch