import ProductionStats from "../components/production/ProductionStats";
import ProductionFilters from "../components/production/ProductionFilters";
import ProductionTable from "../components/production/production-table/ProductionTable";
import ProductionOverview from "../components/production/ProductionOverview";
import RecentActivities from "../components/production/RecentActivities";
import TopProducts from "../components/production/TopProducts";
import ProductionHeader from "../components/production/ProductionHeader";

const ProductionPage = () => {
  return (
    <div className="space-y-6">
      {/* Header */}

      <ProductionHeader />

      {/* Stats */}

      <ProductionStats />

      {/* Filters */}

      <ProductionFilters />

      {/* Product Table */}

      <ProductionTable />
      {/* Overview & Recent Activity Section */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 px-3 lg:px-8">
        <div className="xl:col-span-2 space-y-6 mb-8">
          <ProductionOverview />
          <TopProducts />
        </div>

        <div className="xl:col-span-3 mb-8">
          <RecentActivities />
        </div>
      </div>
    </div>
  );
};

export default ProductionPage;
