import StockCategoryChart from "./StockCategoryChart";
import RecentActivities from "./RecentActivities";
import LowStockTable from "./low-stock/LowStockTable";
import TopSellingProducts from "./TopSellingProducts";
import OverviewSection from "./stock-overview/OverviewSection";

export default function DashboardContent() {
  return (
      <div className="mt-4">
        <div className="grid grid-cols-12 gap-6">

          {/* LEFT */}
          <div className="col-span-12 xl:col-span-9">
            <div className="grid grid-cols-12 gap-6">

              {/* Inventory Chart */}
              <div className="col-span-12 lg:col-span-8">
                <OverviewSection />
              </div>

              {/* Pie Chart */}
              <div className="col-span-12 lg:col-span-4">
                <StockCategoryChart />
              </div>

              {/* Low Stock */}
              <div className="col-span-12 lg:col-span-8">
                <LowStockTable />
              </div>

              {/* Top Selling */}
              <div className="col-span-12 lg:col-span-4">
                <TopSellingProducts />
              </div>

            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-12 xl:col-span-3">
            <RecentActivities />
          </div>

        </div>
      </div>
  );
}