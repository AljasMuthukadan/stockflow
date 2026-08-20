import InventoryStats from "../components/stat-card/InventoryStats";
import InventoryFilters from "../components/search-filter/InventoryFilters";
import InventoryTable from "../components/inventory-table/InventoryTable";
import InventoryHeader from "../components/InventoryHeader";

const InventoryPage = () => {
  return (
    <div className="space-y-6 px-3 md:px-4 lg:px-8">

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