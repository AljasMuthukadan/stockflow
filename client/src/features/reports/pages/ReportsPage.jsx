import ReportsHeader from "../ReportsHeader";
import ReportsStats from "../ReportsStats";
import ReportsFilters from "../ReportsFilters";
import ReportsTable from "../ReportsTable";
import ReportsSidebar from "../ReportsSidebar";

export default function ReportsPage() {
  return (
    <div className="space-y-3  px-3 md:px-4 lg:px-8">
      <ReportsHeader />


      <div className="flex flex-row space-x-2 w-full">
        {/* Main Content */}
        <div className="space-y-2 flex flex-col w-full xl:w-[75%]">
            <ReportsStats />
          <ReportsFilters />

          <ReportsTable />
        </div>

        {/* Right Sidebar */}
        <div className="flex w-[25%] " >
        <ReportsSidebar />
        </div>
      </div>
    </div>
  );
}