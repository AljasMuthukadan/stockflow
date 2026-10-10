import ProductionStats from "../components/ProductionStats";
import ProductionFilters from "../components/ProductionFilters";
import ProductionTable from "../components/production-table/ProductionTable";
import ProductionOverview from "../components/ProductionOverview";
import RecentActivities from "../components/RecentActivities";
import TopProducts from "../components/TopProducts";
import ProductionHeader from "../components/ProductionHeader";
import { productionOrders } from "../components/production-table/data";
import { useState } from "react";
import ProductionModal from "../components/modal/ProductionModal";

const ProductionPage = () => {
  const [ productionData, setProductionData ] = useState(productionOrders);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  {/** FILTER */}
  const [ orderStatus, setOrderStatus ] = useState("All Status");
  const [ search, setSearch ] = useState("");
  
  const filteredProductionData = productionData.filter((order) => {
    const matchesStatus =
      orderStatus === "All Status" || order.status === orderStatus;
    const matchesSearch =
      search === "" ||
      order?.id?.toLowerCase().includes(search.toLowerCase()) ||
      order?.product?.toLowerCase().includes(search.toLowerCase()) ||
      order?.supervisor?.toLowerCase().includes(search.toLowerCase()) ||
      order?.status?.toLowerCase().includes(search.toLowerCase()); 

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="space-y-6 px-3 md:px-4 lg:px-8">
      {/* Header */}

      <ProductionHeader handleOpenModal={handleOpenModal} />

      {/* Stats */}

      <ProductionStats />

      {/* Filters */}

      <ProductionFilters 
       search={search} setSearch={setSearch} orderStatus={orderStatus} setOrderStatus={setOrderStatus} />

      {/* Product Table */}

      <ProductionTable data={filteredProductionData} />
      {/* Overview & Recent Activity Section */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 ">
        <div className="xl:col-span-2 space-y-6 mb-8">
          <ProductionOverview />
          <TopProducts />
        </div>

        <div className="xl:col-span-3 mb-8">
          <RecentActivities />
        </div>
      </div>
      {isModalOpen && (
        <ProductionModal onClose={handleCloseModal} setProductionData={setProductionData} />
      )}
    </div>
  );
};

export default ProductionPage;
