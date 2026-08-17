import { MoreVertical } from "lucide-react";

export const InventoryMobileView = ({ inventory, badgeStyle }) => {
  return (
     <div className="md:hidden">

          <div className="divide-y divide-slate-100">

            {inventory.map((item) => (
              <div
                key={item.id}
                className="
                  p-4
                  transition-colors
                  hover:bg-slate-50
                "
              >

                {/* Top */}

                <div className="flex items-start justify-between gap-3">

                  {/* Item */}

                  <div className="flex min-w-0 items-center gap-3">

                    <div
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-lg
                        bg-emerald-50
                        text-sm
                        font-semibold
                        text-emerald-600
                      "
                    >
                      {item.name.charAt(0)}
                    </div>

                    <div className="min-w-0">

                      <p className="truncate text-sm font-semibold text-slate-800">
                        {item.name}
                      </p>

                      <p className="mt-0.5 text-xs text-slate-400">
                        Item #{item.id}
                      </p>

                    </div>

                  </div>


                  {/* Action */}

                  <button
                    type="button"
                    aria-label={`Actions for ${item.name}`}
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-lg
                      text-slate-400
                      transition
                      hover:bg-slate-100
                      hover:text-slate-700
                    "
                  >
                    <MoreVertical size={18} />
                  </button>

                </div>


                {/* Details */}

                <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3">

                  {/* SKU */}

                  <div>
                    <p className="text-xs text-slate-400">
                      SKU
                    </p>

                    <p className="mt-0.5 text-sm font-medium text-slate-600">
                      {item.sku}
                    </p>
                  </div>


                  {/* Category */}

                  <div>
                    <p className="text-xs text-slate-400">
                      Category
                    </p>

                    <p className="mt-0.5 truncate text-sm text-slate-600">
                      {item.category}
                    </p>
                  </div>


                  {/* Stock */}

                  <div>
                    <p className="text-xs text-slate-400">
                      Stock
                    </p>

                    <p className="mt-0.5 text-sm font-semibold text-slate-800">
                      {item.stock}
                    </p>
                  </div>


                  {/* Unit */}

                  <div>
                    <p className="text-xs text-slate-400">
                      Unit
                    </p>

                    <p className="mt-0.5 text-sm text-slate-500">
                      {item.unit}
                    </p>
                  </div>


                  {/* Reorder */}

                  <div>
                    <p className="text-xs text-slate-400">
                      Reorder Level
                    </p>

                    <p className="mt-0.5 text-sm text-slate-600">
                      {item.reorder}
                    </p>
                  </div>


                  {/* Status */}

                  <div>
                    <p className="mb-1 text-xs text-slate-400">
                      Status
                    </p>

                    <span
                      className={`
                        inline-flex
                        items-center
                        rounded-full
                        px-2.5
                        py-1
                        text-xs
                        font-semibold
                        ${badgeStyle(item.status)}
                      `}
                    >
                      {item.status}
                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>    
  )
}
