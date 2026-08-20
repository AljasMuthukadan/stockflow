import {
  FileText,
  Download,
  FileSpreadsheet,
} from "lucide-react";

import CategoryBadge from "./CategoryBadge";
import ActionButton from "../../../components/common/ActionButton";

export default function ReportRow({ report }) {
  return (
    <tr className="transition-colors duration-200 hover:bg-slate-50">
      {/* Report */}

      <td className="px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
            <FileText
              size={18}
              className="text-slate-600"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-slate-800">
              {report.name}
            </p>

            <p className="mt-0.5 text-xs text-slate-500">
              {report.period}
            </p>
          </div>
        </div>
      </td>

      {/* Category */}

      <td className="px-5 py-3">
        <CategoryBadge category={report.category} />
      </td>

      {/* Type */}

      <td className="px-5 py-3">
        <span className="text-sm text-slate-600">
          {report.type}
        </span>
      </td>

      {/* Last Generated */}

      <td className="px-5 py-3">
        <span className="text-sm text-slate-600">
          {report.generated}
        </span>
      </td>

      {/* Export */}

      <td className="px-5 py-3">
        <div className="flex items-center justify-center gap-2">
          {/* CSV */}

          <button
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              border
              border-slate-200
              bg-white
              px-3
              py-1.5
              text-xs
              font-medium
              text-slate-700
              transition
              hover:bg-slate-100
            "
          >
            <Download size={14} />
            CSV
          </button>

          {/* Excel */}

          <button
            className="
              inline-flex
              items-center
              gap-1.5
              rounded-lg
              border
              border-emerald-500
              bg-transparent
              px-3
              py-1.5
              text-xs
              font-medium
              text-emerald-600
              transition
              hover:bg-emerald-50
            "
          >
            <FileSpreadsheet size={14} />
            Excel
          </button>
        </div>
      </td>

      {/* Actions */}

      <td className="px-5 py-3">
        <div className="flex justify-end">
         <ActionButton />
        </div>
      </td>
    </tr>
  );
}