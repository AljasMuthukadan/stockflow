import { Plus } from "lucide-react";

const ProductionHeader = () => {
  return (
    <div className="flex mt-1 px-3 w-full justify-between lg:px-8 flex-row gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">Production</h1>

          <p className="mt-1 hidden lg:flex text-slate-500">
            Manage production orders and monitor factory performance.
          </p>
        </div>

        <button
          className="
          flex
          flex-row
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-green-600
          px-2
          lg:px-5
          lg:py-3
          text-white
          lg:font-medium
          lg:text-md
          text-sm
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