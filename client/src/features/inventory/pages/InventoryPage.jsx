import { useState } from "react";

import InventoryStats from "../components/stat-card/InventoryStats";
import InventoryFilters from "../components/search-filter/InventoryFilters";
import InventoryTable from "../components/inventory-table/InventoryTable";
import InventoryHeader from "../components/InventoryHeader";
import InventoryModal from "../components/modal/InventoryModal";

import useInventory from "../hooks/useInventory";

const InventoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // ONE inventory state for this page
  const {
    inventory,
    loading,
    error,
    addInventoryItem,
  } = useInventory();

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

      {/* Error */}

      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* Stats */}

      <InventoryStats
        inventory={inventory}
      />

      {/* Filters */}

      <InventoryFilters inventory={inventory} />

      {/* Table */}

      <InventoryTable
        inventory={inventory}
        loading={loading}
      />

      {/* Modal */}

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