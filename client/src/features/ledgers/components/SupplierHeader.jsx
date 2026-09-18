import { Plus } from "lucide-react";
import { useState } from "react";
import SupplierModal from "../components/modal/SupplierModal";
import PageHeader from "../../../components/common/PageHeader";

const SupplierHeader = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
     <PageHeader
     title={"Ledgers"}
     actionIcon={Plus}
     actionLabel={"Add Ledger"}
     description={"Manage Ledgers, sundry creditors and debtors."}
     onAction={()=>setShowModal(true)}
     />


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