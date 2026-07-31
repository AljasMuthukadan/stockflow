import {
  Upload,
  Plus,
} from "lucide-react";

const SalesHeader = () => {
  return (
    <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

      <div>

        <h1 className="text-3xl font-bold text-slate-800">
          Sales & Orders
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Monitor sales performance and manage customer orders
        </p>

      </div>

      <div className="flex flex-wrap gap-3">

        <button
          className="
          flex
          items-center
          gap-2
          rounded-xl
          border
          border-slate-200
          bg-white
          px-5
          py-3
          text-sm
          font-medium
          shadow-sm
          transition
          hover:bg-slate-50
          "
        >
          <Upload size={18} />

          Import Orders

        </button>

        <button
          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-green-600
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          shadow
          transition
          hover:bg-green-700
          "
        >
          <Plus size={18} />

          New Sales Order

        </button>

      </div>

    </div>
  );
};

export default SalesHeader;