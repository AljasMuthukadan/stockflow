import { Plus } from "lucide-react";
import { useState } from "react";
import SupplierModal from "./add-supplier/SupplierModal";
import PageHeader from "../../components/common/PageHeader";

const SupplierHeader = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
     <PageHeader
     title={"Suppliers"}
     actionIcon={Plus}
     actionLabel={"Add Suppliers"}
     description={"Manage suppliers, sundry creditors and debtors."}
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