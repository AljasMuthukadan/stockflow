import { ChevronRight, TrendingUp } from "lucide-react";

const products = [
  {
    name: "Ice Cream",
    sold: 2450,
    progress: 100,
  },
  {
    name: "Milk Shake",
    sold: 1850,
    progress: 75,
  },
  {
    name: "Chocolate Bar",
    sold: 1250,
    progress: 55,
  },
  {
    name: "Vanilla Cone",
    sold: 950,
    progress: 42,
  },
  {
    name: "Butter Scotch",
    sold: 760,
    progress: 34,
  },
  {
    name: "Mango Delight",
    sold: 640,
    progress: 28,
  },
  {
    name: "Strawberry Cup",
    sold: 510,
    progress: 22,
  },
  
];

export default function TopSellingProducts() {
  return (
    <div className="flex h-[330px] min-h-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      
      {/* Header - Fixed */}
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

      {/* ONLY THIS SECTION SCROLLS */}
      <div className="min-h-0 flex-1 overflow-y-auto scrollbar-none">
        
        <div className="space-y-1 px-5 py-3">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="group rounded-xl px-2 py-3 transition hover:bg-slate-50"
            >
              
              {/* Product information */}
              <div className="flex items-center gap-3">
                
                {/* Rank */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xs font-semibold text-slate-500 group-hover:bg-emerald-50 group-hover:text-emerald-600">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Name + progress */}
                <div className="min-w-0 flex-1">
                  
                  <div className="mb-1.5 flex items-center justify-between gap-3">
                    <span className="truncate text-sm font-medium text-slate-700">
                      {product.name}
                    </span>

                    <span className="shrink-0 text-xs font-medium text-slate-500">
                      {product.sold.toLocaleString()} units
                    </span>
                  </div>

                  {/* Better progress indicator */}
                  <div className="flex items-center gap-2">
                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                        style={{
                          width: `${product.progress}%`,
                        }}
                      />
                    </div>

                    <span className="w-8 text-right text-[10px] font-medium text-slate-400">
                      {product.progress}%
                    </span>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}