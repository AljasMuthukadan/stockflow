import { useMemo, useState } from "react";

import ProductionStats from "../components/ProductionStats";
import ProductionFilters from "../components/ProductionFilters";
import ProductionTable from "../components/production-table/ProductionTable";
import ProductionOverview from "../components/ProductionOverview";
import RecentActivities from "../components/RecentActivities";
import TopProducts from "../components/TopProducts";
import ProductionHeader from "../components/ProductionHeader";
import ProductionModal from "../components/modal/ProductionModal";

import useProduction from "../../../hooks/useProduction";

const ProductionPage = () => {
  const {
    order,
    addProductionOrder,
    deleteOrder,
    updateOrder,
  } = useProduction();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Filters
  const [orderStatus, setOrderStatus] = useState("All Status");
  const [search, setSearch] = useState("");

  // Ensure the data is always an array.
  const productionOrders = Array.isArray(order) ? order : [];

  // Modal handlers
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleOpenModal = () => {
    setSelectedOrder(null);
    setIsModalOpen(true);
  };

  const handleEditOrder = (productionOrder) => {
    setSelectedOrder(productionOrder);
    setIsModalOpen(true);
  };

  // Filter production orders.
  const filteredProductionData = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return productionOrders.filter((productionOrder) => {
      const status = String(productionOrder.status ?? "");

      const matchesStatus =
        orderStatus === "All Status" ||
        status.toLowerCase() === orderStatus.toLowerCase();

      const searchableFields = [
        productionOrder.productionId,
        productionOrder._id,
        productionOrder.id,
        productionOrder.product?.name,
        productionOrder.supervisor,
        productionOrder.status,
        productionOrder.batch,
      ];

      const matchesSearch =
        normalizedSearch === "" ||
        searchableFields.some((field) =>
          String(field ?? "")
            .toLowerCase()
            .includes(normalizedSearch)
        );

      return matchesStatus && matchesSearch;
    });
  }, [productionOrders, orderStatus, search]);

  return (
    <div className="space-y-6 px-3 pb-6 md:px-4 lg:px-8">

      {/* Header */}
      <ProductionHeader handleOpenModal={handleOpenModal} />

      {/* Production Statistics */}
      <ProductionStats data={productionOrders} />

      {/* Filters */}
      <ProductionFilters
        search={search}
        setSearch={setSearch}
        orderStatus={orderStatus}
        setOrderStatus={setOrderStatus}
      />

      {/* Production Table */}
      <ProductionTable
        data={filteredProductionData}
        onDelete={deleteOrder}
        onEdit={handleEditOrder}
      />

      {/* Production Overview and Activity */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-5">

        <div className="mb-8 space-y-6 xl:col-span-2">
          <ProductionOverview data={productionOrders} />

          <TopProducts />
        </div>

        <div className="mb-8 xl:col-span-3">
          <RecentActivities />
        </div>

      </div>

      {/* Create / Edit Production Modal */}
      {isModalOpen && (
        <ProductionModal
          key={selectedOrder?._id ?? "new-production-order"}
          onClose={handleCloseModal}
          onAdd={addProductionOrder}
          selectedOrder={selectedOrder}
          onUpdate={updateOrder}
        />
      )}

    </div>
  );
};

export default ProductionPage;