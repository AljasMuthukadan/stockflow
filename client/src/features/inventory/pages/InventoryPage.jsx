import { useState } from "react";

import InventoryStats from "../components/stat-card/InventoryStats";
import InventoryFilters from "../components/search-filter/InventoryFilters";
import InventoryTable from "../components/inventory-table/InventoryTable";
import InventoryHeader from "../components/InventoryHeader";
import InventoryModal from "../components/modal/InventoryModal";

import inventoryData from "../components/inventoryData";

const InventoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [inventory, setInventory] = useState(() => inventoryData);

  const handleAddItem = (newItem) => {
    setInventory((previousInventory) => [
      ...previousInventory,
      newItem,
    ]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6 px-3 md:px-4 lg:px-8">

      <InventoryHeader
        onAddItem={handleOpenModal}
      />

      <InventoryStats
        inventory={inventory}
      />

      <InventoryFilters />

      <InventoryTable
        inventory={inventory}
      />

      {isModalOpen && (
        <InventoryModal
          onClose={handleCloseModal}
          onAddItem={handleAddItem}
        />
      )}

    </div>
  );
};

export default InventoryPage;