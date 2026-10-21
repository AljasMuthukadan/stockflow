import ProductionStats from "../components/ProductionStats";
import ProductionFilters from "../components/ProductionFilters";
import ProductionTable from "../components/production-table/ProductionTable";
import ProductionOverview from "../components/ProductionOverview";
import RecentActivities from "../components/RecentActivities";
import TopProducts from "../components/TopProducts";
import ProductionHeader from "../components/ProductionHeader";;
import  useProduction  from "../../../hooks/useProduction";
import { useState } from "react";
import ProductionModal from "../components/modal/ProductionModal";

const ProductionPage = () => {
  const { order, addProductionOrder } = useProduction();

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
  
  const filteredProductionData = order.filter((order) => {
    const matchesStatus =
      orderStatus === "All Status" || order.status === orderStatus;
    const matchesSearch =
      search === "" ||
      order?.id?.toLowerCase().includes(search.toLowerCase()) ||
      order?.product?.name?.toLowerCase().includes(search.toLowerCase()) ||
      order?.supervisor?.toLowerCase().includes(search.toLowerCase()) ||
      order?.status?.toLowerCase().includes(search.toLowerCase()); 

    return matchesStatus && matchesSearch;
  });

  console.log("real Production Data:", order);

  return (
    <div className="space-y-6 px-3 md:px-4 lg:px-8">
      {/* Header */}

      <ProductionHeader handleOpenModal={handleOpenModal} />

      {/* Stats */}

      <ProductionStats data={order} />

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
        <ProductionModal onClose={handleCloseModal} onAdd={addProductionOrder} />
      )}
    </div>
  );
};

export default ProductionPage;
