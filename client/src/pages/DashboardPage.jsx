import DashboardHeader from "../components/dashboard/DashboardHeader";
import StatsGrid from "../components/dashboard/StatsGrid";

const DashboardPage = () => {
  return (
    <div className="bg-gray-50 px-5 border border-slate-200 shadow h-full ">
      <DashboardHeader />
      <StatsGrid />
    </div>
  );
};

export default DashboardPage;