import ProductionStats from "../components/ProductionStats";
import ProductionFilters from "../components/ProductionFilters";
import ProductionTable from "../components/production-table/ProductionTable";
import ProductionOverview from "../components/ProductionOverview";
import RecentActivities from "../components/RecentActivities";
import TopProducts from "../components/TopProducts";
import ProductionHeader from "../components/ProductionHeader";

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
