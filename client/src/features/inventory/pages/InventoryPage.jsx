import { useMemo, useState } from "react";

import InventoryStats from "../components/stat-card/InventoryStats";
import InventoryFilters from "../components/search-filter/InventoryFilters";
import InventoryTable from "../components/inventory-table/InventoryTable";
import InventoryHeader from "../components/InventoryHeader";
import InventoryModal from "../components/modal/InventoryModal";

import useInventory from "../hooks/useInventory";

const InventoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // null = Add mode
  // item object = Edit mode
  const [selectedItem, setSelectedItem] = useState(null);

  // =========================================================
  // INVENTORY DATA
  // =========================================================

  const {
    inventory,
    loading,
    error,
    addInventoryItem,
    updateInventoryItemById,
  } = useInventory();

  // =========================================================
  // FILTER STATE
  // =========================================================

  const [category, setCategory] = useState("All Categories");
  const [stockWise, setStockWise] = useState("All Status");
  const [searchQuery, setSearchQuery] = useState("");

  // =========================================================
  // STOCK STATUS
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

  // =========================================================
  // FILTER INVENTORY
  // =========================================================

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

      const matchesSearch =
        searchQuery === "" ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.sku.includes(searchQuery) ||
        item.itemType.includes(searchQuery);

      return matchesCategory && matchesStock && matchesSearch;
    });
  }, [inventory, category, stockWise, searchQuery]);

  // =========================================================
  // ADD ITEM
  // =========================================================

  const handleOpenAddModal = () => {
    // No selected item = Add mode
    setSelectedItem(null);
    setIsModalOpen(true);
  };

  // =========================================================
  // EDIT ITEM
  // =========================================================

  const handleEditItem = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  // =========================================================
  // CLOSE MODAL
  // =========================================================

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="space-y-6 px-3 md:px-4 lg:px-8">

      {/* Header */}

      <InventoryHeader
        onAddItem={handleOpenAddModal}
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
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Table */}

      <InventoryTable
        inventory={filteredInventory}
        loading={loading}
        onEditItem={handleEditItem}
      />

      {/* Add / Edit Modal */}

      {isModalOpen && (
        <InventoryModal
          key={selectedItem?._id ?? "new"}
          item={selectedItem}
          onClose={handleCloseModal}
          onAddItem={addInventoryItem}
          onUpdateItem={updateInventoryItemById}
        />
      )}

    </div>
  );
};

export default InventoryPage;