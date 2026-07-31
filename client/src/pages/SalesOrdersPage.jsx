import OrdersSection from "../components/sales/OrdersSection";
import SalesHeader from "../components/sales/SalesHeader";
import StatsCards from "../components/sales/StatsCards";

const SalesOrdersPage = () => {
  return (
    <div className="space-y-6 p-6">

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