import DashboardContent from "../components/dashboard/DashboardContent";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid";

const DashboardPage = () => {
  return (
    <div className="min-h-full bg-gray-50 px-6 py-2">
      <DashboardHeader />
      <StatsGrid />
    
      <DashboardContent />
    </div>
  );
};

export default DashboardPage;