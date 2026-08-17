import InventoryStats from "../stat-card/InventoryStats";
import InventoryFilters from "../search-filter/InventoryFilters";
import InventoryTable from "../inventory-table/InventoryTable";
import InventoryHeader from "../InventoryHeader";

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