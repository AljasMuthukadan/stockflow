import { InventoryMobileView } from "./InventoryMobileView";
import Pagination from "../../../../components/common/Pagination";
import ActionButton from "../../../../components/common/ActionButton";

const badgeStyle = (status) => {
  switch (status) {
    case "In Stock":
      return "bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-100";

    case "Low Stock":
      return "bg-orange-50 text-orange-700 ring-1 ring-inset ring-orange-100";

    case "Critical":
      return "bg-red-50 text-red-700 ring-1 ring-inset ring-red-100";

    default:
      return "bg-slate-50 text-slate-600 ring-1 ring-inset ring-slate-200";
  }
};

const getStockStatus = (quantity, reorderLevel) => {
  if (quantity === 0) {
    return "Critical";
  }

  if (quantity <= reorderLevel) {
    return "Low Stock";
  }

  return "In Stock";
};

export default function InventoryTable({ inventory = [] }) {
  return (
    <div className="mb-5 mt-5">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Mobile View */}

        <InventoryMobileView
          inventory={inventory}
          badgeStyle={badgeStyle}
        />

        {/* Desktop Table */}

        <div className="hidden md:block">

          {/* 
            Fixed visible area
            Approximately header + 5 rows

            min-h -> maintains height even with few/no items
            max-h -> prevents table from growing infinitely
          */}

          <div className="min-h-[420px] max-h-[420px] overflow-y-auto overflow-x-auto">

            <table className="w-full min-w-[900px]">

              {/* Sticky Header */}

              <thead className="sticky top-0 z-10 bg-slate-50/95 backdrop-blur">

                <tr className="border-b border-slate-100 text-left">

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Item
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    SKU
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Category
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Stock
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Unit
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Reorder Level
                  </th>

                  <th className="px-5 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Status
                  </th>

                  <th className="px-5 py-4 text-center text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Actions
                  </th>

                </tr>

              </thead>

              <tbody>

                {/* Empty State */}

                {inventory.length === 0 && (
                  <tr>

                    <td
                      colSpan={8}
                      className="h-[330px] px-5 text-center"
                    >

                      <div className="flex flex-col items-center justify-center">

                        <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl">
                          📦
                        </div>

                        <p className="text-sm font-semibold text-slate-700">
                          No inventory items found
                        </p>

                        <p className="mt-1 text-sm text-slate-400">
                          Add your first inventory item to get started.
                        </p>

                      </div>

                    </td>

                  </tr>
                )}

                {/* Inventory Items */}

                {inventory.map((item) => {

                  const status = getStockStatus(
                    item.quantity,
                    item.reorderLevel
                  );

                  return (
                    <tr
                      key={item._id}
                      className="
                        h-[66px]
                        border-b
                        border-slate-100
                        last:border-b-0
                        transition-colors
                        hover:bg-slate-50/70
                      "
                    >

                      {/* Item */}

                      <td className="px-5 py-3">

                        <div className="flex items-center gap-3">

                          <div
                            className="
                              flex
                              h-9
                              w-9
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
                            {item.name?.charAt(0).toUpperCase()}
                          </div>

                          <div>

                            <p className="text-sm font-semibold text-slate-800">
                              {item.name}
                            </p>

                            <p className="mt-0.5 text-xs text-slate-400">
                              ID #{item._id?.slice(-6)}
                            </p>

                          </div>

                        </div>

                      </td>

                      {/* SKU */}

                      <td className="px-5 py-4">

                        <span className="text-sm font-medium text-slate-600">
                          {item.sku || "-"}
                        </span>

                      </td>

                      {/* Category */}

                      <td className="px-5 py-4">

                        <span className="text-sm text-slate-600">
                          {item.category || "-"}
                        </span>

                      </td>

                      {/* Quantity */}

                      <td className="px-5 py-4">

                        <span className="text-sm font-semibold text-slate-800">
                          {item.quantity}
                        </span>

                      </td>

                      {/* Unit */}

                      <td className="px-5 py-4">

                        <span className="text-sm text-slate-500">
                          {item.unit}
                        </span>

                      </td>

                      {/* Reorder Level */}

                      <td className="px-5 py-4">

                        <span className="text-sm text-slate-600">
                          {item.reorderLevel}
                        </span>

                      </td>

                      {/* Status */}

                      <td className="px-5 py-4">

                        <span
                          className={`
                            inline-flex
                            items-center
                            rounded-full
                            px-3
                            py-1.5
                            text-xs
                            font-semibold
                            ${badgeStyle(status)}
                          `}
                        >
                          {status}
                        </span>

                      </td>

                      {/* Actions */}

                      <td className="px-5 py-4">

                        <div className="flex justify-center">

                          <ActionButton />

                        </div>

                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

          </div>

        </div>

        {/* Pagination outside scroll container */}

        <Pagination />

      </div>
    </div>
  );
}