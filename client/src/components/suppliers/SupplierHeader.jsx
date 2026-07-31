import { Plus } from "lucide-react";

const SupplierHeader = () => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-2xl font-bold text-slate-800">
          Suppliers
        </h1>

        <p className="mt-2 text-slate-500">
          Manage suppliers, sundry creditors and debtors.
        </p>

      </div>

      <button
        className="
        flex
        items-center
        gap-2
        rounded-xl
        bg-green-600
        hover:bg-green-700
        px-5
        py-3
        text-white
        font-semibold
        shadow-sm
        transition
        "
      >
        <Plus size={18} />

        Add Supplier

      </button>

    </div>
  );
};

export default SupplierHeader;