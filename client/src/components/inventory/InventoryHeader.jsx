import { Plus } from "lucide-react";

const InventoryHeader = () => {
  return (
    <div className="flex flex-col mx-8 gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Inventory
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Manage inventory items, monitor stock levels, and track product availability.
          </p>
        </div>

        <button
          className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-green-600
          px-5
          py-3
          font-semibold
          text-white
          shadow-sm
          transition
          hover:bg-green-700
          active:scale-95
          w-full
          md:w-auto
          "
        >
          <Plus size={18} />
          Add Item
        </button>

      </div>
  )
}

export default InventoryHeader