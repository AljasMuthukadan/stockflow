import { useState } from "react";
import { Plus } from "lucide-react";
import AddItemModal from "./item/AddItemModal";

const InventoryHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="
          mb-4
          mt-2
          flex
          flex-row
          items-center
          justify-between
          gap-3
          sm:mb-3
          sm:gap-4
          sm: mx-3
          md:mx-4
          lg:mx-8
          
        "
      >
        {/* Left Section */}

        <div className="min-w-0 flex-1">
          <h1
            className="
              text-2xl
              font-bold
              text-slate-800
              sm:text-2xl
              md:text-2xl
              lg:text-3xl
            
            "
          >
            Inventory
          </h1>

          <p
            className="
              mt-1
              hidden
              text-sm
              text-slate-500
              lg:block
            "
          >
            Manage inventory items, monitor stock levels, and track product
            availability.
          </p>
        </div>

        {/* Right Section */}

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="
            inline-flex
            shrink-0
            items-center
            justify-center
            gap-1.5
            rounded-lg
            bg-green-600
            px-3
            py-2
            text-xs
            font-semibold
            text-white
            shadow-sm
            transition
            hover:bg-green-700
            active:scale-95

            sm:gap-2
            sm:rounded-xl
            sm:px-4
            sm:py-2.5
            sm:text-sm

            lg:px-5
            lg:py-3
          "
        >
          <Plus
            size={16}
            className="sm:h-[18px] sm:w-[18px]"
          />

          <span className="whitespace-nowrap">
            Add Item
          </span>
        </button>
      </div>

      {/* Modal */}

      {isModalOpen && (
        <AddItemModal
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default InventoryHeader;