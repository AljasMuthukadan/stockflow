import RestockButton from './RestockButton';

export const LowStockMobileTable = ({ products }) => {
  return (
     <div
        className="
          min-h-0
          flex-1
          overflow-y-auto
          overscroll-contain
          md:hidden
          max-h-[300px]
        "
      >
        <div className="divide-y  divide-slate-100  ">
          {products.map((item) => (
            <div
              key={item.product}
              className="
                px-4
                py-3
                transition
                hover:bg-slate-50
                
              "
            >
              {/* Top Row */}

              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-semibold text-slate-800">
                    {item.product}
                  </h4>

                  <p className="mt-0.5 truncate text-xs text-slate-400">
                    {item.category}
                  </p>
                </div>

                {/* Status */}

                <span
                  className={`
                    shrink-0
                    rounded-full
                    px-2
                    py-1
                    text-[10px]
                    font-medium
                    ${
                      item.status === "Critical"
                        ? "bg-red-100 text-red-600"
                        : "bg-orange-100 text-orange-600"
                    }
                  `}
                >
                  {item.status}
                </span>
              </div>

              {/* Stock Information */}

              <div className="mt-3  flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-slate-400">
                    Current
                  </p>

                  <p
                    className={`
                      mt-0.5
                      text-sm
                      font-semibold
                      ${
                        item.status === "Critical"
                          ? "text-red-600"
                          : "text-orange-600"
                      }
                    `}
                  >
                    {item.stock}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-[11px] text-slate-400">
                    Minimum
                  </p>

                  <p className="mt-0.5 text-sm font-medium text-slate-600">
                    {item.minimum}
                  </p>
                </div>
              </div>

              {/* Action */}
              <RestockButton />
            </div>
          ))}
        </div>
      </div>
  )
}
