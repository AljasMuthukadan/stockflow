import { Plus } from "lucide-react";
import { useState } from "react";
import SupplierModal from "./add-supplier/SupplierModal";

const SupplierHeader = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="
          mb-4
          flex
          flex-row
          items-center
          justify-between
          gap-3

          sm:mb-5
          sm:gap-4
        "
      >
        {/* ========================= */}
        {/* LEFT */}
        {/* ========================= */}

        <div className="min-w-0 flex-1">

          <h1
            className="
              truncate
              text-lg
              font-bold
              text-slate-800

              sm:text-xl

              lg:text-2xl
            "
          >
            Suppliers
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
            Manage suppliers, sundry creditors and debtors.
          </p>

        </div>


        {/* ========================= */}
        {/* RIGHT */}
        {/* ========================= */}

        <button
          type="button"
          onClick={() => setShowModal(true)}
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
            Add Supplier
          </span>
        </button>

      </div>


      {/* ========================= */}
      {/* MODAL */}
      {/* ========================= */}

      {showModal && (
        <SupplierModal
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default SupplierHeader;