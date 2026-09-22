import { useState } from "react";

import LedgerHeader from "../components/LedgerHeader";
import SupplierStats from "../components/stat-card/SupplierStats";
import SupplierTable from "../components/supplier-table/SupplierTable";
import SupplierProfile from "../components/supplier-profile/SupplierProfile";
import LedgerModal from "../components/modal/LedgerModal";

import { suppliers } from "../components/supplierData";

const LedgerPage = () => {
  const [ledger, setLedger] = useState(suppliers);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (newLedger) => {
    setLedger((prev) => [newLedger, ...prev]);
  };

  return (
    <div
      className="
        flex
        h-[calc(100vh-64px)]
        min-h-0
        flex-col
        overflow-hidden
        bg-gray-50
        px-3
        py-3
        sm:px-4
        md:px-5
        lg:px-6
      "
    >
      {/* PAGE HEADER */}

      <div className="shrink-0">
        <LedgerHeader onAddItem={handleModal} />
      </div>

      {/* MAIN CONTENT */}

      <div
        className="
          mt-3
          grid
          min-h-0
          flex-1
          grid-cols-1
          gap-3
          overflow-hidden
          xl:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)]
        "
      >
        {/* LEFT SECTION */}

        <div
          className="
            flex
            min-h-0
            min-w-0
            flex-col
            gap-3
          "
        >
          {/* STATISTICS */}

          <div className="shrink-0">
            <SupplierStats />
          </div>

          {/* TABLE */}

          <div className="min-h-0 min-w-0 flex-1">
            <SupplierTable ledger={ledger} />
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="hidden min-h-0 min-w-0 xl:block">
          <SupplierProfile />
        </div>
      </div>

      {/* MODAL */}

      {isModalOpen && (
        <LedgerModal
          onClose={handleModalClose}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default LedgerPage;