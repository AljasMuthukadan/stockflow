import { useMemo, useState } from "react";

import InventoryStats from "../components/stat-card/InventoryStats";
import InventoryFilters from "../components/search-filter/InventoryFilters";
import InventoryTable from "../components/inventory-table/InventoryTable";
import InventoryHeader from "../components/InventoryHeader";
import InventoryModal from "../components/modal/InventoryModal";

import useInventory from "../hooks/useInventory";

const InventoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // =========================================================
  // INVENTORY DATA
  // =========================================================

  const {
    inventory,
    loading,
    error,
    addInventoryItem,
  } = useInventory();

  // =========================================================
  // FILTER STATE
  // =========================================================

  const [category, setCategory] = useState("All Categories");
  const [stockWise, setStockWise] = useState("All Status");

  // =========================================================
  // FILTER INVENTORY
  // =========================================================

  const getStockStatus = (quantity, reorderLevel) => {
  const stock = Number(quantity || 0);
  const reorder = Number(reorderLevel || 0);

  if (stock === 0) {
    return "Out of Stock";
  }

  if (stock <= reorder) {
    return "Low Stock";
  }

  return "In Stock";
};

const filteredInventory = useMemo(() => {
  return inventory.filter((item) => {
    const matchesCategory =
      category === "All Categories" ||
      item.itemType === category;

    const status = getStockStatus(
      item.quantity,
      item.reorderLevel
    );

    const matchesStock =
      stockWise === "All Status" ||
      status === stockWise;

    return matchesCategory && matchesStock;
  });
}, [inventory, category, stockWise]);
  // =========================================================
  // MODAL
  // =========================================================

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

      <InventoryFilters
        category={category}
        setCategory={setCategory}
        stockWise={stockWise}
        setStockWise={setStockWise}
      />

      {/* Table */}

      <InventoryTable
        inventory={filteredInventory}
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