import ReportsHeader from "../components/reports/ReportsHeader";
import ReportsStats from "../components/reports/ReportsStats";
import ReportsFilters from "../components/reports/ReportsFilters";
import ReportsTable from "../components/reports/ReportsTable";
import ReportsSidebar from "../components/reports/ReportsSidebar";

export default function ReportsPage() {
  return (
    <div className="space-y-3 px-8">
      <ReportsHeader />


      <div className="flex flex-row space-x-2 w-full">
        {/* Main Content */}
        <div className="space-y-2 flex flex-col w-[75%]">
            <ReportsStats />
          <ReportsFilters />

          <ReportsTable />
        </div>

        {/* Right Sidebar */}
        <div className="flex w-[25%]" >
        <ReportsSidebar />
        </div>
      </div>
    </div>
  );
}