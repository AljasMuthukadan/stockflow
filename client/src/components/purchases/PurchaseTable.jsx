import PurchaseRow from "./PurchaseRow.jsx";
import { purchaseOrders } from "./purchaseData.js";

export default function PurchaseTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                PO Number
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Supplier
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Date
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Items
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Amount
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Status
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wide text-slate-500">
                Payment
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {purchaseOrders.map((order) => (
              <PurchaseRow
                key={order.id}
                order={order}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 px-6 py-4">
        <p className="text-sm text-slate-500">
          Showing <strong>1–5</strong> of{" "}
          <strong>{purchaseOrders.length}</strong> orders
        </p>

        <div className="flex gap-2">
          <button className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-100">
            Previous
          </button>

          <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm text-white hover:bg-emerald-700">
            1
          </button>

          <button className="rounded-lg border px-4 py-2 text-sm hover:bg-slate-100">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}