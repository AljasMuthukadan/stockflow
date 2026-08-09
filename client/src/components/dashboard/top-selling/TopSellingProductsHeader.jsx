import { ChevronRight, TrendingUp } from 'lucide-react';

export const TopSellingProductsHeader = () => {
  return (
    <div className="flex shrink-0 items-center justify-between border-b border-slate-100 bg-white px-5 py-4">
        
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
              Top Selling Products
            </h3>

            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-emerald-50">
              <TrendingUp
                size={14}
                className="text-emerald-600"
              />
            </div>
          </div>

          <p className="mt-0.5 text-xs text-slate-400">
            Best performing products
          </p>
        </div>

        <button
          type="button"
          className="group flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-emerald-600 transition hover:bg-emerald-50 sm:text-sm"
        >
          View All

          <ChevronRight
            size={15}
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          />
        </button>
      </div>
  )
}

