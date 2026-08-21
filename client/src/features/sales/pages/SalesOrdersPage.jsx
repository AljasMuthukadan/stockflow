import OrdersSection from "../components/order-table/OrdersSection";
import SalesHeader from "../components/SalesHeader";
import StatsCards from "../components/StatsCards";

const SalesOrdersPage = () => {
  return (
    <div className="space-y-6 px-3 lg:px-8 mt-2">

      <SalesHeader />

      <StatsCards />

      {/* OrdersSection */}
      <OrdersSection />

      {/* RightSidebar */}

      {/* OrderDetails */}

    </div>
  );
};

export default SalesOrdersPage;