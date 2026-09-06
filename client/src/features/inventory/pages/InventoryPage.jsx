import { useState } from "react";

import InventoryStats from "../components/stat-card/InventoryStats";
import InventoryFilters from "../components/search-filter/InventoryFilters";
import InventoryTable from "../components/inventory-table/InventoryTable";
import InventoryHeader from "../components/InventoryHeader";
import InventoryModal from "../components/modal/InventoryModal";

import inventoryData from "../components/inventoryData";
import useInventory from "../hooks/useInventory";

const InventoryPage = () => {
  // State for managing the inventory items and modal visibility

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addInventoryItem } = useInventory(); // Destructure any values returned by the custom hook

  const [inventory, setInventory] = useState(() => inventoryData);

  const handleAddItem = (newItem) => {
    setInventory((prevInventory) => [...prevInventory, newItem]);
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
          onAddItem={addInventoryItem}
        />
      )}

    </div>
  );
};

export default InventoryPage;