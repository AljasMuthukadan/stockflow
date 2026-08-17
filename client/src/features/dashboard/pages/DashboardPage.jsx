import DashboardContent from "../DashboardContent";
import DashboardHeader from "../DashboardHeader";
import StatsGrid from "../stat-card/StatsGrid";

const DashboardPage = () => {
  return (
    <div className="min-h-full bg-gray-50 px-3 py-2 sm:px-4 lg:px-6">
      <DashboardHeader />
      <StatsGrid />
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;