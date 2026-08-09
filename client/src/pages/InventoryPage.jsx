import InventoryStats from "../components/inventory/stat-card/InventoryStats";
import InventoryFilters from "../components/inventory/search-filter/InventoryFilters";
import InventoryTable from "../components/inventory/inventory-table/InventoryTable";
import InventoryHeader from "../components/inventory/InventoryHeader";

const InventoryPage = () => {
  return (
    <div className="space-y-6">

      {/* Header */}
      <InventoryHeader />
      {/* Stats */}
      <InventoryStats />
      {/* Filters */}
      <InventoryFilters />
      {/* Product Table */}
      <InventoryTable />

    </div>
  );
};

export default InventoryPage;