import {
  Settings2,
  LayoutList,
  CalendarDays,
  Monitor,
  ChevronDown,
} from "lucide-react";

const ReportConfigurationSection = ({
  open,
  onToggle,
  formData,
  setFormData,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">

      {/* Header */}

      <button
        type="button"
        onClick={onToggle}
        className="
          flex
          w-full
          items-center
          justify-between
          px-5
          py-4
          text-left
          transition
          hover:bg-slate-50
        "
      >

        <div className="flex items-center gap-3">

          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-100">

            <Settings2
              size={18}
              className="text-purple-600"
            />

          </div>

          <div>

            <h3 className="text-sm font-semibold text-slate-800">
              Report Configuration
            </h3>

            <p className="text-xs text-slate-500">
              Configure how your report is structured
            </p>

          </div>

        </div>

        <ChevronDown
          size={18}
          className={`
            text-slate-400
            transition-transform
            ${open ? "rotate-180" : ""}
          `}
        />

      </button>

      {/* Content */}

      {open && (

        <div className="border-t border-slate-100 p-5">

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

            {/* Report Type */}

            <div>

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Report Type
              </label>

              <div className="relative">

                <LayoutList
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <select
                  name="reportType"
                  value={formData.reportType}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    py-2
                    pl-10
                    pr-3
                    text-sm
                    outline-none
                    focus:border-green-500
                  "
                >

                  <option>Table</option>
                  <option>Summary</option>
                  <option>Detailed</option>
                  <option>Chart</option>

                </select>

              </div>

            </div>

            {/* Date Range */}

            <div>

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Date Range
              </label>

              <div className="relative">

                <CalendarDays
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <select
                  name="dateRange"
                  value={formData.dateRange}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    py-2
                    pl-10
                    pr-3
                    text-sm
                    outline-none
                    focus:border-green-500
                  "
                >

                  <option>Today</option>
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>This Year</option>
                  <option>Custom</option>

                </select>

              </div>

            </div>

            {/* Display Format */}

            <div>

              <label className="mb-1.5 block text-xs font-medium text-slate-700">
                Output Format
              </label>

              <div className="relative">

                <Monitor
                  size={16}
                  className="
                    pointer-events-none
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-slate-400
                  "
                />

                <select
                  name="format"
                  value={formData.format}
                  onChange={handleChange}
                  className="
                    w-full
                    rounded-lg
                    border
                    border-slate-200
                    py-2
                    pl-10
                    pr-3
                    text-sm
                    outline-none
                    focus:border-green-500
                  "
                >

                  <option>Screen</option>
                  <option>PDF</option>
                  <option>Excel</option>
                  <option>CSV</option>

                </select>

              </div>

            </div>

          </div>

        </div>

      )}

    </section>
  );
};

export default ReportConfigurationSection;