import { Search, Calendar, X } from "lucide-react";

export default function PurchaseFilters() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
        {/* Search */}
        <div className="relative xl:col-span-2">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search purchase order..."
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              py-3
              pl-10
              pr-4
              text-sm
              outline-none
              transition
              focus:border-emerald-500
              focus:bg-white
            "
          />
        </div>

        {/* Supplier */}
        <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500">
          <option>All Suppliers</option>
          <option>ABC Foods</option>
          <option>Fresh Dairy</option>
          <option>Metro Packaging</option>
        </select>

        {/* Status */}
        <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500">
          <option>All Status</option>
          <option>Pending</option>
          <option>Ordered</option>
          <option>Received</option>
          <option>Cancelled</option>
        </select>

        {/* Payment */}
        <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-emerald-500">
          <option>Payment</option>
          <option>Paid</option>
          <option>Partial</option>
          <option>Unpaid</option>
        </select>

        {/* Date */}
        <button
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            px-4
            py-3
            text-sm
            transition
            hover:bg-slate-100
          "
        >
          <Calendar size={18} />
          Date Range
        </button>
      </div>

      {/* Bottom Actions */}
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-slate-500">
          Showing <span className="font-semibold">25</span> purchase orders
        </p>

        <button
          className="
            flex
            items-center
            gap-2
            rounded-xl
            border
            border-slate-200
            px-4
            py-2.5
            text-sm
            font-medium
            text-slate-600
            transition
            hover:bg-slate-100
          "
        >
          <X size={16} />
          Clear Filters
        </button>
      </div>
    </div>
  );
}