import { reports } from "./reportsData";
import ReportRow from "./ReportRow";
import Pagination from "../../../components/common/Pagination";

export default function ReportsTable() {
  return (
    <div className="overflow-hidden  rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1150px] text-sm">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="w-[320px] px-5 py-6 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Report
              </th>

              <th className="w-[170px] px-5 py-6 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Category
              </th>

              <th className="w-[140px] px-5 py-6 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Type
              </th>

              <th className="w-[180px] px-5 py-6 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Last Generated
              </th>

              <th className="w-[240px] px-5 py-6 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Export
              </th>

              <th className="w-[90px] px-5 py-6 text-right text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {reports.map((report) => (
              <ReportRow
                key={report.id}
                report={report}
              />
            ))}
          </tbody>
        </table>
      </div>

      <Pagination />
    </div>
  );
}