import { Plus } from "lucide-react";

const ProductionHeader = () => {
  return (
    <div className="flex px-8 flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Production</h1>

          <p className="mt-1 text-slate-500">
            Manage production orders and monitor factory performance.
          </p>
        </div>

        <button
          className="
          flex
          items-center
          gap-2
          rounded-xl
          bg-green-600
          px-5
          py-3
          text-white
          font-medium
          shadow
          hover:bg-green-700
          transition
          "
        >
          <Plus size={18} />
          New Production Order
        </button>
      </div>
  )
}

export default ProductionHeader;