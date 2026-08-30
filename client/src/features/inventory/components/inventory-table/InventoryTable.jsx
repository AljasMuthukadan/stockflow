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

export default function InventoryTable({ inventory }) {
  return (
    <div className="mb-5 mt-5">

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

        {/* Mobile View */}

        <InventoryMobileView
          inventory={inventory}
          badgeStyle={badgeStyle}
        />

        {/* Desktop Table */}

        <div className="hidden overflow-x-auto md:block">

          <table className="w-full min-w-[900px]">

            <thead className="bg-slate-50/80">

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

              {inventory.map((item) => (

                <tr
                  key={item.id}
                  className="
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

                      <div className="
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
                      ">
                        {item.name.charAt(0).toUpperCase()}
                      </div>

                      <div>

                        <p className="text-sm font-semibold text-slate-800">
                          {item.name}
                        </p>

                        <p className="mt-0.5 text-xs text-slate-400">
                          Item #{item.id}
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* SKU */}

                  <td className="px-5 py-4">

                    <span className="text-sm font-medium text-slate-600">
                      {item.sku}
                    </span>

                  </td>

                  {/* Category */}

                  <td className="px-5 py-4">

                    <span className="text-sm text-slate-600">
                      {item.category}
                    </span>

                  </td>

                  {/* Stock */}

                  <td className="px-5 py-4">

                    <span className="text-sm font-semibold text-slate-800">
                      {item.stock}
                    </span>

                  </td>

                  {/* Unit */}

                  <td className="px-5 py-4">

                    <span className="text-sm text-slate-500">
                      {item.unit}
                    </span>

                  </td>

                  {/* Reorder */}

                  <td className="px-5 py-4">

                    <span className="text-sm text-slate-600">
                      {item.reorder}
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
                        ${badgeStyle(item.status)}
                      `}
                    >
                      {item.status}
                    </span>

                  </td>

                  {/* Actions */}

                  <td className="px-5 py-4">

                    <div className="flex justify-center">
                      <ActionButton />
                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

        <Pagination />

      </div>

    </div>
  );
}