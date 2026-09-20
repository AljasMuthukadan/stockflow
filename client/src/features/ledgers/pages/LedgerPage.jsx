import LedgerHeader from "../components/LedgerHeader";
import SupplierStats from "../components/stat-card/SupplierStats";
import SupplierTable from "../components/supplier-table/SupplierTable";
import SupplierProfile from "../components/supplier-profile/SupplierProfile";
import { useState } from "react";
import LedgerModal from "../components/modal/LedgerModal";
import { suppliers } from "../components/supplierData";

const LedgerPage = () => {
  const [ledger, setLedger] = useState(suppliers)
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(ledger)
 const handleModal = ()=> {
  setIsModalOpen(!isModalOpen);
 }
 const handleModalClose = () => {
   setIsModalOpen(false);
 }

  return (
    <div className="min-h-full bg-gray-50 px-3 py-3 sm:px-4 md:px-5 lg:px-6">

      {/* ========================= */}
      {/* PAGE HEADER */}
      {/* ========================= */}

      <LedgerHeader onAddItem={handleModal} />

      {/* ========================= */}
      {/* MAIN CONTENT */}
      {/* ========================= */}

      <div className="mt-3 grid grid-cols-1 gap-3 xl:grid-cols-[minmax(0,3fr)_minmax(280px,1fr)]">

        {/* ========================= */}
        {/* LEFT SECTION */}
        {/* ========================= */}

        <div className="flex min-w-0 flex-col gap-3">

          {/* Supplier Statistics */}

          <div className="min-w-0">
            <SupplierStats />
          </div>

          {/* Supplier Table */}

          <div className="min-w-0">
            <SupplierTable ledger={ledger} 
            />
          </div>

        </div>


        {/* ========================= */}
        {/* RIGHT SECTION */}
        {/* ========================= */}

        <div className="min-w-0">

          <SupplierProfile />

        </div>

      </div>
      {isModalOpen && <LedgerModal
       onClose={handleModalClose}
       setLedger={setLedger}
      /> }

    </div>
  );
};

export default LedgerPage;