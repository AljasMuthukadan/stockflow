import { useState } from "react";
import { Plus } from "lucide-react";

import InventoryModal from "./modal/InventoryModal";
import PageHeader from "../../../components/common/PageHeader";

const InventoryHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <PageHeader
        title="Inventory"
        description="Manage inventory items, monitor stock levels, and track product availability."
        actionIcon={Plus}
        actionLabel="Add Item"
        onAction={() => setIsModalOpen(true)}
      />

      {isModalOpen && (
        <InventoryModal
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default InventoryHeader;