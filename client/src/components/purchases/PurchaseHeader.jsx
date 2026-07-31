import { Plus } from "lucide-react";

export default function PurchaseHeader() {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Purchase Orders
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Manage and track all your purchase orders.
        </p>
      </div>

      {/* Right */}
      <button
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-emerald-600
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:bg-emerald-700
          active:scale-95
          shadow-sm
        "
      >
        <Plus size={18} />

        New Purchase Order
      </button>
    </div>
  );
}