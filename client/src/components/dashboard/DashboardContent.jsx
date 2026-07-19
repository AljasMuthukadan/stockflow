import InventoryChart from "./InventoryChart";
import StockCategoryChart from "./StockCategoryChart";
import RecentActivities from "./RecentActivities";
import LowStockTable from "./LowStockTable";
import TopSellingProducts from "./TopSellingProducts";

export default function DashboardContent() {
  return (
    <div className="space-y-6">

      {/* First Row */}

      <div className="grid grid-cols-12 gap-6 items-stretch">

        <div className="col-span-12 xl:col-span-6">
          <InventoryChart />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <StockCategoryChart />
        </div>

        <div className="col-span-12 md:col-span-6 xl:col-span-3">
          <RecentActivities />
        </div>

      </div>

      {/* Second Row */}

      <div className="grid grid-cols-12 gap-6 items-start">

        <div className="col-span-12 xl:col-span-8">
          <LowStockTable />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <TopSellingProducts />
        </div>

      </div>

    </div>
  );
}